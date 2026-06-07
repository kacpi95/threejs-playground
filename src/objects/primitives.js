import * as THREE from 'three';

export function createBox({
  color = 0x00ff00,
  x = 0,
  y = 0,
  z = 0,
  wireframe = false,
  segments = 1,
} = {}) {
  const geometry = new THREE.BoxGeometry(1, 1, 1, segments, segments, segments);

  const material = new THREE.MeshBasicMaterial({
    color,
    wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);

  cube.position.set(x, y, z);

  return cube;
}
