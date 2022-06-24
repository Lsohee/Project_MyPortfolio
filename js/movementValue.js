
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
  opacity: 1
},
{opacity:0.9,offset:0.6},
  {
  opacity: 0
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



// pseudo 자세한 움직임 제어 값
// pseudo 지금 레이어 차례의 현재 값+ 변화 값 = 다음 레이어 차례의 현재 값 
// pseudo 변수는 변화값을 씀 (변하는 수가 변화 값이라는 소리)
// todo 좀더 세련되게 설명할 수는 없을까?

function zeroToI(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 1,
    x: 0,
    y: 0,
    ratio: 2,
    changeX: -160,
    changeY: -10
  });
  zoom[zoomArr]({
    layerDiv: 1,
    scale: 1,
    x: 0,
    y: 0,
    ratio: 1,
    changeX: -80,
    changeY: -10
  });
  zoom[zoomArr]({
    layerDiv: 2,
    scale: 1,
    x: 0,
    y: 0,
    ratio: 1.2,
    changeX: -60,
    changeY: -10
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 1,
    x: 0,
    y: 0,
    ratio: 1.1,
    changeX: -20,
    changeY: -10
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
  }
}

function IToMy(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 2,
    x: -160,
    y: -10,
    ratio: 12,
    changeX: -70,
    changeY: -40
  });
  zoom[zoomArr]({
    layerDiv: 1,
    scale: 1.5,
    x: -100,
    y: -30,
    ratio: 3.3,
    changeX: -320,
    changeY: -20
  });
  zoom[zoomArr]({
    layerDiv: 2,
    scale: 1.2,
    x: -10,
    y: -10,
    ratio: 2.5,
    changeX: -300,
    changeY: -0
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 1.1,
    x: -20,
    y: -10,
    ratio: 1.5,
    changeX: -330,
    changeY: -10
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
    waterColorDeep(layerArr[0])
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
    waterColorOut(layerArr[0])
  }
}
function MyToMe(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 10,
    x: 0,
    y: -40,
    ratio: 10,
    changeX: 0,
    changeY: -40
  });
  zoom[zoomArr]({
    layerDiv: 1,
    scale: 3.3,
    x: -320,
    y: -20,
    ratio: 10,
    changeX: -50,
    changeY: -20
  });
  zoom[zoomArr]({
    layerDiv: 2,
    scale:2.5,
    x: -300,
    y: -0,
    ratio: 7,
    changeX: -300,
    changeY: -20
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 1.5,
    x: -330,
    y: -10,
    ratio: 2.2,
    changeX: -130,
    changeY: -20
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
    waterColorDeep(layerArr[1])
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
    waterColorOut(layerArr[1])
  }
}
function MeToMyself(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 10,
    x: 0,
    y: -40,
    ratio: 10,
    changeX: 0,
    changeY: -40
  });
  zoom[zoomArr]({
    layerDiv: 1,
    scale: 3.3,
    x: -320,
    y: -20,
    ratio: 10,
    changeX: -50,
    changeY: -20
  });
  zoom[zoomArr]({
    layerDiv: 2,
    scale:7,
    x: -300,
    y: -20,
    ratio: 17,
    changeX: -400,
    changeY: -0
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 2.2,
    x: -130,
    y: -20,
    ratio: 4.2,
    changeX: -250,
    changeY: -30
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
    waterColorDeep(layerArr[2])
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
    waterColorOut(layerArr[2])
  }
}
function MyselfToLast(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 10,
    x: 0,
    y: -40,
    ratio: 10,
    changeX: 0,
    changeY: -40
  });
  zoom[zoomArr]({
    layerDiv: 1,
    scale: 3.3,
    x: -320,
    y: -20,
    ratio: 10,
    changeX: -50,
    changeY: -20
  });
  zoom[zoomArr]({
    layerDiv: 2,
    scale:17,
    x: -400,
    y: -0,
    ratio: 17,
    changeX: -400,
    changeY: -0
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 4.2,
    x: -250,
    y: -30,
    ratio: 20,
    changeX: -250,
    changeY: -50
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
    // waterColorDeep(layerArr[2])
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
    // waterColorOut(layerArr[2])
  }
}
function LastToMyself(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 10,
    x: 0,
    y: -40,
    ratio: 10,
    changeX: 0,
    changeY: -40
  });
  zoom[zoomArr]({
    layerDiv: 1,
    scale: 3.3,
    x: -320,
    y: -20,
    ratio: 10,
    changeX: -50,
    changeY: -20
  });
  zoom[zoomArr]({
    layerDiv: 2,
    scale:17,
    x: -400,
    y: -0,
    ratio: 17,
    changeX: -400,
    changeY: -0
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 4.2,
    x: -250,
    y: -30,
    ratio: 20,
    changeX: -250,
    changeY: -50
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
    // waterColorDeep(layerArr[2])
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
    // waterColorOut(layerArr[2])
  }
}





export {zeroToI,IToMy, MyToMe,MeToMyself,MyselfToLast,LastToMyself,currentPage}