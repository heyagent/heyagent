interface MobileDeviceMockupProps {
  deviceType?: "iphone" | "android";
  className?: string;
  placeholderText?: string;
  screenshotSrc?: string;
  orientation?: "portrait" | "landscape";
}

export default function MobileDeviceMockup({
  deviceType = "iphone",
  className = "",
  placeholderText = "App Screen",
  screenshotSrc,
  orientation = "portrait"
}: MobileDeviceMockupProps) {
  const isPortrait = orientation === "portrait";
  const width = isPortrait ? 280 : 560;
  const height = isPortrait ? 560 : 280;
  const viewBox = `0 0 ${width} ${height}`;

  if (deviceType === "iphone") {
    return (
      <div className={`relative ${className}`}>
        <svg
          viewBox={viewBox}
          className="w-full h-auto max-w-[280px] md:max-w-[320px] mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-slate-50 dark:text-slate-800" stopColor="currentColor" />
              <stop offset="100%" className="text-slate-100 dark:text-slate-900" stopColor="currentColor" />
            </linearGradient>
            <linearGradient id="frameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" className="text-slate-200 dark:text-gray-800" stopColor="currentColor" />
              <stop offset="50%" className="text-slate-300 dark:text-gray-900" stopColor="currentColor" />
              <stop offset="100%" className="text-slate-200 dark:text-gray-800" stopColor="currentColor" />
            </linearGradient>
            <linearGradient id="bezelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" className="text-slate-300 dark:text-black" stopColor="currentColor" />
              <stop offset="100%" className="text-slate-400 dark:text-black" stopColor="currentColor" />
            </linearGradient>
            <filter id="deviceShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
              <feOffset dx="0" dy="4" result="offsetblur"/>
              <feFlood floodColor="#000000" floodOpacity="0.05"/>
              <feComposite in2="offsetblur" operator="in"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-slate-200/50 dark:text-transparent" stopColor="currentColor" />
              <stop offset="100%" className="text-slate-300/50 dark:text-transparent" stopColor="currentColor" />
            </linearGradient>
          </defs>

          {/* Phone frame */}
          <g filter="url(#deviceShadow)">
            {/* Outer frame */}
            <rect
              x="0"
              y="0"
              width={width}
              height={height}
              rx="40"
              ry="40"
              fill="url(#frameGradient)"
              stroke="url(#borderGradient)"
              strokeWidth="1"
            />
            
            {/* Inner bezel */}
            <rect
              x="6"
              y="6"
              width={width - 12}
              height={height - 12}
              rx="34"
              ry="34"
              fill="url(#bezelGradient)"
            />
            
            {/* Screen area */}
            <rect
              x="12"
              y="12"
              width={width - 24}
              height={height - 24}
              rx="28"
              ry="28"
              fill="url(#screenGradient)"
            />
            
            {/* Dynamic Island / Notch */}
            {isPortrait && (
              <rect
                x={width / 2 - 60}
                y="12"
                width="120"
                height="30"
                rx="15"
                ry="15"
                className="fill-slate-400 dark:fill-black"
                fill="currentColor"
              />
            )}
            
            {/* Side buttons */}
            {/* Power button */}
            <rect
              x={isPortrait ? width - 4 : width - 80}
              y={isPortrait ? 100 : -2}
              width={isPortrait ? 4 : 60}
              height={isPortrait ? 60 : 4}
              rx="2"
              className="fill-slate-300 dark:fill-gray-800"
              fill="currentColor"
            />
            
            {/* Volume buttons */}
            <rect
              x={isPortrait ? -2 : 60}
              y={isPortrait ? 100 : -2}
              width={isPortrait ? 4 : 40}
              height={isPortrait ? 40 : 4}
              rx="2"
              className="fill-slate-300 dark:fill-gray-800"
              fill="currentColor"
            />
            <rect
              x={isPortrait ? -2 : 110}
              y={isPortrait ? 150 : -2}
              width={isPortrait ? 4 : 40}
              height={isPortrait ? 40 : 4}
              rx="2"
              className="fill-slate-300 dark:fill-gray-800"
              fill="currentColor"
            />
          </g>

          {/* Screenshot or placeholder content */}
          {screenshotSrc ? (
            <image
              x="12"
              y={isPortrait ? "42" : "12"}
              width={width - 24}
              height={isPortrait ? height - 54 : height - 24}
              href={screenshotSrc}
              preserveAspectRatio="xMidYMid slice"
              clipPath={`inset(0 round 28px)`}
            />
          ) : (
            <g>
              {/* Placeholder background pattern */}
              <defs>
                <pattern id="placeholderPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" className="text-slate-300/20 dark:text-slate-600/20" fill="currentColor" />
                </pattern>
              </defs>
              <rect
                x="12"
                y={isPortrait ? "42" : "12"}
                width={width - 24}
                height={isPortrait ? height - 54 : height - 24}
                fill="url(#placeholderPattern)"
              />
              
              {/* Placeholder text */}
              <text
                x={width / 2}
                y={height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-slate-500 dark:text-slate-500 text-sm font-normal"
                fill="currentColor"
              >
                {placeholderText}
              </text>
            </g>
          )}
        </svg>
      </div>
    );
  }

  // Android version would go here
  return null;
}