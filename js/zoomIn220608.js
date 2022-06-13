const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const layerArr = Array.from(root2.children);



let zoomArr,startSplice

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
      translate(${(movementValueObject.x)/(currentWidth)*100}%, ${(movementValueObject.y)/(currentHeight)*100}%)`
    },
    {
      transform: `scale(${movementValueObject.ratio}) 
      translate(${(movementValueObject.changeX)/currentWidth*100}%,${(movementValueObject.changeY)/currentHeight*100}%)`
    }
  ], {
    duration: 2000,
    fill: "forwards"
  })
  console.log("scale = " +(movementValueObject.ratio));
  console.log("x+changeX = "+(movementValueObject.changeX))
  console.log("y+changeY = "+(movementValueObject.changeY))
  console.log("----------------")
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








let currentPage = [true, false, false, false, false]
// memo 줌인 줌아웃 제어 함수
function movement() {
  root2.addEventListener("wheel", (event) => {
    if (event.wheelDelta > 0 && currentPage[0] === true) {
      console.log("움직이지 않습니다")

    } else if (event.wheelDelta < 0 && currentPage[0] === true) {
      console.log("zero에서 I로 이동합니다")
      console.log(currentPage)
      zeroToI(0,0)
    } else if (event.wheelDelta < 0 && currentPage[1] === true) {
      console.log("I에서 My로 이동합니다")
      currentPage.splice(1, 2, false, true)
      console.log(currentPage)
      IToMy(0,1)
    } else if (event.wheelDelta < 0 && currentPage[2] === true) {
      console.log("My에서 Me로 이동합니다")
      currentPage.splice(2, 2, false, true)
      console.log(currentPage)
      MyToMe()
    } else if (event.wheelDelta < 0 && currentPage[3] === true) {
      console.log("Me에서 Myself로 이동합니다")
      currentPage.splice(3, 2, false, true)
      console.log(currentPage)

    } else if (event.wheelDelta > 0 && currentPage[4] === true) {
      console.log("Myself에서 Me로 이동합니다")
      currentPage.splice(3, 2, true, false)
      console.log(currentPage)
    } else if (event.wheelDelta > 0 && currentPage[3] === true) {
      console.log("Me에서 My로 이동합니다")
      currentPage.splice(2, 2, true, false)
      console.log(currentPage)
      MeToMy()
    } else if (event.wheelDelta > 0 && currentPage[2] === true) {
      console.log("My에서 I로 이동합니다")
      currentPage.splice(1, 2, true, false)
      console.log(currentPage)
      IToMy(1,1)
    } else if (event.wheelDelta > 0 && currentPage[1] === true) {
      console.log("I에서 zero로 이동합니다")
      zeroToI(1,0)
      console.log(currentPage)
    }
  })

}




// memo 움직임 제어를 위한 함수 호출을 레이어와 움직임 종류로 묶는 용도 함수

//  ? 배열과 객체를 어떻게 이용하면 숫자를 한번만 쓸 수 있을 거 같은데

// ^ zero와 I 사이의 움직임



function zeroToI(zoomArr,startSplice) {
  zoom[zoomArr]({
    layerDiv : 0,
    scale : 1,
    x : 0,
    y : 0,
    ratio : 2,
    changeX : -140,
    changeY : -60
  }
  );
  zoom[zoomArr]({
    layerDiv : 1,
    scale : 1,
    x : 0,
    y : 0,
    ratio : 1.5,
    changeX : -100,
    changeY : -30
  }
  );
  zoom[zoomArr]({
    layerDiv : 2,
    scale : 1,
    x : 0,
    y : 0,
    ratio : 1.2,
    changeX : -60,
    changeY : -10
  }
  );
  zoom[zoomArr]({
    layerDiv : 3,
    scale : 1,
    x : 0,
    y : 0,
    ratio : 1.1,
    changeX : -20,
    changeY : -10
  }
  );
  if(zoomArr === 0){
    currentPage.splice(startSplice, 2, false, true)
  }else if (zoomArr ===1){
    currentPage.splice(startSplice, 2,  true,false)
  }
}

function IToMy(zoomArr,startSplice) {
  zoom[zoomArr]({
    layerDiv : 0,
    scale : 2,
    x : -140,
    y: -60,
    ratio : 5,
    changeX :0, 
    changeY:-40
   }
  );
  zoom[zoomArr]({
    layerDiv : 1,
    scale : 1.5,
    x : -100,
    y : -30,
    ratio : 2,
    changeX : -200,
    changeY:-50
  }
  );
  zoom[zoomArr]({
    layerDiv : 2,
    scale : 1.2,
    x : -60,
    y : -10,
    ratio : 1.5,
    changeX : -100,
    changeY : -20
  }
  );
  // zoom[zoomArr]({
  //   layerDiv : 3,
  //   scale : 1,
  //   x : 0,
  //   y : 0,
  //   ratio : 1.1,
  //   changeX : -20,
  //   changeY : -10
  // }
  // );
  if(zoomArr === 0){
    currentPage.splice(startSplice, 2, false, true)
  }else if (zoomArr ===1){
    currentPage.splice(startSplice, 2,  true,false)
  }
}
