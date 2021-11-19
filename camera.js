import { rot } from './rot.js';
import { scene } from './scene.js';

export let camera;
export let fov = 45;
export let views = [];

views.push({ x: 152579.01, y: 1.5, z: -221865.83, ry: 45 });
views.push({ x: 152574.01, y: 1.5, z: -221860.83, ry: 45 });
views.push({ x: 152569.01, y: 1.5, z: -221855.83, ry: 45 });
views.push({ x: 152564.01, y: 1.5, z: -221850.83, ry: 85 });
views.push({ x: 152564.01, y: 2.41, z: -221850.83, ry: 124.99 });
views.push({ x: 152559.01, y: 2.41, z: -221845.83, ry: 139.99 });
views.push({ x: 152564.01, y: 4.7, z: -221840.83, ry: 139.99 });
views.push({ x: 152554.01, y: 10.09, z: -221840.83, ry: 164.99 });
views.push({ x: 152549.01, y: 14.77, z: -221825.83, ry: 179.99 });
views.push({ x: 152564.01, y: 8.33, z: -221830.83, ry: 179.99 });
views.push({ x: 152554.01, y: 14.77, z: -221830.83, ry: 179.99 });
views.push({ x: 152644.01, y: 14.03, z: -222205.83, ry: 65.0 });
views.push({ x: 152599.01, y: 1.5, z: -221875.83, ry: 45 });
views.push({ x: 152609.01, y: 1.5, z: -221900.83, ry: 89.99 });
views.push({ x: 152569.01, y: 1.5, z: -221940.83, ry: 74.99 });
views.push({ x: 152524.01, y: 1.5, z: -221920.83, ry: 74.99 });
views.push({ x: 152564.01, y: 1.5, z: -221850.83, ry: 60.0 });
views.push({ x: 152609.01, y: 1.5, z: -221900.83, ry: 89.99 });
views.push({ x: 152569.01, y: 1.5, z: -221940.83, ry: 74.99 });
views.push({ x: 152587.2, y: 3.89, z: -221922.56, ry: 140 });
views.push({ x: 152569.01, y: 1.5, z: -221855.83, ry: 29.99 });
views.push({ x: 152569.01, y: 1.5, z: -221855.83, ry: -20.0 });
views.push({ x: 152574.01, y: 1.5, z: -221855.83, ry: 20 });
views.push({ x: 152479.56, y: 7.58, z: -221896.74, ry: 65.61 });
views.push({ x: 152564.01, y: 2.65, z: -221850.83, ry: 80.0 });
views.push({ x: 152569.01, y: 11.5, z: -221940.83, ry: 0.0 });
//views.push({ x: 152564.01, y: 2.415765000000001, z: -221850.83, ry: 124.99999999999996 });
//views.push({ x: 152554.01, y: 31.5, z: -221845.83, ry: 0.005729291365875756 });
views.push({ x: 152456.32, y: 31.5, z: -221890.65, ry: 0.0 });
views.push({ x: 152584.01, y: 28.46, z: -221945.83, ry: 15.0 });
views.push({ x: 152619.01, y: 15.43, z: -222190.83, ry: 0.0 });
views.push({ x: 152664.01, y: 35.43, z: -222115.83, ry: 0.0 });
views.push({ x: 152594.01, y: 31.03, z: -222065.83, ry: 0.0 });
views.push({ x: 152649.01, y: 33.92, z: -221990.83, ry: 0.0 });
views.push({ x: 152574.01, y: 28.82, z: -221945.83, ry: 0.0 });

export let viewIndex = 9; //views.length - 1;

export const setViewIndex = (value) => {
  viewIndex = value;
};

export function addCamera() {
  camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 10000);
}

export function setCamera(view) {
  camera.position.x = view.x;
  camera.position.y = view.y;
  camera.position.z = view.z;
  camera.lookAt({
    x: 0,
    y: 0,
    z: 0,
  });
  camera.projectionMatrix.makePerspective(fov, window.innerWidth / window.innerHeight, 1, 10000);
  camera.rotation.y = rot(view.ry);
}
export function initCamera() {
  fov = fov * 1.4;
  /*camera.position.x = 152579.01;
	camera.position.y = 1.5;
	camera.position.z = -221865.83;*/
  setCamera(views[viewIndex]);
}
