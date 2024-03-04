import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      message: "Initial setup complete",
      modeToMessageIndex: {
        //rotate, moveSnap, extrude, pull, push, etfc
        draw: "Drawing Shape",
        rotate2D: "rotatingShape",
        rotate: "Rotating Model",
        move: "Rotating Model",
        move2D: "Rotating Model",
        extrude: "Extruding...",
        pull: "pulling out model",
        push: "pushing in model",
        default: "Initial setup complete",
        complete: "Done",
      },
    };
  })
);
