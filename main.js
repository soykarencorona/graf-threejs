import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfaf08f); // Establecer el color de fondo a amarillo pastel
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y materiales para los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Materiales con diferentes colores
const material1 = new THREE.MeshStandardMaterial({ color: 0xffb6c1 }); // Rosa claro
const material2 = new THREE.MeshStandardMaterial({ color: 0xda70d6 }); // Morado claro
const material3 = new THREE.MeshStandardMaterial({ color: 0x90ee90 }); // Verde claro

// Crear los cubos
const cube1 = new THREE.Mesh(geometry, material1);
const cube2 = new THREE.Mesh(geometry, material2);
const cube3 = new THREE.Mesh(geometry, material3);

// Posicionar los cubos de izquierda a derecha
cube1.position.x = -2; // El primer cubo a la izquierda
cube2.position.x = 0;  // El segundo cubo en el centro
cube3.position.x = 2;  // El tercer cubo a la derecha

// Añadir los cubos a la escena
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con rotación y renderizado
let rotationSpeed1 = 0.1; // Velocidad de rotación del primer cubo
let rotationSpeed2 = 0.05; // Velocidad de rotación del segundo cubo
let rotationSpeed3 = 0.01; // Velocidad de rotación del tercer cubo

function animate() {
    // Rotación de los cubos con diferentes velocidades
    cube1.rotation.x += rotationSpeed1;
    cube1.rotation.y += rotationSpeed1;

    cube2.rotation.x += rotationSpeed2;
    cube2.rotation.y += rotationSpeed2;

    cube3.rotation.x += rotationSpeed3;
    cube3.rotation.y += rotationSpeed3;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);