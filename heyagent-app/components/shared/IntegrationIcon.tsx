import { IconType } from "react-icons";

interface IntegrationIconProps {
  icon: IconType;
  name?: string;
  className?: string;
}

export default function IntegrationIcon({ icon: Icon, name, className = "" }: IntegrationIconProps) {
  return (
    <div 
      className={`p-1.5 bg-gray-100 dark:bg-gray-700 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 ${className}`}
      title={name}
    >
      <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
    </div>
  );
}