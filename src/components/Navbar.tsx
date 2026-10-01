import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { navLinks, clubInfo } from '@/data/clubData';
import ffcLogo from '@/assets/ffc.jpg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/10 py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110 shadow-md">
            <img
              src={ffcLogo}
              alt="Friends FC logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-lg leading-none tracking-wide">FRIENDS FC</p>
            <p className="text-[10px] text-brand-300 tracking-[0.2em] uppercase">Est. {clubInfo.established}</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-100 hover:text-accent transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={clubInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-white text-ink-900 rounded-full text-sm font-semibold hover:bg-accent transition-all duration-300 hover:scale-105"
          >
            <Instagram size={16} />
            Follow
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-white/10 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-brand-100 hover:text-accent transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={clubInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-white text-ink-900 rounded-full text-sm font-semibold w-fit"
          >
            <Instagram size={16} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}
