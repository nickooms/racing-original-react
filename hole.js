import { getFeature } from './wfs/wfs.js';
import { addCylinder } from './CylinderType.js';

const TYPENAME = 'WRI';
const CYLINDER_TYPE = {
  radiusTop: 0.6,
  radiusBottom: 0.6,
  height: 0.05,
  color: 0x333333,
  y: 0.1,
};

export const addHole = addCylinder(CYLINDER_TYPE);

const getPoint = (feature) => feature.geometry.coordinates;

export const addHoles = async () => {
  const features = await getFeature({ typename: TYPENAME });
  features.map(getPoint).forEach(([x, z]) => addHole({ x, z: -z }));
};
