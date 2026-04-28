import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';
import { blogPosts } from '../../data/blogPosts';

export default function HomePage({
  openProject,
  recentWorksList,
  recentWorkIndex,
  itemsPerView,
  prevWork,
  nextWork,
  testimonialsList,
  testimonialIndex,
  testItemsPerView,
  prevTestimonial,
  nextTestimonial
}) {
  return (
    <>
      <section className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">
            Graphics design in Sri Lanka
          </span>

          <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            Graphics Design, Web Design, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Digital Marketing Solutions
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Welcome to Graphics.lk, your premier Graphics Design in Sri Lanka. With over 20 years of industry experience, we specialize in graphic design, web development, web design and digital marketing services.
          </p>

          <Link
            to="/portfolio"
            className="bg-transparent border border-gray-400 text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-gray-900 transition-colors w-full sm:w-auto"
          >
            Our Portfolio
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What We Do</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Logo & Branding',
                img: '/images/brand-identity.svg'
              },
              {
                title: 'Web Design & Development',
                img: '/images/web-ui.svg'
              },
              {
                title: 'Social Media Marketing',
                img: '/images/social-media.svg'
              },
              {
                title: 'Packaging & Label',
                img: '/images/packaging.svg'
              },
              {
                title: 'Company Profile',
                img: '/images/company-profile.svg'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-6 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <Link
                    to="/portfolio"
                    className="text-orange-500 font-semibold hover:text-orange-600 flex items-center text-sm whitespace-nowrap ml-4"
                  >
                    Explore More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4 mb-8">
          <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">Trusted by Global Brands</h3>
        </div>
        <div className="relative w-full">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex w-max animate-scroll items-center">
            {(() => {
              const brands = [
                { name: 'Google', svg: <svg viewBox="0 0 24 24" className="w-auto h-8 md:h-10" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg> },
                { name: 'Apple', svg: <svg viewBox="0 0 24 24" className="w-auto h-8 md:h-10" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg> },
                { name: 'WordPress', svg: <svg viewBox="0 0 24 24" className="w-auto h-8 md:h-10" fill="currentColor"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/></svg> },
                { name: 'Adidas', svg: <svg viewBox="0 0 24 24" className="w-auto h-8 md:h-10" fill="currentColor"><path d="m24 19.535-8.697-15.07-4.659 2.687 7.145 12.383Zm-8.287 0L9.969 9.59 5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z"/></svg> },
                { name: 'Nike', svg: <svg viewBox="0 0 24 24" className="w-auto h-8 md:h-10" fill="currentColor"><path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"/></svg> },
                { name: 'Samsung', svg: <svg viewBox="0 0 24 24" className="w-auto h-5 md:h-7" fill="currentColor"><path d="M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522"/></svg> },
                { name: 'Tesla', svg: <svg viewBox="0 0 24 24" className="w-auto h-4 md:h-6" fill="currentColor"><path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z"/></svg> },
                { name: 'Sony', svg: <svg viewBox="0 0 24 24" className="w-auto h-4 md:h-5" fill="currentColor"><path d="M8.5505 9.8881c.921 0 1.6574.2303 2.2209.7423.3848.3485.5999.8454.5939 1.3665a1.9081 1.9081 0 0 1-.5939 1.3726c-.5272.4848-1.3483.7423-2.221.7423-.8725 0-1.6785-.2575-2.2148-.7423-.3908-.3485-.609-.8484-.603-1.3726 0-.518.2182-1.015.603-1.3665.5-.4545 1.3847-.7423 2.2149-.7423zm.003 3.6692c.4606 0 .8878-.1606 1.1878-.4575.2999-.2999.4332-.6605.4332-1.1029 0-.4242-.1484-.821-.4333-1.1029-.2938-.2908-.7332-.4545-1.1877-.4545s-.8938.1637-1.1907.4545c-.2848.2818-.4333.6787-.4333 1.103-.006.409.1485.806.4333 1.1029.2969.2939.7332.4575 1.1907.4575zm-4.8418-1.9665c.1605.0424.315.094.4666.1636a1.352 1.352 0 0 1 .3787.2576c.197.206.309.4817.306.7665a.9643.9643 0 0 1-.3787.7788 2.0662 2.0662 0 0 1-.709.3485 3.7231 3.7231 0 0 1-1.1938.1697c-.352 0-.5467-.0406-.8138-.0962l-.077-.016c-.294-.0666-.5817-.1575-.8575-.2787a.0695.0695 0 0 0-.0424-.0121c-.0454 0-.0818.0394-.0818.0848v.203H.1212v-1.4786h.5242a.7559.7559 0 0 0 .1363.418c.2121.2607.4394.3607.6575.4395.3666.1212.7514.1848 1.1362.1969.5526 0 .8756-.134.9455-.163l.009-.0037.0062-.0023c.0616-.0226.3119-.1143.3119-.3916 0-.2743-.2338-.334-.387-.373l-.022-.0058c-.1708-.046-.562-.0872-.9897-.1323l-.1526-.016c-.4848-.0515-.9696-.1273-1.1968-.1758-.4977-.1097-.6942-.2917-.816-.4045l-.0082-.0076A1.0192 1.0192 0 0 1 0 11.1608c0-.497.3394-.797.7575-.9817.4454-.2.9756-.288 1.4392-.288.8211.0031 1.4877.2697 1.727.394.097.0515.1455-.0121.1455-.0606v-.1484h.5272v1.2876h-.4727a.9056.9056 0 0 0-.2939-.4909 1.289 1.289 0 0 0-.297-.1787c-.3968-.1667-.821-.2515-1.2513-.2455-.4423 0-.8665.085-1.0786.2153-.1333.0818-.2.1848-.2.306 0 .1727.1454.2424.2182.2636.1967.0597.6328.103.972.1369.0736.0073.1426.0142.2036.0206.3272.0334 1.012.1243 1.315.2zm18.1673-.9966v-.4787H24v.4696h-.4757c-.1727 0-.2424.0334-.3727.1788l-1.4271 1.63a.098.098 0 0 0-.0182.0698v.7423a1.106 1.106 0 0 0 .0121.103.1496.1496 0 0 0 .1.0909.9368.9368 0 0 0 .1303.009h.4848v.4698h-2.5724v-.4697h.4606a.9343.9343 0 0 0 .1302-.0091.1627.1627 0 0 0 .1031-.091.5626.5626 0 0 0 .009-.1v-.7422c0-.0242 0-.0242-.0333-.0636a606.7592 606.7592 0 0 0-1.4119-1.6028c-.0758-.0788-.2061-.2061-.406-.2061h-.4576v-.4696h2.5876v.4696h-.3121c-.0697 0-.1182.0697-.0576.1455 0 0 .8696 1.0392.8787 1.0513.0091.0122.0152.0122.0273.003.0121-.009.8938-1.0453.8999-1.0543a.0912.0912 0 0 0-.0182-.1273.1095.1095 0 0 0-.0606-.0182zm-6.284-.0031h.4848c.2212 0 .2606.0848.2636.2909l.0273 1.5664-2.5815-2.324H11.944v.4697h.412c.297 0 .3182.1636.3182.309v2.2138c.0004.1285.0009.295-.1818.295h-.506v.4667h2.1634v-.4697h-.5273c-.212 0-.2211-.097-.2242-.303v-1.8816l2.9724 2.6511h.7575l-.0394-2.9966c.003-.218.0182-.2908.2424-.2908h.4726v-.4697H15.595Z"/></svg> },
                { name: 'Netflix', svg: <svg viewBox="0 0 24 24" className="w-auto h-6 md:h-8" fill="currentColor"><path d="m5.398 0 8.348 23.602c2.346.059 4.856.398 4.856.398L10.113 0H5.398zm8.489 0v9.172l4.715 13.33V0h-4.715zM5.398 1.5V24c1.873-.225 2.81-.312 4.715-.398V14.83L5.398 1.5z"/></svg> },
                { name: 'Spotify', svg: <svg viewBox="0 0 24 24" className="w-auto h-8 md:h-10" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg> }
              ];

              const renderBrands = [...brands, ...brands];

              return renderBrands.map((brand, index) => (
                <div 
                  key={index} 
                  title={brand.name}
                  className="flex items-center justify-center px-12 md:px-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer text-gray-800"
                >
                  {brand.svg}
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={20} suffix="+" />
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              Years Experience
            </div>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={5} suffix="K+" />
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              Complete Projects
            </div>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={3} suffix="K+" />
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              Satisfied Clients
            </div>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={25} suffix="+" />
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              Industry Awards
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">
              Latest Projects
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Recent Works
            </h2>
          </div>

          <div className="relative group px-2 md:px-10 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${recentWorkIndex * (100 / itemsPerView)}%)` }}
            >
              {recentWorksList.map((work, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4 mb-4">
                  <div
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl h-full border border-gray-100 cursor-pointer"
                    onClick={(e) => openProject(work, e)}
                  >
                    <div className="h-60 overflow-hidden relative">
                      <img
                        src={work.img}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-500">
                        {work.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{work.title}</h3>
                      <div className="text-gray-500 font-medium flex items-center text-sm">
                        View Case Study <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevWork}
              aria-label="Previous project"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-orange-500 hover:text-white p-3 rounded-full shadow-lg hidden md:flex"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextWork}
              aria-label="Next project"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-orange-500 hover:text-white p-3 rounded-full shadow-lg hidden md:flex"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">
              What Our Happy Clients Say
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Customer Stories
            </h2>
          </div>

          <div className="relative group px-2 md:px-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${testimonialIndex * (100 / testItemsPerView)}%)` }}
            >
              {testimonialsList.map((review, idx) => (
                <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-4 mb-4">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative h-full flex flex-col justify-between">
                    <div>
                      <div className="flex text-yellow-400 mb-4">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>

                      <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>

                    <h4 className="font-bold text-gray-900">- {review.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="bg-white hover:bg-orange-500 hover:text-white p-3 rounded-full shadow-md"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="bg-white hover:bg-orange-500 hover:text-white p-3 rounded-full shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">
              Our Blog
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-gray-900">Latest Articles</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group flex flex-col">
                <div className="h-48 overflow-hidden relative shrink-0">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold">
                    {post.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 cursor-pointer transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-500">By {post.author}</span>
                    <Link to={`/blog/${post.id}`} className="text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center">
                      Read Blog <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded font-bold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
            >
              See All Blogs <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
