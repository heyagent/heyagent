interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export default function SocialLink({ href, icon, ariaLabel }: SocialLinkProps) {
  return (
    <li className="inline">
      <a 
        className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-300 dark:border-gray-800 rounded-md hover:border-amber-400 hover:bg-amber-400 text-slate-600 dark:text-slate-300 hover:text-white" 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {icon}
      </a>
    </li>
  );
}