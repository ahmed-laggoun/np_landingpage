import { useLang } from '../../pages/website';
import { GooglePlayButton } from './google-play-button';
import { AppleStoreButton } from './apple-store-button';
import {
  Truck,
  MapPin,
} from "lucide-react";
import AppLogoIcon from '../app-logo-icon';
import LogoWhite from '../logotype-white';
import {FaInstagram } from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import { FaSnapchat } from "react-icons/fa6";

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FooterSection = () => {
  const { t, isRTL } = useLang();

  return (
    <footer className="bg-[#071f26] border-t border-[#2fbabf]/15 py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start max-w-xs">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-10 h-10 rounded-lg  bg-white flex items-center justify-center p-1">
                <AppLogoIcon />
              </div>
              <LogoWhite className="w-25 h-auto " />
            </div>
            <p className="text-[#8492A6] text-sm text-center md:text-start mb-6">
              {t.hero.subtitle}
            </p>
            <div className="flex items-center gap-4 text-[#8492A6]">
              <a href="https://www.X.com/naqlpro_sa" className="hover:text-white transition-colors" target='__blank'><FaXTwitter size={20} /></a>
              <a href="https://www.instagram.com/naqlpro_sa" className="hover:text-white transition-colors" target='__blank'><FaInstagram size={20} /></a>
              <a href="https://www.snapchat.com/add/naqlpro_sa" className="hover:text-white transition-colors" target='__blank'><FaSnapchat  size={20} /></a>
            </div>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <GooglePlayButton label={t.hero.googlePlay} />
            <AppleStoreButton label={t.hero.appStore} />
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2fbabf]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#c8dbda]/40 text-xs">
            © {new Date().getFullYear()} NAQLPRO.{" "}
            {t.footer.rights}.
          </p>
          <div className="flex items-center gap-1">
            <MapPin size={12} className="text-[#2fbabf]/60" />
            <span className="text-[#c8dbda]/40 text-xs">
              Riyadh, Saudi Arabia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
