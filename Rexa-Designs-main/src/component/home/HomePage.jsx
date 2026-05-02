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
            Creative Graphic Design Solutions <br />
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Welcome to rexadesigns.lk, your trusted graphic design partner in Sri Lanka, delivering creative solutions with over 5 years of experience.
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
                title: 'Logo Designs',
                img: '/images/Logo Mockup.svg',
                link: '/portfolio/1'
              },
              {
                title: 'Social Media Posts',
                img: '/images/Social Media Mockup.svg',
                link: '/portfolio/2'
              },
              {
                title: 'Banner Designs',
                img: '/images/Banner Mockup.webp',
                link: '/portfolio/3'
              },
              {
                title: 'Business Cards',
                img: '/images/Business Card Mockup.webp',
                link: '/portfolio/4'
              },
              {
                title: 'Other Designs',
                img: '/images/Other Mockup.webp',
                link: '/portfolio/5'
              }
            ].map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
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
                  <div
                    className="text-orange-500 font-semibold group-hover:text-orange-600 flex items-center text-sm whitespace-nowrap ml-4"
                  >
                    Explore More <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
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
                { name: 'Brand 1', img: '/images/brands/Taco Bell Icon.webp' },
                { name: 'Brand 2', img: '/images/brands/Taco Bell Icon.webp' },
                { name: 'Brand 3', img: '/images/brands/Taco Bell Icon.webp' },
                { name: 'Brand 4', img: '/images/brands/Taco Bell Icon.webp' },
                { name: 'Brand 5', img: '/images/brands/Taco Bell Icon.webp' },
                { name: 'Brand 6', img: '/images/brands/Taco Bell Icon.webp' }
              ];

              const renderBrands = [...brands, ...brands];

              return renderBrands.map((brand, index) => (
                <div
                  key={index}
                  title={brand.name}
                  className="flex items-center justify-center px-12 md:px-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer text-gray-800"
                >
                  <img src={brand.img} alt={brand.name} className="h-10 md:h-12 w-auto object-contain" />
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
              <AnimatedCounter end={5} suffix="+" />
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              Years Experience
            </div>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={1} suffix="K+" />
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              Complete Projects
            </div>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={850} suffix="+" />
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              Satisfied Clients
            </div>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
              <AnimatedCounter end={20} suffix="+" />
            </div>
            <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              Partner Companies
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
              <Link to={`/blog/${post.id}`} key={index} className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group flex flex-col cursor-pointer">
                <div className="h-48 overflow-hidden relative shrink-0">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold">
                    {post.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-500">By {post.author}</span>
                    <div className="text-orange-500 group-hover:text-orange-600 font-semibold text-sm flex items-center">
                      Read Blog <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
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
