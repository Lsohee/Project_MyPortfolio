const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const layerArr = Array.from(root2.children);

// todo 현재의 화면 픽셀값 가져오기
console.dir(root2);

let currentWidth = root2.offsetWidth;
let currentHeight = root2.offsetHeight;
console.log(currentHeight)

// todo 값을 퍼센트로 변환하는 식 만들기
/* 
내가 넣은 수 / currentWidth * 100 = 내가 원하는 수

 */


// console.log(100/currentWidth)
// let widthPercent = Math.round(100 currentWidth);
// let heightPercent = Math.round(100/ currentHeight );
// console.log(widthPercent)

// memo 스크롤 다시 올릴때 root1 안나오게 없앰
window.addEventListener("wheel", function () {
  let scrollHeight = this.window.scrollY;
  let windowHeight = this.window.innerHeight;
  let docTotalHeight = this.document.body.offsetHeight;
  if (scrollHeight + windowHeight > docTotalHeight) {
    root1.remove();
    // start()
  }
})












function start(layerDiv, scale, x, y, ratio, changeX, changeY, handler1, handler2, handler3, callback) {
  console.log(layerDiv.outerText);
  callback(layerDiv, scale, x, y, ratio, changeX, changeY, handler1, handler2, handler3);
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

// let currentValue = "a"



function zoom(layerDiv, scale, x, y, ratio, changeX, changeY, handler1, handler2, handler3) {
  root2.addEventListener("wheel", (event) => {
currentValue = handler1

    if (event.wheelDelta < 0 && currentValue === handler1) { //줌인 두번째 -> 결과 : I 페이지
      console.log(currentValue)
      console.log("go to page Next")
      zoomIn(layerDiv, scale, x, y, ratio, changeX, changeY)
      currentValue = handler2
    } else if (event.wheelDelta > 0 && currentValue === handler1) { //줌인 두번째 -> 결과 : My 페이지
      console.log("go to page last");
      zoomOut(layerDiv, scale, x, y, ratio, changeX, changeY)
      currentValue = handler3
    }
  })

}

start(layerArr[0], 1, 0, 0, 2, 2, 1, "a", "b", "c", zoom);
start(layerArr[1], 1, 0, 0, 0.5, 2, 1, "a", "b", "c", zoom);
start(layerArr[2], 1, 0, 0, 2, 2, 1, "a", "b", "c", zoom);
start(layerArr[3], 1, 0, 0, 2, 2, 1, "a", "b", "c", zoom);
// start는 비동기 방식으로 작동함
//callback함수가 작동을 안함


// ! 이벤트의 스위치를 달기 위해 핸들러 변수를 재할당 해준게 다른 호출된 함수에 영향을 미쳤음
// memo 실제로  핸들러 변수를 이벤트 안에서 재할당 해주니까 정상 작동함
 