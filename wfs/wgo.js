import { getFeature } from './wfs.js';
import { getLineString } from './Feature.js';
import { scene } from '../scene.js';
import {
  BufferGeometry,
  LineBasicMaterial,
  Vector3,
  Line,
} from '../node_modules/three/build/three.module.js';

const TYPENAME = 'WGO';

export const addWGOItem = (coordinates) => {
  const material = new LineBasicMaterial({ color: 0xffffff });
  const points = coordinates.map(([x, z]) => new Vector3(x, 0.5, -z));
  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, material);
  scene.add(line);
};

export const addWGO = async () => {
  const features = await getFeature({ typename: TYPENAME });
  console.log(features);
  features.map(getLineString).forEach(addWGOItem);
};
