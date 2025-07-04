import { IconType } from "react-icons";
import IntegrationIcon from "./IntegrationIcon";

interface WorkflowCardProps {
  title: string;
  subtitle: string;
  imagePlaceholder?: string;
  integrations: IconType[];
  className?: string;
}

export default function WorkflowCard({ 
  title, 
  subtitle, 
  imagePlaceholder = "Workflow Interface", 
  integrations,
  className = "" 
}: WorkflowCardProps) {
  return (
    <div className={`relative bg-white dark:bg-slate-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className}`}>
      {/* Image Placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
        <span className="text-slate-600 dark:text-slate-500 text-sm">{imagePlaceholder}</span>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{title}</h4>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{subtitle}</p>
        
        {/* Integration Icons */}
        <div className="flex items-center gap-2">
          {integrations.map((Icon, index) => (
            <IntegrationIcon key={index} icon={Icon} />
          ))}
        </div>
      </div>
      
      {/* Fancy Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
    </div>
  );
}