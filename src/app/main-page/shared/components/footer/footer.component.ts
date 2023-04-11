import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChild('background', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  fov = 75;
  cameraZ = 75;
  xyCoef = 50;
  zCoef = 10;
  lightIntensity = 0.9;
  ambientColor = 0x000000;
  light1Color = 0x0e09dc;
  light2Color = 0x1cd1e1;
  light3Color = 0x18c02c;
  light4Color = 0xee3bcf;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private width!: number;
  private height!: number;
  private cx!: number;
  private cy!: number;
  private wWidth!: number;
  private wHeight!: number;
  private plane!: THREE.Mesh;
  private simplex = SimplexNoise;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  private mousePosition = new THREE.Vector3();

  constructor() {}

  ngOnInit() {
    //   this.renderer = new THREE.WebGLRenderer({
    //     canvas: this.canvasRef.nativeElement,
    //     antialias: true,
    //     alpha: true,
    //   });
    //   this.camera = new THREE.PerspectiveCamera(this.fov);
    //   this.camera.position.z = this.cameraZ;
    //   this.updateSize();
    //   window.addEventListener('resize', () => this.updateSize(), false);
    //   document.addEventListener('mousemove', (e) => {
    //     const v = new THREE.Vector3();
    //     this.camera.getWorldDirection(v);
    //     v.normalize();
    //     this.mousePlane.normal = v;
    //     this.mouse.x = (e.clientX / this.width) * 2 - 1;
    //     this.mouse.y = -(e.clientY / this.height) * 2 + 1;
    //     this.raycaster.setFromCamera(this.mouse, this.camera);
    //     this.raycaster.ray.intersectPlane(this.mousePlane, this.mousePosition);
    //   });
    //   this.initScene();
    //   this.animate();
    // }
    // initScene() {
    //   this.scene = new THREE.Scene();
    //   this.initLights();
    //   const mat = new THREE.MeshLambertMaterial({
    //     color: 0xffffff,
    //     side: THREE.DoubleSide,
    //   });
    //   const geo = new THREE.BufferGeometry();
    //   this.plane = new THREE.Mesh(geo, mat);
    //   this.scene.add(this.plane);
    //   this.plane.rotation.x = -Math.PI / 2 - 0.2;
    //   this.plane.position.y = -25;
    //   this.camera.position.z = 60;
    // }
    // initLights() {
    //   const r = 30;
    //   const y = 10;
    //   const lightDistance = 500;
    //   const light1 = new THREE.PointLight(
    //     this.light1Color,
    //     this.lightIntensity,
    //     lightDistance
    //   );
    //   light1.position.set(0, y, r);
    //   this.scene.add(light1);
    //   const light2 = new THREE.PointLight(
    //     this.light2Color,
    //     this.lightIntensity,
    //     lightDistance
    //   );
    //   light2.position.set(r, y, 0);
    //   this.scene.add(light2);
    //   const light3 = new THREE.PointLight(
    //     this.light3Color,
    //     this.lightIntensity,
    //     lightDistance
    //   );
    //   light3.position.set(0, y, -r);
    //   this.scene.add(light3);
    //   const light4 = new THREE.PointLight(
    //     this.light4Color,
    //     this.lightIntensity,
    //     lightDistance
    //   );
    //   light4.position.set(-r, y, 0);
    //   this.scene.add(light4);
    //   const ambientLight = new THREE.AmbientLight(this.ambientColor);
    //   this.scene.add(ambientLight);
    // }
    // updateSize() {
    //   this.width = window.innerWidth;
    //   this.height = window.innerHeight;
    //   this.cx = this.width / 2;
    //   this.cy = this.height / 2;
    //   this.renderer.setSize(this.width, this.height);
    //   const aspect = this.width / this.height;
    //   this.camera.aspect = aspect;
    //   this.camera.updateProjectionMatrix();
    //   this.wWidth = this.xyCoef * aspect;
    //   this.wHeight = this.xyCoef;
    // }
    // animate() {
    //   requestAnimationFrame(() => this.animate());
    //   const time = Date.now() * 0.0001;
    //   const vertices = (
    //     this.plane.geometry.attributes['position'] as THREE.BufferAttribute
    //   ).array as number[];
    //   for (let i = 0; i < vertices.length; i += 3) {
    //     const x = vertices[i];
    //     const y = vertices[i + 1];
    //     const z = vertices[i + 2];
    //     const noiseX = ((x + this.cx) / this.xyCoef) * this.zCoef;
    //     const noiseY = ((y + this.cy) / this.xyCoef) * this.zCoef;
    //     const noiseZ = time * this.zCoef;
    //     const noise = this.simplex.noise3d(noiseX, noiseY, noiseZ);
    //     vertices[i + 2] = noise * 10;
    //   }
    //   this.plane.geometry.attributes['position'].needsUpdate = true;
    //   this.camera.lookAt(this.scene.position);
    //   this.renderer.render(this.scene, this.camera);
  }
}
