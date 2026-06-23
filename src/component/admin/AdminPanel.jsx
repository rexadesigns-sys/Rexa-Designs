"use client";

import { useState, useRef, useEffect } from 'react';
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  Settings,
  Users,
  Menu,
  X,
  Bell,
  Search,
  LogOut,
  FileText,
  Trash2
} from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import { testimonialsList } from '../../data/testimonials';
import { portfolioProjects } from '../../data/portfolioProjects';

export default function AdminPanel() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const fileInputRef = useRef(null);
  const projFileInputRef = useRef(null);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('adminAuth') === 'true';
    }
    return false;
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials as requested
    if (loginEmail === 'admin@rexa.com' && loginPassword === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setActiveTab('dashboard');
  };

  const [blogTopic, setBlogTopic] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogImage, setBlogImage] = useState(null);
  const [blogImagePreview, setBlogImagePreview] = useState(null);
  const [publishStatus, setPublishStatus] = useState({ type: '', message: '' });

  const [customPosts, setCustomPosts] = useState([]);
  const [deletedStaticPosts, setDeletedStaticPosts] = useState([]);

  // Testimonials state
  const [testName, setTestName] = useState('');
  const [testRating, setTestRating] = useState(5);
  const [testContent, setTestContent] = useState('');
  const [customTests, setCustomTests] = useState([]);
  const [deletedTests, setDeletedTests] = useState([]);

  // Projects state
  const [projTopic, setProjTopic] = useState('');
  const [projCategory, setProjCategory] = useState('Logo Designs');
  const [projImage, setProjImage] = useState(null);
  const [projImagePreview, setProjImagePreview] = useState(null);
  const [customProjects, setCustomProjects] = useState([]);
  const [deletedProjects, setDeletedProjects] = useState([]);

  useEffect(() => {
    const loadedCustomPosts = JSON.parse(localStorage.getItem('customBlogPosts')) || [];
    setCustomPosts(loadedCustomPosts);
    const loadedDeletedStatic = JSON.parse(localStorage.getItem('deletedStaticPosts')) || [];
    setDeletedStaticPosts(loadedDeletedStatic);

    const loadedCustomTests = JSON.parse(localStorage.getItem('customTestimonials')) || [];
    setCustomTests(loadedCustomTests);
    const loadedDeletedTests = JSON.parse(localStorage.getItem('deletedStaticTestimonials')) || [];
    setDeletedTests(loadedDeletedTests);

    const loadedCustomProjects = JSON.parse(localStorage.getItem('customProjects')) || [];
    setCustomProjects(loadedCustomProjects);
    const loadedDeletedProjects = JSON.parse(localStorage.getItem('deletedStaticProjects')) || [];
    setDeletedProjects(loadedDeletedProjects);
  }, [publishStatus]);

  const handleDeletePost = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      if (id.toString().startsWith('custom-')) {
        const updatedCustomPosts = customPosts.filter(p => p.id !== id);
        localStorage.setItem('customBlogPosts', JSON.stringify(updatedCustomPosts));
        setCustomPosts(updatedCustomPosts);
      } else {
        const updatedDeleted = [...deletedStaticPosts, id];
        localStorage.setItem('deletedStaticPosts', JSON.stringify(updatedDeleted));
        setDeletedStaticPosts(updatedDeleted);
      }
      setPublishStatus({ type: 'success', message: 'Post deleted successfully!' });
      setTimeout(() => setPublishStatus({ type: '', message: '' }), 4000);
    }
  };

  const handlePublishTestimonial = () => {
    if (!testName || !testContent) {
      setPublishStatus({ type: 'error', message: 'Please fill in all testimonial fields.' });
      setTimeout(() => setPublishStatus({ type: '', message: '' }), 4000);
      return;
    }

    const newTest = {
      id: `custom-test-${Date.now()}`,
      name: testName,
      text: testContent,
      rating: parseInt(testRating)
    };

    const existingTests = JSON.parse(localStorage.getItem('customTestimonials')) || [];
    localStorage.setItem('customTestimonials', JSON.stringify([newTest, ...existingTests]));

    setPublishStatus({ type: 'success', message: `Testimonial added successfully!` });
    setTimeout(() => setPublishStatus({ type: '', message: '' }), 4000);

    setTestName('');
    setTestRating(5);
    setTestContent('');
  };

  const handleDeleteTestimonial = (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      if (id.toString().startsWith('custom-')) {
        const updatedCustom = customTests.filter(t => t.id !== id);
        localStorage.setItem('customTestimonials', JSON.stringify(updatedCustom));
        setCustomTests(updatedCustom);
      } else {
        const updatedDeleted = [...deletedTests, id];
        localStorage.setItem('deletedStaticTestimonials', JSON.stringify(updatedDeleted));
        setDeletedTests(updatedDeleted);
      }
      setPublishStatus({ type: 'success', message: 'Testimonial deleted!' });
      setTimeout(() => setPublishStatus({ type: '', message: '' }), 4000);
    }
  };

  const handlePublishProject = () => {
    if (!projTopic || !projCategory || !projImage) {
      setPublishStatus({ type: 'error', message: 'Please fill in all project fields and upload an image.' });
      setTimeout(() => setPublishStatus({ type: '', message: '' }), 4000);
      return;
    }

    const newProject = {
      id: `custom-proj-${Date.now()}`,
      title: projTopic,
      category: projCategory,
      img: projImagePreview,
      gallery: [
        { title: projTopic, img: projImagePreview }
      ]
    };

    const existingProjects = JSON.parse(localStorage.getItem('customProjects')) || [];
    try {
      localStorage.setItem('customProjects', JSON.stringify([newProject, ...existingProjects]));
    } catch (e) {
      setPublishStatus({ type: 'error', message: 'Failed: Image is too large for local storage.' });
      setTimeout(() => setPublishStatus({ type: '', message: '' }), 5000);
      return;
    }

    setPublishStatus({ type: 'success', message: `Project added successfully!` });
    setTimeout(() => setPublishStatus({ type: '', message: '' }), 4000);

    setProjTopic('');
    setProjCategory('Logo Designs');
    setProjImage(null);
    setProjImagePreview(null);
    if (projFileInputRef.current) projFileInputRef.current.value = '';
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      if (id.toString().startsWith('custom-')) {
        const updatedCustom = customProjects.filter(p => p.id !== id);
        localStorage.setItem('customProjects', JSON.stringify(updatedCustom));
        setCustomProjects(updatedCustom);
      } else {
        const updatedDeleted = [...deletedProjects, id];
        localStorage.setItem('deletedStaticProjects', JSON.stringify(updatedDeleted));
        setDeletedProjects(updatedDeleted);
      }
      setPublishStatus({ type: 'success', message: 'Project deleted!' });
      setTimeout(() => setPublishStatus({ type: '', message: '' }), 4000);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProjImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProjImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    if (!blogTopic || !blogAuthor || !blogContent || !blogImage) {
      setPublishStatus({ type: 'error', message: 'Please fill in all fields before publishing.' });
      setTimeout(() => setPublishStatus({ type: '', message: '' }), 4000);
      return;
    }

    const newPost = {
      id: `custom-${Date.now()}`,
      title: blogTopic,
      category: 'News',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      author: blogAuthor,
      excerpt: blogContent.substring(0, 150) + '...',
      img: blogImagePreview,
      content: `<p>${blogContent.replace(/\n/g, '<br/>')}</p>`
    };

    const existingPosts = JSON.parse(localStorage.getItem('customBlogPosts')) || [];

    try {
      localStorage.setItem('customBlogPosts', JSON.stringify([newPost, ...existingPosts]));
    } catch (e) {
      setPublishStatus({ type: 'error', message: 'Failed: Image is too large for local storage. Please use a smaller image.' });
      setTimeout(() => setPublishStatus({ type: '', message: '' }), 5000);
      return;
    }

    setPublishStatus({ type: 'success', message: `Successfully published: ${blogTopic}` });
    setTimeout(() => setPublishStatus({ type: '', message: '' }), 4000);

    // Reset form
    setBlogTopic('');
    setBlogAuthor('');
    setBlogContent('');
    setBlogImage(null);
    setBlogImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const navigation = [
    { name: 'Dashboard', id: 'dashboard', icon: LayoutDashboard },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Testimonials', id: 'testimonials', icon: Users },
    { name: 'Blog', id: 'blog', icon: FileText },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center text-blue-600">
            <LayoutDashboard size={48} />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {loginError && (
                <div className="text-red-600 text-sm font-medium text-center bg-red-50 py-2 rounded-md">
                  {loginError}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className={`bg-slate-900 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col hidden md:flex`}>
        <div className="h-16 flex items-center justify-center border-b border-slate-800">
          <h1 className={`font-bold text-xl transition-all duration-300 ${!isSidebarOpen && 'scale-0'}`}>
            Rexa Admin
          </h1>
          {!isSidebarOpen && <span className="font-bold text-xl absolute">RA</span>}
        </div>

        <nav className="flex-1 py-6 flex flex-col gap-2 px-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  } ${!isSidebarOpen && 'justify-center'}`}
                title={!isSidebarOpen ? item.name : ''}
              >
                <Icon size={20} />
                <span className={`transition-all duration-300 whitespace-nowrap ${!isSidebarOpen && 'hidden'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-slate-400 hover:text-white w-full px-3 py-2"
          >
            <LogOut size={20} />
            <span className={`${!isSidebarOpen && 'hidden'}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 hover:text-gray-700 hidden md:block"
            >
              <Menu size={24} />
            </button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-gray-700 p-2">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-700">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">{activeTab}</h2>

            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Total Projects', value: (customProjects.length + portfolioProjects.filter(p => !deletedProjects.includes(p.id)).length).toString(), icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
                    { title: 'Total Posts', value: (customPosts.length + blogPosts.filter(p => !deletedStaticPosts.includes(p.id)).length).toString(), icon: FileText, color: 'text-green-600', bg: 'bg-green-100' },
                    { title: 'Testimonials', value: (customTests.length + testimonialsList.filter((_, idx) => !deletedTests.includes(`static-test-${idx}`)).length).toString(), icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
                        <stat.icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                        <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {activeTab === 'blog' && (
              <>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Add New Blog Post</h3>
                    <div className="flex items-center gap-4">
                      {publishStatus.message && (
                        <span className={`text-sm font-medium ${publishStatus.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                          {publishStatus.message}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={handlePublish}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Publish Post
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Topic / Title</label>
                        <input
                          type="text"
                          placeholder="Enter blog topic..."
                          value={blogTopic}
                          onChange={(e) => setBlogTopic(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                        <input
                          type="text"
                          placeholder="Enter author name..."
                          value={blogAuthor}
                          onChange={(e) => setBlogAuthor(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                      <div
                        className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          accept=".jpg,.jpeg,.png,.webp,.avif"
                          onChange={handleImageChange}
                        />
                        {blogImagePreview ? (
                          <div className="relative w-full h-48 overflow-hidden rounded-lg">
                            <img src={blogImagePreview} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <>
                            <FileText className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                            <p className="text-sm text-gray-600"><span className="text-blue-600 font-medium">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 mt-1">JPG, PNG, WebP, AVIF up to 10MB</p>
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                      <textarea
                        rows="8"
                        placeholder="Write your blog content here..."
                        value={blogContent}
                        onChange={(e) => setBlogContent(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Manage Posts</h3>
                  <div className="space-y-4">
                    {(() => {
                      const activeStatic = blogPosts.filter(p => !deletedStaticPosts.includes(p.id));
                      const all = [...customPosts, ...activeStatic];
                      if (all.length === 0) {
                        return <p className="text-gray-500 text-center py-4">No posts found.</p>;
                      }
                      return all.map((post) => (
                        <div key={post.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-4">
                            <img src={post.img} alt={post.title} className="w-16 h-16 object-cover rounded-md" />
                            <div>
                              <h4 className="font-bold text-gray-900 line-clamp-1">{post.title}</h4>
                              <p className="text-sm text-gray-500">By {post.author} • {post.date}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-4"
                            title="Delete Post"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'testimonials' && (
              <>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Add New Testimonial</h3>
                    <div className="flex items-center gap-4">
                      {publishStatus.message && (
                        <span className={`text-sm font-medium ${publishStatus.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                          {publishStatus.message}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={handlePublishTestimonial}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Publish
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                        <input
                          type="text"
                          placeholder="Enter customer name..."
                          value={testName}
                          onChange={(e) => setTestName(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                        <select
                          value={testRating}
                          onChange={(e) => setTestRating(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        >
                          <option value="5">5 Stars</option>
                          <option value="4">4 Stars</option>
                          <option value="3">3 Stars</option>
                          <option value="2">2 Stars</option>
                          <option value="1">1 Star</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Review Content</label>
                      <textarea
                        rows="4"
                        placeholder="Write testimonial content here..."
                        value={testContent}
                        onChange={(e) => setTestContent(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Manage Testimonials</h3>
                  <div className="space-y-4">
                    {(() => {
                      const activeStatic = testimonialsList.map((t, idx) => ({ ...t, id: `static-test-${idx}` })).filter(t => !deletedTests.includes(t.id));
                      const all = [...customTests, ...activeStatic];
                      if (all.length === 0) {
                        return <p className="text-gray-500 text-center py-4">No testimonials found.</p>;
                      }
                      return all.map((test) => (
                        <div key={test.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">{test.name} <span className="text-yellow-500 text-sm ml-2">★★★★★</span></h4>
                            <p className="text-sm text-gray-500 line-clamp-2 mt-1">{test.text}</p>
                          </div>
                          <button
                            onClick={() => handleDeleteTestimonial(test.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-4"
                            title="Delete Testimonial"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'projects' && (
              <>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Add New Project</h3>
                    <div className="flex items-center gap-4">
                      {publishStatus.message && (
                        <span className={`text-sm font-medium ${publishStatus.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                          {publishStatus.message}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={handlePublishProject}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Publish Project
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Topic</label>
                        <input
                          type="text"
                          placeholder="Enter project topic..."
                          value={projTopic}
                          onChange={(e) => setProjTopic(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                          value={projCategory}
                          onChange={(e) => setProjCategory(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        >
                          <option value="Logo Designs">Logo Designs</option>
                          <option value="Social Media Posts">Social Media Posts</option>
                          <option value="Banner Designs">Banner Designs</option>
                          <option value="Business Cards">Business Cards</option>
                          <option value="Other Designs">Other Designs</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
                      <div
                        className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => projFileInputRef.current?.click()}
                      >
                        <input
                          type="file"
                          ref={projFileInputRef}
                          className="hidden"
                          accept=".jpg,.jpeg,.png,.webp,.avif"
                          onChange={handleProjImageChange}
                        />
                        {projImagePreview ? (
                          <div className="relative w-full h-48 overflow-hidden rounded-lg">
                            <img src={projImagePreview} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <>
                            <FileText className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                            <p className="text-sm text-gray-600"><span className="text-blue-600 font-medium">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 mt-1">JPG, PNG, WebP, AVIF up to 10MB</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Manage Projects</h3>
                  <div className="space-y-4">
                    {(() => {
                      const activeStatic = portfolioProjects.filter(p => !deletedProjects.includes(p.id));
                      const all = [...customProjects, ...activeStatic];
                      if (all.length === 0) {
                        return <p className="text-gray-500 text-center py-4">No projects found.</p>;
                      }
                      return all.map((proj) => (
                        <div key={proj.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-4">
                            <img src={proj.img} alt={proj.title} className="w-16 h-16 object-cover rounded-md" />
                            <div>
                              <h4 className="font-bold text-gray-900 line-clamp-1">{proj.title}</h4>
                              <p className="text-sm text-gray-500">{proj.category}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-4"
                            title="Delete Project"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              </>
            )}

            {activeTab !== 'dashboard' && activeTab !== 'blog' && activeTab !== 'testimonials' && activeTab !== 'projects' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="text-gray-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module</h3>
                <p className="text-gray-500 max-w-md mx-auto">This module is under development. Soon you&apos;ll be able to manage your {activeTab} directly from here.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
