interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}