import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Calculate rotation based on movement direction
      const deltaX = newPosition.x - lastPosition.current.x;
      const deltaY = newPosition.y - lastPosition.current.y;
      
      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotation(angle);
        
        // Add trail point
        setTrail(prev => {
          const newTrail = [...prev, {
            id: Date.now(),
            x: lastPosition.current.x,
            y: lastPosition.current.y,
            timestamp: Date.now()
          }];
          // Keep only points from last 1000ms
          const now = Date.now();
          return newTrail.filter(dot => now - dot.timestamp < 1000);
        });
      }
      
      lastPosition.current = newPosition;
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setTrail([]);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Clean up old trail points
    const interval = setInterval(() => {
      const now = Date.now();
      setTrail(prev => prev.filter(dot => now - dot.timestamp < 1000));
    }, 50);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(interval);
    };
  }, []);

  // Create SVG path from trail points
  const createPath = () => {
    if (trail.length < 2) return '';
    
    const now = Date.now();
    const pathData = trail.map((point, index) => {
      const age = now - point.timestamp;
      const opacity = Math.max(0, 1 - age / 1000);
      
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }
      return `L ${point.x} ${point.y}`;
    }).join(' ');
    
    return pathData;
  };

  return (
    <>
      {/* SVG for trail lines */}
      <svg className="trail-svg" style={{ width: '100vw', height: '100vh' }}>
        <path
          d={createPath()}
          fill="none"
          stroke="#e4f101"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={trail.length > 0 ? 0.8 : 0}
        />
      </svg>
      
      {/* Trail dots at points */}
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        
        return (
          <div
            key={point.id}
            className="trail-dot"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              opacity: opacity * 0.6,
            }}
          />
        );
      })}
      
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isVisible ? 'visible' : 'hidden'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        }}
      >
        <img src="/cursors/paper-plane.png" alt="cursor" />
      </div>
    </>
  );
}
