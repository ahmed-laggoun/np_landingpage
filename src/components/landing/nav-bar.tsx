import { useLang } from "../../pages/website";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import AppLogo from "../app-logo";
import { ArrowRight, Globe, Menu, X } from "lucide-react";
import LogoWhite from "../logotype-white";
import AppLogoIcon from "../app-logo-icon";



// ─── Navbar ───────────────────────────────────────────────────────────────────
export const Navbar = () => {
  const { lang, setLang, t, isRTL } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.vision, href: "#vision" },
    // { label: t.nav.mission, href: "#mission" },
    // { label: t.nav.values, href: "#values" },
    { label: t.nav.services, href: "#services" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b3d47]/80 backdrop-blur-xl border-b border-[#2fbabf]/15 shadow-xl shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl  bg-white flex items-center justify-center p-1">
              <AppLogoIcon />
            </div>
            <LogoWhite className="w-25 h-auto " />
          </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#c8dbda] hover:text-[#2fbabf] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-1.5 text-sm font-medium text-[#c8dbda] hover:text-[#2fbabf] transition-colors px-3 py-1.5 rounded-lg hover:bg-[#2fbabf]/10"
            aria-label="Toggle language"
          >
            <Globe size={15} />
            <span>{t.nav.lang}</span>
          </button>

          <a
            href="#services"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2fbabf] text-[#0b3d47] text-sm font-bold hover:bg-[#3dd0d5] transition-all shadow-md shadow-[#2fbabf]/25 hover:shadow-[#2fbabf]/40 active:scale-95"
          >
            {isRTL ? "ابدأ الآن" : "Get Started"}
            <ArrowRight
              size={14}
              className={isRTL ? "rotate-180" : ""}
            />
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#c8dbda] p-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-[#2fbabf]/15 bg-[#0b3d47]/95 backdrop-blur-xl"
        >
          <div className="px-5 py-5 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-3 rounded-xl text-[#c8dbda] hover:text-[#2fbabf] hover:bg-[#2fbabf]/10 text-base font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
