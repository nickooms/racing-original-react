import {
  dalTexture,
  imgTexture,
  texture,
  texture2,
  texture3,
  kinderKopTexture,
  zebraTexture,
  zebraTexture2,
  stippelTexture,
  voetpadTexture,
  geleborduurTexture,
  busTexture,
  golfTexture,
  textureRight,
} from './textures.js';

var gevelMaterial;
var lineMaterial;
var tireMaterial;
var material3, materialRight;
export let material4;
export let material5;
export let kinderKopMaterial;
export let stippelMaterial;
export let voetpadMaterial;
export let geleborduurMaterial;
export let busMaterial;
export let bochtMaterial;
export let houseMaterial;
export let roofMaterial;
export let baksteenMaterial;
export let baksteenMaterial2;
export let zebraMaterial, zebraMaterial2;
export let dalMaterial;
export let golfMaterial;
export let tile1Material,
  tile2Material,
  tile3Material,
  tile4Material,
  tile5Material;
export let tileMaterials = [];
export const addMaterials = () => {
  /*tile1Material = new THREE.MeshPhongMaterial({
		map: tile1Texture,
		color: 0xff0000,
		ambient: 0x777777,
		specular: 0xFF6666,
		shininess: 50,
		shading: THREE.SmoothShading
	});
	tile2Material = new THREE.MeshPhongMaterial({
		map: tile2Texture,
		color: 0xff0000,
		ambient: 0x777777,
		specular: 0xFF6666,
		shininess: 50,
		shading: THREE.SmoothShading
	});
	tile3Material = new THREE.MeshPhongMaterial({
		map: tile3Texture,
		color: 0xff0000,
		ambient: 0x777777,
		specular: 0xFF6666,
		shininess: 50,
		shading: THREE.SmoothShading
	});
	tile4Material = new THREE.MeshPhongMaterial({
		map: tile4Texture,
		color: 0xff0000,
		ambient: 0x777777,
		specular: 0xFF6666,
		shininess: 50,
		shading: THREE.SmoothShading
	});
	tile5Material = new THREE.MeshPhongMaterial({
		map: tile5Texture,
		color: 0xff0000,
		ambient: 0x777777,
		specular: 0xFF6666,
		shininess: 50,
		shading: THREE.SmoothShading
	});*/
  dalMaterial = new THREE.MeshPhongMaterial({
    map: dalTexture,
    bumpMap: dalTexture,
    bumpScale: 1,
    specularMap: dalTexture,
    color: 0xff0000,
    ambient: 0x777777,
    specular: 0xff6666,
    shininess: 50,
    shading: THREE.SmoothShading,
  });
  baksteenMaterial = new THREE.MeshPhongMaterial({
    map: imgTexture,
    bumpMap: imgTexture,
    bumpScale: 1,
    specularMap: imgTexture,
    color: 0xff0000,
    ambient: 0x007777,
    specular: 0x333333,
    shininess: 50,
    shading: THREE.SmoothShading,
  });
  baksteenMaterial2 = new THREE.MeshPhongMaterial({
    map: imgTexture,
    bumpMap: imgTexture,
    bumpScale: 1,
    specularMap: imgTexture,
    color: 0xffffff,
    ambient: 0x777777,
    specular: 0x333333,
    shininess: 50,
    shading: THREE.SmoothShading,
  });
  lineMaterial = new THREE.LineBasicMaterial({
    color: 0xff0000,
    opacity: 1,
    linewidth: 3,
  });
  tireMaterial = new THREE.MeshBasicMaterial({
    color: 0x111111,
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: true,
  });
  material3 = new THREE.MeshBasicMaterial({
    color: 0x000000,
    opacity: 1,
    map: texture,
    transparent: true,
  });
  material4 = new THREE.MeshBasicMaterial({
    opacity: 1,
    map: texture2,
    transparent: true,
  });
  material5 = new THREE.MeshBasicMaterial({
    opacity: 1,
    side: THREE.DoubleSide,
    map: texture3,
    transparent: true,
  });
  kinderKopMaterial = new THREE.MeshBasicMaterial({
    opacity: 1,
    side: THREE.DoubleSide,
    map: kinderKopTexture,
    transparent: true,
  });
  zebraMaterial = new THREE.MeshBasicMaterial({
    opacity: 1,
    side: THREE.DoubleSide,
    map: zebraTexture,
    transparent: true,
  });
  zebraMaterial2 = new THREE.MeshPhongMaterial({
    map: zebraTexture2,
    bumpMap: zebraTexture2,
    bumpScale: 1,
    specularMap: zebraTexture2,
    color: 0xff0000,
    ambient: 0xffffff,
    specular: 0x666666,
    shininess: 50,
    emissive: 0x333333,
    shading: THREE.SmoothShading,
  });
  stippelMaterial = new THREE.MeshBasicMaterial({
    opacity: 1,
    side: THREE.DoubleSide,
    map: stippelTexture,
    transparent: true,
  });
  voetpadMaterial = new THREE.MeshBasicMaterial({
    opacity: 1,
    side: THREE.DoubleSide,
    map: voetpadTexture,
    transparent: true,
  });
  geleborduurMaterial = new THREE.MeshBasicMaterial({
    opacity: 1,
    side: THREE.DoubleSide,
    map: geleborduurTexture,
    transparent: true,
  });
  busMaterial = new THREE.MeshBasicMaterial({
    opacity: 1,
    side: THREE.DoubleSide,
    map: busTexture,
    transparent: true,
    blendSrc: THREE.SrcAlphaFactor,
    blendDst: THREE.SrcColorFactor,
  });
  golfMaterial = new THREE.MeshBasicMaterial({
    opacity: 1,
    side: THREE.DoubleSide,
    map: golfTexture,
    transparent: true,
  });
  materialRight = new THREE.MeshBasicMaterial({
    color: 0x000000,
    opacity: 1,
    map: textureRight,
    transparent: true,
  });
  houseMaterial = new THREE.MeshBasicMaterial({
    color: 0x660000,
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: true,
  });
  roofMaterial = new THREE.MeshBasicMaterial({
    //color: 0x494658,
    color: 0xff0000,
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: true,
  });
  /*floorMaterial = new THREE.MeshBasicMaterial({
		color: 0xe7af78,
		opacity: 1,
		side: THREE.DoubleSide,
		transparent: true
	});*/
  bochtMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: true,
  });
};
