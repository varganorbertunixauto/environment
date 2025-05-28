import {
  Camera,
  FollowCamera,
  FreeCamera,
  Scene,
  Vector3,
} from "@babylonjs/core";

export class CameraManager {
  private readonly camera: Camera;
  private readonly freeCamera: FreeCamera;
  private readonly followCamera: FollowCamera;
  private currentCamera: Camera;

  constructor(
    private readonly scene: Scene,
    private readonly canvas: HTMLCanvasElement
  ) {
    this.camera = new Camera("camera", Vector3.Zero(), this.scene);
    this.camera.attachControl(this.canvas, true);

    this.freeCamera = new FreeCamera(
      "freeCamera",
      new Vector3(0, 5, -10),
      this.scene
    );
    this.freeCamera.setTarget(Vector3.Zero());
    this.freeCamera.attachControl(this.canvas, true);

    this.followCamera = new FollowCamera(
      "followCamera",
      new Vector3(0, 5, -10),
      this.scene
    );

    this.currentCamera = this.camera; // Default camera
  }

  getCamera(): Camera {
    return this.camera;
  }

  getFreeCamera(): FreeCamera {
    return this.freeCamera;
  }

  getFollowCamera(): FollowCamera {
    return this.followCamera;
  }

  switchCamera(type: Camera | FreeCamera | FollowCamera): void {
    this.currentCamera.detachControl(this.canvas);

    if (type instanceof FreeCamera) {
      this.freeCamera.attachControl(this.canvas, true);
      this.currentCamera = this.freeCamera;
    } else if (type instanceof FollowCamera) {
      this.followCamera.attachControl(true);
      this.currentCamera = this.followCamera;
    } else {
      this.camera.attachControl(this.canvas, true);
      this.currentCamera = this.camera;
    }
  }
}
