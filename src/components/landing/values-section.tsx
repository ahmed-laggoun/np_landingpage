import { useLang } from "../../pages/website";
import { FileText, ShieldCheck, Users, Zap } from "lucide-react";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

// ─── Values Section ───────────────────────────────────────────────────────────
export const ValuesSection = () => {
  const { t } = useLang();
  const { values } = t;

  const valueIcons = [
    <ShieldCheck size={26} className="text-[#2fbabf]" />,
    <Users size={26} className="text-[#2fbabf]" />,
    <Zap size={26} className="text-[#2fbabf]" />,
    <FileText size={26} className="text-[#2fbabf]" />,
  ];

  return (
    <section
      id="values"
      className="py-28 bg-[#0b3d47] relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2fbabf]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#2fbabf08_0%,_transparent_55%)]" />

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionLabel>{values.label}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#f7f8f9] mt-3 leading-tight">
              {values.title}
            </h2>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.items.map((v, i) => (
            <FadeIn key={i} delay={0.08 * i}>
              <div className="group relative flex flex-col gap-4 p-7 rounded-3xl bg-[#1e5d63]/35 border border-[#2fbabf]/12 hover:border-[#2fbabf]/40 hover:bg-[#1e5d63]/55 transition-all duration-300 overflow-hidden h-full backdrop-blur-sm">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#2fbabf]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Glow orb */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#2fbabf]/5 group-hover:bg-[#2fbabf]/10 transition-colors" />

                <div className="w-12 h-12 rounded-2xl bg-[#2fbabf]/12 flex items-center justify-center">
                  {valueIcons[i]}
                </div>
                <div>
                  <h3 className="text-[#f7f8f9] text-lg font-bold mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[#c8dbda] text-sm leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
