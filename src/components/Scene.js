import { Canvas, Camera } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import BoxOne from './BoxOne'
import Lighting from './Lighting'
import Plane from './Plane'

const Scene = () => {
  return (
    <Canvas camera={{ position: [0,0,1], fov: 45 }}>
      <OrbitControls />
      <Lighting /> 
      <mesh>
        <Plane />
      </mesh>
    </Canvas>
  )
}


export default Scene;