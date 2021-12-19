import { getFeature } from './wfs.js';
import { addCylinder } from '../CylinderType.js';
import { getPoint } from './Feature.js';

const TYPENAME = 'WRI';
const CYLINDER_TYPE = {
  radiusTop: 0.6,
  radiusBottom: 0.6,
  height: 0.05,
  color: 0x333333,
  y: 0.1,
};

export const addWRIItem = addCylinder(CYLINDER_TYPE);

export const addWRI = async () => {
  const features = await getFeature({ typename: TYPENAME });
  features.map(getPoint).forEach(([x, z]) => addWRIItem({ x, z }));
};
