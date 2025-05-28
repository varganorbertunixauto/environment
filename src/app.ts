import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine } from "@babylonjs/core";
import { SceneManager } from "./scene-manager";

class App {
  constructor() {
    this.initialize();
  }

  initialize() {
    console.log("App initialized");

    const canvas: HTMLCanvasElement = document.getElementById(
      "renderCanvas"
    ) as HTMLCanvasElement; // Get the canvas element
    const engine = new Engine(canvas, true); // Generate the BABYLON 3D engine

    // Add your code here matching the playground format
    const sceneManager = new SceneManager(engine, canvas); // Create an instance of SceneManager
    const scene = sceneManager.createScene(); //Call the createScene function

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
      scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }
}

const app = new App(); // Create an instance of the App class
