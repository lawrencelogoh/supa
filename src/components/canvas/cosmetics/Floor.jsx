import { InitConstants } from "@/components/data/InitConstants";

const Floor = () => {
  const { backgroundColor } = InitConstants;
  return (
    <>
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color={backgroundColor} />
      </mesh>
      <gridHelper args={[100, 1000]} />
    </>
  );
};

export default Floor;
