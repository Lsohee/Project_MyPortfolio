const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const layerArr = Array.from(root2.children);

// todo 현재의 화면 픽셀값 가져오기
console.dir(root2);

let currentWidth = root2.offsetWidth;
let currentHeight = root2.offsetHeight;


// todo 값을 퍼센트로 변환하는 식 만들기
let widthPercent = Math.round(100 /currentWidth);
let heightPercent = Math.round(100/ currentHeight );


// memo 스크롤 다시 올릴때 root1 안나오게 없앰
window.addEventListener("wheel", function () {
  let scrollHeight = this.window.scrollY;
  let windowHeight = this.window.innerHeight;
  let docTotalHeight = this.document.body.offsetHeight;
  if (scrollHeight + windowHeight > docTotalHeight) {
    root1.remove();
    start(layerArr[0])
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





let zoom = {
  zoomIn: function (layerDiv, scale, x, y, ratio, changeX, changeY) {
    layerDiv.animate([{
      transform: `scale(${scale}) 
      translate(${x*widthPercent}%, ${y*heightPercent}%)`
    },
      {
        transform: `scale(${scale +ratio}) 
        translate(${(x+changeX*20)*widthPercent}%,${(y+changeY*20)*heightPercent}%)`
      }
    ], {
      duration: 2000,
      fill: "forwards"
    })
  },
  
  zoomOut: function (layerDiv, scale, x, y, ratio, changeX, changeY) {
    layerDiv.animate([{
      transform: `scale(${scale}) 
      translate(${x}%, ${y}%)`
    },
    {
      transform: `scale(${scale -ratio}) 
      translate(${(x-changeX)*widthPercent}%,${(y-changeY)*heightPercent}%)`
      }
    ], {
      duration: 2000,
      fill: "forwards"
    })
  }
}







// memo 스위치 역할을 할 핸들러 변수 생성
currentValue = "a";

let start = function () {
  root2.addEventListener("wheel", (event) => {
    if (event.wheelDelta < 0 && currentValue === 'a') { //줌인 두번째 -> 결과 : I 페이지

      zoom.zoomIn(layerArr[0],1,layerArr[0].offsetWidth,layerArr[0].offsetHeight,2,-50,12),
      zoom.zoomIn(layerArr[1],1,layerArr[1].offsetWidth,layerArr[1].offsetHeight,0.7,2,2),
      zoom.zoomIn(layerArr[2],1,layerArr[2].offsetWidth,layerArr[2].offsetHeight,0.6,2,2),
      zoom.zoomIn(layerArr[3],1,layerArr[3].offsetWidth,layerArr[3].offsetHeight,0.2,2,2),
      
      
      console.log("go to page I ")
      currentValue = "b"
      //줌인 효과 넣은 수를 다시 현재 위치로 재할당
    } else if (event.wheelDelta < 0 && currentValue === "b") { //줌인 두번째 -> 결과 : My 페이지
      // 재할당한 현재위치에 다시 줌인 효과 넣기
      console.log("go to page My");
      currentValue = "c"
      // 줌인 효과 넣은 위치를 다시 현재 위치에 재할당
    } else if (event.wheelDelta < 0 && currentValue === "c") { //줌인 세번째 -> 결과 : Me 페이지
      console.log("go to page Me");
      currentValue = "d"
    } else if (event.wheelDelta < 0 && currentValue === "d") { //줌인 네번째 -> 결과 : Myself 페이지
      console.log("go to page Myself");
    } else if (event.wheelDelta > 0 && currentValue === "a") { // 줌아웃 -> 0페이지
      console.log("back to page 0 ")
      // ? 여기 작동 안되는 듯
    } else if (event.wheelDelta > 0 && currentValue === "b") { // 줌아웃 두번째-> I 페이지
      console.log("back to page I ");
      currentValue = "a"
    } else if (event.wheelDelta > 0 && currentValue === "c") { // 줌아웃 세번째 -> My페이지
      console.log("back to page My");
      currentValue = "b"
      // currentValue = "c"
    } else if (event.wheelDelta > 0 && currentValue === "d") { // 줌아웃  네번째 -> Me페이지
      console.log("back to page Me");
      currentValue = "c"
    }

  })
}