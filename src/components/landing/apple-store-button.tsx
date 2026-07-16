// ─── App Store / Google Play SVG Buttons ─────────────────────────────────────
export const AppleStoreButton = ({ label }: { label: string }) => {
  return (
    <a
      href="#"
      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#f7f8f9] text-[#0b3d47] hover:bg-white transition-all shadow-lg shadow-black/20 hover:shadow-[#2fbabf]/20 hover:-translate-y-0.5 active:translate-y-0 group"
      aria-label="Download on App Store"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="shrink-0 text-[#0b3d47]"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.79.03 3.02 2.65 4.03 2.68 4.04l-.07.29zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="leading-tight">
        <div className="text-[10px] font-medium opacity-60">
          Download on the
        </div>
        <div className="text-sm font-bold">{label}</div>
      </div>
    </a>
  );
}
