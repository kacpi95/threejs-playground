import { scene } from './core/scene.js';
import { camera } from './core/camera.js';
import { renderer } from './core/renderer.js';
import { createCubes } from './objects/cubes.js';

const cube = createCubes(0x00ff00, 0);

scene.add(cube);
renderer.render(scene, camera);

window.addEventListener('resize', (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function render() {
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}

render();
