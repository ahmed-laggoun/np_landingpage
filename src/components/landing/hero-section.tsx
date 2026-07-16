import { useLang } from "../../pages/website";
import { motion } from "motion/react";
import { GooglePlayButton } from './google-play-button';
import { AppleStoreButton } from './apple-store-button';
import { ChevronDown } from "lucide-react";



// ─── Hero Section ─────────────────────────────────────────────────────────────
export const HeroSection = () => {
  const { t, isRTL } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0b3d47]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,_#2fbabf22_0%,_transparent_65%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_bottom_right,_#1e5d6355_0%,_transparent_60%)]" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#2fbabf 1px, transparent 1px), linear-gradient(90deg, #2fbabf 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating teal orbs */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-[12%] w-3 h-3 rounded-full bg-[#2fbabf]/60 shadow-[0_0_20px_#2fbabf]"
        />
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-[#2fbabf]/40 shadow-[0_0_14px_#2fbabf]"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
          className="absolute bottom-1/3 left-[25%] w-1.5 h-1.5 rounded-full bg-[#c8dbda]/50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2fbabf]/12 border border-[#2fbabf]/30 text-[#2fbabf] text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2fbabf] opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2fbabf]" />
          </span>
          {t.hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`text-5xl md:text-7xl font-extrabold tracking-tight text-[#f7f8f9] mb-6 leading-tight ${
            isRTL ? "leading-[1.3]" : ""
          }`}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-lg md:text-xl text-[#c8dbda] mb-12 max-w-2xl mx-auto ${
            isRTL ? "leading-[2]" : "leading-relaxed"
          }`}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Download buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <GooglePlayButton label={t.hero.googlePlay} />
          <AppleStoreButton label={t.hero.appStore} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#c8dbda]/50 text-xs font-medium"
        >
          {t.hero.available}
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-[#2fbabf]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
