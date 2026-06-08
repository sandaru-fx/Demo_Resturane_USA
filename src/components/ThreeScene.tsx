import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function GoldOrb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#c9a961"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const groupRef = useRef<any>(null);
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 4,
    ] as [number, number, number],
    scale: Math.random() * 0.05 + 0.02,
  }));

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p) => (
        <mesh key={p.id} position={p.position}>
          <sphereGeometry args={[p.scale, 8, 8]} />
          <meshBasicMaterial color="#c9a961" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#c9a961" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#fff" />
          <spotLight position={[0, 5, 5]} intensity={1.5} angle={0.3} color="#c9a961" />
          <GoldOrb />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
