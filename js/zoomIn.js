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
    start()
  }
})



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

/*
원하는 방향
무엇을 각각의 layerDiv을 
어떻게 전후 비율을 일정하게 변화를 주는 기계 (함수)
변수는? layerDiv, 변화하는 비율, 현재 값, 적용될 값
현재 값에 변화하는 비율을 연산 = 적용될 값
지금 적용될 값이 다음의 현재값이 됨

*/

let zoomIn = function (layerDiv, scale, x, y, ratio, changeX, changeY){
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

let currentValue = "a" 

function zoom(layerDiv, scale, x, y, ratio, changeX, changeY,handler1,handler2,handler3) {
  
  root2.addEventListener("wheel", (event) => {
    if (event.wheelDelta < 0 && currentValue === handler1) { //줌인 두번째 -> 결과 : I 페이지
      console.log("go to page Next")
      currentValue = handler2
      zoomIn(layerDiv, scale, x, y, ratio, changeX, changeY)
      
    } else if (event.wheelDelta > 0 && currentValue === handler1) { //줌인 두번째 -> 결과 : My 페이지
      // 재할당한 현재위치에 다시 줌인 효과 넣기
      console.log("go to page last");
      zoomOut(layerDiv, scale, x, y, ratio, changeX, changeY)
      currentValue = handler3
      // 줌인 효과 넣은 위치를 다시 현재 위치에 재할당
    }
  })
  
}



  zoom(layerArr[0],1,0,0,2,2,1,"a","b","c")
  // 이거 작동이 안끝나서 다음 함수가 콜링이 안됨
  zoom(layerArr[1],1,0,0,2,2,1,"a","b","c")   
  zoom(layerArr[2],1,0,0,2,2,1,"a","b","c")
// 같은 함수를 동시 다발적으로 호출하는 방법은? --> 생성자 함수?