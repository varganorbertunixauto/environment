import {
  CubeTexture,
  Engine,
  FreeCamera,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";
import { skybox } from "./skybox";

export class SceneManager {
  constructor(
    private readonly engine: Engine,
    private readonly canvas: HTMLCanvasElement
  ) {}

  createScene = () => {
    // Creates a basic Babylon Scene object
    const scene = new Scene(this.engine);

    const envTexture = new CubeTexture("assets/skyboxes/skybox", scene, {
      files: skybox,
    });
    scene.createDefaultSkybox(envTexture, true, 1000);

    // Creates and positions a free camera
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    // Targets the camera to scene origin
    camera.setTarget(Vector3.Zero());
    // Attaches the camera to the canvas
    camera.attachControl(this.canvas, true);
    // Creates a light, aiming 0,1,0
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    // Dim the light a small amount 0 - 1
    light.intensity = 0.7;
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
