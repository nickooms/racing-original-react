import { scene } from './scene.js';

export let renderer;

export const initRenderer = () => {
  //renderer = new THREE.WebGLRenderer();
  if (renderer?.domElement) {
    document.body.removeChild(renderer.domElement);
  }
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });
  } catch (e) {
    renderer = new THREE.CanvasRenderer({});
  }
  renderer.setClearColor(scene.fog.color, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.sortObjects = true;
  document.body.appendChild(renderer.domElement);
  /*renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.physicallyBasedShading = true;*/
};
