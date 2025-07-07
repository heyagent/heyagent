interface IntegrationTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function IntegrationTag({ children, className = "" }: IntegrationTagProps) {
  return (
    <span className={`py-1.5 px-2.5 inline-flex items-center tracking-wider align-middle duration-500 text-xs sm:text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5 ${className}`}>
      {children}
    </span>
  );
}