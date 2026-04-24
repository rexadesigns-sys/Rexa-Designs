import { Link } from 'react-router-dom';
import { Target, Eye, MapPin, PhoneCall, Headset } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/aboutus-hero.png"
            className="w-full h-full object-cover"
            alt="About Hero"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">About Us</h1>
          <p className="text-gray-300 font-medium text-sm flex items-center justify-center">
            <Link to="/" className="cursor-pointer hover:text-orange-500 transition-colors">
              Home
            </Link>
            <span className="text-orange-500 mx-2 font-bold">/</span>
            <span className="text-white font-bold">About Us</span>
          </p>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-white via-purple-50 to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-full scale-110 shadow-2xl"></div>
                <div className="relative z-10 p-4">
                  <img
                    src="/images/creative-vision.svg"
                    alt="Creative Vision"
                    className="rounded-full shadow-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Overview</h1>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Graphics.lk is a dynamic Graphics Design Agency in Sri Lanka offering a full spectrum of comprehensive graphic designing solutions, including web design and development, social media marketing, and more. Our expertise extends beyond traditional graphic design, allowing us to create captivating websites and engaging social media campaigns that enhance user experience and elevate brand visibility.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                By seamlessly integrating modern technologies with fine art principles, we deliver innovative solutions tailored to meet our clients&apos; unique needs, budget, and timeframe. With Graphics.lk, you can trust that your digital presence will stand out in today&apos;s competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-gray-900 mb-8">Founder Message</h2>
              <p className="text-gray-600 text-lg leading-relaxed italic mb-10 border-l-4 border-orange-500 pl-6">
                &ldquo;I've dedicated over two decades to pioneering digital marketing and design solutions that empower businesses in Sri Lanka and beyond. Our mission is to deliver exceptional, innovative services tailored to each client&apos;s unique needs, ensuring their brand stands out in today&apos;s competitive market. Join us in transforming your vision into reality with creativity and precision at the helm.&rdquo;
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
                  <img
                    src="/images/founder.svg"
                    alt="Founder"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900">Noshan Maddumage</h4>
                  <p className="text-gray-500 font-medium">Founder</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center space-y-12">
              <div className="flex items-start gap-6">
                <div className="bg-purple-100 p-4 rounded-2xl text-purple-600 flex-shrink-0 shadow-sm">
                  <Target size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide innovative and effective integrated brand marketing and public relations solutions which help our clients grow their businesses in realizing their cherished marketing goals in keeping with modern trends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-orange-100 p-4 rounded-2xl text-orange-500 flex-shrink-0 shadow-sm">
                  <Eye size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Delivering results-oriented brand marketing programs and public relation campaigns that enhance our clients&apos; awareness, with a view to improve their sales and foster their growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <MapPin size={36} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Address</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                No 460, Thalawathugoda Road,
                <br />
                Madiwela, Kotte,
                <br />
                Colombo - Sri Lanka.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <PhoneCall size={36} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Contact Info</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Main Email: hello@graphics.lk
                <br />
                Phone: +94 711888844
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Headset size={36} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Support</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Main Support: Support@graphics.lk
                <br />
                Sales: Sales@graphics.lk
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
