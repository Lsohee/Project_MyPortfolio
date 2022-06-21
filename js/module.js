const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const layerArr = Array.from(root2.children);
let zoomArr, startSplice
let currentWidth = root2.offsetWidth;
let currentHeight = root2.offsetHeight;

console.log("module")
// module은 읽히는 것 확인
// import zoom from './movingZoom.js';