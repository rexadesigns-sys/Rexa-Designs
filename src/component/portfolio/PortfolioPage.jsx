"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const projectsPerPage = 9;

export default function PortfolioPage({
  portfolioProjects,
  openProject
}) {
  const [currentPortfolioPage, setCurrentPortfolioPage] = useState(1);
  const totalPages = Math.ceil(portfolioProjects.length / projectsPerPage);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPortfolioPage - 1) * projectsPerPage;
    return portfolioProjects.slice(startIndex, startIndex + projectsPerPage);
  }, [currentPortfolioPage, portfolioProjects]);

  const goToPage = (pageNumber) => {
    setCurrentPortfolioPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="bg-gray-900 text-white py-20 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/Logo Primary.webp"
            className="w-full h-full object-cover"
            alt="Portfolio Hero"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Portfolio</h1>
          <p className="text-gray-400 font-medium text-sm">
            <Link href="/" className="cursor-pointer hover:text-orange-500 font-bold">
              Home
            </Link>{' '}
            / Portfolio
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {paginatedProjects.map((work) => (
              <article
                key={work.id}
                className="group cursor-pointer"
                onClick={(e) => openProject(work, e)}
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute left-0 top-0 bg-[#7347f5] text-white text-xs sm:text-sm font-bold uppercase tracking-wide px-5 py-4 min-w-48 rounded-br-[28px]">
                    {work.category}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#b334e8] mt-6 leading-snug group-hover:text-[#7347f5] transition-colors">
                  {work.title}
                </h3>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              className="mt-10 flex items-center justify-center gap-3"
              aria-label="Portfolio pagination"
            >
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => goToPage(pageNumber)}
                  aria-label={`Go to portfolio page ${pageNumber}`}
                  aria-current={currentPortfolioPage === pageNumber ? 'page' : undefined}
                  className={`h-10 w-10 border text-lg font-medium transition-colors ${currentPortfolioPage === pageNumber
                    ? 'bg-[#FF6900] border-[#FF6900] text-white'
                    : 'border-[#FF6900] text-[#FF6900] hover:bg-[#FF6900] hover:text-white'
                    }`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goToPage(currentPortfolioPage === totalPages ? 1 : currentPortfolioPage + 1)}
                aria-label="Next portfolio page"
                className="h-10 w-12 flex items-center justify-center bg-[#FF6900] text-white hover:bg-[#E65F00] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
