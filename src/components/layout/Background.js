import React from "react";
import ParticlesBg from "particles-bg";

const Background = () => {
  let config = {
    num: [2, 6],
    rps: 0.8,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.5],
    position: "all",
    color: ["random", "#A1C4E3"],
    cross: "dead",
    random: 15,
  };

  return <ParticlesBg type="custom" num={5} config={config} bg={true} />;
};

export default Background;
