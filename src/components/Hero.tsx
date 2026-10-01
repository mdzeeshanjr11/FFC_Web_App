import { useState, useEffect } from 'react';
import { Instagram, ChevronDown, Trophy, Users, Zap } from 'lucide-react';
import { clubInfo } from '@/data/clubData';
import team1 from '@/assets/team1.jpg';
import team2 from '@/assets/team2.jpg';
import team3 from '@/assets/team3.jpg';
import team4 from '@/assets/team4.jpg';
import team5 from '@/assets/team5.jpg';
import team6 from '@/assets/team6.jpg';
import team7 from '@/assets/team7.jpg';

const sliderImages = [team1, team2, team3, team4, team5, team6, team7];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={src}
              alt="Football action"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/80 to-ink-900" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-8 bg-accent' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase text-brand-100">Est. {clubInfo.established}</span>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6 animate-fade-in-up">
          FRIENDS
          <br />
          <span className="text-gradient-gold">FOOTBALL CLUB</span>
        </h1>

        <p className="text-lg sm:text-xl text-brand-100 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          "{clubInfo.motto}"
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#join"
            className="px-8 py-3.5 bg-white text-ink-900 rounded-full font-semibold text-sm tracking-wide hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
          >
            Join the Club
          </a>
          <a
            href={clubInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 border border-white/30 rounded-full font-semibold text-sm tracking-wide hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <Instagram size={18} />
            {clubInfo.instagramHandle}
          </a>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: Users, value: '25+', label: 'Members' },
            { icon: Trophy, value: '3', label: 'Trophies' },
            { icon: Zap, value: '40+', label: 'Matches' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <item.icon className="text-accent" size={24} />
              <p className="font-display text-2xl sm:text-3xl">{item.value}</p>
              <p className="text-xs text-brand-300 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-brand-300" size={28} />
      </div>
    </section>
  );
}
