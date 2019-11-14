import { InitializeReact } from './react/ReactApp';
import { initiateThree } from './three/ThreeApp'

export function InitiateCanvasTest(): void {
  console.log('Magic is happening!!!!');
  InitializeReact().then(renderWebGL);

  function renderWebGL(): void {
    console.log('Rendering WebGL');
    initiateThree();
  }
}

export function DoAlert(text: number): void {
  alert(`ALERT!@# ${text}`);
}
