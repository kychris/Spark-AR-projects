/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');
const TouchGestures = require('TouchGestures');
const Reactive = require('Reactive');
const Materials = require('Materials');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');


// const test = Scene.root.findFirst('ambientLight0');
// Diagnostics.log(test);


Promise.all([
	Scene.root.findFirst("10138_Fedora_v01") 
]).then((loadedItems) => {
	Diagnostics.log(cal_hat_black.sceneObject)
}).catch((e) => {
	Diagnostics.log(e)
})

