import { useState, useEffect } from 'react';

export default function CircularProgress({ strength, name, size = 120 }) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Set initial progress to 0, and update later
  const [currentProgress, setCurrentProgress] = useState(0);

  // Update current progress when strength changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentProgress(strength);
    }, 10); // Small delay to allow component rendering

    return () => clearTimeout(timer);
  }, [strength]);

  const progress = (currentProgress / 100) * circumference;

  // Split name into words
  const words = name.split(' ');

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background Circle */}
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#ddd" strokeWidth={strokeWidth} fill="none" />
      
      {/* Progress Circle with Transition */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="green"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{
          transition: 'stroke-dashoffset 1s ease-out',
        }}
      />
      
      {/* Name Text - Split into two lines if necessary */}
      {words.length > 1 ? (
        <>
          <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontSize={size * 0.12} fontWeight="bold" fill="black">
            {words[0]}
          </text>
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize={size * 0.12} fontWeight="bold" fill="black">
            {words[1]}
          </text>
        </>
      ) : (
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize={size * 0.15} fontWeight="bold" fill="black">
          {name}
        </text>
      )}
      
      {/* Strength Percentage */}
      <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fontSize={size * 0.12} fill="black">
        {currentProgress}%
      </text>
    </svg>
  );
}
export function Whatsapp({size=40}){
return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 187 187" id="whatsapp">
  <rect width="187" height="187" fill="#009846" rx="18" ry="18"></rect>
  <path fill="#fefefe" d="M95 146c-11 0-22-3-31-9l-21 7 7-20c-6-9-10-20-10-32v-5c3-28 26-50 55-50s52 22 55 51v4c0 30-25 54-55 54zm65-56c-1-35-30-63-65-63S31 54 29 89v3c0 12 4 24 10 33l-12 35 36-11c9 5 20 8 32 8 36 0 65-29 65-65v-2z"></path>
  <path fill="#fefefe" d="M125 105c-2-1-10-5-11-5-2-1-3-1-4 1-1 1-4 5-5 6s-2 1-3 0c-2-1-7-2-13-8-5-4-8-9-9-11-1-1 0-2 0-3l3-3v-1c1 0 1-1 1-1 1-2 1-2 0-3 0-1-3-9-5-12-1-3-2-3-3-3h-3c-1 0-3 1-5 2-1 2-5 6-5 13 0 2 0 4 1 6 1 5 5 10 5 11 1 1 11 18 28 24 16 6 16 4 19 4s10-4 11-8c1-3 1-7 1-7-1-1-2-1-3-2z"></path>
</svg>
}