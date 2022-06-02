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
  }
})



function start(layerDiv, scale, x, y, ratio, changeX, changeY, handler1, handler2, handler3, callback) {
  callback(layerDiv, scale, x, y, ratio, changeX, changeY, handler1, handler2, handler3);
  console.log(layerDiv.outerText);
}







//2. 2번으로 호출하고 싶은 내용을 담은 함수 만들기 (1번을 인수로 씀)
function make(func1,func2){
console.log("func1의 작동이 시작됩니다")
func1()
console.log("func1의 작동이 끝났습니다")
console.log("func2의 작동이 시작됩니다")
func2()
console.log("func2의 작동이 끝났습니다")
}


//3. 2의 함수에 1의 함수 호출을 인자로 써서 호출 
make(zeroToI,IToMy)

// IToMy(zeroToI());


//4. 1번 다음 2번을 내놓는 기능
//5. 이렇게 하면 함수의 순서가 바뀌어도 1의 함수가 먼저 나옴(동기방식으로 처리된건가?)

// ? 동기적으로 호출하는데 성공 근데 왜 단계적으로 작동을 안하지?
// ? 함수 설계를 단계적으로 작동하지 못하는 방식으로 만들었나?








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

// let currentValue



function zoom(layerDiv, scale, x, y, ratio, changeX, changeY, handler1, handler2, handler3) {
  root2.addEventListener("wheel", (event) => {
    currentValue = handler1
    if (event.wheelDelta < 0 && currentValue === handler1) { //줌인 두번째 -> 결과 : I 페이지
      console.log("go to page Next")
      zoomIn(layerDiv, scale, x, y, ratio, changeX, changeY)
      currentValue = handler2
      console.log(currentValue)
      // return currentValue;

    } else if (event.wheelDelta > 0 && currentValue === handler1) { //줌인 두번째 -> 결과 : My 페이지
      console.log("go to page last");
      zoomOut(layerDiv, scale, x, y, ratio, changeX, changeY)
      currentValue = handler3
    }
    console.log(currentValue)
    return currentValue;
  })
  // return currentValue;
}

// console.log(currentValue)

//1-1. 1번으로 호출하고 싶은 함수 만들기(안에 들어갈 예정)
// memo zero - I 1번이 실행되면 
function zeroToI() {
    start(layerArr[0], 1, 0, 0, 2, -50, 1, "a", "b", "c", zoom);
    start(layerArr[1], 1, 0, 0, 0.5, -60, 1, "a", "b", "c", zoom);
    start(layerArr[2], 1, 0, 0, 0.2, -20, 1, "a", "b", "c", zoom);
    start(layerArr[3], 1, 0, 0, 0, 0, 1, "a", "b", "c", zoom);
}

//1-2. 1번으로 호출하고 싶은 함수 만들기(안에 들어갈 예정)

// memo I - My 2번이 실행되게
function IToMy() {
  start(layerArr[0], 1, 0, 0, 3, -50, 1, "b", "d", "e", zoom);
  start(layerArr[1], 1, 0, 0, 1, -60, 1, "b", "d", "e", zoom);
  start(layerArr[2], 1, 0, 0, 1.2, -20, 1, "b", "d", "e", zoom);
  start(layerArr[3], 1, 0, 0, 0, 0, 1, "b", "d", "e", zoom);
}

// ? 이번에는 비동기식으로 처리된 함수를 묶어서 동기식으로 바꾸고 싶음
// 호출해야 작동함