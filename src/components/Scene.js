import { Canvas, Camera } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Scene = () => {
  return (
    <Canvas camera={{ position: [0,0,1], fov: 45 }}>
      <OrbitControls />
      <Lighting /> 
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color={'#BADA55'} />
      </mesh>
    </Canvas>
  )
}


export default Scene;