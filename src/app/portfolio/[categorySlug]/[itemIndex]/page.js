import PortfolioItemClientPage from './PortfolioItemClientPage';
import { portfolioProjects as staticProjects } from '../../../../data/portfolioProjects';
import { supabase } from '../../../../lib/supabase';

// Generate dynamic metadata for individual portfolio items
export async function generateMetadata({ params }) {
  const { categorySlug, itemIndex } = await params;
  const idx = Number(itemIndex);

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

  const staticProject = staticProjects.find((project) => {
    if (project.id === Number(categorySlug)) return true;
    const slug = project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return slug === categorySlug;
  }) || {};

  const mergedProject = selectedProject ? { ...staticProject, ...selectedProject } : null;

  if (!mergedProject || !mergedProject.gallery || !mergedProject.gallery[idx]) {
    return {
      title: 'Design Item Not Found | Rexa Designs',
      description: 'The requested graphic design asset could not be found.',
    };
  }

  const galleryItem = mergedProject.gallery[idx];
  const siteUrl = 'https://rexadesigns.lk';
  const itemUrl = `${siteUrl}/portfolio/${categorySlug}/${itemIndex}`;
  const imageUrl = galleryItem.img.startsWith('http') ? galleryItem.img : `${siteUrl}${galleryItem.img}`;

  const defaultDesc = `A bespoke design creation for ${galleryItem.title}. Crafted with clinical precision, this project showcases Rexa Designs' commitment to details, modern aesthetics, and client-centric solutions.`;
  const itemDesc = galleryItem.desc || defaultDesc;

  const titleText = `${galleryItem.title} - ${mergedProject.category} | Rexa Designs`;

  return {
    title: titleText,
    description: itemDesc,
    alternates: {
      canonical: itemUrl,
    },
    openGraph: {
      title: `${galleryItem.title} | Custom ${mergedProject.category}`,
      description: itemDesc,
      url: itemUrl,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${galleryItem.title} premium design render`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${galleryItem.title} | Custom ${mergedProject.category}`,
      description: itemDesc,
      images: [imageUrl],
    },
  };
}

export default async function ItemPage({ params }) {
  const { categorySlug, itemIndex } = await params;
  const idx = Number(itemIndex);

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

  const staticProject = staticProjects.find((project) => {
    if (project.id === Number(categorySlug)) return true;
    const slug = project.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return slug === categorySlug;
  }) || {};

  const mergedProject = selectedProject ? { ...staticProject, ...selectedProject } : null;

  // Inject structured JSON-LD for rich Google Images and Rich Snippets index
  let jsonLd = null;
  if (mergedProject && mergedProject.gallery && mergedProject.gallery[idx]) {
    const galleryItem = mergedProject.gallery[idx];
    const siteUrl = 'https://rexadesigns.lk';
    const itemUrl = `${siteUrl}/portfolio/${categorySlug}/${itemIndex}`;
    const imageUrl = galleryItem.img.startsWith('http') ? galleryItem.img : `${siteUrl}${galleryItem.img}`;
    const defaultDesc = `Bespoke dynamic design creation for ${galleryItem.title}. Crafted with clinical precision, this project showcases Rexa Designs' commitment to details, modern aesthetics, and client-centric solutions.`;
    const itemDesc = galleryItem.desc || defaultDesc;

    jsonLd = {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      "name": galleryItem.title,
      "image": imageUrl,
      "description": itemDesc,
      "artMedium": "Digital Graphic Design",
      "artform": "digital design mockup",
      "creator": {
        "@type": "Organization",
        "name": "Rexa Designs",
        "url": "https://rexadesigns.lk"
      },
      "genre": mergedProject.category
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
      <PortfolioItemClientPage />
    </>
  );
}
