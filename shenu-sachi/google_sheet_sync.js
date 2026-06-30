// Google Sheets Synchronization Script (Google Apps Script)
//
// HOW TO SET UP:
// 1. Open your Google Sheet where you want to collect RSVPs.
// 2. Click "Extensions" in the top menu -> Select "Apps Script".
// 3. Delete any default code inside the editor, and copy-paste this entire script.
// 4. Click the Save icon (floppy disk).
// 5. Click "Deploy" in the top right corner -> Select "New deployment".
// 6. Click the gear icon next to "Select type" -> Select "Web app".
// 7. Configure the deployment settings:
//    - Description: "RSVP Sync Webhook"
//    - Execute as: "Me (your-email@gmail.com)"
//    - Who has access: "Anyone" (CRITICAL: Must select "Anyone" so the website can send data anonymously!)
// 8. Click "Deploy" (Google may prompt you to authorize permissions, click "Authorize access" and allow it).
// 9. Copy the generated "Web app URL" (ends in /exec).
// 10. Paste this URL in your Next.js project's .env.local file as: GOOGLE_SHEET_WEBHOOK_URL=your_web_app_url

function doPost(e) {
  try {
    // Parse the incoming JSON RSVP data
    var data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", 
        "Guest Name", 
        "Contact Number", 
        "Attending Status", 
        "Number of Guests",
        "Meal Preference", 
        "Message / Wishes"
      ]);
      
      // Style the headers
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackgroundColor("#046307"); // Emerald green
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }
    
    // Append the guest's RSVP row
    sheet.appendRow([
      new Date(), // Current local timestamp
      data.name,
      data.contact,
      data.attending ? "Joyfully Accepts (Yes)" : "Regretfully Declines (No)",
      data.attending ? (data.guestCount || 1) : 0,
      data.attending ? (data.mealPreference === "veg" ? "Vegetarian" : "Non-Vegetarian") : "N/A",
      data.message || ""
    ]);

    
    // Return a success JSON response
    return ContentService.createTextOutput(JSON.stringify({ "success": true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    // Return error details if something fails
    return ContentService.createTextOutput(JSON.stringify({ "success": false, "error": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
