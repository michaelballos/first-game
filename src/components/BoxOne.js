const BoxOne = () => {
  return (
    <>
    <mesh position={[0,0,0]}>
    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
    <meshLambertMaterial attach="material" color={'#BADA55'} />
    </mesh>
    </>
  );
};


export default BoxOne;