"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../../../../lib/supabase';
import { portfolioProjects as staticProjects } from '../../../../data/portfolioProjects';
import { 
  ArrowLeft, 
  ArrowRight,
  ChevronLeft, 
  Calendar, 
  User, 
  Tag, 
  Maximize2,
  Share2,
  ExternalLink,
  Layers,
  Sparkles,
  X
} from 'lucide-react';

export default function PortfolioItemClientPage() {
  const { categorySlug, itemIndex } = useParams();
  const router = useRouter();
  
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data: projectsData } = await supabase
          .from('portfolio')
          .select('*')
          .order('created_at', { ascending: false });

        if (projectsData && projectsData.length > 0) {
          setAllProjects(projectsData);
        } else {
          setAllProjects(staticProjects);
        }
      } catch (error) {
        setAllProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const idx = Number(itemIndex);
  
  const selectedProject = allProjects.find((project) => {
    if (project.id === Number(categorySlug)) return true;
    const slug = project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return slug === categorySlug;
  });
  
  const staticProject = staticProjects.find((project) => {
    if (project.id === Number(categorySlug)) return true;
    const slug = project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return slug === categorySlug;
  }) || {};
  
  const mergedProject = selectedProject ? { ...staticProject, ...selectedProject } : null;

  const gallery = mergedProject?.gallery || [];
  const galleryItem = gallery[idx];

  const getCategorySlug = (project) => {
    if (!project) return '';
    return project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };
  const resolvedSlug = getCategorySlug(selectedProject) || categorySlug;

  // Handler for sharing
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center flex-col text-white">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-b-purple-500 border-t-transparent border-r-transparent border-l-transparent animate-spin [animation-duration:1.5s]"></div>
        </div>
        <p className="mt-6 text-gray-400 font-semibold tracking-wider animate-pulse">Loading Premium Assets...</p>
      </div>
    );
  }

  if (!mergedProject || !galleryItem) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4 py-20">
        <div className="bg-gray-800/50 backdrop-blur-md p-8 md:p-12 rounded-2xl max-w-lg w-full text-center border border-gray-700/50 shadow-2xl">
          <Layers size={48} className="mx-auto text-orange-500 mb-6" />
          <h2 className="text-3xl font-black mb-4">Design Item Not Found</h2>
          <p className="text-gray-400 mb-8">
            The design asset or project category you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Navigation indexes
  const prevIdx = idx > 0 ? idx - 1 : gallery.length - 1;
  const nextIdx = idx < gallery.length - 1 ? idx + 1 : 0;

  // Filter 3 related items from the same gallery (excluding current item)
  const relatedItems = gallery
    .map((item, index) => ({ ...item, originalIndex: index }))
    .filter((_, index) => index !== idx)
    .slice(0, 3);

  // Specifications helpers
  const designTools = mergedProject.category === 'Logo Designs' 
    ? 'Adobe Illustrator, Figma, Vector Tools' 
    : mergedProject.category === 'Social Media Posts' 
    ? 'Adobe Photoshop, Illustrator, Brand Assets'
    : mergedProject.category === 'Banner Designs'
    ? 'Adobe Photoshop, Figma, Brand Guidelines'
    : 'Adobe Suite, Vector & Raster Software';

  const defaultDesc = `A bespoke design creation for ${galleryItem.title}. Crafted with clinical precision, this project showcases Rexa Designs' commitment to details, modern aesthetics, and client-centric solutions. Every design element is optimized to establish a distinct brand language that communicates effectively and leaves a lasting impression.`;
  const itemDesc = galleryItem.desc || defaultDesc;

  return (
    <div className="bg-gray-950 text-white min-h-screen relative overflow-hidden font-sans">
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-950/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header / Breadcrumb navigation */}
      <nav className="bg-gray-900/60 backdrop-blur-md border-b border-gray-800/80 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 overflow-x-auto whitespace-nowrap scrollbar-none">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</Link>
            <span>/</span>
            <Link href={`/portfolio/${resolvedSlug}`} className="hover:text-orange-500 transition-colors">
              {mergedProject.title}
            </Link>
            <span>/</span>
            <span className="text-gray-200 font-medium truncate max-w-[150px] sm:max-w-xs">
              {galleryItem.title}
            </span>
          </div>

          <Link 
            href={`/portfolio/${resolvedSlug}`}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">Back to Category</span>
          </Link>
        </div>
      </nav>

      {/* Main Display Section */}
      <main className="container mx-auto px-4 py-8 md:py-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Premium Gallery Image Frame */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div className="relative group bg-gray-900/40 rounded-2xl overflow-hidden border border-gray-800/60 shadow-2xl p-4 sm:p-6 backdrop-blur-sm">
              
              {/* Image Frame Wrapper */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-950 flex items-center justify-center">
                <img
                  src={galleryItem.img}
                  alt={`${galleryItem.title} design mockup from ${mergedProject.category} portfolio`}
                  title={`${galleryItem.title} | Rexa Designs Mockup`}
                  className="max-w-full max-h-full object-contain select-none transition-all duration-700"
                />
                
                {/* Image Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-300 truncate pr-4">{galleryItem.title}</p>
                    <button
                      onClick={() => setIsZoomed(true)}
                      className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg text-white transition-all shadow-lg border border-white/10 cursor-pointer"
                      title="View Fullscreen"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows for Category items */}
              {gallery.length > 1 && (
                <div className="absolute inset-y-0 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <Link
                    href={`/portfolio/${resolvedSlug}/${prevIdx}`}
                    className="p-3 bg-gray-950/80 hover:bg-orange-600 text-white rounded-full border border-gray-800/80 pointer-events-auto transition-all shadow-xl hover:-translate-x-1"
                    title="Previous item"
                  >
                    <ArrowLeft size={18} />
                  </Link>
                  <Link
                    href={`/portfolio/${resolvedSlug}/${nextIdx}`}
                    className="p-3 bg-gray-950/80 hover:bg-orange-600 text-white rounded-full border border-gray-800/80 pointer-events-auto transition-all shadow-xl hover:translate-x-1"
                    title="Next item"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              )}
            </div>

            {/* Micro interaction details under the main image */}
            <div className="flex justify-between items-center text-sm text-gray-400 px-2">
              <span className="flex items-center gap-1.5 bg-gray-900/60 border border-gray-800/80 px-3 py-1.5 rounded-full">
                <Sparkles size={14} className="text-orange-500" />
                Asset {idx + 1} of {gallery.length}
              </span>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer bg-gray-900/60 hover:bg-gray-900 border border-gray-800/80 px-4 py-1.5 rounded-full"
                >
                  <Share2 size={14} />
                  {copySuccess ? "Copied!" : "Share"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Title, description, specifications, metadata */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            
            {/* Main Info */}
            <div className="space-y-4">
              <span className="text-orange-500 text-sm font-bold uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                {mergedProject.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400 leading-tight">
                {galleryItem.title}
              </h1>
              
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {itemDesc}
              </p>
            </div>

            {/* Design Spec Cards */}
            <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm space-y-6">
              <h3 className="text-lg font-bold text-gray-200 border-b border-gray-800/80 pb-3 flex items-center gap-2">
                <Layers size={18} className="text-orange-500" />
                Design Specifications
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-sm">
                
                <div className="flex items-start gap-3">
                  <User className="text-orange-500 mt-1 shrink-0" size={16} />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Client Profile</p>
                    <p className="text-gray-300 font-medium">{mergedProject.client || "Local/Global Brand"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="text-orange-500 mt-1 shrink-0" size={16} />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Project Timeline</p>
                    <p className="text-gray-300 font-medium">{mergedProject.date || "Completed in 2026"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag className="text-orange-500 mt-1 shrink-0" size={16} />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Design Category</p>
                    <p className="text-gray-300 font-medium">{mergedProject.category}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="text-orange-500 mt-1 shrink-0" size={16} />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Tools & Technologies</p>
                    <p className="text-gray-300 font-medium leading-relaxed">{designTools}</p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-orange-500/10 via-purple-500/5 to-transparent rounded-2xl p-6 border border-orange-500/20 text-center space-y-4">
              <h4 className="font-bold text-gray-200">Interested in a similar design?</h4>
              <p className="text-xs text-gray-400 leading-normal">
                Elevate your visual presence. Get custom branding tailored to your vision and specifications.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Start a Project
                <ExternalLink size={16} />
              </Link>
            </div>

          </div>
        </div>

        {/* Section: Related Designs from category */}
        {relatedItems.length > 0 && (
          <section className="mt-20 border-t border-gray-900 pt-16">
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">Explore Collection</span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-1">More from this collection</h2>
              </div>
              <Link 
                href={`/portfolio/${resolvedSlug}`}
                className="text-xs md:text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1 shrink-0"
              >
                View Category Gallery &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((item) => (
                <Link
                  key={item.originalIndex}
                  href={`/portfolio/${resolvedSlug}/${item.originalIndex}`}
                  className="group bg-gray-900/30 border border-gray-800/40 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-950 relative">
                    <img
                      src={item.img}
                      alt={`${item.title} graphic element from ${mergedProject.category}`}
                      title={`${item.title} related item`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-orange-500 text-white text-xs font-bold uppercase px-4 py-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-900/80 bg-gray-900/20 flex-grow flex items-center justify-between">
                    <h4 className="font-bold text-gray-200 group-hover:text-orange-500 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <span className="text-orange-500">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Lightbox / Zoom Modal Overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          {/* Modal Header */}
          <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-white">
            <h4 className="font-bold truncate pr-8">{galleryItem.title}</h4>
            <button 
              onClick={() => setIsZoomed(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              title="Close Fullscreen"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Image */}
          <div className="max-w-full max-h-full flex items-center justify-center relative">
            <img
              src={galleryItem.img}
              alt={`${galleryItem.title} zoomed view`}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg animate-scale-up select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}
