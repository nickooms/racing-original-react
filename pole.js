import { getFeature } from './wfs/wfs.js';
import { addCylinder } from './CylinderType.js';

const TYPENAME = 'WPI';
const CYLINDER_TYPE = {
  radiusTop: 0.07,
  radiusBottom: 0.128,
  height: 10,
  color: 0x666666,
  y: 5,
};

export const addPole = addCylinder(CYLINDER_TYPE);

const getPoint = (feature) => feature.geometry.coordinates;

export const addPoles = async () => {
  const features = await getFeature({ typename: TYPENAME });
  features.map(getPoint).forEach(([x, z]) => addPole({ x, z: -z }));
};
