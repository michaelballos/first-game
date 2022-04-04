
const BoxOne = ({useBox}) => {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0,1,0],

  }))

  return (
    <mesh position={[0,1,0]} ref={ref}>
    <boxBufferGeometry attach="geometry" />
    <meshLambertMaterial attach="material" color={'#BADA55'} />
    </mesh>
  );
};


export default BoxOne;