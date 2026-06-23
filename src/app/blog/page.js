"use client";

import { useState, useEffect } from 'react';
import BlogPage from '../../component/blog/BlogPage';
import { supabase } from '../../lib/supabase';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const { data: blogData } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (blogData) {
          setBlogPosts(blogData);
        }
      } catch (error) {
        console.error('Failed to fetch blogs', error);
      }
    }

    fetchBlogs();
  }, []);

  return <BlogPage blogPostsList={blogPosts} />;
}
