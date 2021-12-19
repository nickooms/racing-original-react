export const getPoint = ({
  geometry: {
    coordinates: [x, z],
  },
}) => [x, -z];

export const getLineString = (feature) => feature.geometry.coordinates.map(([x, z]) => [x, -z]);
