import { Engine, MeshBuilder, Scene } from "@babylonjs/core";
import { SkyBoxManager } from "./skybox-manager";
import { CameraManager } from "./camera-manager";
import { SunManager } from "./sun-manager";

export class SceneManager {
  constructor(
    private readonly engine: Engine,
    private readonly canvas: HTMLCanvasElement
  ) {}

  createScene = () => {
    // Creates a basic Babylon Scene object
    const scene = new Scene(this.engine);
    const skyboxManager = new SkyBoxManager();
    const cameraManager = new CameraManager(scene, this.canvas);
    const sunManager = new SunManager(scene);
    const camera = cameraManager.getCamera();
    scene.createDefaultSkybox(skyboxManager.getSkybox(scene), true, 1000);

    // Built-in 'sphere' shape.
    const sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 2, segments: 32 },
      scene
    );
    // Move sphere upward 1/2 its height
    sphere.position.y = 1;
    // Built-in 'ground' shape.
    const ground = MeshBuilder.CreateGround(
      "ground",
      { width: 6, height: 6 },
      scene
    );
    return scene;
  };
}
