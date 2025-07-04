import { IconType } from "react-icons";

interface IntegrationIconProps {
  icon: IconType;
  name?: string;
  className?: string;
  index?: number;
}

export default function IntegrationIcon({ icon: Icon, name, className = "", index = 0 }: IntegrationIconProps) {
  return (
    <div 
      className={`relative w-8 h-8 bg-white dark:bg-slate-800 rounded-full border-2 border-white dark:border-slate-900 shadow-sm flex items-center justify-center ${className}`}
      style={{ marginLeft: index > 0 ? '-0.5rem' : '0' }}
      title={name}
    >
      <Icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
    </div>
  );
}