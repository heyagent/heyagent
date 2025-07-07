interface BillingToggleProps {
  isAnnual: boolean;
  onChange: (isAnnual: boolean) => void;
  className?: string;
}

export default function BillingToggle({ isAnnual, onChange, className = "" }: BillingToggleProps) {
  return (
    <div className={`flex justify-center items-center mb-8 sm:mb-12 ${className}`}>
      <span className={`text-sm font-medium mr-3 ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
        Monthly
      </span>
      <button
        onClick={() => onChange(!isAnnual)}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-600 transition-transform ${
            isAnnual ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm font-medium ml-3 ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
        Annual
        <span className="ml-1 inline-block px-2 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full">
          Save 20%
        </span>
      </span>
    </div>
  );
}