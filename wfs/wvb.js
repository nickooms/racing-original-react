import { getFeature } from './wfs.js';
import { getLineString } from './Feature.js';
import { scene } from '../scene.js';
import { addCylinder } from '../CylinderType.js';
// import { getPoint } from './Feature.js';
// import * as THREE from '../node_modules/three/build/three.module.js';
import {
  BufferGeometry,
  LineBasicMaterial,
  Vector3,
  Line,
} from '../node_modules/three/build/three.module.js';

const TYPENAME = 'WVB';

const CYLINDER_TYPE = {
  radiusTop: 0.2,
  radiusBottom: 0.2,
  height: 0.05,
  color: 0x0000ff,
  y: 0.1,
};

export const addWVBPoint = addCylinder(CYLINDER_TYPE);

function draw(p1, p2) {
  const mat = new THREE.LineBasicMaterial({
    color: 0xffff0000,
    linewidth: 1000,
    opacity: 1,
    vertexColors: 0xffff0000,
  });
  const geo = new THREE.Geometry();
  geo.vertices.push(new THREE.Vector3(p1));
  geo.vertices.push(new THREE.Vector3(p2));
  geo.computeBoundingSphere();
  const line = new THREE.Line(geo, mat);
  scene.add(line);
  return line;
}

export const addWVBItem = (coordinates) => {
  const material = new LineBasicMaterial({
    color: 0xffff0000,
    linewidth: 1000,
    opacity: 1,
    vertexColors: 0xffff0000,
  });
  const points = coordinates.map(([x, z]) => new Vector3(x, 0.5, z));
  points.forEach(addWVBPoint);
  points.forEach(([x1, y1, z1], index) => {
    if (index !== 0) {
      const [x2, y2, z2] = points[index - 1];
      const p1 = new THREE.Vector3(x1, y1, z1);
      const p2 = new THREE.Vector3(x2, y2, z2);
      draw(p1, p2);
    }
  });
  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, material);
  scene.add(line);
};

export const addWVB = async () => {
  const features = await getFeature({ typename: TYPENAME });
  features.map(getLineString).forEach(addWVBItem);
};
