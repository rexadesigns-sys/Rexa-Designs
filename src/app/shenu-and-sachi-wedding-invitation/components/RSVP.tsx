"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [attendance, setAttendance] = useState("attending"); // "attending" | "declining"
  const [guestCount, setGuestCount] = useState(1);
  const [mealPreference, setMealPreference] = useState("non-veg");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/shenu-and-sachi-wedding-invitation/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          attending: attendance === "attending",
          guestCount: attendance === "attending" ? guestCount : 0,
          mealPreference: attendance === "attending" ? mealPreference : null,
          message: message ? message.trim() : null,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        console.error("API submission error:", result.error);
        alert(result.error || "Failed to submit RSVP. Please try again or contact us directly.");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      alert("An unexpected network error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-emerald-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="bg-[#FAF9F6] rounded-2xl shadow-2xl p-8 md:p-14 border border-champagne/10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-serif text-[#4A2A20] mb-4">RSVP</h2>
            <p className="text-gray-600 font-light text-sm">Kindly respond by August 20, 2026</p>
            <div className="w-16 h-px bg-gold mx-auto mt-6"></div>
          </div>

          {submitted ? (
            <div id="rsvp-success-screen" className="text-center py-12">
              <div className="w-20 h-20 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald/20 animate-[scale-up_0.5s_ease-out_forwards]">
                <Check className="w-10 h-10 text-emerald" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-emerald-dark mb-2">Thank You!</h3>
              <p className="text-gray-600 text-sm md:text-base">Your RSVP has been successfully received.</p>
            </div>
          ) : (
            <form id="rsvp-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="rsvp-name"
                    className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="rsvp-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all duration-300 bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="rsvp-contact"
                    className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
                  >
                    Contact Number *
                  </label>
                  <input
                    type="text"
                    id="rsvp-contact"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all duration-300 bg-white"
                    placeholder="07x xxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                  Will you be attending? *
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label
                    className={`flex-1 flex items-center justify-center px-4 py-3.5 rounded border font-medium cursor-pointer transition-all duration-300 select-none ${attendance === "attending"
                      ? "border-emerald bg-emerald/5 text-emerald-dark"
                      : "border-gray-300 text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    <input
                      type="radio"
                      name="rsvp-attendance"
                      value="attending"
                      checked={attendance === "attending"}
                      onChange={() => setAttendance("attending")}
                      className="sr-only"
                    />
                    Joyfully Accepts
                  </label>
                  <label
                    className={`flex-1 flex items-center justify-center px-4 py-3.5 rounded border font-medium cursor-pointer transition-all duration-300 select-none ${attendance === "declining"
                      ? "border-red-400 bg-red-50 text-red-700"
                      : "border-gray-300 text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    <input
                      type="radio"
                      name="rsvp-attendance"
                      value="declining"
                      checked={attendance === "declining"}
                      onChange={() => setAttendance("declining")}
                      className="sr-only"
                    />
                    Regretfully Declines
                  </label>
                </div>
              </div>

              {/* Conditional Attending Fields */}
              <div
                className="space-y-6 transition-all duration-500 overflow-hidden"
                style={{
                  maxHeight: attendance === "attending" ? "600px" : "0px",
                  opacity: attendance === "attending" ? 1 : 0,
                  pointerEvents: attendance === "attending" ? "auto" : "none",
                  marginTop: attendance === "attending" ? "1.5rem" : "0px",
                }}
              >
                <div>
                  <label
                    htmlFor="rsvp-guests"
                    className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
                  >
                    Number of Guests Attending *
                  </label>
                  <select
                    id="rsvp-guests"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all duration-300 bg-white"
                  >
                    <option value={1}>1 (Just Me)</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="rsvp-meal"
                    className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
                  >
                    Indicate your meal preference *
                  </label>
                  <select
                    id="rsvp-meal"
                    value={mealPreference}
                    onChange={(e) => setMealPreference(e.target.value)}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all duration-300 bg-white"
                  >
                    <option value="non-veg">Non-Vegetarian</option>
                    <option value="veg">Vegetarian</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="rsvp-message"
                    className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2"
                  >
                    Message for the couple
                  </label>
                  <textarea
                    id="rsvp-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-emerald focus:ring-1 focus:ring-emerald outline-none transition-all duration-300 bg-white resize-none"
                    placeholder="E.g. Your warm wishes..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 mt-6 rounded bg-emerald text-white font-medium tracking-wider hover:bg-emerald-light transition-colors shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <span>Send RSVP</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
