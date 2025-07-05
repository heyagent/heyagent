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
    <div className={`relative bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden ${className}`}>
      {/* Image Placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
        <span className="text-slate-600 dark:text-slate-500 text-sm">{imagePlaceholder}</span>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6">
        <h4 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900 dark:text-white">{title}</h4>
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4">{subtitle}</p>
        
        {/* Separator */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4 mb-3 sm:mb-4"></div>
        
        {/* Integration Icons */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {integrations.slice(0, 3).map((Icon, index) => (
              <IntegrationIcon key={index} icon={Icon} index={index} />
            ))}
            {integrations.length > 3 && (
              <div 
                className="relative w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full border-2 border-white dark:border-slate-900 shadow-sm flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-300"
                style={{ marginLeft: '-0.5rem' }}
              >
                +{integrations.length - 3}
              </div>
            )}
          </div>
        </div>
        
        {/* Find Out More Button */}
        <a 
          href="#" 
          className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
        >
          Find Out More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      {/* Fancy Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
    </div>
  );
}