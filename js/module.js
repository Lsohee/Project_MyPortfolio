const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const layerArr = Array.from(root2.children);



let zoomArr, startSplice


let currentWidth = root2.offsetWidth;
let currentHeight = root2.offsetHeight;




import module from 'scroll';
import {zoom} from "movingZoom.js"
import {waterColorDeep} from "waterBackgroundFilter.js"
import { currentPage, movement } from "./zoomSwitch"
import { zeroToI } from "./layerMovement/zeroToI"
import { MyToMe } from './layerMovement/MyToMe';
import { MeToMyself } from './layerMovement/MeToMyself';
import { MyselfToLast } from './layerMovement/MyselfToLast';
import { LastToMyself } from './layerMovement/LastToMyself';