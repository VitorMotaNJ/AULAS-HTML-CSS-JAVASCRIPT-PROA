particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 90,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": ["#00ffff", "#00aaff", "#ffffff"] },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0 },
      "polygon": { "nb_sides": 6 }
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": { "enable": true, "speed": 4, "size_min": 0.3, "sync": false }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffff",
      "opacity": 0.3,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": { "enable": false }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": { "opacity": 0.7 }
      },
      "push": { "particles_nb": 3 },
      "repulse": { "distance": 200, "duration": 0.4 }
    }
  },
  "retina_detect": true
});
