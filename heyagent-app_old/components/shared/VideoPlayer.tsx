interface VideoPlayerProps {
  placeholderText?: string;
  className?: string;
  onPlay?: () => void;
}

export default function VideoPlayer({ placeholderText = "Video placeholder", className = "", onPlay }: VideoPlayerProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800 z-1">
      <div className="relative">
        <div className={`aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-lg ${className}`}>
          {placeholderText && (
            <div className="flex items-center justify-center h-full">
              <span className="text-slate-600 dark:text-slate-500">{placeholderText}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
        <button 
          onClick={onPlay}
          className="lg:h-16 h-14 lg:w-16 w-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-400 text-amber-400 hover:text-white duration-500 ease-in-out mx-auto"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}