import BlogPostPage from '../../../component/blog/BlogPostPage';
import { blogPosts as staticBlogs } from '../../../data/blogPosts';
import { supabase } from '../../../lib/supabase';

// Generate dynamic metadata for blog post
export async function generateMetadata({ params }) {
  const { id } = await params;
  let post = null;
  try {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();
    if (data) post = data;
  } catch (e) {}

  if (!post) {
    post = staticBlogs.find(p => p.id === id);
  }

  if (!post) {
    return {
      title: 'Blog Post Not Found | Rexa Designs',
      description: 'The requested blog post could not be found.',
    };
  }

  const siteUrl = 'https://rexadesigns.lk';
  const postUrl = `${siteUrl}/blog/${post.id}`;
  const imageUrl = post.img.startsWith('http') ? post.img : `${siteUrl}${post.img}`;

  const titleText = `${post.title} | Rexa Designs Blog`;
  const descText = post.excerpt || 'Read the latest updates and design insights from Rexa Designs.';

  return {
    title: titleText,
    description: descText,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: postUrl,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleText,
      description: descText,
      images: [imageUrl],
    },
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  let post = null;
  try {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();
    if (data) post = data;
  } catch (e) {}

  if (!post) {
    post = staticBlogs.find(p => p.id === id);
  }

  // Inject structured JSON-LD for rich SEO Article results
  let jsonLd = null;
  if (post) {
    const siteUrl = 'https://rexadesigns.lk';
    const imageUrl = post.img.startsWith('http') ? post.img : `${siteUrl}${post.img}`;
    
    // Parse dates gracefully
    let datePublished = new Date().toISOString();
    if (post.date) {
      const parsedDate = new Date(post.date);
      if (!isNaN(parsedDate.getTime())) {
        datePublished = parsedDate.toISOString();
      }
    }

    jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": imageUrl,
      "datePublished": datePublished,
      "author": {
        "@type": "Person",
        "name": post.author || "Rexa Designs Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rexa Designs",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rexadesigns.lk/Rexa%20Icon.webp"
        }
      },
      "description": post.excerpt
    };
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPostPage />
    </>
  );
}
