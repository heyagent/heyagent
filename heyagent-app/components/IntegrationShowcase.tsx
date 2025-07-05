"use client";

import { FiGithub, FiServer, FiTrello, FiLayers } from "react-icons/fi";
import { FaSlack, FaMicrosoft, FaSalesforce, FaGoogle } from "react-icons/fa";
import { SiJira, SiZendesk, SiNotion, SiAsana } from "react-icons/si";
import { useEffect, useRef } from "react";

interface Integration {
  name: string;
  icon: React.ReactNode;
  angle: number;
  distance: number;
}

export default function IntegrationShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<SVGSVGElement>(null);

  const integrations: Integration[] = [
    { name: "GitHub", icon: <FiGithub className="w-6 h-6 sm:w-8 sm:h-8" />, angle: 20, distance: 250 },
    { name: "Zendesk", icon: <SiZendesk className="w-6 h-6 sm:w-8 sm:h-8" />, angle: 50, distance: 240 },
    { name: "Google Workspace", icon: <FaGoogle className="w-6 h-6 sm:w-8 sm:h-8" />, angle: 130, distance: 240 },
    { name: "Slack", icon: <FaSlack className="w-6 h-6 sm:w-8 sm:h-8" />, angle: 160, distance: 250 },
    { name: "Salesforce", icon: <FaSalesforce className="w-6 h-6 sm:w-8 sm:h-8" />, angle: 200, distance: 250 },
    { name: "Jira", icon: <SiJira className="w-6 h-6 sm:w-8 sm:h-8" />, angle: 230, distance: 240 },
    { name: "Notion", icon: <SiNotion className="w-6 h-6 sm:w-8 sm:h-8" />, angle: 310, distance: 240 },
    { name: "Asana", icon: <SiAsana className="w-6 h-6 sm:w-8 sm:h-8" />, angle: 340, distance: 250 },
  ];

  const calculatePosition = (angle: number, distance: number) => {
    const radian = (angle * Math.PI) / 180;
    // Create ellipse with 1.6x width ratio for slightly more circular shape
    const x = Math.round(Math.cos(radian) * distance * 1.6 * 100) / 100;
    const y = Math.round(Math.sin(radian) * distance * 0.9 * 100) / 100;
    return { x, y };
  };

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-24 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Dotted grid background with fade */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.8) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
        <div 
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl z-10">
        <div className="grid grid-cols-1 pb-0 text-center">
          <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl md:leading-normal leading-normal font-semibold text-slate-900 dark:text-white">
            Automation for your entire ecosystem
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Connect HeyAgent to your existing tools and watch as intelligent workflows transform your operations
          </p>
        </div>

        <div className="relative mx-auto overflow-visible" style={{ width: '100%', maxWidth: '1400px' }}>
          <div className="sm:block hidden" style={{ height: '400px' }}>
          {/* SVG for rays */}
          <svg
            ref={raysRef}
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 1400 400"
            style={{ zIndex: 1, overflow: 'visible' }}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c026d3" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {integrations.map((integration, index) => {
              const pos = calculatePosition(integration.angle, integration.distance);
              const centerX = 700;
              const centerY = 200;
              const endX = centerX + pos.x;
              const endY = centerY + pos.y;
              
              // Create curved path with mirror symmetry
              let controlX1, controlY1, controlX2, controlY2;
              
              // Determine if icon is on left or right side
              const isLeftSide = integration.angle > 90 && integration.angle < 270;
              
              // Mirror the curve direction based on side
              const curveDirection = isLeftSide ? -1 : 1;
              const curveStrength = 80;
              
              // Create perpendicular offset for the curve
              const perpAngle = (integration.angle + 90) * Math.PI / 180;
              const offsetX = Math.round(Math.cos(perpAngle) * curveStrength * curveDirection * 100) / 100;
              const offsetY = Math.round(Math.sin(perpAngle) * curveStrength * curveDirection * 100) / 100;
              
              controlX1 = Math.round((centerX + pos.x * 0.3 + offsetX) * 100) / 100;
              controlY1 = Math.round((centerY + pos.y * 0.3 + offsetY) * 100) / 100;
              controlX2 = Math.round((centerX + pos.x * 0.7 + offsetX * 0.6) * 100) / 100;
              controlY2 = Math.round((centerY + pos.y * 0.7 + offsetY * 0.6) * 100) / 100;
              
              return (
                <g key={integration.name}>
                  <path
                    d={`M ${centerX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                    stroke="url(#rayGradient)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: '3s'
                    }}
                  />
                  {/* Animated dots along the ray */}
                  <circle r="3" fill="url(#rayGradient)">
                    <animateMotion
                      path={`M ${centerX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                      dur="3s"
                      repeatCount="indefinite"
                      begin={`${index * 0.2}s`}
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          </div>

          {/* Mobile simplified view */}
          <div className="sm:hidden relative mt-12 mb-8">
            <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto relative z-10">
              {/* HeyAgent as first icon - bigger */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border-2 border-amber-400/50 flex items-center justify-center">
                <div className="flex items-center justify-center h-8 w-8">
                  <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
                    ✳
                  </span>
                </div>
              </div>
              
              {/* Integration icons */}
              {integrations.slice(0, 8).map((integration) => (
                <div
                  key={integration.name}
                  className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center"
                >
                  <div className="text-slate-600 dark:text-slate-400 flex items-center justify-center h-8 w-8">
                    {integration.icon}
                  </div>
                </div>
              ))}
            </div>
            
            {/* SVG for connecting lines - positioned behind the grid */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <svg 
                className="max-w-xs w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="mobileLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#c026d3" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Snake pattern connections - through centers with adjusted coordinates */}
                <path
                  d="
                    M 2.5 14
                    L 50 14
                    L 97.5 14
                    L 97.5 50
                    L 50 50
                    L 2.5 50
                    L 2.5 86
                    L 50 86
                    L 97.5 86
                  "
                  stroke="url(#mobileLineGradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block">
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
                ✳
              </span>
            </div>
          </div>

          {/* Integration Icons - Desktop only */}
          <div className="hidden sm:block">
            {integrations.map((integration) => {
              const pos = calculatePosition(integration.angle, integration.distance);
              return (
                <div
                  key={integration.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{
                    left: `${(700 + pos.x) / 1400 * 100}%`,
                    top: `${(200 + pos.y) / 400 * 100}%`,
                  }}
                >
                  <div className="bg-white dark:bg-slate-800 p-3 sm:p-5 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition-all duration-300 hover:scale-110 group">
                    <div className="text-slate-600 dark:text-slate-400 group-hover:text-amber-400 transition-colors">
                      {integration.icon}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            ... and hundreds more integrations through our API and webhook system
          </p>
          <button className="py-3 px-8 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white rounded-md">
            Explore All Integrations
          </button>
        </div>
      </div>
    </section>
  );
}