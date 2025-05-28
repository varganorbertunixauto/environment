import { CubeTexture, Scene } from "@babylonjs/core";
import nx from "../assets/skyboxes/skybox_nx.jpg";
import ny from "../assets/skyboxes/skybox_ny.jpg";
import nz from "../assets/skyboxes/skybox_nz.jpg";
import px from "../assets/skyboxes/skybox_px.jpg";
import py from "../assets/skyboxes/skybox_py.jpg";
import pz from "../assets/skyboxes/skybox_pz.jpg";

export class SkyBoxManager {
  private readonly skyboxFiles: string[] = [px, py, pz, nx, ny, nz];

  getSkybox(scene: Scene): CubeTexture {
    const texture = new CubeTexture("assets/skyboxes/skybox", scene, {
      files: this.skyboxFiles,
    });
    return texture;
  }
}
