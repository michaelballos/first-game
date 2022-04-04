import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Scene = () => {
  return (
    <Canvas camera={{ position: [0,0,1], fov: 45 }}>
      <OrbitControls />
      <ambientLight intensity={.3} color={'#FFFFFF'} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color="hotpink" />
      </mesh>
    </Canvas>
  )
}


export default Scene;