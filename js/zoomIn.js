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
  // console.log(scrollHeight)
  if (scrollHeight + windowHeight > docTotalHeight) {
    root1.remove();
    make(zeroToI, IToMe)
  }
})


// root2.addEventListener("wheel",(event)=>{
//   console.log(event.wheelDelta)
//   if(event.wheelDelta > 0 ){
//     console.log("zoom in");
//   }else if(event.wheelDelta<0){
//     console.log("zoom out")
//   }
// })






function start(layerDiv, scale, x, y, ratio, changeX, changeY, handler1, handler2, handler3, callback) {
  callback(layerDiv, scale, x, y, ratio, changeX, changeY, handler1, handler2, handler3);
  console.log(layerDiv.outerText);
}







//2. 2번으로 호출하고 싶은 내용을 담은 함수 만들기 (1번을 인수로 씀)
function make(func1, func2) {
  console.log("func1의 작동이 시작됩니다")
  func1()
  console.log("func1의 작동이 끝났습니다")
  console.log("func2의 작동이 시작됩니다")
  func2()
  console.log("func2의 작동이 끝났습니다")
}


//3. 2의 함수에 1의 함수 호출을 인자로 써서 호출 

// IToMy(zeroToI());


//4. 1번 다음 2번을 내놓는 기능
//5. 이렇게 하면 함수의 순서가 바뀌어도 1의 함수가 먼저 나옴(동기방식으로 처리된건가?)

// ? 동기적으로 호출하는데 성공 근데 왜 단계적으로 작동을 안하지?
// ? 함수 설계를 단계적으로 작동하지 못하는 방식으로 만들었나?
// todo 스위치를 만들어야함
// ? 이렇게 따로 스위치를 만들어 줘야하면 차라리 스위치를 if문으로 쭉 연결한 issue5때가 낫지 않을까?
// ? 그러면 코드가 너무 길어져서 핸들러 변수를 인수로 넣을 수 있는 함수를 만들었는데 이 함수를 가지고 단계별 이벤트를 작동시킬 수는 없나?




/*
todo 의도
무엇을 : 비동기 방식으로 처리하게 만든 레이어 div들의 묶음 함수 zeroToI 와 IToMe를 
언제 : 휠을 굴릴 때 마다
어떻게 : zeroToI가 작동하고 나서 다시 휠을 굴려야 IToME를 작동할 수 있게 하고 싶음

todo 시도
추측 :
  1. 핸들러 변수가 handler1 로 할당되어서 그전의 변수가 handler2로 바뀌는 것을 기다리지 않고 바로 작동이 되는 것이라고 생각함 
  2. 같은 이벤트 함수 안에 있지 않아서 따로 따로 이벤트 적용이 되는 것 같음 
  --> 이벤트가 일어나면 둘이 동시에 작동함
이렇게 했더니 : 핸들러 변수를 지역변수로 지정해서 handler1으로 할당하지 않고 전역 변수로 할당했더니
이렇게 나옴 : 맨 위의 래이어 하나만 움직임
? 이유 : 왜지? 비동기 처리가 된게 아닌가?
*/ 








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
  let currentValue = handler1
  // currentValue = handler1
  root2.addEventListener("wheel", (event) => {
    if (event.wheelDelta < 0 && currentValue === handler1) {
      console.log("go to page Next")
      zoomIn(layerDiv, scale, x, y, ratio, changeX, changeY)
      currentValue = handler2
      console.log(currentValue)
    } else if (event.wheelDelta > 0 && currentValue === handler3) {
      console.log("go to page last");
      zoomOut(layerDiv, scale, x, y, ratio, changeX, changeY)
      currentValue = handler2
      console.log(currentValue)
    }
    // return currentValue;
  })
  // console.log(currentValue)
  // return currentValue;
  // return 
}


//1-1. 1번으로 호출하고 싶은 함수 만들기(안에 들어갈 예정)
// memo zero - I 1번이 실행되면 
function zeroToI() {
  start(layerArr[0], 1, 0, 0, 2, -50, 1, "a", "b", "c", zoom);
  
  start(layerArr[1], 1, 0, 0, 0.5, -60, 1, "a", "b", "c", zoom);
  start(layerArr[2], 1, 0, 0, 0.2, -20, 1, "a", "b", "c", zoom);
  start(layerArr[3], 1, 0, 0, 0, 0, 1, "a", "b", "c", zoom);
  // console.log(currentValue)
}

//1-2. 1번으로 호출하고 싶은 함수 만들기(안에 들어갈 예정)

// memo I - My 2번이 실행되게
function IToMe() {
  start(layerArr[0], 1, 0, 0, 3, -50, 1, "b", "c", "d", zoom);
  start(layerArr[1], 1, 0, 0, 1, -60, 1, "b", "c", "d", zoom);
  start(layerArr[2], 1, 0, 0, 1.2, -20, 1, "b", "c", "d", zoom);
  start(layerArr[3], 1, 0, 0, 0, 0, 1, "b", "c", "d", zoom);
}

// ? 이번에는 비동기식으로 처리된 함수를 묶어서 동기식으로 바꾸고 싶음
// 호출해야 작동함