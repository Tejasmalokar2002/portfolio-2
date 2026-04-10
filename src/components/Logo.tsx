import React from 'react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-xl"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer Hexagon/Diamond Shape */}
        <path
          d="M50 10 L85 30 V70 L50 90 L15 70 V30 Z"
          className="fill-surface stroke-border group-hover:stroke-primary/50 transition-all duration-500"
          strokeWidth="2"
        />

        {/* Abstract "T" - Modern minimalist */}
        <path
          d="M35 35 H65 M50 35 V65"
          className="stroke-primary group-hover:stroke-white transition-all duration-500"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Stylized "M" - Integrated into the bottom */}
        <path
          d="M35 70 L42.5 55 L50 65 L57.5 55 L65 70"
          className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Tech Dot */}
        <circle
          cx="50"
          cy="35"
          r="3"
          className="fill-accent group-hover:fill-white transition-all duration-300"
        />
      </svg>
    </div>
  );
};

export default Logo;
