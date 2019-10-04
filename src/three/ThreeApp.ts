import { Mesh, BoxGeometry, WebGLRenderer, PerspectiveCamera, Scene } from 'three';

export function initiateThree() {
  const container: HTMLElement = document.getElementById('canvasCointainer');
  const renderer = new WebGLRenderer({ antialias: true });
  container.append(renderer.domElement);
  renderer.setSize(container.clientWidth, container.clientHeight);

  const scene = new Scene();

  const cubeGeo = new BoxGeometry(10, 10, 10);
  const cubeMesh = new Mesh(cubeGeo);

  scene.add(cubeMesh);

  const camera = new PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 2000);
  camera.position.z = 100;
  renderer.render(scene, camera);
}