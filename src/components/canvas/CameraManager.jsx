import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

const CameraManager = () => {
  return (
    <>
      <OrbitControls maxPolarAngle={Math.PI / 2 - 0.2} />
      <PerspectiveCamera position={[1, 2, 5]} makeDefault>
        {/* UI ELEMENTS HERE */}
        {/** accept as children?*/}
      </PerspectiveCamera>
    </>
  );
};

export default CameraManager;
