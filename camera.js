import { rot } from './rot.js';
import { scene } from './scene.js';

export let camera;
export let fov = 45;
export let views = [];

views.push({ x: 152579.01, y: 1.5, z: -221865.83, ry: 45 });
views.push({ x: 152574.01, y: 1.5, z: -221860.83, ry: 45 });
views.push({ x: 152569.01, y: 1.5, z: -221855.83, ry: 45 });
views.push({ x: 152564.01, y: 1.5, z: -221850.83, ry: 85 });
views.push({
  x: 152564.01,
  y: 2.415765000000001,
  z: -221850.83,
  ry: 124.99999999999996,
});
views.push({
  x: 152559.01,
  y: 2.415765000000001,
  z: -221845.83,
  ry: 139.99999999999994,
});
views.push({
  x: 152564.01,
  y: 4.707642565081503,
  z: -221840.83,
  ry: 139.99999999999994,
});
views.push({
  x: 152554.01,
  y: 10.091249923988416,
  z: -221840.83,
  ry: 164.99999999999991,
});
views.push({
  x: 152549.01,
  y: 14.774599013711443,
  z: -221825.83,
  ry: 179.9999999999999,
});
views.push({
  x: 152564.01,
  y: 8.339875970238358,
  z: -221830.83,
  ry: 179.9999999999999,
});
views.push({
  x: 152554.01,
  y: 14.774599013711443,
  z: -221830.83,
  ry: 179.9999999999999,
});
views.push({
  x: 152644.01,
  y: 14.03123089912559,
  z: -222205.83,
  ry: 65.00572929136587,
});
views.push({ x: 152599.01, y: 1.5, z: -221875.83, ry: 45 });
views.push({ x: 152609.01, y: 1.5, z: -221900.83, ry: 89.99999999999996 });
views.push({ x: 152569.01, y: 1.5, z: -221940.83, ry: 74.99999999999999 });
views.push({ x: 152524.01, y: 1.5, z: -221920.83, ry: 74.99999999999999 });
views.push({ x: 152564.01, y: 1.5, z: -221850.83, ry: 60.000000000000036 });
views.push({ x: 152609.01, y: 1.5, z: -221900.83, ry: 89.99999999999996 });
views.push({ x: 152569.01, y: 1.5, z: -221940.83, ry: 74.99999999999999 });
views.push({
  x: 152587.20670012513,
  y: 3.8906136901500026,
  z: -221922.5601263244,
  ry: 140,
});
views.push({ x: 152569.01, y: 1.5, z: -221855.83, ry: 29.999999999999996 });
views.push({ x: 152569.01, y: 1.5, z: -221855.83, ry: -20.000000000000007 });
views.push({ x: 152574.01, y: 1.5, z: -221855.83, ry: 20 });
views.push({
  x: 152479.5686510631,
  y: 7.581705427489416,
  z: -221896.74577058226,
  ry: 65.6158567492116,
});
views.push({
  x: 152564.01,
  y: 2.657341500000001,
  z: -221850.83,
  ry: 80.00000000000001,
});
views.push({ x: 152569.01, y: 11.5, z: -221940.83, ry: 0.005729291365875756 });
//views.push({ x: 152564.01, y: 2.415765000000001, z: -221850.83, ry: 124.99999999999996 });
//views.push({ x: 152554.01, y: 31.5, z: -221845.83, ry: 0.005729291365875756 });
views.push({
  x: 152456.32269096922,
  y: 31.5,
  z: -221890.6516870323,
  ry: 0.005729291365875756,
});
views.push({
  x: 152584.01,
  y: 28.465254766623474,
  z: -221945.83,
  ry: 15.005729291365874,
});
views.push({
  x: 152619.01,
  y: 15.434353989038149,
  z: -222190.83,
  ry: 0.005729291365875756,
});
views.push({
  x: 152664.01,
  y: 35.43435398903815,
  z: -222115.83,
  ry: 0.005729291365875756,
});
views.push({
  x: 152594.01,
  y: 31.03227511033272,
  z: -222065.83,
  ry: 0.005729291365875756,
});
views.push({
  x: 152649.01,
  y: 33.92213465777702,
  z: -221990.83,
  ry: 0.005729291365875756,
});
views.push({
  x: 152574.01,
  y: 28.825289649718453,
  z: -221945.83,
  ry: 0.005729291365875756,
});
var viewIndex = 9; //views.length - 1;
export function addCamera() {
  camera = new THREE.PerspectiveCamera(
    fov,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
}
function setCamera(view) {
  camera.position.x = view.x;
  camera.position.y = view.y;
  camera.position.z = view.z;
  camera.lookAt({
    x: 0,
    y: 0,
    z: 0,
  });
  camera.projectionMatrix.makePerspective(
    fov,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.rotation.y = rot(view.ry);
}
export function initCamera() {
  fov = fov * 1.4;
  /*camera.position.x = 152579.01;
	camera.position.y = 1.5;
	camera.position.z = -221865.83;*/
  setCamera(views[viewIndex]);
}
