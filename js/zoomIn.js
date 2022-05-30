/*
todo1: 요소 생성
1. 요소 동적 생성 or 요소 호출
뭐가 나을까 일단 html로 다 만들어놨으니까 호출로
*/

const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const layerArr = Array.from(root2.children);


// todo3:  변수
// 1. 움직이는 레이어 div
// 2. 크기 증가률
// 3. 레이어 div의 기준점

/* 
todo4: 줌인 함수 설계
3. 크기가 커지는 움직임 주는 함수 
- 기준점을 원하는 곳으로 변경
- width와 height가 1씩 커진다(setInterval)
- 원하는 크기가 되었을때 (if문)
- 멈춘다 (setTimeOut)
*/
// memo 줌인 틀
zoomIn = function (layerDiv, ratio, layerDivX, layerDivY) {
  layerDiv.animate([{
      transform: ""
    },
    {
      transform: `scale(${ratio}) 
      translate(${layerDivX}%, ${layerDivY}% )`
    }
  ], {
    duration: 2000,
    fill: "forwards"
  })
}


/* 
todo5: 줌아웃 함수 
1. 크기가 작아지는 움직임 주는 함수(setInterval)
- width와 height가 1씩 작아진다(setInterval)
- 원하는 크기가 되었을때 (if문)
- 멈춘다 (setTimeOut)
*/

// memo 줌아웃 틀
zoomOut = function (layerDiv, ratio, layerDivX, layerDivY) {
  layerDiv.animate([{
    transform: ""
  }, {
    transform: `scale(${ratio})  translate(${layerDivX}%, ${layerDivY}% )`
  }], {
    duration: 2000,
    fill: "forwards"
  })
}


// memo 스크롤 다시 올릴때 root1 안나오게 없앰
window.addEventListener("wheel", function () {
  let scrollHeight = this.window.scrollY;
  let windowHeight = this.window.innerHeight;
  let docTotalHeight = this.document.body.offsetHeight;
  if (scrollHeight + windowHeight > docTotalHeight) {
    root1.remove();
    start()
  }
})


/* 
todo2: 이벤트 지정
1. wheel해서 나오는 값을 가져온다
2. 그 값이 일정 숫자가 되면 (구간을 설정?)
3. 이벤트 발생
*/


// memo 줌인 줌아웃 제어 묶음

let funcBundle = {
  zoomInToI: function () {
    zoomIn(layerArr[0], 3, -10, -3);
    zoomIn(layerArr[1], 2, -20, -6);
    zoomIn(layerArr[2], 1.3, -25, -3);
    zoomIn(layerArr[3], 1.2, -30, -3);
  },
  zoomOutToZero: function () {
    zoomOut(layerArr[0], 1, 0, 0);
    zoomOut(layerArr[1], 1, 0, 0);
    zoomOut(layerArr[2], 1, 0, 0);
    zoomOut(layerArr[3], 1, 0, 0);
  },
  zoomInToMy: function () {
    zoomIn(layerArr[0], 5, 0, 0);
    zoomIn(layerArr[1], 4, -10, -3);
    zoomIn(layerArr[2], 2, -10, 0);
    zoomIn(layerArr[3], 2, -14, -3);
  },
  zoomOutToI: function () {
    zoomOut(layerArr[0], 3, 0, 0);
    zoomOut(layerArr[1], 2, -10, -3);
    zoomOut(layerArr[2], 1, 0, 0);
    zoomOut(layerArr[3], 1, -5, -3);
  },
  zoomOutToMy: function () {
    zoomOut(layerArr[0], 5, 0, 0);
    zoomOut(layerArr[1], 4, -10, -3);
    zoomOut(layerArr[2], 2, -2, 0);
    zoomOut(layerArr[3], 1.5, 0, -3);
  },
  zoomOutToMe: function(){
    zoomOut(layerArr[0], 15, 0, 0);
    zoomOut(layerArr[1], 14, -12, -1);
    zoomOut(layerArr[2], 10, -12, 0);
    zoomOut(layerArr[3], 3, -10, -3);
  }, 
  zoomInToMe: function(){
    zoomIn(layerArr[0], 10, 0, 0);//나중에 없앨 레이어
    zoomIn(layerArr[1], 10, -15, -2);
    zoomIn(layerArr[2], 6, -10, 0);
    zoomIn(layerArr[3], 3, -10, -3);
  },
  zoomInToMyself: function(){
    zoomIn(layerArr[0], 10, 0, 0);//나중에 없앨 레이어
    zoomIn(layerArr[1], 12, -20, -2);
    zoomIn(layerArr[2], 13, -8, 0);
    zoomIn(layerArr[3], 15, -15, -2);
  }
}

// memo 스위치 역할을 할 핸들러 변수 생성
currentValue = "a";
let start = function(){

root2.addEventListener("wheel", (event) => {

  // console.log(count)

  if (event.wheelDelta < 0 && currentValue === 'a') { //줌인 두번째 -> 결과 : I 페이지
    funcBundle.zoomInToI()
    console.log("go to page I ")
    currentValue = "b"
  } else if (event.wheelDelta > 0 && currentValue === "a") { // 줌아웃 -> 0페이지
    funcBundle.zoomOutToZero()
    console.log("back to page 0 ")
    // ? 여기 작동 안되는 듯
  } else if (event.wheelDelta < 0 && currentValue === "b") { //줌인 두번째 -> 결과 : My 페이지
    funcBundle.zoomInToMy()
    console.log("go to page My");
    currentValue = "c"
  } else if (event.wheelDelta > 0 && currentValue === "b") { // 줌아웃 두번째-> I 페이지
    funcBundle.zoomOutToI()
    console.log("back to page I ");
    currentValue = "a"
  } else if (event.wheelDelta < 0 && currentValue === "c") { //줌인 세번째 -> 결과 : Me 페이지
    funcBundle.zoomInToMe()
    console.log("go to page Me");
    currentValue = "d"
  } else if (event.wheelDelta > 0 && currentValue === "c") { // 줌아웃 세번째 -> My페이지
    funcBundle.zoomOutToMy();
    console.log("back to page My");
    currentValue = "b"
  } else if (event.wheelDelta < 0 && currentValue === "d") { //줌인 네번째 -> 결과 : Myself 페이지
    funcBundle.zoomInToMyself()
    console.log("go to page Myself");
    // currentValue = "c"
  } else if (event.wheelDelta > 0 && currentValue === "d") { // 줌아웃  네번째 -> Me페이지
    funcBundle.zoomOutToMe()
    console.log("back to page Me");
    currentValue = "c"
  }

})
}