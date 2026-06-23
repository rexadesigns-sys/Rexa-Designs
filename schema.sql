-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  date TEXT NOT NULL,
  author TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  img TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  text TEXT NOT NULL,
  rating INTEGER DEFAULT 5 NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create portfolio table
CREATE TABLE IF NOT EXISTS portfolio (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  img TEXT NOT NULL,
  gallery JSONB DEFAULT '[]'::jsonb NOT NULL,
  "desc" TEXT,
  hide_from_portfolio BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed Blog Posts
INSERT INTO blog_posts (id, title, category, date, author, excerpt, img, content) VALUES
('future-digital-design-2026', 'The Future of Digital Design in 2026', 'Design Trends', 'Apr 15, 2026', 'Jane Doe', 'Explore the upcoming trends in UI/UX design, from AI-driven interfaces to immersive 3D experiences.', '/images/blog_design.png', '<h2>The Rise of AI-Driven Interfaces</h2><p>As we move further into 2026, Artificial Intelligence is no longer just a buzzword; it''s a fundamental component of the design process...</p>'),
('maximizing-roi-social-media', 'Maximizing ROI with Social Media Marketing', 'Digital Marketing', 'Apr 10, 2026', 'John Smith', 'Learn strategies to boost engagement and conversion rates across different social media platforms.', '/images/blog_marketing.png', '<h2>Understanding Your Audience</h2><p>The foundation of any successful social media campaign is a deep understanding of your target audience...</p>'),
('brand-identity-matters', 'Why Brand Identity Matters More Than Ever', 'Branding', 'Apr 05, 2026', 'Alice Johnson', 'A strong brand identity is crucial in a saturated market. Discover how to build a brand that resonates.', '/images/blog_tech.png', '<h2>Consistency is Key</h2><p>A strong brand identity is built on consistency. From your logo and color palette to your tone of voice...</p>')
ON CONFLICT (id) DO NOTHING;

-- Seed Testimonials
INSERT INTO testimonials (id, name, text, rating) VALUES
('8a7b14d2-28e1-45a8-9252-7e04f056d812', 'Saman Kumara', 'Rexa Designs transformed our brand identity. The logo they created perfectly captures our values.', 5),
('4df2a8b9-43c2-47d8-812e-13c58b901a24', 'Nisansala Perera', 'Highly professional service. They delivered our social media templates ahead of schedule and they look amazing.', 5),
('bc7f2e1a-8c9e-4b7d-815d-2e62a1b94d80', 'Roshan Silva', 'We have been working with Rexa Designs for over two years now. Exceptional quality and communication.', 5)
ON CONFLICT (id) DO NOTHING;

-- Seed Portfolio Projects
INSERT INTO portfolio (id, title, category, img, "desc", gallery, hide_from_portfolio) OVERRIDING SYSTEM VALUE VALUES
(1, 'Where Your Brand Begins', 'Logo Designs', '/images/Logo Mockup.svg', 'A showcase of custom logo designs designed to reflect each brand’s personality, values, and vision.', '[{"title": "CeylonRay Travels & Holidays", "img": "/images/CeylonRay Travels & Holidays logo.webp"}, {"title": "Lanka Logo Branding", "img": "/images/Lanka logo.webp"}, {"title": "Delivery Bees Branding logo", "img": "/images/Delivery Bees logo.webp"}, {"title": "Vishwa Hotel Branding Logo", "img": "/images/Vishwa Hotel Logo.webp"}, {"title": "Thrift Computers Branding Logo", "img": "/images/Thrift Computers Logo.webp"}, {"title": "Samudra Branding Logo", "img": "/images/Samudra Logo.webp"}, {"title": "TMJ Paint Center Branding Logo", "img": "/images/TMJ Paint Center Logo.webp"}, {"title": "Oriental Equipment Branding Logo", "img": "/images/Oriental Equipment Logo.webp"}, {"title": "Fast Track Branding Logo", "img": "/images/Fast Track Logo.webp"}, {"title": "TESH''S Nails Branding Logo", "img": "/images/TESH''S Nails Logo.webp"}, {"title": "Eventsly Branding Logo", "img": "/images/Eventsly Logo.webp"}, {"title": "Springoo Branding Logo", "img": "/images/Springoo Logo.webp"}, {"title": "SwaraLokana Branding Logo", "img": "/images/SwaraLokana Logo.webp"}, {"title": "Bhagys Fairy Branding Logo", "img": "/images/Bhagys Fairy Logo.webp"}, {"title": "Olivia Hair Salon Branding Logo", "img": "/images/Olivia Hair Salon Logo.webp"}, {"title": "Lets Learn English Branding Logo", "img": "/images/Lets Learn English Logo.webp"}, {"title": "Thryvv Branding Logo", "img": "/images/Thryvv Logo.webp"}, {"title": "Cakes By Amaya Branding Logo", "img": "/images/Cakes By Amaya Logo.webp"}, {"title": "Feber & Ink Branding Logo", "img": "/images/Feber & Ink Logo.webp"}, {"title": "Cartoon World Branding Logo", "img": "/images/Cartoon World Logo.webp"}, {"title": "Viman Gems Branding Logo", "img": "/images/Viman Gems Logo.webp"}]'::jsonb, false),
(2, 'Turn Posts Into Engagement', 'Social Media Posts', '/images/Social Media Mockup.svg', 'Elevating the digital experience through clinical precision and cohesive visual storytelling.', '[{"title": "Beyerdynomic Music Post", "img": "/images/Beyerdynomic Music Post.webp"}, {"title": "Blood Donation Post", "img": "/images/Blood Donation Post.webp"}, {"title": "Music Diploma Post", "img": "/images/Music Diploma Post.webp"}, {"title": "Origin Music Post", "img": "/images/Origin Music Post.webp"}, {"title": "Music Cover Post", "img": "/images/Music Cover Post.webp"}]'::jsonb, false),
(3, 'Elevate Your Digital Presence', 'Banner Designs', '/images/Banner Mockup.webp', 'A gallery of custom-scaled banners optimized to deliver a seamless and immersive first impression for the modern digital storefront.', '[{"title": "Touch Of Gold Avurudu Banner", "img": "/images/Touch of gold avurudu banner.webp"}, {"title": "NSBPAY Banner", "img": "/images/NSBPAY Banner.webp"}]'::jsonb, false),
(4, 'Your Professional Story, Hand Delivered', 'Business Cards', '/images/Business Card Mockup.webp', 'A gallery of custom business card layouts designed to balance clinical precision with creative flair for the modern professional.', '[{"title": "Juki Center Business Card", "img": "/images/Juki Center Business Card.webp"}]'::jsonb, false),
(5, 'Focused, Consistent Vision', 'Other Designs', '/images/Other Mockup.webp', 'A curated selection of creative assets developed to provide a comprehensive visual language that evolves with a brand’s growing needs.', '[{"title": "Touch Of Gold T shirt", "img": "/images/Touch Of Gold Tshirt.webp"}, {"title": "Touch Of Gold Lanyard", "img": "/images/Touch Of Gold Lanyard.webp"}, {"title": "Touch Of Gold Id", "img": "/images/Touch Of Gold Id.webp"}]'::jsonb, false),
(6, 'Elegance in Every Detail', 'Wedding Invitation', '/images/wedding_mockup.png', 'A curated gallery of elegant wedding invitations, crafted with premium textures and gold foil embossing.', '[{"title": "Royal Gold Invitation", "img": "/images/wedding_mockup.png"}, {"title": "Watercolor Floral Invitation", "img": "/images/wedding_mockup_2.png"}, {"title": "Emerald Foil Invitation", "img": "/images/wedding_mockup_3.png"}]'::jsonb, false)
ON CONFLICT (id) DO NOTHING;

-- Reset the portfolio auto-increment sequence so new inserts default correctly
SELECT setval(pg_get_serial_sequence('portfolio', 'id'), COALESCE(max(id), 1)) FROM portfolio; -- in case we run it multiple times or modify/seed differently

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_posts
DROP POLICY IF EXISTS "Allow public read access for blog_posts" ON blog_posts;
CREATE POLICY "Allow public read access for blog_posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated insert for blog_posts" ON blog_posts;
CREATE POLICY "Allow authenticated insert for blog_posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated update for blog_posts" ON blog_posts;
CREATE POLICY "Allow authenticated update for blog_posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated delete for blog_posts" ON blog_posts;
CREATE POLICY "Allow authenticated delete for blog_posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for testimonials
DROP POLICY IF EXISTS "Allow public read access for testimonials" ON testimonials;
CREATE POLICY "Allow public read access for testimonials"
  ON testimonials
  FOR SELECT
  TO public
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated insert for testimonials" ON testimonials;
CREATE POLICY "Allow authenticated insert for testimonials"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated update for testimonials" ON testimonials;
CREATE POLICY "Allow authenticated update for testimonials"
  ON testimonials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated delete for testimonials" ON testimonials;
CREATE POLICY "Allow authenticated delete for testimonials"
  ON testimonials
  FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for portfolio
DROP POLICY IF EXISTS "Allow public read access for portfolio" ON portfolio;
CREATE POLICY "Allow public read access for portfolio"
  ON portfolio
  FOR SELECT
  TO public
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated insert for portfolio" ON portfolio;
CREATE POLICY "Allow authenticated insert for portfolio"
  ON portfolio
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated update for portfolio" ON portfolio;
CREATE POLICY "Allow authenticated update for portfolio"
  ON portfolio
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated delete for portfolio" ON portfolio;
CREATE POLICY "Allow authenticated delete for portfolio"
  ON portfolio
  FOR DELETE
  TO authenticated
  USING (true);


