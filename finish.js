import { stippelMaterial, dalMaterial } from './materials.js';
import { Stippel, Dals } from './finishes.js';
import { scene } from './scene.js';
import { clickObjects } from './click-objects.js';

export let finishes = [];
export let finishMeshes = [];
export function addFinish(points, type, name) {
  var finish = new THREE.Geometry();
  finish.name = 'finishes ' + finishes.length + ' ' + type;
  var depth = type == 'Tile' ? -0.01 : 0;
  finish.vertices.push(new THREE.Vector3(points[0][0], depth, -points[0][1]));
  finish.vertices.push(new THREE.Vector3(points[1][0], depth, -points[1][1]));
  finish.vertices.push(new THREE.Vector3(points[2][0], depth, -points[2][1]));
  finish.vertices.push(new THREE.Vector3(points[3][0], depth, -points[3][1]));
  finish.faces.push(new THREE.Face3(0, 1, 2));
  finish.faceVertexUvs[0][0] = [
    new THREE.Vector2(1, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 1),
  ];
  finish.faces.push(new THREE.Face3(0, 2, 3));
  finish.faceVertexUvs[0][1] = [
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(0, 0),
  ];
  finish.computeBoundingSphere();
  var material = null;
  switch (type) {
    case 'Tile':
      material = tileMaterials[name];
      break;
    case 'Tile1':
      material = tile1Material;
      break;
    case 'Tile2':
      material = tile2Material;
      break;
    case 'Tile3':
      material = tile3Material;
      break;
    case 'Tile4':
      material = tile4Material;
      break;
    case 'Tile5':
      material = tile5Material;
      break;
    case 'Dal':
      material = dalMaterial;
      break;
    case 'KinderKop':
      material = kinderKopMaterial;
      break;
    case 'Zebra':
      material = zebraMaterial2;
      break;
    case 'Stippel':
      material = stippelMaterial;
      break;
    case 'GeleBorduur':
      material = geleborduurMaterial;
      break;
    case 'Bus':
      material = busMaterial;
      break;
    case 'Voetpad':
      material = voetpadMaterial;
      break;
    default:
      material = stippelMaterial;
  }
  material = material.clone(new THREE.MeshBasicMaterial());
  var finishMesh = new THREE.Mesh(finish, material);
  finishMesh.getWorldObject = function () {
    var objectName = this.geometry.name.split(' ', 3);
    return eval(objectName[0])[parseInt(objectName[1])];
  };
  finishMesh.getCorners = function () {
    return points;
  };
  var item = {
    name: finish.name,
    points: points,
    type: type,
    finish: finish,
    finishMesh: finishMesh,
  };
  switch (type) {
    case 'Stippel':
      Stippel.items.push(item);
      break;
    case 'Dal':
      Dals.items.push(item);
      break;
    default:
      finishes.push(item);
  }
  finishMeshes.push(finishMesh);
  scene.add(finishMesh);
  clickObjects.push(finishMesh);
}
