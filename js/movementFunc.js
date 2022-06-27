
// pseudo 유사 배열을 배열로 바꿔서 레이어들을 배열로 부를 것임
const layerArr = Array.from(root2.children);

// pseudo 스크롤 스위치의 핸들러 변수
let currentPage = [true, false, false, false, false,false]



// pseudo 레이어들의 현재 좌표값을 변수로 지정    
let currentWidth = root2.offsetWidth;
let currentHeight = root2.offsetHeight;


// pseudo 레이어들 줌인 줌아웃 함수를 zoom이라는 배열로 묶어서 반복되는 코드 재사용
let zoom = [
  function (movementValueObject) {
    layerArr[movementValueObject.layerDiv].animate([{
        transform: `scale(${movementValueObject.scale}) 
      translate(${(movementValueObject.x)/(currentWidth)*100}%, ${(movementValueObject.y)/(currentHeight)*100}%)
      `
      },
      {
        transform: `scale(${movementValueObject.ratio}) 
      translate(${(movementValueObject.changeX)/currentWidth*100}%,${(movementValueObject.changeY)/currentHeight*100}%) 
      `
      }
    ], {
      duration: 2000,
      fill: "forwards"
    })
  },
  function (movementValueObject) {
    layerArr[movementValueObject.layerDiv].animate([{
        transform: `scale(${movementValueObject.ratio}) 
    translate(${(movementValueObject.changeX)/currentWidth*100}%, ${(movementValueObject.changeY)/currentHeight*100}%)`
      },
      {
        transform: `scale(${movementValueObject.scale}) 
    translate(${(movementValueObject.x)/currentWidth*100}%,${(movementValueObject.y)/currentHeight*100}%)`
      }
    ], {
      duration: 2000,
      fill: "forwards"
    })
  }

]

// pseudo 물의 느낌을 연출하기 위해서 멀리있는 물체 (다음 레이어 요소)를 뿌옇게 보이는 backdropfiler
function waterColorDeep(layerDiv){
layerDiv.animate([{
  opacity: 1,
},
{opacity:0.9,offset:0.6},
  {
  opacity: 0,
}], {
  duration: 2000,
  fill: "forwards"
})
}
function waterColorOut(layerDiv){
layerDiv.animate([{
  opacity: 0
},
{
  opacity: 1
}
], {
duration: 1000,
fill: "forwards"
})
}


export {currentPage,zoom,waterColorDeep,waterColorOut,layerArr}