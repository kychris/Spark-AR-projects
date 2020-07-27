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

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

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

// Load in the required modules
const NativeUI = require('NativeUI');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

// Create a variable to store the name of our text object
const textNodeName  = '3dText0';
const textNodeName1  = '3dText1';
const textNodeName2  = '3dText2';
const textNodeName3  = '3dText3';
const textNodeName4  = '3dText4';
const textNodeName5  = '3dText5';


// Access the text object in our scene
const text = Scene.root.find(textNodeName);
const text1 = Scene.root.find(textNodeName1);
const text2 = Scene.root.find(textNodeName2);
const text3 = Scene.root.find(textNodeName3);
const text4 = Scene.root.find(textNodeName4);
const text5 = Scene.root.find(textNodeName5);

// Register a tap gesture on the text node
TouchGestures.onTap(text).subscribe(function() {
// Edit the text through the NativeUI module
NativeUI.enterTextEditMode(textNodeName);
});

TouchGestures.onTap(text1).subscribe(function() {
// Edit the text through the NativeUI module
NativeUI.enterTextEditMode(textNodeName1);
});

TouchGestures.onTap(text2).subscribe(function() {
// Edit the text through the NativeUI module
NativeUI.enterTextEditMode(textNodeName2);
});

TouchGestures.onTap(text3).subscribe(function() {
// Edit the text through the NativeUI module
NativeUI.enterTextEditMode(textNodeName3);
});

TouchGestures.onTap(text4).subscribe(function() {
// Edit the text through the NativeUI module
NativeUI.enterTextEditMode(textNodeName4);
});

TouchGestures.onTap(text5).subscribe(function() {
// Edit the text through the NativeUI module
NativeUI.enterTextEditMode(textNodeName5);
});

        