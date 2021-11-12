var imgTexture2 = THREE.ImageUtils.loadTexture( "textures/moon_1024.jpg" );
imgTexture2.wrapS = imgTexture2.wrapT = THREE.RepeatWrapping;
imgTexture2.anisotropy = 16;

var imgTexture = THREE.ImageUtils.loadTexture( "textures/lavatile.jpg" );
imgTexture.repeat.set( 1, 1 );
imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;
imgTexture.anisotropy = 16;

var imgGino = THREE.ImageUtils.loadTexture( "images/gino.png" );
imgGino.repeat.set( 1, 1 );
imgGino.wrapS = imgGino.wrapT = THREE.RepeatWrapping;
imgGino.anisotropy = 16;

var path = "obj/chess/";
var format = '.png';

var urls = [
	path + 'px' + format, path + 'nx' + format,
	path + 'py' + format, path + 'ny' + format,
	path + 'pz' + format, path + 'nz' + format
];
var urls = [
	path + 'gino' + format, path + 'gino' + format,
	path + 'gino' + format, path + 'gino' + format,
	path + 'gino' + format, path + 'gino' + format
];
var textureCube = THREE.ImageUtils.loadTextureCube(urls);
var shader = THREE.ShaderLib['cube'];
shader.uniforms['tCube'].value = textureCube;
var url = 'rafc4';
urls = [
	path + url + format, path + url + format,
	path + url + format, path + url + format,
	path + url + format, path + url + format
];
var textureCubeRAFC = THREE.ImageUtils.loadTextureCube(urls);
var shaderRAFC = THREE.ShaderLib['cube'];
shaderRAFC.uniforms['tCube'].value = textureCubeRAFC;

var imgBoard = THREE.ImageUtils.loadTexture('obj/chess/board.jpg');
imgBoard.repeat.set(4, 4);
imgBoard.wrapS = imgBoard.wrapT = THREE.RepeatWrapping;
imgBoard.anisotropy = 16;