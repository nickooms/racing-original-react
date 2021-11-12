var clickObjects = [];
function rot(degree) {
	return degree * (Math.PI / 180);
}
function init() {
	addCamera();
	addScene();
	initRenderer();
	addTextures();
	addMaterials();
	addHouses([
		'Markt',
		//'Frans Oomsplein',
		//'Witvenstraat',
		//'Platanenlaan',
		//'Kastanjelaan',
		//'Kerk'
	]);
	addBochten();
	addStippel();
	//addFinishes();
	//addBus();
	//addKinderkop();
	//addZebra();
	addDal();
	//addTiles();
	addGolf();
	//addGeometry();
	addGround();
	addTrack();
	var cyl = new THREE.CylinderGeometry(0.07, 0.12, 10);
	cyl.computeBoundingBox();
	var cylMat = new THREE.MeshBasicMaterial({
		color: 0x666666
	});
	var cylMesh = new THREE.Mesh(cyl, cylMat);
	
	cylMesh.position.x = 152561.00;
	cylMesh.position.y = 5
	cylMesh.position.z = -221859.36;
	scene.add(cylMesh);
	
	//addCar();
	initCamera();
	addStats();
	var div = document.createElement('div');
	div.style.width = '400px';
	div.style.height = '30px';
	div.style.left = '80px';
	div.style.top = '0px';
	div.style.position = 'absolute';
	div.style.backgroundColor = 'gray';
	//div.style.overflow = 'scroll';
	//div.style.display = 'none';
	div.setAttribute('id', 'Menu');
	div.innerHTML = sMenu;
	document.body.appendChild(div);
	div = document.createElement('div');
	document.body.appendChild(div);
	div.style.width = '400px';
	div.style.height = '400px';
	div.style.left = '80px';
	div.style.top = '0px';
	div.style.position = 'absolute';
	div.style.backgroundColor = 'lightgray';
	div.style.overflow = 'scroll';
	div.style.display = 'none';
	div.setAttribute('id', 'Properties');
	div.innerHTML = '';
	document.body.appendChild(div);
	addControls();
}
function animate() {
	requestAnimationFrame(animate);
	if (moving) {
		camera.position.x = trackSpline.points[percent].x;
		camera.position.z = trackSpline.points[percent].z;
		//camera.position.y = trackSpline.points[percent].y;
		setGolf();
		if (percent >= trackSpline.points.length - 1) {
			percent = 0;
		}
		var target = trackSpline.points[percent + 1];
		target.y = camera.position.y;
		camera.lookAt(target);
		percent += 1;
	}
	renderer.render(scene, camera);
	stats.update();
}
function createScene(geometry, materials, x, y, z, b, s) {
	gevelMaterial = new THREE.MeshFaceMaterial(materials);
	/*var mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
	mesh.position.set(x, y, z);
	mesh.scale.set(s, s, s);
	scene.add(mesh);*/
	init();
	animate();
}
window.onload = function() {
	init();
	animate();
	/*var loader = new THREE.JSONLoader();
	var callback = function(geometry, materials) {
		createScene(geometry, materials, 0, 0, 0, 0, 100)
	};
	loader.load('obj/gevel/lightmap.json', callback);*/
}