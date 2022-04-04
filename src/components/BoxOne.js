const BoxOne = () => {
  return (
    <>
    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
    <meshBasicMaterial attach="material" color={'#BADA55'} />
    </>
  );
};


export default BoxOne;