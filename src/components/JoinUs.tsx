import { useState } from 'react';
import { Instagram, Send, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { clubInfo } from '@/data/clubData';

export default function JoinUs() {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', position: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', position: '', message: '' });
    }, 3000);
  };

  return (
    <section id="join" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8455350/pexels-photo-8455350.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Football on grass"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/90 to-ink-900" />
      </div>

      <div ref={ref} className="reveal relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Get Involved</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">JOIN THE CLUB</h2>
          <p className="text-brand-200 max-w-2xl mx-auto text-lg">
            Want to be part of FFC? Whether you want to play, support, or just be part of the family — reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-ink-800 border border-white/10 text-white placeholder-brand-400 focus:border-accent focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-ink-800 border border-white/10 text-white placeholder-brand-400 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <select
                required
                value={form.position}
                onChange={(e) => setForm({ ...form, position: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-ink-800 border border-white/10 text-white focus:border-accent focus:outline-none transition-colors"
              >
                <option value="">Preferred Position</option>
                <option value="GK">Goalkeeper</option>
                <option value="DEF">Defender</option>
                <option value="MID">Midfielder</option>
                <option value="FWD">Forward</option>
                <option value="ANY">Any Position</option>
              </select>
              <textarea
                placeholder="Tell us about yourself..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-ink-800 border border-white/10 text-white placeholder-brand-400 focus:border-accent focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 text-ink-900'
                    : 'bg-white text-ink-900 hover:bg-accent hover:scale-[1.02]'
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={18} /> Application Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} /> Submit Application
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info card */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl bg-ink-800 border border-white/10">
              <h3 className="font-display text-lg tracking-wide mb-4">Connect With Us</h3>
              <a
                href={clubInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-ink-700 hover:bg-ink-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Instagram size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{clubInfo.instagramHandle}</p>
                  <p className="text-xs text-brand-300">{clubInfo.followers} followers</p>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
              <h3 className="font-display text-lg tracking-wide mb-2">Why Join FFC?</h3>
              <ul className="space-y-2 text-sm text-brand-200">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-accent shrink-0" /> Regular matches & training
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-accent shrink-0" /> Supportive team culture
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-accent shrink-0" /> Professional physio support
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-accent shrink-0" /> Tournament participation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
