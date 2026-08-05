import ProjectClientPage from './ProjectClientPage';
import { portfolioProjects as staticProjects } from '../../../data/portfolioProjects';
import { supabase } from '../../../lib/supabase';

// Generate dynamic metadata for portfolio categories
export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  
  let projects = [];
  try {
    const { data } = await supabase
      .from('portfolio')
      .select('*')
      .order('created_at', { ascending: false });
    if (data && data.length > 0) {
      projects = data;
    } else {
      projects = staticProjects;
    }
  } catch (e) {
    projects = staticProjects;
  }

  const selectedProject = projects.find((project) => {
    if (project.id === Number(categorySlug)) return true;
    const slug = project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return slug === categorySlug;
  });

  if (!selectedProject) {
    return {
      title: 'Portfolio Category | Rexa Designs',
      description: 'Explore our premium graphic design portfolio categories.',
    };
  }

  const siteUrl = 'https://rexadesigns.lk';
  const categoryUrl = `${siteUrl}/portfolio/${categorySlug}`;
  const imageUrl = selectedProject.img.startsWith('http') ? selectedProject.img : `${siteUrl}${selectedProject.img}`;

  const titleText = `${selectedProject.category} | Premium Graphic Design | Rexa Designs`;
  const descText = selectedProject.desc || `View our bespoke selection of ${selectedProject.category} creations. Handcrafted with precision by Rexa Designs in Sri Lanka.`;

  return {
    title: titleText,
    description: descText,
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: categoryUrl,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${selectedProject.category} portfolio category cover image`,
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

export default async function CategoryPage({ params }) {
  const { categorySlug } = await params;
  
  let projects = [];
  try {
    const { data } = await supabase
      .from('portfolio')
      .select('*')
      .order('created_at', { ascending: false });
    if (data && data.length > 0) {
      projects = data;
    } else {
      projects = staticProjects;
    }
  } catch (e) {
    projects = staticProjects;
  }

  const selectedProject = projects.find((project) => {
    if (project.id === Number(categorySlug)) return true;
    const slug = project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return slug === categorySlug;
  });

  // Inject structured JSON-LD for rich SEO snippets
  let jsonLd = null;
  if (selectedProject) {
    const siteUrl = 'https://rexadesigns.lk';
    const categoryUrl = `${siteUrl}/portfolio/${categorySlug}`;
    const imageUrl = selectedProject.img.startsWith('http') ? selectedProject.img : `${siteUrl}${selectedProject.img}`;
    
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `${selectedProject.category} Designs Portfolio`,
      "description": selectedProject.desc,
      "url": categoryUrl,
      "image": imageUrl,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Rexa Designs",
        "url": "https://rexadesigns.lk",
        "telephone": "+94771234567",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "LK"
        }
      }
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
      <ProjectClientPage />
    </>
  );
}
