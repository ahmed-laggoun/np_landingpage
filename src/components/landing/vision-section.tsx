import { useLang } from "../../pages/website";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

// ─── Vision Section ───────────────────────────────────────────────────────────
export const VisionSection = () => {
  const { t, isRTL } = useLang();
  const { vision } = t;
  const stats = [vision.stat1, vision.stat2, vision.stat3];

  return (
    <section
      id="vision"
      className="py-28 bg-[#0b3d47] relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2fbabf]/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-5">
        <div
          className={`grid md:grid-cols-2 gap-16 items-center ${isRTL ? "md:grid-flow-col-dense" : ""}`}
        >
          {/* Text */}
          <div>
            <FadeIn>
              <SectionLabel>{vision.label}</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className={`text-4xl md:text-5xl font-extrabold text-[#f7f8f9] mt-2 mb-6 leading-tight ${
                  isRTL ? "leading-[1.4]" : ""
                }`}
              >
                {vision.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p
                className={`text-[#c8dbda] text-lg ${isRTL ? "leading-[2]" : "leading-relaxed"}`}
              >
                {vision.body}
              </p>
            </FadeIn>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.1}>
                <div className="flex flex-col items-center text-center p-5 md:p-7 rounded-2xl bg-[#1e5d63]/50 border border-[#2fbabf]/15 backdrop-blur-sm hover:border-[#2fbabf]/35 transition-colors">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#2fbabf] mb-2">
                    {s.value}
                  </span>
                  <span className="text-xs md:text-sm text-[#c8dbda] font-medium leading-snug">
                    {s.label}
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
