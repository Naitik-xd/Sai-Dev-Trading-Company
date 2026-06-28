import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Helmet() {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Mouse parallax
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.05
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -(state.mouse.x * Math.PI) / 10,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Helmet Dome */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial 
          ref={materialRef as React.RefObject<any>}
          color="#FFB300" // Industrial Yellow/Orange
          roughness={0.4}
          metalness={0.2}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
        />
      </mesh>
      
      {/* Helmet Ridge (Top) */}
      <mesh position={[0, 1.7, 0]} castShadow>
        <boxGeometry args={[0.2, 0.1, 1.8]} />
        <meshStandardMaterial 
          color="#FFB300" 
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* Helmet Brim */}
      <mesh position={[0, 0.45, 0.3]} rotation={[0.1, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.3, 1.3, 0.1, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial 
          color="#FFB300" 
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
      
      {/* Helmet Base/Rim */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <torusGeometry args={[1.2, 0.05, 16, 32]} />
        <meshStandardMaterial 
          color="#E6A100" 
          roughness={0.5}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}
