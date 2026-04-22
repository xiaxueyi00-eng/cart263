import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Canvas
const canvas = document.querySelector('canvas#three-ex');

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

// Group
const group = new THREE.Group();
scene.add(group);

// // red cube 
// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
// );
// cube1.position.x = 1.5;
// group.add(cube1);

// // blue ball
// const sphere2 = new THREE.Mesh(
//     new THREE.SphereGeometry(0.75, 32, 16),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
// );
// // the size and place 
// sphere2.position.y = 1.5;
// sphere2.position.x = 3;
// group.add(sphere2);
// group.position.x = -2
// group.rotation.x = Math.PI * .25
// // group.scale.x = .5
// // group.scale.y = .5
// // group.scale.z = .5
// group.scale.set(.5, .5, .5)

// Texture
// const loader = new THREE.TextureLoader();
// const water_texture = await loader.loadAsync('Ice002_1K-JPG_Color.jpg');
// water_texture.colorSpace = THREE.SRGBColorSpace;

// Material
// const material = new THREE.MeshBasicMaterial({
//     map: water_texture
// });
// material.color = new THREE.Color('#ad86dd');
// material.transparent = true;
// material.opacity = 0.5;

// Objects
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     material
// );
// sphere.position.x = -1.5;

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1, 1),
//     material
// );

// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.5, 0.3, 16, 32),
//     material
// );
// torus.position.x = 1.5;

// scene.add(sphere, plane, torus);

// The line 
// const axesHelper = new THREE.AxesHelper(1);
// axesHelper.position.set(-1, -1, 0);
// scene.add(axesHelper);


camera.position.z = 5;
scene.add(camera);

renderer.setSize(sizes.width, sizes.height);

// 红色立方体 1
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube1 = new THREE.Mesh(geometry, material);
cube1.position.x = 0;
scene.add(cube1);

// 红色立方体 2
const cube2 = new THREE.Mesh(geometry, material);
cube2.position.x = -2;
scene.add(cube2);

// 帧率自适应
let elapsedTime = 0;

function animate(timer) {
    const deltaTime = timer - elapsedTime;
    elapsedTime = timer;


    // cube2 绕原点运动
    camera.position.x = Math.cos(elapsedTime / 1000)
    camera.position.y = Math.sin(elapsedTime / 1000)

    cube2.position.x = Math.cos(elapsedTime / 1000);
    cube2.position.y = Math.sin(elapsedTime / 1000);




    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

// 启动动画
window.requestAnimationFrame(animate);