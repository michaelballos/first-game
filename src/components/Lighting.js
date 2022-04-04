
const Lighting = () => {
  return (
    <>
    <ambientLight intensity={.3} color={'#FFFFFF'} />
    <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  )
}


export default Lighting;