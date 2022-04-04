const Plane = () => {
  return(
    <>
    <planeBufferGeometry attach={'geometry'} args={[25, 15]} />
    <meshBasicMaterial attach={'material'} color={'green'} /> 
    </>
  )
}


export default Plane;