import * as THREE from 'three';

export function createBox({
  color = 0xff0000,
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

export function createSphere({
  radius = 1,
  widthSegments = 16,
  heightSegments = 16,
  color = 0x00ff00,
  wireframe = false,
  x = 0,
  y = 0,
  z = 0,
} = {}) {
  const sphereGeometry = new THREE.SphereGeometry(
    radius,
    widthSegments,
    heightSegments,
  );
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color,
    wireframe,
  });

  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  sphere.position.set(x, y, z);

  return sphere;
}

export function createTorus({
  radius = 1,
  tubeRadius = 0.4,
  radialSegments = 16,
  tubularSegments = 16,
  arc = Math.PI * 2,
  color = 0xffff00,
  wireframe = false,
  x = 0,
  y = 0,
  z = 0,
} = {}) {
  const torusGeometry = new THREE.TorusGeometry(
    radius,
    tubeRadius,
    radialSegments,
    tubularSegments,
    arc,
  );

  const torusMaterial = new THREE.MeshBasicMaterial({ color, wireframe });

  const torus = new THREE.Mesh(torusGeometry, torusMaterial);

  torus.position.set(x, y, z);

  return torus;
}
