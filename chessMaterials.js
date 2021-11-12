var materials = [];
var COMBINE = THREE.MixOperation;
var COLORS = null;
var REFLECTIVITY = null;
var TRANSPARENT = null;
var OPACITY = null;
var WHITE = null;
var BLACK = null;
var ENV_MAP = null;
var hash = parseInt(document.location.hash.replace('#', ''));
var shininess = 50, specular = 0x333333, bumpScale = 1, shading = THREE.SmoothShading;
function getMaterial(mat) {
	var m = mat;
	//alert(JSON.stringify(m));
	/*if (REFLECTIVITY) m.reflectivity = REFLECTIVITY;
	if (TRANSPARENT) m.transparent = TRANSPARENT;
	if (TRANSPARENT) m.opacity = OPACITY;
	if (ENV_MAP) m.envMap = ENV_MAP;*/
	
	m.combine = COMBINE;
	
	return m;
}
function getColors(mat, type) {
	return {
		white: {
			side: 1,
			material: new THREE['Mesh' + type + 'Material'](getMaterial({
				color: WHITE
			}))
		},
		black: {
			side: -1,
			material: new THREE['Mesh' + type + 'Material'](getMaterial({
				color: BLACK
			}))
		}
	};
}
switch (hash) {
	case 1:
		REFLECTIVITY = 0.1;
		TRANSPARENT = true;
		OPACITY = 0.5;
		WHITE = 0xCCCCCC;
		BLACK = 0x333333;
		ENV_MAP = textureCube;
		COLORS = getColors(getMaterial({
			combine: THREE.MixOperation
		}), 'Lambert');
		break;
	case 2:
		REFLECTIVITY = 0.1;
		TRANSPARENT = false;
		OPACITY = 1;
		WHITE = 0xFFFFFF;
		BLACK = 0xFF0000;
		ENV_MAP = textureCubeRAFC;
		COLORS = getColors(getMaterial({
			combine: THREE.MixOperation
		}), 'Lambert');
		break;
	case 3:
		//materials.push( new THREE.MeshPhongMaterial( { map: imgTexture, bumpMap: imgTexture, bumpScale: bumpScale, color: 0xffffff, ambient: 0x777777, specular: specular, shininess: shininess, shading: shading } ) );
		REFLECTIVITY = null;
		TRANSPARENT = false;
		OPACITY = null;
		WHITE = 0xFF0000;
		BLACK = 0x00ff00;
		ENV_MAP = null;
		/*COLORS = getColors(getMaterial({
			combine: THREE.MixOperation,
			map: imgTexture,
			bumpMap: imgTexture,
			bumpScale: bumpScale,
			ambient: 0x000ff, specular: specular, shininess: shininess, shading: shading, metal: true
		}), 'Phong');*/
		COLORS = {
			white: {
				side: 1,
				material: materials[0]
			},
			black: {
				side: -1,
				material: materials[1]
			}
		};
		break;
	default:
	case 0:
		REFLECTIVITY = 0.1;
		TRANSPARENT = false;
		OPACITY = 1;
		WHITE = 0xFFFFFF;
		BLACK = 0x000000;
		ENV_MAP = textureCube;
		COLORS = getColors(getMaterial({
			combine: THREE.MixOperation
		}), 'Lambert');
}