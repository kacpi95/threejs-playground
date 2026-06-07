import { scene } from './core/scene.js';
import { camera } from './core/camera.js';
import { createBox } from './objects/primitives.js';
import { startLoop } from './animations/loop.js';
import { handleResize } from './core/resize.js';

const cube = createBox({
  color: 0xff0000,
  x: 2,
  wireframe: true,
  segments: 5,
});

scene.add(cube);

handleResize();

startLoop(() => {
  cube.rotation.y += 0.01;
});
