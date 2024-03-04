import { Canvas } from "@react-three/fiber";
import CameraAnimations from "./CameraManager";
import Lights from "./cosmetics/Lights";
import Floor from "./cosmetics/Floor";
import Fog from "./cosmetics/Fog";
// import { InitConstants } from "@/components/data/InitConstants";
import { InitConstants } from "../../components/data/InitConstants";
import TempCube from "./TempCube";
//drei might already have move tool
import { GizmoHelper, PivotControls } from "@react-three/drei";
import GizmoTemp from "./cosmetics/GizmoTemp";

const BaseCanvas = () => {
  const { backgroundColor } = InitConstants;
  return (
    <Canvas style={{ background: backgroundColor }}>
      <GizmoTemp />
      <TempCube />
      <Lights />
      <Floor />
      <Fog />
      <CameraAnimations />
    </Canvas>
  );
};

export default BaseCanvas;
