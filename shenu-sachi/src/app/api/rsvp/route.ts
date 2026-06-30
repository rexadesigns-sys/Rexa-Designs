import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/utils/supabase";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, attending, mealPreference, message, guestCount } = body;

    // Validate required inputs
    if (!name || !name.trim() || !contact || !contact.trim()) {
      return NextResponse.json(
        { error: "Name and contact number are required." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient() as any;

    const parsedGuestCount = attending === true ? Number(guestCount || 1) : 0;

    // Perform database insertion
    const { data, error } = await supabase.from("rsvps").insert([
      {
        name: name.trim(),
        contact: contact.trim(),
        attending: attending === true,
        guest_count: parsedGuestCount,
        meal_preference: attending === true ? mealPreference : null,
        message: message ? message.trim() : null,
      },
    ]);

    if (error) {
      console.error("Supabase insert error inside API route:", error);
      return NextResponse.json(
        { error: "Database submission failed: " + error.message },
        { status: 500 }
      );
    }

    // Send email notification using Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey && !resendApiKey.includes("your_api_key_here")) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Sachira & Shenali RSVP <onboarding@resend.dev>",
          to: "rexadesigns@gmail.com",
          subject: `[Wedding RSVP] New response from ${name.trim()}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; background-color: #fafafa;">
              <h2 style="color: #046307; text-align: center; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; font-family: Georgia, serif;">New RSVP Received</h2>
              <p style="font-size: 16px; margin: 15px 0;">A new wedding RSVP has been submitted on the website:</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 160px;">Guest Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name.trim()}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Contact Number:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact.trim()}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Attendance:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: ${attending ? "#046307" : "#c2410c"}">
                    ${attending ? "Joyfully Accepts" : "Regretfully Declines"}
                  </td>
                </tr>
                ${
                  attending
                    ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Number of Guests:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${parsedGuestCount}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Meal Preference:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${mealPreference === "veg" ? "Vegetarian" : "Non-Vegetarian"}</td>
                </tr>
                `
                    : ""
                }
                ${
                  message && message.trim()
                    ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Message:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-style: italic;">"${message.trim()}"</td>
                </tr>
                `
                    : ""
                }
              </table>
              <p style="text-align: center; margin-top: 30px; font-size: 12px; color: #888;">Sachira & Shenali Wedding Celebration • October 15, 2026</p>
            </div>
          `,
        });
        console.log("RSVP notification email sent successfully through Resend.");
      } catch (emailErr) {
        console.error("Failed to send RSVP email notification via Resend:", emailErr);
        // Do not crash or block successful DB submit if only the email fails
      }
    } else {
      console.warn("Resend API Key missing or unconfigured. Skipping email notification.");
    }

    // Sync to Google Sheets if webhook is configured
    const googleWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (googleWebhookUrl && !googleWebhookUrl.includes("your_google_sheet_webhook_url")) {
      try {
        const response = await fetch(googleWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            contact: contact.trim(),
            attending: attending === true,
            guestCount: parsedGuestCount,
            mealPreference: attending === true ? mealPreference : null,
            message: message ? message.trim() : null,
          }),
        });

        if (response.ok) {
          console.log("RSVP synced to Google Sheets successfully.");
        } else {
          console.error("Google Sheets sync responded with status:", response.status);
        }
      } catch (sheetsErr) {
        console.error("Failed to sync RSVP to Google Sheets:", sheetsErr);
        // Do not fail the submission if sheet sync fails
      }
    } else {
      console.warn("Google Sheets Webhook URL missing or unconfigured. Skipping sheet sync.");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error("RSVP API Route Exception:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred: " + (err.message || err) },
      { status: 500 }
    );
  }
}
