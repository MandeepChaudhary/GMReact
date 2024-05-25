import React from "react";

const GaramossalaSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className="header-svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 800 200"
  >
    {/* Background */}
    <rect width="800" height="200" fill="#d9edf7" />

    {/* 20 Years Badge */}
    <circle cx="100" cy="100" r="50" fill="#ffffff" />
    <circle cx="100" cy="100" r="45" fill="#d9edf7" />
    <text
      x="100"
      y="95"
      fontFamily="Arial"
      fontSize="30"
      fill="#006400"
      textAnchor="middle"
    >
      20
    </text>
    <text
      x="100"
      y="115"
      fontFamily="Arial"
      fontSize="16"
      fill="#006400"
      textAnchor="middle"
    >
      Years
    </text>
    <circle
      cx="100"
      cy="100"
      r="50"
      stroke="#006400"
      strokeWidth="3"
      fill="none"
    />

    {/* Main Text */}
    <text
      x="400"
      y="80"
      fontFamily="Arial"
      fontSize="28"
      fill="#000080"
      textAnchor="middle"
    >
      INDIAN CUISINE AT ITS BEST
    </text>
    <text
      x="400"
      y="130"
      fontFamily="Arial"
      fontSize="48"
      fontWeight="bold"
      textAnchor="middle"
    >
      <tspan fill="#006400">GARA</tspan>
      <tspan fill="#ff0000">M</tspan>
      <tspan fill="#006400">OSSALA</tspan>
    </text>

    {/* Sub Text */}
    <text x="400" y="170" fontFamily="Arial" fontSize="24" textAnchor="middle">
      <tspan fill="#000000">Celebrating 20 Years in business </tspan>
      <tspan fill="#006400">GARA</tspan>
      <tspan fill="#ff0000">M</tspan>
      <tspan fill="#006400">OSSALA</tspan>
    </text>
  </svg>
);

export default GaramossalaSVG;
