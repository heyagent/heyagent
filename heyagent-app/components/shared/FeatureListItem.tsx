interface FeatureListItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function FeatureListItem({ children, className = "" }: FeatureListItemProps) {
  return (
    <li className={`mb-2 flex items-center ${className}`}>
      <svg 
        stroke="currentColor" 
        fill="none" 
        strokeWidth="2" 
        viewBox="0 0 24 24" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-amber-400 h-5 w-5 me-2" 
        height="1em" 
        width="1em" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      {children}
    </li>
  );
}