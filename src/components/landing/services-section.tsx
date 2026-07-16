import { useLang } from "../../pages/website";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";
import { ServiceIconMap } from "./service-icon-map";

// ─── Services Section ─────────────────────────────────────────────────────────
export const ServicesSection = () => {
  const { t } = useLang();
  const { services } = t;

  return (
    <section
      id="services"
      className="py-28 bg-[#0e4650] relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2fbabf]/25 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2fbabf06_0%,_transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-5 relative">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionLabel>{services.label}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#f7f8f9] mt-3 leading-tight">
              {services.title}
            </h2>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((s, i) => (
            <FadeIn key={i} delay={0.07 * i}>
              <div className="group flex flex-col gap-4 p-7 rounded-3xl bg-[#1e5d63]/30 border border-[#2fbabf]/12 hover:border-[#2fbabf]/35 hover:bg-[#1e5d63]/50 transition-all duration-300 relative overflow-hidden h-full">
                <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#2fbabf]/4 group-hover:bg-[#2fbabf]/8 transition-colors -mb-10 -mr-10" />
                <div className="w-12 h-12 rounded-2xl bg-[#2fbabf]/12 flex items-center justify-center text-[#2fbabf] group-hover:bg-[#2fbabf]/20 transition-colors">
                  {ServiceIconMap[s.icon]}
                </div>
                <div>
                  <h3 className="text-[#f7f8f9] text-lg font-bold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#c8dbda] text-sm leading-relaxed">
                    {s.body}
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
