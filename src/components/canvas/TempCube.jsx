import { useRef } from "react";
import useNotificationsStore from "../../stores/useNotificationsStore";

const TempCube = () => {
  let clickCount = useRef(0);
  const tempMessages = [
    "Drawing shape",
    "Rotating shape",
    "Rotating model",
    "Moving model",
    "Rotating model",
    "Moving model",
    "Extruding...",
    "Pulling out model",
    "pushing in model",
    "Chamfering edge",
    "Done",
  ];

  const changeMessages = () => {
    clickCount.current++;
    const evenNess = clickCount.current % 2;
    const nextMessage = Math.round(Math.random() * 11);

    useNotificationsStore.setState({ message: tempMessages[nextMessage] });
  };
  return (
    <mesh position={[0, 1 / 2, 0]} onClick={changeMessages}>
      <boxGeometry />
      <meshStandardMaterial roughness={0.3} color={"lightgray"} />
    </mesh>
  );
};

export default TempCube;
