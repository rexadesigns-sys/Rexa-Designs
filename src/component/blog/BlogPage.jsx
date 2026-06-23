"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPage({ blogPostsList = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const activePosts = blogPostsList && blogPostsList.length > 0 ? blogPostsList : blogPosts;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = activePosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(activePosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pt-24 pb-16 lg:pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">
            Our Knowledge Base
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mt-2 mb-6 text-gray-900">
            Latest Articles & Insights
          </h1>
          <p className="text-lg text-gray-600">
            Discover the latest trends, strategies, and tips in graphic design, web development, and digital marketing.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-8 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs font-medium text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1 text-orange-500" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1 text-orange-500" />
                    {post.author}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-end">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center inline-flex group-hover:translate-x-1 transition-transform"
                  >
                    Read Blog <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-16 space-x-2">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-orange-500 hover:text-white shadow-sm border border-gray-200 hover:border-orange-500'
              }`}
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 rounded font-medium transition-colors ${
                  currentPage === i + 1
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-orange-500 hover:text-white shadow-sm border border-gray-200 hover:border-orange-500'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-orange-500 hover:text-white shadow-sm border border-gray-200 hover:border-orange-500'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
