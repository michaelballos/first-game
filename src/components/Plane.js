const Plane = () => {
  return(
    <>
    <planeBufferGeometry attach={'geometry'} args={[100, 100]} />
    <meshBasicMaterial attach={'material'} color={'green'} /> 
    </>
  )
}


export default Plane;