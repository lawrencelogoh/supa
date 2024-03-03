import { Canvas } from "@react-three/fiber";
import CameraAnimations from "./CameraManager";
import Lights from "./cosmetics/Lights";
import Floor from "./cosmetics/Floor";
import Fog from "./cosmetics/Fog";
import { InitConstants } from "@/components/data/InitConstants";

const BaseCanvas = () => {
  const { backgroundColor } = InitConstants;
  return (
    <Canvas style={{ background: backgroundColor }}>
      <mesh position={[0, 1 / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial roughness={0.3} color={"lightgray"} />
      </mesh>
      <Lights />
      <Floor />
      <Fog />
      <CameraAnimations />
    </Canvas>
  );
};

export default BaseCanvas;
