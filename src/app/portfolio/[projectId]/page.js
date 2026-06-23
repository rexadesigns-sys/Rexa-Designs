"use client";

import { useState, useEffect } from 'react';
import ProjectPage from '../../../component/portfolio/ProjectPage';
import { supabase } from '../../../lib/supabase';
import { portfolioProjects as staticProjects } from '../../../data/portfolioProjects';

export default function ProjectDetail() {
  const [allProjects, setAllProjects] = useState([]);

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
      }
    }

    fetchProjects();
  }, []);

  return <ProjectPage portfolioProjects={allProjects} />;
}
