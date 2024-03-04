import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const CameraManager = () => {
  const controlsRef = useRef();
  const camRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (camRef.current && controlsRef.current) {
      const _v = new THREE.Vector3();
      const panLimitNumber = 5;
      const minPan = new THREE.Vector3(
        -panLimitNumber,
        -panLimitNumber,
        -panLimitNumber
      );
      const maxPan = new THREE.Vector3(
        panLimitNumber,
        panLimitNumber,
        panLimitNumber
      );

      controlsRef.current.addEventListener("change", () => {
        _v.copy(controlsRef.current.target);
        controlsRef.current.target.clamp(minPan, maxPan);
        _v.sub(controlsRef.current.target);
        camRef.current.position.sub(_v);
      });
      console.log("both camera refs are ready.");
    }
  }, [camRef.current, controlsRef.current]);

  return (
    <>
      <OrbitControls ref={controlsRef} maxPolarAngle={Math.PI / 2 - 0.2} />
      <PerspectiveCamera ref={camRef} position={[1, 2, 5]} makeDefault>
        {/* UI ELEMENTS HERE */}
        {/** accept as children*/}
        {/** actually they neen to follow mesh so gizmo e.g can't be here*/}
      </PerspectiveCamera>
    </>
  );
};

export default CameraManager;
