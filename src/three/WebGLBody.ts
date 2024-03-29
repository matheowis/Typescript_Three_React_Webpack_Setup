import { WebGLRenderer, PerspectiveCamera, Scene, Object3D } from 'three';
// import {OrbitControls,MapControls} from './examples/OrbitControls';
import OrbitControls, { OribtControlsType } from './examples/OrbitControls';

interface IWebGL_Body {
  antialias?: boolean,
  fullScreen?: boolean,
  FOV?: number,
  cameraDistance?: number,
  container: HTMLElement | null,
}

const defaultProps: IWebGL_Body = {
  FOV: 60,
  antialias: true,
  fullScreen: false,
  cameraDistance: 100,
  container: null,
}

class WebGLBody {
  constructor(props: IWebGL_Body = defaultProps) {
    const { antialias, FOV, cameraDistance, container } = { ...defaultProps, ...props };
    this.renderer = new WebGLRenderer({ antialias });
    if(container){
      this.container = container;
    }else{
      this.container = new HTMLElement();
    }
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(FOV, this.container.clientWidth / this.container.clientHeight, 0.1, 2000);

    this.container.append(this.renderer.domElement);
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.camera.position.z = cameraDistance || 100;

    window.addEventListener('resize', this.resize);

    this.render();
  }

  private resize = () => {
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
  }
  private render = () => {
    requestAnimationFrame(this.render);

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  public container: HTMLElement;
  public renderer: WebGLRenderer;
  public scene: Scene;
  public camera: PerspectiveCamera;
  public controls: OribtControlsType;

  public add(...object: Array<Object3D>) {
    this.scene.add(...object);
  }
  public remove(...object: Array<Object3D>) {
    this.scene.remove(...object)
  }
  public destroy() {
    // cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resize);
  }
}

export default WebGLBody;
