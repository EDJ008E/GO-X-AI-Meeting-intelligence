import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

// Neural Network Node Component
function NeuralNodes({ count = 100 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random positions in a cube
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Gradient colors from pink to blue
      const t = Math.random();
      colors[i * 3] = t * 0.91 + (1 - t) * 0.12; // R: pink to blue
      colors[i * 3 + 1] = t * 0.0 + (1 - t) * 0.32; // G
      colors[i * 3 + 2] = t * 1.0 + (1 - t) * 0.70; // B
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Connection Lines Component
function NeuralConnections() {
  const linesRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const linesData = [];
    const lineCount = 50;
    
    for (let i = 0; i < lineCount; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      
      linesData.push({ start, end });
    }
    
    return linesData;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={linesRef}>
      {lines.map((l, idx) => (
        <Line
          key={idx}
          points={[l.start, l.end]}
          color={Math.random() > 0.5 ? "#E800B2" : "#1F51FF"}
          transparent
          opacity={0.25}
        />
      ))}
    </group>
  );
}

// Main Neural Network Scene
export function NeuralNetwork() {
  return (
    <div className="absolute inset-0 neural-bg">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#E800B2" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1F51FF" />
        
        <NeuralNodes count={150} />
        <NeuralConnections />
      </Canvas>
    </div>
  );
}