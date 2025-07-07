import { FiArrowRight } from "react-icons/fi";

interface LegalListItemProps {
  children: React.ReactNode;
}

export default function LegalListItem({ children }: LegalListItemProps) {
  return (
    <li className="flex mt-2">
      <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}