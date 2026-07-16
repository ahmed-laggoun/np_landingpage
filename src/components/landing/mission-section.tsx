import { useLang } from '../../pages/website';
import { FadeIn } from './fade-in';
import { SectionLabel } from './section-label';
import { ServiceIconMap } from './service-icon-map';
// ─── Mission Section ──────────────────────────────────────────────────────────
export const MissionSection = () => {
  const { t, isRTL } = useLang();
  const { mission } = t;

  return (
    <section
      id="mission"
      className="py-28 bg-[#0e4650] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#2fbabf0f_0%,_transparent_60%)]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2fbabf]/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 relative">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionLabel>{mission.label}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className={`text-4xl md:text-5xl font-extrabold text-[#f7f8f9] mt-3 max-w-3xl mx-auto ${
                isRTL ? "leading-[1.4]" : "leading-tight"
              }`}
            >
              {mission.title}
            </h2>
          </FadeIn>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 items-start`}
        >
          {/* Body text */}
          <FadeIn delay={0.15}>
            <p
              className={`text-[#c8dbda] text-lg ${isRTL ? "leading-[2]" : "leading-relaxed"} md:pt-2`}
            >
              {mission.body}
            </p>
          </FadeIn>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-4">
            {mission.pillars.map((p, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.08}>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#1e5d63]/40 border border-[#2fbabf]/15 hover:border-[#2fbabf]/35 hover:bg-[#1e5d63]/60 transition-all">
                  <div className="mt-0.5 w-8 h-8 rounded-xl bg-[#2fbabf]/15 flex items-center justify-center text-[#2fbabf] shrink-0">
                    {ServiceIconMap[p.icon]}
                  </div>
                  <span className="text-[#e6f2f3] text-sm font-medium leading-snug pt-1">
                    {p.text}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
