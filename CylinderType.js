// import * as THREE from './node_modules/three/build/three.module.js';
import { scene } from './scene.js';

export const addCylinder =
  ({ radiusTop, radiusBottom, height, color, y }) =>
  ({ x, z }) => {
    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height);
    geometry.computeBoundingBox();
    const material = new THREE.MeshBasicMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    scene.add(mesh);
  };
