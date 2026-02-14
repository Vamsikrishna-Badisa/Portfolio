import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';

function Avatar() {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.6} roughness={0.4} emissive="#6366f1" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 0, -0.01]}>
        <sphereGeometry args={[1.62, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.06} />
      </mesh>
    </Float>
  );
}

function FloatingHtml({ children, position = [1.8, 0.6, 0], scale = 1 }) {
  return (
    <Html position={position} center style={{ pointerEvents: 'none' }}>
      <div className="floating-icon" style={{ transform: `scale(${scale})` }}>{children}</div>
    </Html>
  );
}

function Scene() {
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    camera.position.x = Math.sin(t / 6) * 0.6;
    camera.position.y = Math.sin(t / 8) * 0.25;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.8} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#8b5cf6" />

      <group position={[0, 0, 0]}>
        <Avatar />

        <FloatingHtml position={[2.2, 0.8, 0]} scale={0.9}>
          <div className="icon-bubble">⚛️</div>
        </FloatingHtml>

        <FloatingHtml position={[2.6, -0.6, 0]} scale={0.8}>
          <div className="icon-bubble">JS</div>
        </FloatingHtml>

        <FloatingHtml position={[0.4, -1.6, 0]} scale={0.7}>
          <div className="icon-bubble">{`{ }`}</div>
        </FloatingHtml>
      </group>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-canvas" aria-hidden>
      <Canvas camera={{ position: [3, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
