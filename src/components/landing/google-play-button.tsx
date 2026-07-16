export const GooglePlayButton = ({ label }: { label: string }) => {
  return (
    <a
      href="#"
      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#f7f8f9] text-[#0b3d47] hover:bg-white transition-all shadow-lg shadow-black/20 hover:shadow-[#2fbabf]/20 hover:-translate-y-0.5 active:translate-y-0 group"
      aria-label="Get on Google Play"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M3.18 1.44C2.46 1.82 2 2.56 2 3.43v17.14c0 .87.46 1.61 1.18 1.99l.1.05 9.6-9.6v-.23L3.28 3.39l-.1.05z"
          fill="#EA4335"
        />
        <path
          d="M15.9 15.93l-3.02-3.02v-.23l3.02-3.02.07.04 3.58 2.03c1.02.58 1.02 1.52 0 2.1l-3.58 2.03-.07.07z"
          fill="#FBBC04"
        />
        <path
          d="M16 15.97L12.88 12.9 3.18 22.56c.34.35.81.54 1.31.54.43 0 .86-.14 1.22-.37L16 15.97z"
          fill="#34A853"
        />
        <path
          d="M16 8.03L5.71 1.28A2.07 2.07 0 0 0 4.5.9c-.5 0-.97.19-1.31.54L12.88 11.1 16 8.03z"
          fill="#4285F4"
        />
      </svg>
      <div className="leading-tight">
        <div className="text-[10px] font-medium opacity-60">
          Get it on
        </div>
        <div className="text-sm font-bold">{label}</div>
      </div>
    </a>
  );
}
