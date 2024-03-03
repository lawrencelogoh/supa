import { Canvas } from "@react-three/fiber";
import CameraAnimations from "./CameraManager";

const BaseCanvas = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={"red"} />
      </mesh>
      <CameraAnimations />
    </Canvas>
  );
};

export default BaseCanvas;
