import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterLinkSectionProps {
  title: string;
  links: FooterLink[];
}

export default function FooterLinkSection({ title, links }: FooterLinkSectionProps) {
  return (
    <div>
      <h5 className="text-slate-900 dark:text-white font-semibold mb-3 sm:mb-4">{title}</h5>
      <ul className="list-none space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}