import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../utils/particlesConfig";

function ParticlesBg() {
  async function loadParticles(main) {
    await loadFull(main);
  }

  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={particlesConfig}
    />
  );
}

export default ParticlesBg;
