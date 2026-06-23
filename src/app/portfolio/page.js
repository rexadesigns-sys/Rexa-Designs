"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PortfolioPage from '../../component/portfolio/PortfolioPage';
import { portfolioProjects as staticProjects } from '../../data/portfolioProjects';

export default function Portfolio() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const customProjects = JSON.parse(localStorage.getItem('customProjects')) || [];
    const deletedStaticProjects = JSON.parse(localStorage.getItem('deletedStaticProjects')) || [];
    const activeStaticProjects = staticProjects.filter(p => !deletedStaticProjects.includes(p.id));
    const allProjects = [...customProjects, ...activeStaticProjects];
    setProjects(allProjects.filter(p => !p.hideFromPortfolio));
  }, []);

  const openProject = (project, e) => {
    if (e) e.preventDefault();
    router.push(`/portfolio/${project.id}`);
  };

  return (
    <PortfolioPage
      portfolioProjects={projects}
      openProject={openProject}
    />
  );
}
