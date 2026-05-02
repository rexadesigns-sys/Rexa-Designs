import { useState, useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './component/layout/Navbar';
import MobileMenu from './component/layout/MobileMenu';
import Footer from './component/layout/Footer';

import HomePage from './component/home/HomePage';
import AboutPage from './component/about/AboutPage';
import PricingPage from './component/pricing/PricingPage';
import PortfolioPage from './component/portfolio/PortfolioPage';
import ProjectPage from './component/portfolio/ProjectPage';
import ContactPage from './component/contact/ContactPage';
import BlogPage from './component/blog/BlogPage';
import BlogPostPage from './component/blog/BlogPostPage';
import AdminPanel from './component/admin/AdminPanel';
import FloatingWhatsApp from './component/ui/FloatingWhatsApp';

import { portfolioProjects } from './data/portfolioProjects';
import { testimonialsList } from './data/testimonials';

const ownerEmail = 'rexadesigns@gmail.com';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const customTestimonials = JSON.parse(localStorage.getItem('customTestimonials')) || [];
  const deletedStaticTestimonials = JSON.parse(localStorage.getItem('deletedStaticTestimonials')) || [];
  const activeStaticTestimonials = testimonialsList
    .map((t, idx) => ({ ...t, id: `static-test-${idx}` }))
    .filter(t => !deletedStaticTestimonials.includes(t.id));
  const allTestimonials = [...customTestimonials, ...activeStaticTestimonials];

  const customProjects = JSON.parse(localStorage.getItem('customProjects')) || [];
  const deletedStaticProjects = JSON.parse(localStorage.getItem('deletedStaticProjects')) || [];
  const activeStaticProjects = portfolioProjects.filter(p => !deletedStaticProjects.includes(p.id));
  const allProjects = [...customProjects, ...activeStaticProjects];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    services: [],
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [attachedFileName, setAttachedFileName] = useState('No file chosen');
  const fileInputRef = useRef(null);

  const [recentWorkIndex, setRecentWorkIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const categoryOrder = [
    'Logo Designs',
    'Social Media Posts',
    'Banner Designs',
    'Business Cards',
    'Other Designs'
  ];

  const recentWorksList = categoryOrder.map(catName => {
    const project = allProjects.find(p => p.category === catName);
    if (!project) return null;
    
    // Grab the newest item from the gallery (the very first one at the top)
    const newestGalleryItem = project.gallery && project.gallery.length > 0 
      ? project.gallery[0] 
      : { title: project.title, img: project.img };

    return {
      id: project.id, // Keep the category ID so clicking goes to the right album
      category: project.category,
      title: newestGalleryItem.title,
      img: newestGalleryItem.img
    };
  }).filter(Boolean);

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testItemsPerView, setTestItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, recentWorksList.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentWorkIndex((curr) => (curr >= maxIndex ? 0 : curr + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextWork = () => {
    setRecentWorkIndex((curr) => (curr >= maxIndex ? 0 : curr + 1));
  };

  const prevWork = () => {
    setRecentWorkIndex((curr) => (curr <= 0 ? maxIndex : curr - 1));
  };

  useEffect(() => {
    const handleResizeTest = () => {
      setTestItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };

    handleResizeTest();
    window.addEventListener('resize', handleResizeTest);

    return () => window.removeEventListener('resize', handleResizeTest);
  }, []);

  const maxTestIndex = Math.max(0, allTestimonials.length - testItemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((curr) => (curr >= maxTestIndex ? 0 : curr + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [maxTestIndex]);

  const nextTestimonial = () => {
    setTestimonialIndex((curr) => (curr >= maxTestIndex ? 0 : curr + 1));
  };

  const prevTestimonial = () => {
    setTestimonialIndex((curr) => (curr <= 0 ? maxTestIndex : curr - 1));
  };

  const openProject = (project, e) => {
    if (e) e.preventDefault();
    navigate(`/portfolio/${project.id}`);
    setIsMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      const currentServices = [...prev.services];

      if (currentServices.includes(service)) {
        return {
          ...prev,
          services: currentServices.filter((s) => s !== service)
        };
      } else {
        return {
          ...prev,
          services: [...currentServices, service]
        };
      }
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachedFileName(e.target.files[0].name);
    } else {
      setAttachedFileName('No file chosen');
    }
  };

  const triggerFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    const contactForm = new FormData();
    contactForm.append('_subject', `New Rexa Designs contact: ${formData.subject}`);
    contactForm.append('_template', 'table');
    contactForm.append('First Name', formData.firstName);
    contactForm.append('Last Name', formData.lastName);
    contactForm.append('Email', formData.email);
    contactForm.append('Phone', formData.phone || 'Not provided');
    contactForm.append('Subject', formData.subject);
    contactForm.append(
      'Services Interested In',
      formData.services.length ? formData.services.join(', ') : 'Not selected'
    );
    contactForm.append('Message', formData.message);

    if (fileInputRef.current?.files?.[0]) {
      contactForm.append('attachment', fileInputRef.current.files[0]);
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${ownerEmail}`, {
        method: 'POST',
        body: contactForm,
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Message delivery failed');
      }

      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        services: [],
        message: ''
      });
      setAttachedFileName('No file chosen');

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch {
      setFormStatus('error');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {isMobileMenuOpen && (
        <MobileMenu
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={(
            <HomePage
              openProject={openProject}
              recentWorksList={recentWorksList}
              recentWorkIndex={recentWorkIndex}
              itemsPerView={itemsPerView}
              prevWork={prevWork}
              nextWork={nextWork}
              testimonialsList={allTestimonials}
              testimonialIndex={testimonialIndex}
              testItemsPerView={testItemsPerView}
              prevTestimonial={prevTestimonial}
              nextTestimonial={nextTestimonial}
            />
          )}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route
          path="/portfolio"
          element={(
            <PortfolioPage
              portfolioProjects={allProjects.filter(p => !p.hideFromPortfolio)}
              openProject={openProject}
            />
          )}
        />
        <Route
          path="/portfolio/:projectId"
          element={<ProjectPage portfolioProjects={allProjects} />}
        />
        <Route
          path="/contact"
          element={(
            <ContactPage
              formData={formData}
              formStatus={formStatus}
              ownerEmail={ownerEmail}
              attachedFileName={attachedFileName}
              fileInputRef={fileInputRef}
              handleInputChange={handleInputChange}
              handleCheckboxChange={handleCheckboxChange}
              handleFileChange={handleFileChange}
              triggerFilePicker={triggerFilePicker}
              handleSubmit={handleSubmit}
              setFormStatus={setFormStatus}
            />
          )}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
