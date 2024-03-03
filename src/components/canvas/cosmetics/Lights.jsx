const Lights = () => {
  return (
    <>
      <directionalLight />
      <directionalLight position={[1, 1, 3]} />
      <directionalLight intensity={0.5} position={[-1.5, 1, -2.5]} />
      <ambientLight intensity={0.4} />
    </>
  );
};

export default Lights;
