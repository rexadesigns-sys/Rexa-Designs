import Link from 'next/link';
import { MapPin, Phone, Upload, Check, Loader2 } from 'lucide-react';

export default function ContactPage({
  formData,
  formStatus,
  ownerEmail,
  attachedFileName,
  fileInputRef,
  handleInputChange,
  handleCheckboxChange,
  handleFileChange,
  triggerFilePicker,
  handleSubmit,
  setFormStatus
}) {
  return (
    <>
      {formStatus === 'success' && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} strokeWidth={3} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-500 mb-8">
              Thank you for reaching out. Your project details have been sent to{' '}
              <span className="font-bold text-gray-900">{ownerEmail}</span>. We will get back to you shortly.
            </p>

            <button
              onClick={() => setFormStatus('idle')}
              className="w-full bg-[#5b7fff] text-white py-3 rounded-xl font-bold hover:bg-[#4866f2] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {formStatus === 'error' && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Not Sent</h3>
            <p className="text-gray-500 mb-8">
              Something went wrong while sending your message. Please try again, or email us directly at{' '}
              <a href={`mailto:${ownerEmail}`} className="font-bold text-gray-900 underline">
                {ownerEmail}
              </a>.
            </p>

            <button
              onClick={() => setFormStatus('idle')}
              className="w-full bg-[#5b7fff] text-white py-3 rounded-xl font-bold hover:bg-[#4866f2] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      <section className="bg-gray-900 text-white py-20 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/Contact Us.svg"
            className="w-full h-full object-cover"
            alt="Contact Hero"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-gray-300 font-medium text-sm flex items-center justify-center">
            <Link href="/" className="cursor-pointer hover:text-orange-500 transition-colors">
              Home
            </Link>
            <span className="text-orange-500 mx-2 font-bold">/</span>
            <span className="text-white font-bold">Contact Us</span>
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-900 relative min-h-[calc(100vh-400px)] flex items-start">
        <div className="container mx-auto px-4 ">
          <div className=" flex flex-col lg:flex-row bg-orange-500 rounded-2xl shadow-2xl overflow-visible ">
            <div className="bg-orange-500 text-white p-8 lg:p-12 lg:w-2/5 flex flex-col justify-start lg:sticky lg:top-28 lg:self-start rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl z-10">
              <h2 className="text-3xl font-bold mb-6 leading-tight">
                Let&apos;s Discuss Your Next Project
              </h2>
              <p className="text-orange-50 mb-10 leading-relaxed">
                Fill out the form with your requirements, and we&apos;ll get back to you with the best solution.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Office Location</h4>
                    <p className="text-orange-100 text-sm">429/C, Angampitiya, Padukka</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-orange-100 text-sm">+9475 762 2259</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 lg:p-12 lg:w-3/5 bg-white rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-[#f8f9fb] border border-[#e5e7eb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5b7fff] transition-all"
                      placeholder="Ex:Vinod"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-[#f8f9fb] border border-[#e5e7eb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5b7fff] transition-all"
                      placeholder="Ex:Lakshan"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#f8f9fb] border border-[#e5e7eb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5b7fff] transition-all"
                    placeholder="Ex:vinod@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#f8f9fb] border border-[#e5e7eb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5b7fff] transition-all"
                    placeholder="Ex:0752869875"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#f8f9fb] border border-[#e5e7eb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5b7fff] transition-all appearance-none cursor-pointer"
                  >
                    <option>Creative Design Support</option>
                    <option>Request a Quote</option>
                    <option>Start My Brand</option>
                    <option>Redesign Request</option>
                    <option>Update Existing Design </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-4">
                    Services Interested In
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Logo Design',
                      'Social Media Post',
                      'Banner Design',
                      'Business Card',
                      'Other'
                    ].map((service, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="w-5 h-5 rounded border-gray-300 text-[#5b7fff] focus:ring-[#5b7fff] cursor-pointer"
                        />
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#f8f9fb] border border-[#e5e7eb] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5b7fff] transition-all"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    File Attachment (optional)
                  </label>
                  <div
                    onClick={triggerFilePicker}
                    className="flex items-center space-x-3 bg-[#f8f9fb] border border-[#e5e7eb] rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 transition-all group"
                  >
                    <Upload size={18} className="text-gray-500 group-hover:text-gray-900" />
                    <span className="text-gray-500 text-sm font-medium">Choose File</span>
                    <span className="text-gray-400 text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
                      {attachedFileName}
                    </span>
                    <input
                      type="file"
                      name="attachment"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="text-[10px] text-gray-400 leading-tight">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="#" className="underline">Privacy Policy</a> and{' '}
                  <a href="#" className="underline">Terms of Service</a> apply.
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-[#5b7fff] text-white py-4 rounded-full font-bold text-lg hover:bg-[#4866f2] transition-all shadow-lg shadow-[#5b7fff]/20 flex items-center justify-center disabled:opacity-70"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 size={24} className="animate-spin mr-2" /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
