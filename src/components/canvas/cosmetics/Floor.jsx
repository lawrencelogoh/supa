import { InitConstants } from "../../..//components/data/InitConstants";
// import { InitConstants } from "@/components/data/InitConstants";

const Floor = () => {
  const { backgroundColor } = InitConstants;
  const floorThickness = 0.01;
  const floorThicknessResolution = 30;
  return (
    <>
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color={backgroundColor} />
      </mesh>

      <gridHelper args={[100, 1000]} />
      {/**fake thick line */}

      {[...new Array(floorThicknessResolution)].map((_, i) => {
        const offset = (floorThickness / floorThicknessResolution) * (i + 1);
        return (
          <gridHelper
            key={i}
            args={[100, 100]}
            position={[offset, 0, offset]}
          />
        );
      })}
    </>
  );
};

export default Floor;
