import { Mesh, BoxGeometry } from 'three';
import WebGLBody from './WebGLBody';

export function initiateThree() {
  const container = document.getElementById('canvasCointainer');
  const webGlBody = new WebGLBody({ container });

  const cubeGeo = new BoxGeometry(10, 10, 10);
  const cubeMesh = new Mesh(cubeGeo);

  webGlBody.add(cubeMesh);

}
