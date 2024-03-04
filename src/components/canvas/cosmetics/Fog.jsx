import { InitConstants } from "../../../components/data/InitConstants";
// import { InitConstants } from "@/components/data/InitConstants";

const Fog = () => {
  const { backgroundColor } = InitConstants;

  return (
    <>
      <fog attach="fog" color={backgroundColor} near={10} far={20} />
    </>
  );
};

export default Fog;
