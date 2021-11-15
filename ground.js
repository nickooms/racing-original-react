import { rot } from './rot.js';
import { scene } from './scene.js';

var ground, gt, gg, gm;
export function addGround() {
  //gt = THREE.ImageUtils.loadTexture('textures/grasslight-big.jpg');
  gg = new THREE.PlaneGeometry(1000, 1000);
  gm = new THREE.MeshBasicMaterial({
    //map: gt
    //color: 0x777777
    color: 'yellow',
  });
  gg.computeBoundingSphere();
  ground = new THREE.Mesh(gg, gm);
  ground.position.x = 152579.01;
  ground.position.z = -221865.83;
  ground.position.y = -0.1;

  ground.rotation.x = rot(-90);
  //ground.material.map.repeat.set(30, 30);
  //ground.material.map.wrapS = ground.material.map.wrapT = THREE.RepeatWrapping;
  ground.receiveShadow = true;

  scene.add(ground);
}
