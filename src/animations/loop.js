import { renderer } from '../core/renderer.js';
import { scene } from '../core/scene.js';
import { camera } from '../core/camera.js';

export function startLoop(update) {
  function animate() {
    update();

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  }
  animate();
}
