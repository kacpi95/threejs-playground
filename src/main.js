import { scene } from './core/scene.js';
import { camera } from './core/camera.js';
import { renderer } from './core/renderer.js';
import { createBox } from './objects/primitives.js';

const cube = createBox(0x00ff00, 0);

scene.add(cube);
renderer.render(scene, camera);

function render() {
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}

render();
