import { camera } from './camera.js';
import { renderer } from './renderer.js';

export function handleResize() {
  window.addEventListener('resize', (e) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
