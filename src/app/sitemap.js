import { supabase } from '../lib/supabase';
import { portfolioProjects as staticProjects } from '../data/portfolioProjects';
import { blogPosts as staticBlogs } from '../data/blogPosts';

const BASE_URL = 'https://rexadesigns.lk';

export default async function sitemap() {
  // 1. Core Static Pages
  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];

  // 2. Fetch Projects (Categories and Items)
  let projects = [];
  try {
    const { data: projectsData } = await supabase
      .from('portfolio')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (projectsData && projectsData.length > 0) {
      projects = projectsData.filter(p => !p.hide_from_portfolio && !p.hideFromPortfolio);
    } else {
      projects = staticProjects.filter(p => !p.hideFromPortfolio);
    }
  } catch (error) {
    projects = staticProjects.filter(p => !p.hideFromPortfolio);
  }

  const categoryUrls = [];
  const itemUrls = [];

  projects.forEach((project) => {
    const slug = project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    categoryUrls.push({
      url: `${BASE_URL}/portfolio/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    const gallery = project.gallery || [];
    gallery.forEach((_, idx) => {
      itemUrls.push({
        url: `${BASE_URL}/portfolio/${slug}/${idx}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    });
  });

  // 3. Fetch Blogs
  let blogs = [];
  try {
    const { data: blogData } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (blogData && blogData.length > 0) {
      blogs = blogData;
    } else {
      blogs = staticBlogs;
    }
  } catch (error) {
    blogs = staticBlogs;
  }

  const blogUrls = blogs.map((post) => {
    // Parse dates gracefully
    let postDate = new Date();
    if (post.created_at) {
      postDate = new Date(post.created_at);
    } else if (post.date) {
      postDate = new Date(post.date);
    }
    
    return {
      url: `${BASE_URL}/blog/${post.id}`,
      lastModified: isNaN(postDate.getTime()) ? new Date() : postDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  return [...staticPages, ...categoryUrls, ...itemUrls, ...blogUrls];
}
