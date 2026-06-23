"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PortfolioPage from '../../component/portfolio/PortfolioPage';
import { supabase } from '../../lib/supabase';
import { portfolioProjects as staticProjects } from '../../data/portfolioProjects';

export default function Portfolio() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data: projectsData } = await supabase
          .from('portfolio_projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (projectsData && projectsData.length > 0) {
          setProjects(projectsData.filter(p => !p.hide_from_portfolio && !p.hideFromPortfolio));
        } else {
          setProjects(staticProjects.filter(p => !p.hideFromPortfolio));
        }
      } catch (error) {
        setProjects(staticProjects.filter(p => !p.hideFromPortfolio));
      }
    }

    fetchProjects();
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
