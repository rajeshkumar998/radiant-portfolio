import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

interface Scene3DProps {
  variant?: "hero" | "skill" | "project" | "about";
}

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const AnimatedTorus = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const AnimatedBox = () => {
  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
      <mesh>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const AnimatedOctahedron = () => {
  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2}>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <octahedronGeometry args={[1.2, 0]} />
        <MeshDistortMaterial
          color="#f59e0b"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

export const Scene3D = ({ variant = "hero" }: Scene3DProps) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
          
          {variant === "hero" && <AnimatedSphere />}
          {variant === "skill" && <AnimatedTorus />}
          {variant === "project" && <AnimatedBox />}
          {variant === "about" && <AnimatedOctahedron />}
          
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};
