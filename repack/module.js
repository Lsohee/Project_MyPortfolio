// const container = document.getElementById("container");
const roo1 = document.getElementById("root1");
// const root2 = document.getElementById("root2");

console.log("module")
import {createLayer1, createLayer2} from "./createLayers.js";

// function layers(){
// return
// }

let layer = [createLayer1(),createLayer2()]



root1.innerHTML =  layer[0]