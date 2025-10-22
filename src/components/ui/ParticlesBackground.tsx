"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadPolygonPath } from "@tsparticles/path-polygon";
import type { ISourceOptions } from "@tsparticles/engine";


export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);
  const options: ISourceOptions = useMemo(
    () => ({
      "autoPlay": true,
      "background": {
        "color": {
          "value": "#0E0E10"
        },
        "image": "",
        "position": "",
        "repeat": "",
        "size": "",
        "opacity": 1
      },
      "clear": true,
      "defaultThemes": {},
      "delay": 0,
      "fullScreen": {
        "enable": false,
        "zIndex": 0
      },
      "detectRetina": false,
      "duration": 0,
      "fpsLimit": 120,
      "interactivity": {
        "detectsOn": "window",
        "events": {
          "resize": {
            "delay": 0.5,
            "enable": true
          }
        },
        "modes": {
          "trail": {
            "delay": 1,
            "pauseOnStop": false,
            "quantity": 1
          },
          "attract": {
            "distance": 200,
            "duration": 0.4,
            "easing": "ease-out-quad",
            "factor": 1,
            "maxSpeed": 50,
            "speed": 1
          },
          "bounce": {
            "distance": 200
          },
          "bubble": {
            "distance": 200,
            "duration": 0.4,
            "mix": false,
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "mix": false,
              "selectors": []
            }
          },
          "connect": {
            "distance": 80,
            "links": {
              "opacity": 0.5
            },
            "radius": 60
          },
          "grab": {
            "distance": 100,
            "links": {
              "blink": false,
              "consent": false,
              "opacity": 1
            }
          },
          "push": {
            "default": true,
            "groups": [],
            "quantity": 4
          },
          "remove": {
            "quantity": 2
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "selectors": []
            }
          },
          "slow": {
            "factor": 3,
            "radius": 200
          },
          "particle": {
            "replaceCursor": false,
            "pauseOnStop": false,
            "stopDelay": 0
          },
          "light": {
            "area": {
              "gradient": {
                "start": {
                  "value": "#ffffff"
                },
                "stop": {
                  "value": "#000000"
                }
              },
              "radius": 1000
            },
            "shadow": {
              "color": {
                "value": "#000000"
              },
              "length": 2000
            }
          }
        }
      },
      "manualParticles": [],
      "particles": {
        "bounce": {
          "horizontal": {
            "value": 1
          },
          "vertical": {
            "value": 1
          }
        },
        "color": {
          "value": "#21E4D7",
          "animation": {
            "h": {
              "count": 100,
              "enable": true,
              "speed": 2,
              "decay": 0,
              "delay": 0,
              "sync": true,
              "offset": 0
            }
          }
        },
        "effect": {
          "close": true,
          "fill": true,
          "options": {},
          "type": []
        },
        "groups": {},
        "move": {
          "angle": {
            "offset": 0,
            "value": 60
          },
          "center": {
            "x": 50,
            "y": 50,
            "mode": "percent",
            "radius": 0
          },
          "decay": 0,
          "distance": {},
          "direction": "none",
          "drift": 0,
          "enable": true,
          "path": {
            "clamp": true,
            "delay": {
              "value": 0
            },
            "enable": true,
            "options": {
              "sides": 6,
              "turnSteps": 30,
              "angle": 60
            },
            "generator": "polygonPathGenerator"
          },
          "outModes": {
            "default": "destroy",
            "bottom": "destroy",
            "left": "destroy",
            "right": "destroy",
            "top": "destroy"
          },
          "random": false,
          "size": false,
          "speed": 1,
          "spin": {
            "acceleration": 0,
            "enable": false
          },
          "straight": false,
          "trail": {
            "enable": true,
            "length": 20,
            "fill": {
              "color": {
                "value": "#000"
              }
            }
          },
          "vibrate": false,
          "warp": false
        },
        "number": {
          "density": {
            "enable": true,
            "width": 1920,
            "height": 1080
          },
          "limit": {
            "mode": "delete",
            "value": 0
          },
          "value": 0
        },
        "reduceDuplicates": false,
        "shape": {
          "close": true,
          "fill": true,
          "options": {
            polygon: {
              sides: 5,
            }
          },
          "type": "polygon"
        },
        "size": {
          "value": 1
        },
        "stroke": {
          "width": 1
        },
        "zIndex": {
          "value": 0,
          "opacityRate": 1,
          "sizeRate": 1,
          "velocityRate": 1
        },
        "destroy": {
          "bounds": {},
          "mode": "none",
          "split": {
            "count": 1,
            "factor": {
              "value": 3
            },
            "rate": {
              "value": {
                "min": 4,
                "max": 9
              }
            },
            "sizeOffset": true,
            "particles": {}
          }
        },
        "life": {
          "count": 0,
          "delay": {
            "value": 0,
            "sync": false
          },
          "duration": {
            "value": 0,
            "sync": false
          }
        }
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      emitters: {
        autoPlay: true,
        rate: { quantity: 1, delay: 0.25 },
        shape: { type: "square" },
        position: { x: 50, y: 50 }
      },
      motion: {
        disable: false,
        reduce: { factor: 4, value: true }
      }
    }),
    []
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      await loadPolygonPath(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  return (
    <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-secondary/40 border border-primary/20">
      {ready && <Particles id="tsparticles" options={options} className="absolute inset-0" />}
    </div>
  );
}
