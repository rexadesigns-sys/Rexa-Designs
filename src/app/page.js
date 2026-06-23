"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HomePage from '../component/home/HomePage';
import { portfolioProjects } from '../data/portfolioProjects';
import { testimonialsList } from '../data/testimonials';

export default function Home() {
  const router = useRouter();
  const [allTestimonials, setAllTestimonials] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [recentWorkIndex, setRecentWorkIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testItemsPerView, setTestItemsPerView] = useState(3);

  useEffect(() => {
    const customTestimonials = JSON.parse(localStorage.getItem('customTestimonials')) || [];
    const deletedStaticTestimonials = JSON.parse(localStorage.getItem('deletedStaticTestimonials')) || [];
    const activeStaticTestimonials = testimonialsList
      .map((t, idx) => ({ ...t, id: `static-test-${idx}` }))
      .filter(t => !deletedStaticTestimonials.includes(t.id));
    setAllTestimonials([...customTestimonials, ...activeStaticTestimonials]);

    const customProjects = JSON.parse(localStorage.getItem('customProjects')) || [];
    const deletedStaticProjects = JSON.parse(localStorage.getItem('deletedStaticProjects')) || [];
    const activeStaticProjects = portfolioProjects.filter(p => !deletedStaticProjects.includes(p.id));
    setAllProjects([...customProjects, ...activeStaticProjects]);
  }, []);

  const categoryOrder = [
    'Logo Designs',
    'Social Media Posts',
    'Banner Designs',
    'Business Cards',
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
    router.push(`/portfolio/${project.id}`);
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
    />
  );
}
