const projectImages = {
  brand: '/images/brand-identity.svg',
  packaging: '/images/packaging.svg',
  web: '/images/web-ui.svg',
  resort: '/images/resort-web.svg',
  profile: '/images/company-profile.svg',
  social: '/images/social-media.svg',
  beauty: '/images/beauty-labels.svg',
  ecommerce: '/images/ecommerce.svg'
};

export const portfolioProjects = [
  {
    id: 1,
    title: 'Ceylon Tea Rebranding',
    category: 'Brand Identity',
    img: projectImages.brand,
    client: 'Ceylon Naturals',
    date: 'Jan 2026',
    desc: 'A complete visual rebranding for one of Sri Lanka premium tea exporters, focusing on heritage and modern elegance.',
    challenge: 'The client needed to modernize their outdated logo and packaging while maintaining their recognizable legacy in the international market.',
    solution: 'We designed a minimalist yet classic logo, updated the typography, and created eco-friendly packaging that highlights the organic nature of the product.',
    gallery: [
      { title: 'Primary Logo Design', img: projectImages.brand },
      { title: 'Packaging Mockup', img: projectImages.packaging },
      { title: 'Brand Guidelines', img: projectImages.profile },
      { title: 'Business Cards', img: projectImages.brand },
      { title: 'Social Media Kit', img: projectImages.social },
      { title: 'Merchandise Mockup', img: projectImages.packaging }
    ]
  },
  {
    id: 2,
    title: 'EcoLife Packaging',
    category: 'Packaging Design',
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
    category: 'Web & Mobile Solutions',
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
    category: 'Web Design',
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
    category: 'Company Profile',
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
  },
  {
    id: 6,
    title: 'Fitness Gym Social Media',
    category: 'Digital Marketing',
    img: projectImages.social,
    client: 'IronCore Fitness',
    date: 'Sep 2025',
    desc: 'A high-energy social media campaign to boost gym memberships during the new year.',
    challenge: 'Standing out in a highly saturated local fitness market on Instagram and Facebook.',
    solution: 'Created a series of short-form, high-impact video graphics featuring real member transformations and bold typography.',
    gallery: [
      { title: 'Instagram Feed Theme', img: projectImages.social },
      { title: 'Stories Templates', img: projectImages.social },
      { title: 'Promo Carousel', img: projectImages.brand },
      { title: 'Video Thumbnail', img: projectImages.social }
    ]
  },
  {
    id: 7,
    title: 'Organic Beauty Labels',
    category: 'Packaging Design',
    img: projectImages.beauty,
    client: 'Aura Naturals',
    date: 'Aug 2025',
    desc: 'Elegant and clean label designs for a new skincare line.',
    challenge: 'Ensuring all mandatory cosmetic regulatory text fit nicely without cluttering the minimalist aesthetic.',
    solution: 'Designed a clever multi-layer peel-back label that hides legal text while keeping the front face pristine.',
    gallery: [
      { title: 'Bottle Mockup Front', img: projectImages.beauty },
      { title: 'Collection Display', img: projectImages.beauty },
      { title: 'Typography Detail', img: projectImages.brand },
      { title: 'Box & Label Match', img: projectImages.packaging }
    ]
  },
  {
    id: 8,
    title: 'Tech Startup Branding',
    category: 'Brand Identity',
    img: projectImages.brand,
    client: 'Nexus AI',
    date: 'Jul 2025',
    desc: 'Brand identity development for an innovative artificial intelligence startup.',
    challenge: 'Avoiding cliche tech tropes like glowing brains or generic nodes.',
    solution: 'Created an abstract, geometric logo representing data alignment, paired with a sophisticated monochromatic palette.',
    gallery: [
      { title: 'Logo Icon', img: projectImages.brand },
      { title: 'Stationery Set', img: projectImages.profile },
      { title: 'Apparel Mockup', img: projectImages.brand },
      { title: 'Color Palette & Typography', img: projectImages.profile }
    ]
  },
  {
    id: 9,
    title: 'E-commerce Platform',
    category: 'Web Development',
    img: projectImages.ecommerce,
    client: 'StyleHub',
    date: 'Jun 2025',
    desc: 'A robust, high-converting e-commerce website for a fast-fashion retailer.',
    challenge: 'Handling a catalogue of over 10,000 SKUs with seamless filtering and quick checkout.',
    solution: 'Built a headless commerce solution for lightning-fast frontend performance and an intuitive faceted search.',
    gallery: [
      { title: 'Storefront Design', img: projectImages.ecommerce },
      { title: 'Product Filtering UI', img: projectImages.web },
      { title: 'Checkout Experience', img: projectImages.ecommerce },
      { title: 'Mobile Cart', img: projectImages.web }
    ]
  },

  {
    id: 10,
    title: 'Organic Beauty Labels',
    category: 'Packaging Design',
    img: projectImages.beauty,
    client: 'Aura Naturals',
    date: 'Aug 2025',
    desc: 'Elegant and clean label designs for a new skincare line.',
    challenge: 'Ensuring all mandatory cosmetic regulatory text fit nicely without cluttering the minimalist aesthetic.',
    solution: 'Designed a clever multi-layer peel-back label that hides legal text while keeping the front face pristine.',
    gallery: [
      { title: 'Bottle Mockup Front', img: projectImages.beauty },
      { title: 'Collection Display', img: projectImages.beauty },
      { title: 'Typography Detail', img: projectImages.brand },
      { title: 'Box & Label Match', img: projectImages.packaging }
    ]
  },
  {
    id: 11,
    title: 'Tech Startup Branding',
    category: 'Brand Identity',
    img: projectImages.brand,
    client: 'Nexus AI',
    date: 'Jul 2025',
    desc: 'Brand identity development for an innovative artificial intelligence startup.',
    challenge: 'Avoiding cliche tech tropes like glowing brains or generic nodes.',
    solution: 'Created an abstract, geometric logo representing data alignment, paired with a sophisticated monochromatic palette.',
    gallery: [
      { title: 'Logo Icon', img: projectImages.brand },
      { title: 'Stationery Set', img: projectImages.profile },
      { title: 'Apparel Mockup', img: projectImages.brand },
      { title: 'Color Palette & Typography', img: projectImages.profile }
    ]
  },
  {
    id: 12,
    title: 'E-commerce Platform',
    category: 'Web Development',
    img: projectImages.ecommerce,
    client: 'StyleHub',
    date: 'Jun 2025',
    desc: 'A robust, high-converting e-commerce website for a fast-fashion retailer.',
    challenge: 'Handling a catalogue of over 10,000 SKUs with seamless filtering and quick checkout.',
    solution: 'Built a headless commerce solution for lightning-fast frontend performance and an intuitive faceted search.',
    gallery: [
      { title: 'Storefront Design', img: projectImages.ecommerce },
      { title: 'Product Filtering UI', img: projectImages.web },
      { title: 'Checkout Experience', img: projectImages.ecommerce },
      { title: 'Mobile Cart', img: projectImages.web }
    ]
  },
  {
    id: 10,
    title: 'Restaurant Brand Launch',
    category: 'Brand Identity',
    img: projectImages.brand,
    client: 'Spice Table Bistro',
    date: 'May 2025',
    desc: 'A complete restaurant launch package including logo design, menu layout, signage, and social media launch creatives.',
    challenge: 'The client needed a memorable visual identity that felt premium while still being approachable for families and tourists.',
    solution: 'Created a warm identity system with bold typography, flexible brand patterns, and a rollout kit for print and digital touchpoints.',
    gallery: [
      { title: 'Logo Concept', img: projectImages.brand },
      { title: 'Menu Design', img: projectImages.profile },
      { title: 'Outdoor Signage', img: projectImages.packaging },
      { title: 'Launch Social Posts', img: projectImages.social }
    ]
  },
  {
    id: 11,
    title: 'Real Estate Landing Page',
    category: 'Web Design',
    img: projectImages.web,
    client: 'Urban Nest Realty',
    date: 'Apr 2025',
    desc: 'A conversion-focused landing page for a premium apartment development with lead capture and project showcase sections.',
    challenge: 'The client wanted to improve inquiry quality while presenting floor plans, amenities, and location benefits clearly.',
    solution: 'Designed a clean landing page flow with strong calls to action, structured property highlights, and mobile-first lead forms.',
    gallery: [
      { title: 'Landing Page Hero', img: projectImages.web },
      { title: 'Amenities Section', img: projectImages.resort },
      { title: 'Lead Form UI', img: projectImages.ecommerce },
      { title: 'Mobile Page View', img: projectImages.web }
    ]
  },
  {
    id: 12,
    title: 'Event Campaign Creatives',
    category: 'Digital Marketing',
    img: projectImages.social,
    client: 'Colombo Expo Week',
    date: 'Mar 2025',
    desc: 'A high-impact event campaign with posters, paid ad creatives, speaker announcements, and countdown social media assets.',
    challenge: 'The campaign needed to keep a consistent visual identity while supporting many event tracks and sponsor messages.',
    solution: 'Built a modular campaign system with reusable layouts, bold color blocking, and quick-turn templates for daily announcements.',
    gallery: [
      { title: 'Event Poster', img: projectImages.social },
      { title: 'Speaker Announcement', img: projectImages.brand },
      { title: 'Countdown Assets', img: projectImages.social },
      { title: 'Sponsor Banner', img: projectImages.profile }
    ]
  }
];
