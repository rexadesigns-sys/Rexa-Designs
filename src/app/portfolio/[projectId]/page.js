"use client";

import { useState, useEffect } from 'react';
import ProjectPage from '../../../component/portfolio/ProjectPage';
import { portfolioProjects as staticProjects } from '../../../data/portfolioProjects';

export default function ProjectDetail() {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const customProjects = JSON.parse(localStorage.getItem('customProjects')) || [];
    const deletedStaticProjects = JSON.parse(localStorage.getItem('deletedStaticProjects')) || [];
    const activeStaticProjects = staticProjects.filter(p => !deletedStaticProjects.includes(p.id));
    setAllProjects([...customProjects, ...activeStaticProjects]);
  }, []);

  return <ProjectPage portfolioProjects={allProjects} />;
}
