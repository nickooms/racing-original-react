const URL = 'https://geoservices.informatievlaanderen.be/overdrachtdiensten/GRB/wfs';

const DEFAULT_TYPENAME = 'WPI';
const DEFAULT_BBOX = [152513.1, 221816.38, 152686.15, 221917.99];

const service = 'WFS';
const version = '2.0.0';
const outputformat = 'application/json';
const name = 'GRB';

export const getFeature = async ({ typename = DEFAULT_TYPENAME, bbox = DEFAULT_BBOX } = {}) => {
  const request = 'GetFeature';
  const qs = {
    service,
    version,
    outputformat,
    request,
    typename: `${name}:${typename}`,
    bbox: bbox.join(','),
  };
  const url = `${URL}?${Object.entries(qs)
    .map((keyValue) => keyValue.join('='))
    .join('&')}`;
  const response = await fetch(url);
  const { features } = await response.json();
  return features;
};
