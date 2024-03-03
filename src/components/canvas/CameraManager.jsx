import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

const CameraManager = () => {
  return (
    <>
      <OrbitControls />
      <PerspectiveCamera position={[0, 0, 5]} makeDefault>
        {/* UI ELEMENTS HERE */}
        {/** accept as children?*/}
      </PerspectiveCamera>
    </>
  );
};

export default CameraManager;
