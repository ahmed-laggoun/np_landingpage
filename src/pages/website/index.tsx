import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { translations } from "../../locales/translations";
import { Navbar } from "../../components/landing/nav-bar";
import { HeroSection } from "../../components/landing/hero-section";
import { VisionSection } from "../../components/landing/vision-section";
import { MissionSection } from "../../components/landing/mission-section";
import { ValuesSection } from "../../components/landing/values-section";
import { ServicesSection } from "../../components/landing/services-section";
import { FooterSection } from "../../components/landing/footer-section";

// ─── Types & Context ─────────────────────────────────────────────────────────
type Lang = "ar" | "en";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
  isRTL: boolean;
}

const LangContext = createContext<LangCtx | undefined>(
  undefined,
);

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx)
    throw new Error("useLang must be used inside LangProvider");
  return ctx;
};










// ─── Root App ─────────────────────────────────────────────────────────────────
export default function RootApp() {
  const [lang, setLang] = useState<Lang>("ar");
  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.style.fontFamily = isRTL
      ? "'Somar sans', sans-serif"
      : "'Sora', sans-serif";
  }, [lang, isRTL]);

  const value: LangCtx = {
    lang,
    setLang,
    t: translations[lang],
    isRTL,
  };

  return (
    <LangContext.Provider value={value}>
      <div
        className={`min-h-screen bg-[#0b3d47] text-[#f7f8f9] overflow-x-hidden ${
          isRTL ? "rtl" : "ltr"
        }`}
      >
        <Navbar />
        <main>
          <HeroSection />
          <VisionSection />
          <MissionSection />
          <ValuesSection />
          <ServicesSection />
        </main>
        <FooterSection />
      </div>
    </LangContext.Provider>
  );
}
