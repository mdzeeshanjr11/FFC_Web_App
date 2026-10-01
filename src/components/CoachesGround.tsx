import { MapPin, Navigation, Phone, UserRound } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const coaches = [
  { name: 'Maaz Sir', license: 'AIFF D License', phone: '+919673593959', displayPhone: '+91 96735 93959' },
  { name: 'Umer Khan Sir', license: 'NIS AIFF D License', phone: '+918459900345', displayPhone: '+91 84599 00345' },
];
const groundAddress = 'Gulshan-e-Atfal Ground, Yusuf Colony, Parbhani';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(groundAddress)}`;

export default function CoachesGround() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="coaches-ground" className="relative overflow-hidden py-24 sm:py-32">
      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">The People & Place</p>
          <h2 className="font-display mb-4 text-4xl sm:text-5xl md:text-6xl">COACHES & GROUND</h2>
          <p className="mx-auto max-w-2xl text-brand-300">Meet the coaches behind FFC and find us at our home ground.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-brand-300">Our Coaches</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {coaches.map((coach) => (
                <article key={coach.name} className="flex items-center gap-4 border-b border-white/10 py-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                    <UserRound className="text-accent" size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl tracking-wide">{coach.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{coach.license}</p>
                    <a
                      href={`tel:${coach.phone}`}
                      className="mt-2 inline-flex items-center gap-2 text-sm text-brand-200 transition-colors hover:text-white"
                    >
                      <Phone size={14} aria-hidden="true" />
                      {coach.displayPhone}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="border-t border-accent/40 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-brand-300">Our Home Ground</p>
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-accent" size={25} aria-hidden="true" />
              <div>
                <h3 className="font-display text-2xl tracking-wide">Gulshan-e-Atfal Ground</h3>
                <p className="mt-2 text-brand-200">Yusuf Colony, Parbhani</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-b border-accent/60 pb-1 text-sm font-semibold text-accent transition-colors hover:text-white"
                >
                  <Navigation size={15} aria-hidden="true" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}