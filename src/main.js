import { scene } from './core/scene.js';
import { camera } from './core/camera.js';
import { createBox } from './objects/primitives.js';
import { startLoop } from './animations/loop.js';
import { handleResize } from './core/resize.js';

const cube = createBox(0x00ff00, 0);

scene.add(cube);

handleResize();

startLoop(() => {
  cube.rotation.y += 0.01;
});
