import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import python from './images/tech/python.png';
import javascript from './images/tech/JavaScript.png';
import lambda from './images/tech/lambda.png';
import apigateway from './images/tech/apiGateway.jpg';
import reactFirebase from './images/tech/reactFirebase.png';
import mongo from './images/tech/mongodb.png';

export default function Cube_2(){
  const containerRef = useRef(null);
  
  useEffect(() => {
    let scene, camera, renderer, cube, controls;

    // Initialize the scene, camera, and renderer
    scene = new THREE.Scene();

    scene.background = new THREE.Color(0x00FFFFFF); // 0x00FFFFFF
    camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/4, window.innerHeight/4);

    // Append the renderer's DOM element to the container
    containerRef.current.appendChild(renderer.domElement);

    // Create the cube and add it to the scene
    const geometry = new THREE.BoxGeometry(1,1,1);

    // Create the texture loader
    const textureLoader = new THREE.TextureLoader();

    // Create an array of materials using the loaded textures
    const materials = [
      new THREE.MeshBasicMaterial({ map: textureLoader.load(python) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(javascript) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(lambda) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(apigateway) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(reactFirebase) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(mongo) }),
      ];
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000, });
    cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    
    // Set the camera position
    camera.position.z = 5;
      
    // Initialize the OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
      
    // Define the animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.015;
      cube.rotation.y += 0.01;
      controls.update();  // Required if controls.enableDamping or controls.autoRotate are set to true
      renderer.render(scene, camera);
    };
  
    // Start the animation loop
    animate();
  
    // Clean up the Three.js objects and the animation loop on component unmount
    return () => {
      controls.dispose();  // Dispose the controls
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      scene.remove(cube);
    };
  }, []);

  return (
    <div className="threeJsObject_2 threeJsObject" ref={containerRef}></div>
  );
}