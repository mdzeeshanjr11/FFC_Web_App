import { Instagram, Heart } from 'lucide-react';
import { clubInfo, navLinks } from '@/data/clubData';
import ffcLogo from '@/assets/ffc.jpg';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={ffcLogo} alt="Friends FC logo" className="w-12 h-12 rounded-full object-contain bg-white" />
              <div>
                <p className="font-display text-lg leading-none tracking-wide">FRIENDS FC</p>
                <p className="text-[10px] text-brand-300 tracking-[0.2em] uppercase">Est. {clubInfo.established}</p>
              </div>
            </div>
            <p className="text-sm text-brand-300 max-w-xs leading-relaxed">
              "{clubInfo.motto}"
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm tracking-wide mb-4 text-brand-100">EXPLORE</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm tracking-wide mb-4 text-brand-100">FOLLOW US</h4>
            <a
              href={clubInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-3 rounded-xl bg-ink-800 border border-white/10 hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Instagram size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold">{clubInfo.instagramHandle}</p>
                <p className="text-xs text-brand-300">Follow on Instagram</p>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-400">
            © {new Date().getFullYear()} Friends Football Club. All rights reserved.
          </p>
          <p className="text-xs text-brand-400 flex items-center gap-1.5">
            Made with zeeshan hussain for FFC
          </p>
        </div>
      </div>
    </footer>
  );
}
