"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HomePage from '../component/home/HomePage';
import { supabase } from '../lib/supabase';
import { portfolioProjects as staticProjects } from '../data/portfolioProjects';
import { testimonialsList as staticTestimonials } from '../data/testimonials';
import { blogPosts as staticBlogs } from '../data/blogPosts';

export default function Home() {
  const router = useRouter();
  const [allTestimonials, setAllTestimonials] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [recentWorkIndex, setRecentWorkIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testItemsPerView, setTestItemsPerView] = useState(3);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch testimonials
        const { data: testimonialsData } = await supabase
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: false });
        
        setAllTestimonials(testimonialsData && testimonialsData.length > 0 ? testimonialsData : staticTestimonials);

        // Fetch projects
        const { data: projectsData } = await supabase
          .from('portfolio')
          .select('*')
          .order('created_at', { ascending: false });

        setAllProjects(projectsData && projectsData.length > 0 ? projectsData : staticProjects);

        // Fetch blog posts
        const { data: blogData } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });

        setBlogPosts(blogData && blogData.length > 0 ? blogData : staticBlogs);
      } catch (error) {
        setAllTestimonials(staticTestimonials);
        setAllProjects(staticProjects);
        setBlogPosts(staticBlogs);
      }
    }

    fetchData();
  }, []);

  const categoryOrder = [
    'Logo Designs',
    'Social Media Posts',
    'Banner Designs',
    'Business Cards',
    'Wedding Invitation',
    'Other Designs'
  ];

  const recentWorksList = categoryOrder.map(catName => {
    const project = allProjects.find(p => p.category === catName);
    if (!project) return null;
    
    const newestGalleryItem = project.gallery && project.gallery.length > 0 
      ? project.gallery[0] 
      : { title: project.title, img: project.img };

    return {
      id: project.id,
      category: project.category,
      title: newestGalleryItem.title,
      img: newestGalleryItem.img
    };
  }).filter(Boolean);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, recentWorksList.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentWorkIndex((curr) => (curr >= maxIndex ? 0 : curr + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextWork = () => {
    setRecentWorkIndex((curr) => (curr >= maxIndex ? 0 : curr + 1));
  };

  const prevWork = () => {
    setRecentWorkIndex((curr) => (curr <= 0 ? maxIndex : curr - 1));
  };

  useEffect(() => {
    const handleResizeTest = () => {
      setTestItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };

    handleResizeTest();
    window.addEventListener('resize', handleResizeTest);

    return () => window.removeEventListener('resize', handleResizeTest);
  }, []);

  const maxTestIndex = Math.max(0, allTestimonials.length - testItemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((curr) => (curr >= maxTestIndex ? 0 : curr + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [maxTestIndex]);

  const nextTestimonial = () => {
    setTestimonialIndex((curr) => (curr >= maxTestIndex ? 0 : curr + 1));
  };

  const prevTestimonial = () => {
    setTestimonialIndex((curr) => (curr <= 0 ? maxTestIndex : curr - 1));
  };

  const openProject = (project, e) => {
    if (e) e.preventDefault();
    const slug = project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    router.push(`/portfolio/${slug}`);
  };

  return (
    <HomePage
      openProject={openProject}
      recentWorksList={recentWorksList}
      recentWorkIndex={recentWorkIndex}
      itemsPerView={itemsPerView}
      prevWork={prevWork}
      nextWork={nextWork}
      testimonialsList={allTestimonials}
      testimonialIndex={testimonialIndex}
      testItemsPerView={testItemsPerView}
      prevTestimonial={prevTestimonial}
      nextTestimonial={nextTestimonial}
      blogPostsList={blogPosts}
    />
  );
}
