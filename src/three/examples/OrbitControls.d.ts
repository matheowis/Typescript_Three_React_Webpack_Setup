import { TOUCH, Vector3, Camera, MOUSE } from 'three';

interface OribtControlsType {
  new(camera: Camera, domElement: HTMLElement): any;
  autoRotate: boolean;
  autoRotateSpeed: number;
  dampingFactor: number;
  domElement: HTMLElement;
  enabled: boolean;
  enableDamping: boolean;
  enableKeys: boolean;
  enablePan: boolean;
  enableRotate: boolean;
  enableZoom: boolean;
  keyPanSpeed: number;
  keys: {
    LEFT: number,
    UP: number,
    RIGHT: number,
    BOTTOM: number,
  };
  maxAzimuthAngle: number;
  maxDistance: number;
  maxPolarAngle: number
  maxZoom: number
  minAzimuthAngle: number;
  minDistance: number;
  minPolarAngle: number;
  minZoom: number;
  mouseButtons: {
    LEFT: MOUSE,
    MIDDLE: MOUSE,
    RIGHT: MOUSE,
  }
  object: Camera;
  panSpeed: number;
  position0: Vector3;
  rotateSpeed: number;
  screenSpacePanning: boolean;
  target0: Vector3;
  target: Vector3;
  touches: {
    ONE: TOUCH,
    TWO: TOUCH,
  };
  zoom0: number;
  zoomSpeed: number;

  dispose: () => {};
  getAzimuthalAngle: () => {};
  getPolarAngle: () => {};
  reset: () => {};
  saveState: () => {};
  update: () => {};
}

declare var OribtControls: OribtControlsType;

export default OribtControls;