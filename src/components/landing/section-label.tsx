export const SectionLabel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#2fbabf]/15 text-[#2fbabf] border border-[#2fbabf]/30 mb-4">
      {children}
    </span>
  );
}
