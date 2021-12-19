import { getFeature } from './wfs.js';
import { addCylinder } from '../CylinderType.js';
import { getPoint } from './Feature.js';

const TYPENAME = 'WPI';
const CYLINDER_TYPE = {
  radiusTop: 0.07,
  radiusBottom: 0.128,
  height: 10,
  color: 0x666666,
  y: 5,
};

export const addWPIItem = addCylinder(CYLINDER_TYPE);

export const addWPI = async () => {
  const features = await getFeature({ typename: TYPENAME });
  features.map(getPoint).forEach(([x, z]) => addWPIItem({ x, z }));
};
