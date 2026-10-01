import { useReveal } from '@/hooks/useReveal';
import { squad } from '@/data/clubData';

export default function Squad() {
  const ref = useReveal<HTMLDivElement>();
  const playersRef = useReveal<HTMLDivElement>();

  return (
    <section id="squad" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">The Players</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">OUR SQUAD</h2>
          <p className="text-brand-300 max-w-2xl mx-auto">The heart and soul of FFC — meet the players who make it happen.</p>
        </div>

        <div ref={playersRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 stagger">
          {squad.map((player) => (
            <article
              key={player.name + player.number}
              className="fifa-card group relative aspect-[3/4] overflow-hidden rounded-[28px]"
            >
              <div className="absolute inset-0 z-0 rounded-[28px] border border-[#f5d67a]/40 bg-gradient-to-br from-[#101827] via-[#0d1321] to-[#050816]" />

              <img
                src={player.image}
                alt={`${player.name}, ${player.role}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 z-[1] h-full w-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#04060b] via-[#04060b]/25 to-transparent" />

              <div className="absolute inset-x-3 top-3 z-20 flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full border border-[#f5d67a]/30 bg-[#050816]/70 px-2.5 py-1 backdrop-blur-sm">
                  {player.crest && <img src={player.crest} alt="FFC club crest" className="h-5 w-5 rounded-full object-cover" />}
                  {player.position && <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#f5d67a]">{player.position}</span>}
                </div>
                {player.number !== undefined && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f9d978] via-[#d4af37] to-[#b8890b] text-lg font-black text-[#101827] shadow-lg shadow-yellow-500/20">
                    {player.number}
                  </div>
                )}
              </div>

              {player.overall !== undefined && (
                <div className="absolute right-3 top-14 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#09111f]/80 text-[10px] font-black uppercase text-[#f9d978] shadow-[0_0_25px_rgba(249,217,120,0.2)]">
                  {player.overall}
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#f5d67a]">FFC</p>
                  {player.number !== undefined && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-white/80">
                      #{player.number}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-[2rem] leading-none tracking-wide text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.7)]">
                  {player.name}
                </h3>

                {(player.role || player.overall !== undefined) && (
                  <div className="mt-3 flex items-center justify-between gap-3">
                    {player.role && <p className="text-xs text-slate-200/90">{player.role}</p>}
                    {player.overall !== undefined && (
                      <div className="rounded-full border border-[#f5d67a]/30 bg-[#f5d67a]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#f5d67a]">
                        OVR {player.overall}
                      </div>
                    )}
                  </div>
                )}

                {player.stats && <div className="mt-4 space-y-2">
                  {Object.entries(player.stats).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-[36px_1fr_18px] items-center gap-2 text-[8px] font-medium uppercase tracking-[0.18em] text-slate-200/80">
                      <span className="text-[#f5d67a]">{key.toUpperCase()}</span>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#f5d67a] via-[#f0b400] to-[#fff9d8]"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                      <span className="text-right text-white">{value}</span>
                    </div>
                  ))}
                </div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
