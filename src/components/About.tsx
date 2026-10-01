import { Heart, Shield, Users, Zap } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { clubInfo } from '@/data/clubData';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    desc: 'Every pass, every tackle, every goal — fueled by love for the game.',
  },
  {
    icon: Users,
    title: 'Brotherhood',
    desc: 'We are more than a team. We are a family, united on and off the pitch.',
  },
  {
    icon: Shield,
    title: 'Resilience',
    desc: 'We fight for every ball. We never give up. We play until the final whistle.',
  },
  {
    icon: Zap,
    title: 'Intensity',
    desc: 'Full throttle from kickoff to the last minute. No shortcuts, no excuses.',
  },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Who We Are</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
            MORE THAN JUST A TEAM
          </h2>
          <p className="text-brand-200 max-w-3xl mx-auto text-lg leading-relaxed">
            Friends Football Club is a brotherhood built on the love of football. Founded in {clubInfo.established},
            we started as a group of friends kicking a ball around and grew into a competitive club.
            {clubInfo.motto}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative p-8 rounded-2xl bg-ink-800 border border-white/10 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent group-hover:to-accent-dark transition-all duration-500">
                <value.icon className="text-accent group-hover:text-ink-900 transition-colors duration-500" size={28} />
              </div>
              <h3 className="font-display text-xl mb-3 tracking-wide">{value.title}</h3>
              <p className="text-sm text-brand-300 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
