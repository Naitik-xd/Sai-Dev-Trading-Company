import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function MovingSparkles() {
  const sparklesRef = useRef<THREE.Points>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useFrame((state) => {
    if (sparklesRef.current) {
      sparklesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
      
      // Subtle mouse parallax
      sparklesRef.current.rotation.x = THREE.MathUtils.lerp(
        sparklesRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 20,
        0.02
      );
      sparklesRef.current.rotation.y = THREE.MathUtils.lerp(
        sparklesRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 20,
        0.02
      );
    }
  });

  return (
    <group ref={sparklesRef}>
      <Sparkles 
        count={200} 
        scale={12} 
        size={3} 
        speed={0.2} 
        opacity={isDark ? 0.4 : 0.6} 
        color={isDark ? "#FF6B35" : "#0A1628"} 
      />
      <Sparkles 
        count={100} 
        scale={10} 
        size={2} 
        speed={0.1} 
        opacity={isDark ? 0.3 : 0.5} 
        color={isDark ? "#FFD700" : "#FF6B35"} 
      />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <MovingSparkles />
        </Suspense>
      </Canvas>
    </div>
  );
}
