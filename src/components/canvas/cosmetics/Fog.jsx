import { InitConstants } from "@/components/data/InitConstants";

const Fog = () => {
  const { backgroundColor } = InitConstants;

  return (
    <>
      <fog attach="fog" color={backgroundColor} near={3} far={13} />
    </>
  );
};

export default Fog;
