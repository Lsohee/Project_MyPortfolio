const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const layerArr = Array.from(root2.children);





// memo 스크롤 다시 올릴때 root1 안나오게 없앰

let currentWidth = root2.offsetWidth;
let currentHeight = root2.offsetHeight;

window.addEventListener("wheel", function () {
  let scrollHeight = this.window.scrollY;
  let windowHeight = this.window.innerHeight;
  let docTotalHeight = this.document.body.offsetHeight;
  if (scrollHeight + windowHeight > docTotalHeight) {
    root1.remove();
    // memo 움직임 시작을 root1이 없어진다음에 하게 하기 위해서 호출
    movement()
  }
})

  function movement() {

    
    
}




function start(layerDiv, scale, x, y, ratio, changeX, changeY, currentPageIndex, callback) {
  callback(layerDiv, scale, x, y, ratio, changeX, changeY, currentPageIndex);
}


let zoomIn = function (layerDiv, scale, x, y, ratio, changeX, changeY) {
  layerDiv.animate([{
      transform: `scale(${scale}) 
  translate(${x/currentWidth*100}%, ${y/currentHeight*100}%)`
    },
    {
      transform: `scale(${scale +ratio}) 
    translate(${(x+changeX)/currentWidth*100}%,${(y+changeY)/currentHeight*100}%)`
    }
  ], {
    duration: 2000,
    fill: "forwards"
  })
}

let zoomOut = function (layerDiv, scale, x, y, ratio, changeX, changeY) {
  layerDiv.animate([{
      transform: `scale(${scale+ratio}) 
  translate(${(x+changeX)/currentWidth*100}%, ${(y+changeY)/currentHeight*100}%)`
    },
    {
      transform: `scale(${scale}) 
  translate(${(x)/currentWidth*100}%,${(y)/currentHeight*100}%)`
    }
  ], {
    duration: 2000,
    fill: "forwards"
  })
}

function zoom(currentPageIndex) {
  root2.addEventListener("wheel", (event) => {
    if (event.wheelDelta < 0 && currentPage[currentPageIndex] === true) {
    } 
    else if (event.wheelDelta > 0 &&currentPage[currentPageIndex] === true) {
      }
    zeroToI()
    IToMy()
      })
  
  let currentPage = [true, false, false, false, false]
  console.log("go to page Next")
  zoomIn(layerDiv, scale, x, y, ratio, changeX, changeY) // ^ 1
  currentPage.splice(currentPageIndex, 2, false, true) // ^ 2 
  console.log(currentPage)
  console.log("go to page last");
  zoomOut(layerDiv, scale, x, y, ratio, changeX, changeY) // ^ 4
  currentPage.splice(currentPageIndex, 2, true, false) // ^ 3
  console.log(currentPageIndex)
  }
  
  
  
  
  
  
  
  
  // ? 코드를 조금더 짧고 간단하게 만들 수 는 없을까?


// memo zero - I 1번이 실행되면 
function zeroToI() {
  start(layerArr[0], 1, 0, 0, 2, -50, 1, 0,  zoom);
  start(layerArr[1], 1, 0, 0, 0.5, -60, 1,  0, zoom);
  start(layerArr[2], 1, 0, 0, 0.2, -20, 1,  0, zoom);
  start(layerArr[3], 1, 0, 0, 0, 0, 1,  0,  zoom);
}
// memo I - My 2번이 실행되게
function IToMy() {
  start(layerArr[0], 1, 0, 0, 3, -50, 1, 1,  zoom);
  start(layerArr[1], 1, 0, 0, 0.5, -60, 1,  1, zoom);
  start(layerArr[2], 1, 0, 0, 0.2, -20, 1,  1, zoom);
  start(layerArr[3], 1, 0, 0, 0, 0, 1,  1,  zoom);
}
// memo My - Me 3번이 실행되게
function MyToMe() {

}
// memo Me - Myself 4번이 실행되게
function MyToMe() {

}




// root2.addEventListener("wheel", (event) => {
//   if (event.wheelDelta > 0 && currentPage[0] === true) {
//     console.log("움직이지 않습니다")

//   } else if (event.wheelDelta < 0 && currentPage[0] === true) {
//     console.log("zero에서 I로 이동합니다")
//     currentPage.splice(0, 2, false, true)
//     console.log(currentPage)

//   } else if (event.wheelDelta < 0 && currentPage[1] === true) {
//     console.log("I에서 My로 이동합니다")
//     currentPage.splice(1, 2, false, true)
//     console.log(currentPage)

//   } else if (event.wheelDelta < 0 && currentPage[2] === true) {
//     console.log("My에서 Me로 이동합니다")
//     currentPage.splice(2, 2, false, true)
//     console.log(currentPage)

//   } else if (event.wheelDelta < 0 && currentPage[3] === true) {
//     console.log("Me에서 Myself로 이동합니다")
//     currentPage.splice(3, 2, false, true)
//     console.log(currentPage)

//   } else if (event.wheelDelta > 0 && currentPage[4] === true) {
//     console.log("Myself에서 Me로 이동합니다")
//     currentPage.splice(3, 2, true, false)
//     console.log(currentPage)
//   } else if (event.wheelDelta > 0 && currentPage[3] === true) {
//     console.log("Me에서 My로 이동합니다")
//     currentPage.splice(2, 2, true, false)
//     console.log(currentPage)
//   } else if (event.wheelDelta > 0 && currentPage[2] === true) {
//     console.log("My에서 I로 이동합니다")
//     currentPage.splice(1, 2, true, false)
//     console.log(currentPage)
//   } else if (event.wheelDelta > 0 && currentPage[1] === true) {
//     console.log("I에서 zero로 이동합니다")
//     currentPage.splice(0, 2, true, false)
//     console.log(currentPage)
//   }
// })