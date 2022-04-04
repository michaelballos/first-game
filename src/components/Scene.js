import { Canvas, Camera } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import BoxOne from './BoxOne'
import Lighting from './Lighting'
import Plane from './Plane'
import { Physics, useBox, usePlane } from '@react-three/cannon'

const Scene = () => {
  return (
    <Canvas camera={{ position: [0,0,1], fov: 45 }}>
      <OrbitControls />
      <Stars />
      <Lighting /> 
      <Physics>
        <BoxOne useBox={useBox} />
        <Plane usePlane={usePlane} />
      </Physics>
    </Canvas>
  )
}


export default Scene;