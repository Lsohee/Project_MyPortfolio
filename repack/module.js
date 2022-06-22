// const container = document.getElementById("container");
const root1 = document.getElementById("root1");
const root2 = document.getElementById("root2");
let currentWidth = root2.offsetWidth;
  let currentHeight = root2.offsetHeight;



import allAboutRoot1 from "./root1.js"
import allAboutRoot2 from "./root2.js";
import {zoom} from './movementZoom.js';
import {currentPage,movement} from "./zoomSwitch.js"
import start  from "./scroll.js";
// import waterColorDeep from "./waterBackdropFilter.js"


console.log(zoom[1]);
currentPage
start()
// waterColorDeep(allAboutRoot2(2))
movement()
allAboutRoot1();
allAboutRoot2();
