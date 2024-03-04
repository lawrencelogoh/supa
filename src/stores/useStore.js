import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      activeMode: "draw", //rotate, moveSnap, extrude, pull, push, etfc
      activeSubMode: "square", //circle etc depending on main mode
      previousActiveMode: "none",
    };
  })
);
