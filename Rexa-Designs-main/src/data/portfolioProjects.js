const projectImages = {
  brand: '/images/Logo Mockup.svg',
  packaging: '/images/Social Media Mockup.svg',
  web: '/images/web-ui.svg',
  resort: '/images/resort-web.svg',
  profile: '/images/company-profile.svg'
};

export const portfolioProjects = [
  {
    id: 1,
    title: 'Where Your Brand Begins',
    category: 'Logo Designs',
    img: projectImages.brand,
    client: 'Ceylon Naturals',
    date: 'Jan 2026',
    desc: 'A showcase of custom logo designs designed to reflect each brand’s personality, values, and vision.',
    challenge: 'The client needed to modernize their outdated logo and packaging while maintaining their recognizable legacy in the international market.',
    solution: 'We designed a minimalist yet classic logo, updated the typography, and created eco-friendly packaging that highlights the organic nature of the product.',
    gallery: [
      { title: 'CeylonRay Travels & Holidays', img: '/images/CeylonRay Travels & Holidays logo.svg' },
      { title: 'Lanka Logo Branding', img: '/images/Lanka Logo.svg' },
      { title: 'Delivery Bees', img: '/images/Delivery Bees.svg' }
    ]
  },
  {
    id: 2,
    title: 'Turn Posts Into Engagement',
    category: 'Social Media Posts',
    img: projectImages.packaging,
    client: 'EcoLife Ltd.',
    date: 'Feb 2026',
    desc: 'Sustainable and eye-catching packaging design for a new line of organic home products.',
    challenge: 'Creating a design that stands out on shelves while strictly adhering to eco-friendly printing constraints.',
    solution: 'Used biodegradable materials with a 2-color soy ink printing process, utilizing negative space for a premium look.',
    gallery: [
      { title: 'Box Design Front', img: projectImages.packaging },
      { title: 'Materials Close-up', img: projectImages.beauty },
      { title: 'Product Lineup', img: projectImages.packaging },
      { title: 'Label Details', img: projectImages.beauty }
    ]
  },
  {
    id: 3,
    title: 'FinTech App UI',
    category: 'Banner Designs',
    img: projectImages.web,
    client: 'PayMobi',
    date: 'Mar 2026',
    desc: 'User interface design for a cutting-edge mobile payment application aimed at Gen-Z users.',
    challenge: 'Making complex financial data easy to understand and engaging for young users.',
    solution: 'Implemented a dark-mode first design with vibrant accent colors and gamified financial tracking charts.',
    gallery: [
      { title: 'Dashboard Screen', img: projectImages.web },
      { title: 'Transaction Flow', img: projectImages.web },
      { title: 'Analytics View', img: projectImages.ecommerce },
      { title: 'App Icon & Splash', img: projectImages.brand }
    ]
  },
  {
    id: 4,
    title: 'Oceanic Resort Web',
    category: 'Business Cards',
    img: projectImages.resort,
    client: 'Oceanic Resorts',
    date: 'Nov 2025',
    desc: 'A luxurious and immersive website design for a top-tier beachfront resort.',
    challenge: 'Showcasing the property through high-resolution imagery without sacrificing website load speeds.',
    solution: 'Built a custom CMS with advanced image optimization, lazy loading, and subtle scroll animations.',
    gallery: [
      { title: 'Homepage Hero', img: projectImages.resort },
      { title: 'Booking Interface', img: projectImages.web },
      { title: 'Mobile View', img: projectImages.web },
      { title: 'Room Showcase', img: projectImages.resort }
    ]
  },
  {
    id: 5,
    title: 'Lanka Spices Profile',
    category: 'Other Designs',
    img: projectImages.profile,
    client: 'Lanka Spices Exports',
    date: 'Oct 2025',
    desc: 'A comprehensive corporate profile document for B2B client acquisitions.',
    challenge: 'Condensing 30 years of company history and technical product details into an engaging 15-page booklet.',
    solution: 'Utilized infographics, timeline layouts, and rich spice photography to create a visually driven narrative.',
    gallery: [
      { title: 'Cover Design', img: projectImages.profile },
      { title: 'Inner Spread Layout', img: projectImages.profile },
      { title: 'Product Showcase Page', img: projectImages.packaging },
      { title: 'Infographics', img: projectImages.web }
    ]
  }
];
