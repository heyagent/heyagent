interface FeatureCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ number, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={`relative p-6 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800 border border-gray-50 dark:border-gray-600 ${className}`}>
      <div className="w-[45px] h-[45px] bg-gradient-to-tl to-amber-400 from-fuchsia-600 rounded-lg flex items-center justify-center">
        <span className="text-white text-2xl font-bold">{number}</span>
      </div>
      <h5 className="text-lg sm:text-xl font-semibold my-4 sm:my-5">{title}</h5>
      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
}