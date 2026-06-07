import * as THREE from 'three';

export function createCubes(color, x) {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color,
  });
  const cube = new THREE.Mesh(geometry, material);

  cube.position.x = x;

  return cube;
}
