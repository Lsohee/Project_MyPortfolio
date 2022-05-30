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



// todo 현재의 화면 픽셀값 가져오기
console.dir(root2);

let currentWidth = root2.offsetWidth;
let currentHeight = root2.offsetHeight;
// console.log(currentWidth);
// console.log(currentHeight);



// todo 값을 퍼센트로 변환하는 식 만들기
let widthPercent = Math.round(currentWidth / 100);
let heightPercent = Math.round(currentHeight / 100);
// console.log(widthPercent) 


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

// todo 그 값을 기준으로 새로운 값을 만드는 함수 만들기
// 보이는 웹 페이지 넓이의 30% 
// console.log(widthPercent*30);//923에 270래


// todo 이제 적용될 값을 구하는 함수 or 현재 값을 구하는 함수
// todo 뭐가 맞을까? 적용되는 값을 고정 시키고 현재 값을 넣는게..?

/*
줌인 
layerDiv.animate([
{transform : 바로 전 단계 값},
{transform : 현재 적용될 값}
])

A = 바로 전 단계 값
changeValue = 현재 적용될 값
layerDiv.animate([
{transform : A },
{transform : A와 changeValue를 조합}
...
])
A와 changeValue를 조합한 값을 A로 재할당?

memo 나의 설계(예상)
A = 바로 전 단계 값
changeValue = 현재 적용될 값
B = A 와 changeValue를 조합한 값
layerDiv.animate([
{transform : A },
{transform : B }
...
])
A = B

*/
// let testA = 60 
// let testB = testA+30
// testA = testB 
// console.log(testA)
let zoomIn;
let zoomOut;



// todo 줌인 줌 아웃 틀 새로 짜기
// memo 줌인 틀
zoom = function (layerDiv, ratio, layerDivX, layerDivY) {
  let currentValue =
    `scale(${ratio})  translate(${layerDivX*widthPercent}, ${layerDivY*heightPercent})`
  let newValueToIn =
    `scale(${ratio+2})  translate(${layerDivX*widthPercent+20}, ${layerDivY*heightPercent+20})`
  let newValueToOut =
    `scale(${ratio-2})  translate(${layerDivX*widthPercent-20}, ${layerDivY*heightPercent-20})`
  zoomIn = layerDiv.animate([{
      transform: currentValue
    },
    {
      transform: newValueToIn
    }
  ], {
    duration: 2000,
    fill: "forwards"
  })

  currentValue = newValueToIn

  zoomOut = layerDiv.animate([{
    transform: currentValue
  }, {
    transform: newValueToOut
  }], {
    duration: 2000,
    fill: "forwards"
  })
  currentValue = newValueToOut;
}



// let funcbundle = {
//   zoomInToI : function(){
//     zoomIn()
//   }


// }







/* 
todo2: 이벤트 지정
1. wheel해서 나오는 값을 가져온다
2. 그 값이 일정 숫자가 되면 (구간을 설정?)
3. 이벤트 발생
*/
// memo 스위치 역할을 할 핸들러 변수 생성
currentValue = "a";
let start = function () {

  root2.addEventListener("wheel", (event) => {

    // console.log(count)

    if (event.wheelDelta < 0 && currentValue === 'a') { //줌인 두번째 -> 결과 : I 페이지
      console.log("go to page I ")
      currentValue = "b"
    } else if (event.wheelDelta > 0 && currentValue === "a") { // 줌아웃 -> 0페이지
      console.log("back to page 0 ")
      // ? 여기 작동 안되는 듯
    } else if (event.wheelDelta < 0 && currentValue === "b") { //줌인 두번째 -> 결과 : My 페이지
      console.log("go to page My");
      currentValue = "c"
    } else if (event.wheelDelta > 0 && currentValue === "b") { // 줌아웃 두번째-> I 페이지
      console.log("back to page I ");
      currentValue = "a"
    } else if (event.wheelDelta < 0 && currentValue === "c") { //줌인 세번째 -> 결과 : Me 페이지
      console.log("go to page Me");
      currentValue = "d"
    } else if (event.wheelDelta > 0 && currentValue === "c") { // 줌아웃 세번째 -> My페이지
      console.log("back to page My");
      currentValue = "b"
    } else if (event.wheelDelta < 0 && currentValue === "d") { //줌인 네번째 -> 결과 : Myself 페이지
      console.log("go to page Myself");
      // currentValue = "c"
    } else if (event.wheelDelta > 0 && currentValue === "d") { // 줌아웃  네번째 -> Me페이지
      console.log("back to page Me");
      currentValue = "c"
    }

  })
}