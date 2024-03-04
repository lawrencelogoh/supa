import { PivotControls } from "@react-three/drei";
import useNotificationsStore from "../../../stores/useNotificationsStore";
import { MeshStandardMaterial } from "three";
const GizmoTemp = ({ children }) => {
  const message = useNotificationsStore((state) => state.message);
  return (
    <>
      {(message == "Rotating model" ||
        message == "Moving model" ||
        message == "Rotating shape") && (
        <PivotControls depthTest={false}>{children}</PivotControls>
      )}
      {/* <mesh>
        <boxGeometry/>
        <MeshStandardMaterial />
      </mesh> */}
    </>
  );
};

export default GizmoTemp;
