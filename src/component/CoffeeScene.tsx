import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Float, Stars } from '@react-three/drei';
import { MeshStandardMaterial, Group } from 'three';
import * as THREE from 'three';

interface CoffeeSceneProps {
  currentPage: string;
}

// Steam particles component
function SteamParticles() {
  const particlesRef = useRef<Group>(null!);
  const particleCount = 15;
  
  useFrame((state) => {
    if (!particlesRef.current) return;
    
    particlesRef.current.children.forEach((particle, i) => {
      const y = (particle.position.y + 0.015) % 2.5;
      particle.position.y = y;
      particle.position.x = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.2;
      particle.position.z = Math.cos(state.clock.elapsedTime * 0.5 + i) * 0.2;
      
      // Fade out as it rises
      if (particle instanceof THREE.Mesh && particle.material instanceof MeshStandardMaterial) {
        particle.material.opacity = Math.max(0, 0.6 - (y / 2.5));
        particle.scale.setScalar(1 + (y / 2.5) * 0.5);
      }
    });
  });

  return (
    <group ref={particlesRef} position={[0, 0.6, 0]}>
      {[...Array(particleCount)].map((_, i) => (
        <mesh key={i} position={[0, (i / particleCount) * 2.5, 0]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial 
            color="#e8e8e8" 
            transparent 
            opacity={0.5}
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Coffee Bean Component
function CoffeeBean({ position, rotation, scale = 1 }: { position: [number, number, number], rotation: [number, number, number], scale?: number }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh castShadow>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial 
          color="#4a3428" 
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>
      
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.18, 0.025, 16, 32, Math.PI]} />
        <meshStandardMaterial 
          color="#2d1f13"
          roughness={0.7}
        />
      </mesh>
      
      <mesh scale={[1.2, 1, 0.8]}>
        <sphereGeometry args={[0.19, 32, 32]} />
        <meshStandardMaterial 
          color="#3d2817" 
          roughness={0.65}
          metalness={0.05}
        />
      </mesh>
    </group>
  );
}

// Cappuccino Cup - Wide and Short like real cappuccino
function CoffeeMug({ color }: { color: string }) {
  const mugRef = useRef<Group>(null!);
  
  return (
    <group ref={mugRef}>
      {/* Wide Cappuccino Cup Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.75, 0.55, 0.5, 64]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.15} 
          metalness={0.1}
        />
      </mesh>

      {/* Coffee Base - Dark Espresso */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.15, 64]} />
        <meshStandardMaterial 
          color="#2b1810"
          roughness={0.4} 
          metalness={0.2}
        />
      </mesh>

      {/* Milk Foam Layer - Thick and Creamy */}
      <mesh position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.71, 0.71, 0.12, 64]} />
        <meshStandardMaterial 
          color="#f2e5d7"
          roughness={0.8}
          metalness={0.05}
        />
      </mesh>

      
      {/* Cup Handle - Classic design */}
      <group position={[0.82, 0, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.28, 0.055, 20, 48, Math.PI * 1.4]} />
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.15} 
            metalness={0.1}
          />
        </mesh>
      </group>

      {/* Wide Saucer Plate */}
      <mesh position={[0, -0.35, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.1, 1.05, 0.06, 64]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.2} 
          metalness={0.15}
        />
      </mesh>

      {/* Saucer raised rim */}
      {/* <mesh position={[0, -0.32, 0]}>
        <torusGeometry args={[1.08, 0.018, 16, 64]} />
        <meshStandardMaterial 
          color="#f8f8f8" 
          roughness={0.2}
        />
      </mesh> */}

      {/* Saucer center depression */}
      <mesh position={[0, -0.34, 0]}>
        <cylinderGeometry args={[0.57, 0.55, 0.03, 64]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          roughness={0.25}
        />
      </mesh>

      {/* Steam */}
      <SteamParticles />
    </group>
  );
}

// Coffee Beans floating around
function CoffeeBeans() {
  const beansRef = useRef<Group>(null!);
  
  useFrame((state) => {
    if (!beansRef.current) return;
    beansRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  const beanConfigs = [
    { pos: [2.5, -0.3, 1.2] as [number, number, number], rot: [0.5, 0.3, 0.8] as [number, number, number], scale: 1.2 },
    { pos: [-2.3, 0.6, 1.8] as [number, number, number], rot: [0.8, 0.5, 0.3] as [number, number, number], scale: 1.0 },
    { pos: [1.8, 1.2, -2.2] as [number, number, number], rot: [0.3, 0.8, 0.5] as [number, number, number], scale: 1.3 },
    { pos: [-2.0, -0.8, -1.8] as [number, number, number], rot: [0.6, 0.2, 0.9] as [number, number, number], scale: 1.1 },
    { pos: [2.8, 0.2, -1.3] as [number, number, number], rot: [0.4, 0.7, 0.2] as [number, number, number], scale: 1.4 },
    { pos: [-2.5, 1.8, 0.5] as [number, number, number], rot: [0.9, 0.4, 0.6] as [number, number, number], scale: 1.0 },
    { pos: [0.8, -1.5, 2.5] as [number, number, number], rot: [0.2, 0.9, 0.4] as [number, number, number], scale: 1.2 },
    { pos: [-1.2, 2.0, -0.8] as [number, number, number], rot: [0.7, 0.3, 0.7] as [number, number, number], scale: 1.1 },
  ];

  return (
    <group ref={beansRef}>
      {beanConfigs.map((config, i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.4} floatIntensity={0.6}>
          <CoffeeBean 
            position={config.pos} 
            rotation={config.rot}
            scale={config.scale}
          />
        </Float>
      ))}
    </group>
  );
}

export default function CoffeeScene({ currentPage }: CoffeeSceneProps) {
  const scroll = useScroll();
  const groupRef = useRef<Group>(null!);
  
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const scrollOffset = scroll.offset;
    
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.position.x = Math.sin(scrollOffset * Math.PI * 2) * 0.8;
    groupRef.current.position.y = Math.sin(scrollOffset * Math.PI * 4) * 0.2;
    groupRef.current.rotation.z = Math.sin(scrollOffset * Math.PI) * 0.1;
  });

  const coffeeColors: Record<string, string> = {
    home: '#6F4E37',
    about: '#8B4513',
    menu: '#A0522D',
    reservation: '#8B7355',
  };

  return (
    <>
      <ambientLight intensity={0.6} />
      
      <directionalLight 
        position={[8, 10, 5]} 
        intensity={1.2} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      <pointLight position={[-6, 4, -4]} intensity={0.8} color="#ff9933" />
      <pointLight position={[6, 2, 4]} intensity={0.6} color="#ffd700" />
      
      <spotLight 
        position={[0, 8, 0]} 
        angle={0.5} 
        penumbra={1} 
        intensity={1}
        castShadow
        color="#fff8dc"
      />
      
      <Stars 
        radius={150} 
        depth={60} 
        count={3000} 
        factor={5} 
        fade 
        speed={0.5}
        saturation={0.3}
      />

      <CoffeeBeans />

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <group ref={groupRef} scale={1.3} position={[0, 0.2, 0]}>
          <CoffeeMug color={coffeeColors[currentPage] || '#6F4E37'} />
        </group>
      </Float>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <fog attach="fog" args={['#0a0a0a', 10, 30]} />
    </>
  );
}