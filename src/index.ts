import { InitializeReact } from './react/ReactApp';
import {initiateThree} from './three/ThreeApp'

InitializeReact().then(renderWebGL);

function renderWebGL(): void {
  console.log('Rendering WebGL');
  initiateThree();
}