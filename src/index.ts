import { InitializeReact } from './react/ReactApp';
import {initiateThree} from './three/ThreeApp'

function InitiateCanvasTest(){
  console.log('Magic is happening!!!!');
  InitializeReact().then(renderWebGL);

  function renderWebGL(): void {
    console.log('Rendering WebGL');
    initiateThree();
  }
}

export { InitiateCanvasTest };