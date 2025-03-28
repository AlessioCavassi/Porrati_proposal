import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// A component that creates a stylized growth graph
const GrowthGraph = ({ position = [0, 0, 0], color = "#D4AF37" }) => {
  const meshRef = useRef();
  const points = [];
  
  // Create points for a stylized growth curve
  for (let i = 0; i < 10; i++) {
    const x = i * 0.3 - 1.5;
    const y = Math.pow(i / 5, 2) * 0.8 - 0.5;
    points.push(new THREE.Vector3(x, y, 0));
  }
  
  const curve = new THREE.CatmullRomCurve3(points);
  const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.05, 8, false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t / 2) * 0.3;
      meshRef.current.rotation.z = Math.cos(t / 3) * 0.2;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <primitive object={tubeGeometry} attach="geometry" />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* Data points along the curve */}
      {points.map((point, index) => (
        index % 2 === 0 && (
          <mesh key={index} position={[point.x, point.y, point.z]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.5} />
          </mesh>
        )
      ))}
    </group>
  );
};

// Component that creates a network of connected nodes
const StrategyNetwork = ({ position = [0, 0, 0], color = "#D4AF37" }) => {
  const groupRef = useRef();
  const nodeCount = 7;
  const nodes = [];
  
  // Generate random node positions within a sphere
  for (let i = 0; i < nodeCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.8 + Math.random() * 0.7;
    const x = Math.cos(angle) * radius;
    const y = (Math.random() - 0.5) * 1.5;
    const z = Math.sin(angle) * radius;
    nodes.push({ position: [x, y, z], connections: [] });
  }
  
  // Create connections between nodes
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      if (Math.random() > 0.6) {
        nodes[i].connections.push(j);
      }
    }
  }
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1;
  });
  
  return (
    <group ref={groupRef} position={position}>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <mesh position={node.position}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.6} />
          </mesh>
          
          {/* Connection lines */}
          {node.connections.map((targetIndex) => (
            <line key={`${i}-${targetIndex}`}>
              <bufferGeometry attach="geometry">
                <bufferAttribute
                  attachObject={['attributes', 'position']}
                  array={new Float32Array([
                    ...node.position, 
                    ...nodes[targetIndex].position
                  ])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial attach="material" color={color} linewidth={1} />
            </line>
          ))}
        </React.Fragment>
      ))}
    </group>
  );
};

// Component that creates a series of transforming geometric shapes
const GeometricTransforms = ({ position = [0, 0, 0] }) => {
  const cubeRef = useRef();
  const pyramidRef = useRef();
  const sphereRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.2;
      cubeRef.current.rotation.y = t * 0.3;
      cubeRef.current.scale.setScalar(Math.sin(t * 0.5) * 0.1 + 0.9);
    }
    
    if (pyramidRef.current) {
      pyramidRef.current.rotation.y = -t * 0.3;
      pyramidRef.current.rotation.z = t * 0.1;
      pyramidRef.current.position.y = Math.sin(t * 0.7) * 0.2;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.x = Math.sin(t * 0.6) * 0.3;
      sphereRef.current.position.z = Math.cos(t * 0.6) * 0.3;
      sphereRef.current.scale.setScalar(Math.sin(t * 0.3) * 0.1 + 0.9);
    }
  });
  
  return (
    <group position={position}>
      <mesh ref={cubeRef} position={[-0.6, 0, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.8} />
      </mesh>
      
      <mesh ref={pyramidRef} position={[0, 0, 0]}>
        <tetrahedronGeometry args={[0.25, 0]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0.6} />
      </mesh>
      
      <mesh ref={sphereRef} position={[0.6, 0, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#999999" roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  );
};

// Main scene component
export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.7} />
      <spotLight position={[-10, 10, 5]} angle={0.15} penumbra={1} intensity={0.5} />

      <Float 
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <GrowthGraph position={[-2, 0, 0]} />
        <StrategyNetwork position={[0, 0, -1]} />
        <GeometricTransforms position={[2, 0, 0]} />
      </Float>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

// Export the wrapped canvas component
const HeroScene = () => {
  return (
    <div className="w-full h-[70vh] md:h-[80vh]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroScene;
