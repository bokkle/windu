import { useEffect, useState, useRef } from 'react';

// GradientDivider Component
const GradientDivider = () => {
  const [gradientWidth, setGradientWidth] = useState('0%');
  const dividerRef = useRef(null);

  // Handler to update gradient width based on overall page scroll position
  const handleScroll = () => {
    // Calculate the total scrollable height of the page
    const scrollTop = window.scrollY; // Current scroll position from the top
    const windowHeight = window.innerHeight; // Height of the viewport
    const documentHeight = document.documentElement.scrollHeight; // Total height of the document

    // Calculate the scroll percentage relative to the total page height
    const scrollPercentage = scrollTop / (documentHeight - windowHeight);

    // Increase the fill speed (current = 100%)
    const adjustedScrollPercentage = Math.min(scrollPercentage * 1, 1);

    // Convert the scroll percentage to a gradient width percentage
    setGradientWidth(`${adjustedScrollPercentage * 100}%`);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={dividerRef}
      className="linear max-w-screen absolute mx-auto mt-[-1px] h-1 w-full bg-white opacity-60 backdrop-blur-sm transition-all"
      style={{
        background: `linear-gradient(90deg, #954edc, #954edc)`,
        backgroundSize: `${gradientWidth} 100%`,
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  );
};

export default GradientDivider;
