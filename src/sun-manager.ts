import { Color3, HemisphericLight, Scene, Vector3 } from "@babylonjs/core";

export class SunManager {
  private readonly light: HemisphericLight;
  private readonly sunColorDiffuse: Color3 = new Color3(0.5, 0.5, 0.5); // Default sun color
  private readonly sunColorSpecular: Color3 = new Color3(1, 1, 1); // Default sun specular color
  private readonly sunIntensity: number = 0.7; // Default sun intensity
  private readonly sunDirection: Vector3 = new Vector3(0, 1, 0); // Default sun direction

  constructor(private readonly scene: Scene) {
    this.light = new HemisphericLight("sun", this.sunDirection, scene);
    this.light.diffuse = this.sunColorDiffuse;
    this.light.specular = this.sunColorSpecular;
    this.light.intensity = this.sunIntensity;
  }
}
