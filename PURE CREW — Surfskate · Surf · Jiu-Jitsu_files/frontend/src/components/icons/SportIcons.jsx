import React from "react";

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const SurfskateIcon = ({ size = 28, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    aria-hidden
  >
    {/* deck */}
    <path
      {...baseProps}
      d="M8 32 C 8 28 12 26 18 26 L 46 26 C 52 26 56 28 56 32 C 56 36 52 38 46 38 L 18 38 C 12 38 8 36 8 32 Z"
    />
    {/* trucks */}
    <path {...baseProps} d="M18 38 L 16 44" />
    <path {...baseProps} d="M22 38 L 20 44" />
    <path {...baseProps} d="M44 38 L 42 44" />
    <path {...baseProps} d="M48 38 L 46 44" />
    {/* wheels */}
    <circle {...baseProps} cx="18" cy="48" r="3" />
    <circle {...baseProps} cx="46" cy="48" r="3" />
  </svg>
);

export const SurfIcon = ({ size = 28, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    aria-hidden
  >
    {/* surfboard */}
    <path
      {...baseProps}
      d="M28 6 C 22 18 20 32 22 50 C 26 52 32 52 36 50 C 38 32 36 18 30 6 Z"
    />
    <path {...baseProps} d="M29 14 L 29 44" />
    {/* wave */}
    <path
      {...baseProps}
      d="M36 38 C 42 36 48 38 52 44 C 54 47 56 49 58 50"
    />
    <path
      {...baseProps}
      d="M40 46 C 44 44 48 46 51 50"
    />
  </svg>
);

export const JiuJitsuIcon = ({ size = 28, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    aria-hidden
  >
    {/* gi body */}
    <path
      {...baseProps}
      d="M16 18 L 24 14 L 32 22 L 40 14 L 48 18 L 50 30 L 44 32 L 44 52 L 20 52 L 20 32 L 14 30 Z"
    />
    {/* lapel V */}
    <path {...baseProps} d="M24 14 L 32 22 L 40 14" />
    <path {...baseProps} d="M28 22 L 32 50" />
    <path {...baseProps} d="M36 22 L 32 50" />
    {/* belt */}
    <path {...baseProps} d="M20 44 L 44 44" strokeWidth="2" />
    <path {...baseProps} d="M30 44 L 30 49" strokeWidth="1.6" />
    <path {...baseProps} d="M34 44 L 34 49" strokeWidth="1.6" />
  </svg>
);

export const PuzzleIcon = ({ size = 28, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    aria-hidden
  >
    {/* main puzzle piece */}
    <path
      {...baseProps}
      d="M10 14 L 26 14 L 26 18 C 26 21 28 23 31 23 C 34 23 36 21 36 18 L 36 14 L 52 14 L 52 30 L 48 30 C 45 30 43 32 43 35 C 43 38 45 40 48 40 L 52 40 L 52 56 L 36 56 L 36 52 C 36 49 34 47 31 47 C 28 47 26 49 26 52 L 26 56 L 10 56 L 10 40 L 14 40 C 17 40 19 38 19 35 C 19 32 17 30 14 30 L 10 30 Z"
    />
    {/* sparkle */}
    <path {...baseProps} d="M56 8 L 58 12 L 62 14 L 58 16 L 56 20 L 54 16 L 50 14 L 54 12 Z" />
  </svg>
);
