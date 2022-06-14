const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const layerArr = Array.from(root2.children);



let zoomArr, startSplice

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

let currentPage = [true, false, false, false, false,false]
// memo 줌인 줌아웃 제어 함수
function movement() {
  root2.addEventListener("wheel", (event) => {
    if (event.wheelDelta > 0 && currentPage[0] === true) {
      console.log("움직이지 않습니다")
    } else if (event.wheelDelta < 0 && currentPage[0] === true) {
      console.log("zero에서 I로 이동합니다")
      zeroToI(0, 0)
    } else if (event.wheelDelta < 0 && currentPage[1] === true) {
      console.log("I에서 My로 이동합니다")
      IToMy(0, 1)
    } else if (event.wheelDelta < 0 && currentPage[2] === true) {
      console.log("My에서 Me로 이동합니다")
      MyToMe(0,2)
    } else if (event.wheelDelta < 0 && currentPage[3] === true) {
      console.log("Me에서 Myself로 이동합니다")
      MeToMyself(0,3)
    } else if (event.wheelDelta < 0 && currentPage[4] === true) {
      console.log("최종입니다")
      MyselfToLast(0,4)
    } else if (event.wheelDelta < 0 && currentPage[5] === true) {
      console.log("움직이지 않습니다")
      currentPage.splice(4, 2,  false,true)
    } else if (event.wheelDelta > 0 && currentPage[5] === true) {
      LastToMyself(1,4)
      console.log(currentPage)
      console.log("Myself에서 Me로 이동합니다")
    } else if (event.wheelDelta > 0 && currentPage[4] === true) {
      MeToMyself(1,3)
      console.log("Myself에서 Me로 이동합니다")
    } else if (event.wheelDelta > 0 && currentPage[3] === true) {
      console.log("Me에서 My로 이동합니다")
      MyToMe(1,2)
    } else if (event.wheelDelta > 0 && currentPage[2] === true) {
      console.log("My에서 I로 이동합니다")
      IToMy(1, 1)
    } else if (event.wheelDelta > 0 && currentPage[1] === true) {
      console.log("I에서 zero로 이동합니다")
      zeroToI(1, 0)
    }
  })

}




// memo 움직임 제어를 위한 함수 호출을 레이어와 움직임 종류로 묶는 용도 함수

//  ? 배열과 객체를 어떻게 이용하면 숫자를 한번만 쓸 수 있을 거 같은데

// ^ zero와 I 사이의 움직임



function zeroToI(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 1,
    x: 0,
    y: 0,
    ratio: 1.5,
    changeX: -100,
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
    scale: 1.5,
    x: -100,
    y: -10,
    ratio: 10,
    changeX: 0,
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
    changeY: -0
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 1.5,
    x: -330,
    y: -10,
    ratio: 2.2,
    changeX: -130,
    changeY: -10
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
    y: -0,
    ratio: 17,
    changeX: -400,
    changeY: -0
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 2.2,
    x: -130,
    y: -10,
    ratio: 4.2,
    changeX: -250,
    changeY: -20
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
    y: -20,
    ratio: 20,
    changeX: -250,
    changeY: -20
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
    y: -20,
    ratio: 20,
    changeX: -250,
    changeY: -20
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
    // waterColorDeep(layerArr[2])
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
    // waterColorOut(layerArr[2])
  }
}

