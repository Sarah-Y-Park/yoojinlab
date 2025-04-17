import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header({ onHomeClick }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Navigation Tabs */}
        <nav className="flex-1 flex justify-center space-x-8 text-sm font-medium">
          <ScrollLink
            to="main"
            smooth
            duration={800}
            offset={-60}
            onClick={onHomeClick}
            className="text-gray-700 hover:text-pink-500 cursor-pointer transition"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            duration={800}
            offset={-60}
            className="text-gray-700 hover:text-pink-500 cursor-pointer transition"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            smooth
            duration={800}
            offset={-60}
            className="text-gray-700 hover:text-pink-500 cursor-pointer transition"
          >
            Portfolio
          </ScrollLink>
          <RouterLink
            to="/blog"
            className="text-gray-700 hover:text-pink-500 cursor-pointer transition"
          >
            Blog
          </RouterLink>
          <ScrollLink
            to="contact"
            smooth
            duration={800}
            offset={-60}
            className="text-gray-700 hover:text-pink-500 cursor-pointer transition"
          >
            Contact
          </ScrollLink>

        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-pink-500 text-xl">
          <a
            href="https://github.com/Sarah-Y-Park"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yoojinpark012"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-700 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
