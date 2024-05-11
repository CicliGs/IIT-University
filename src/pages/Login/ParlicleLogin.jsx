import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleLogin() {
  async function loadParticles(main) {
    await loadFull(main);
  }

  return (
<Particles
  id="tsparticles"
  init={loadParticles}
  options={{
    "fps_limit": 999,
    "emitters": {
      "life": {
        "count": 1,
        "duration": 10
      },
      "position": {
        "x": 50,
        "y": 50
      },
      "rate": {
        "delay": 0.1,
        "quantity": 10
      },
      "size": {
        "width": 100,
        "height": 100,
        "mode": "precise"
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff" // Цвет частиц (белый)
      },
      "move": {
        "trail": {
          "enable": false // Отключение следов
        },
        "bounce": false,
        "direction": "none",
        "enable": true,
        "out_mode": "out",
        "random": false,
        "speed": 1,
        "straight": false,
        "warp": true,
        "noise": {
          "enable": true,
          "delay": {
            "value": 0.001
          }
        }
      },
      "number": {
        "density": {
          "enable": true,
          "value_area": 800
        },
        "value": 0
      },
      "opacity": {
        "anim": {
          "enable": false,
          "opacity_min": 0.1,
          "speed": 1,
          "sync": false
        },
        "random": true,
        "value": 0.5
      },
      "rotate": {
        "path": true,
        "random": true,
        "value": 90 // Рандомный поворот на 90 градусов
      },
      "shape": {
        "character": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "image": {
          "height": 100,
          "replace_color": true,
          "src": "images/github.svg",
          "width": 500
        },
        "polygon": {
          "nb_sides": 5
        },
        "stroke": {
          "color": "random",
          "width": 0
        },
        "type": "circle"
      },
      "size": {
        "value": 1
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false // Отключение события onhover
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 5
        },
        "repulse": {
          "distance": 200,
          "duration": 1
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "background": {
      "color": "#111111" // Черный фон
    }
  }}
/>


  );
}

export default ParticleLogin