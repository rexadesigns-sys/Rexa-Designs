import { Link } from 'react-router-dom';
import { footerCompanyLinks } from './navItems';

const SocialIcon = ({ children }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    {children}
  </svg>
);

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <SocialIcon>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </SocialIcon>
    )
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <SocialIcon>
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM12 7.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Z" />
      </SocialIcon>
    )
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/',
    icon: (
      <SocialIcon>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.46-2.97 5.74-1.28.9-2.94 1.34-4.51 1.25-1.96-.11-3.83-1.07-5.01-2.58-1.29-1.64-1.66-3.84-1.11-5.83.4-1.46 1.35-2.75 2.61-3.51 1.26-.76 2.8-.97 4.22-.8.01 1.35.01 2.71.01 4.07-1.13-.15-2.31.02-3.18.77-.66.57-1.03 1.44-1.02 2.33-.02 1.09.52 2.14 1.41 2.72.93.61 2.19.68 3.16.27.76-.32 1.37-.96 1.62-1.77.16-.52.2-1.08.2-1.63v-18.1h.01Z" />
      </SocialIcon>
    )
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <SocialIcon>
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </SocialIcon>
    )
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/',
    icon: (
      <SocialIcon>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z" />
      </SocialIcon>
    )
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 lg:pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14 lg:mb-16">
          <div>
            <Link
              to="/"
              className="inline-flex items-center mb-6"
              aria-label="Graphics.lk home"
            >
              <img
                src="/images/logo.svg"
                alt="Graphics.lk"
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>

            <p className="text-sm text-gray-400 mb-6">
              Expert graphic and web design solutions with over 20 years experience.
            </p>

            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex items-center gap-5 text-gray-400">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="transition-colors hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {footerCompanyLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-orange-500">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Logo Design</li>
              <li>Web Development</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400 flex flex-col">
              <li>Registered Address: 1036/3, Malabe, Sri Lanka</li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">
                  hello@graphics.lk
                </Link>
              </li>
              <li>+947 11 88 8844</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>Copyright 2026 - Graphics.lk All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
