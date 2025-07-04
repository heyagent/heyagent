interface SectionHeaderProps {
  title: string | React.ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`grid grid-cols-1 pb-6 text-center ${className}`}>
      <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl md:leading-normal leading-normal font-semibold">
        {title}
      </h3>
      {description && (
        <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base px-4 sm:px-0">
          {description}
        </p>
      )}
    </div>
  );
}