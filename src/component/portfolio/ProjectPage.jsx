"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProjectPage({ portfolioProjects }) {
  const { projectId } = useParams();
  const router = useRouter();
  const selectedProject = portfolioProjects.find((project) => project.id === Number(projectId));
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page to 1 when project changes
  useEffect(() => {
    setCurrentPage(1);
    if (!selectedProject) {
      router.replace('/portfolio');
    }
  }, [projectId, selectedProject, router]);

  const itemsPerPage = 9;
  const totalItems = selectedProject?.gallery?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentGalleryItems = selectedProject?.gallery?.slice(startIndex, startIndex + itemsPerPage) || [];

  if (!selectedProject) return null;

  return (
    <>
      <section className="bg-gray-900 text-white py-20 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={selectedProject.img}
            className="w-full h-full object-cover blur-sm"
            alt={selectedProject.title}
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            {selectedProject.title}
          </h1>

          <p className="text-gray-300 font-medium text-sm flex items-center justify-center space-x-2">
            <Link href="/" className="cursor-pointer hover:text-orange-500 font-bold">
              Home
            </Link>
            <span>/</span>
            <Link href="/portfolio" className="cursor-pointer hover:text-orange-500 font-bold">
              Portfolio
            </Link>
            <span>/</span>
            <span>{selectedProject.title}</span>
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {selectedProject.gallery ? (
            <div>
              <div className="text-center mb-12 max-w-3xl mx-auto">
                <p className="text-gray-600 text-lg">{selectedProject.desc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentGalleryItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="p-5 text-center">
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => {
                        setCurrentPage(pageNumber);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`h-10 w-10 border text-lg font-medium transition-colors ${
                        currentPage === pageNumber
                          ? 'bg-[#FF6900] border-[#FF6900] text-white'
                          : 'border-[#FF6900] text-[#FF6900] hover:bg-[#FF6900] hover:text-white'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>
              )}

              <div className="text-center mt-12">
                <Link
                  href="/portfolio"
                  className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded font-bold hover:bg-orange-500 hover:text-white"
                >
                  Back to Portfolio
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center">Details coming soon...</div>
          )}
        </div>
      </section>
    </>
  );
}
