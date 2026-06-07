import { scene } from './core/scene.js';
import { camera } from './core/camera.js';
import { createBox, createSphere } from './objects/primitives.js';
import { startLoop } from './animations/loop.js';
import { handleResize } from './core/resize.js';

const cube = createBox({
  x: 2,
  wireframe: true,
  segments: 5,
});

const sphere = createSphere({
  wireframe: true,
  x: 5,
});

scene.add(cube);
scene.add(sphere);

handleResize();

startLoop(() => {
  cube.rotation.y += 0.01;
  sphere.rotation.z += 0.01;
});
