import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChild('threeCanvas', { static: true })
  private canvasRef!: ElementRef<HTMLCanvasElement>;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private simplex!: SimplexNoise;

  constructor() {}

  ngOnInit() {
    this.simplex = new SimplexNoise();

    // Create the Three.js scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Add objects to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    // Position the camera
    this.camera.position.z = 5;

    // Render the scene
    this.render();
  }

  private render() {
    requestAnimationFrame(() => this.render());
    const time = Date.now() * 0.001;
    const noise = this.simplex.noise(time, 0);
    this.camera.position.z = noise * 5;
    this.renderer.render(this.scene, this.camera);
  }
}
