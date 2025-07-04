interface LegalSectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function LegalSection({ title, className = "", children }: LegalSectionProps) {
  return (
    <>
      <h5 className={`text-xl font-semibold mb-4 ${className}`}>{title}</h5>
      {children}
    </>
  );
}