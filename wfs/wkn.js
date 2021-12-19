import { getFeature } from './wfs.js';
import { addCylinder } from '../CylinderType.js';
import { getPoint } from './Feature.js';

const TYPENAME = 'WKN';
const CYLINDER_TYPE = {
  radiusTop: 0.2,
  radiusBottom: 0.2,
  height: 0.05,
  color: 0x000000,
  y: 0.1,
};

export const addWKNItem = addCylinder(CYLINDER_TYPE);

export const addWKN = async () => {
  const features = await getFeature({ typename: TYPENAME });
  features.map(getPoint).forEach(([x, z]) => addWKNItem({ x, z }));
};
