import { useEffect, useState } from 'react';

const Starfield = () => {
  const [stars, setStars] = useState([]);
  const [shootingStar, setShootingStar] = useState(null);

  useEffect(() => {
    const generateStars = () => {
      const numStars = 500; // Number of stars
      const starArray = [];
      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 3 + 1; // Random star size between 1 and 4
        const x = Math.random() * 100; // Random position (percent of width)
        const y = Math.random() * 100; // Random position (percent of height)
        const opacity = Math.random(); // Random opacity
        const pulse = Math.random() < 0.4; // 40% chance to pulse
        starArray.push({ size, x, y, opacity, pulse });
      }
      setStars(starArray);
    };

    generateStars();

    const shootingStarInterval = setInterval(() => {
      const startX = Math.random() * 100; // Start position
      const startY = Math.random() * 50; // Start position (top half of screen)
      const endX = startX + 50 + Math.random() * 50; // End position (longer streak)
      const endY = startY + 50 + Math.random() * 50; // End position
      setShootingStar({ startX, startY, endX, endY });

      setTimeout(() => {
        setShootingStar(null);
      }, 3000); // Shooting star duration
    }, 4000); // Shooting star appears every 4 seconds

    return () => clearInterval(shootingStarInterval);
  }, []);

  return (
    <div className="starfield z-[-1]">
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star ${star.pulse ? 'animate-pulse' : ''}`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
          }}
        />
      ))}
      {shootingStar && (
        <div
          className="shooting-star"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
            animation: `shooting-star-trail 1.5s linear forwards`,
          }}
        />
      )}
    </div>
  );
};

export default Starfield;
