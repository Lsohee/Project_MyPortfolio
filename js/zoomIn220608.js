const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const layerArr = Array.from(root2.children);



let currentPage = [true, false, false, false, false]


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
  function (layerDiv, scale, x, y, ratio, changeX, changeY) {
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
    console.log("scale = " +(scale +ratio));
    console.log("x+changeX = "+(x+changeX))
    console.log("y+changeY = "+(y+changeY))
    console.log("----------------")
  },
  function (layerDiv, scale, x, y, ratio, changeX, changeY) {
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

]








// memo 줌인 줌아웃 제어 함수
function movement() {
  root2.addEventListener("wheel", (event) => {
    if (event.wheelDelta > 0 && currentPage[0] === true) {
      console.log("움직이지 않습니다")

    } else if (event.wheelDelta < 0 && currentPage[0] === true) {
      console.log("zero에서 I로 이동합니다")
      currentPage.splice(0, 2, false, true)
      console.log(currentPage)
      zeroToI()
    } else if (event.wheelDelta < 0 && currentPage[1] === true) {
      console.log("I에서 My로 이동합니다")
      currentPage.splice(1, 2, false, true)
      console.log(currentPage)
      IToMy()
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
      MyToI()
    } else if (event.wheelDelta > 0 && currentPage[1] === true) {
      console.log("I에서 zero로 이동합니다")
      currentPage.splice(0, 2, true, false)
      console.log(currentPage)
      IToZero()
    }
  })

}




// memo 움직임 제어를 위한 함수 호출을 레이어와 움직임 종류로 묶는 용도 함수

function zeroToI() {
  //  ? 배열과 객체를 어떻게 이용하면 숫자를 한번만 쓸 수 있을 거 같은데
  zoom[0](layerArr[0], 1, 0, 0, 1, -240, -60);
  zoom[0](layerArr[1], 1, 0, 0, 0.5, -100, -30);
  zoom[0](layerArr[2], 1, 0, 0, 0.2, -60, -10);
  zoom[0](layerArr[3], 1, 0, 0, 0.1, -20,-10);
}
function IToZero() {
  zoom[1](layerArr[0], 1, 0, 0, 1, -240, -60);
  zoom[1](layerArr[1], 1, 0, 0, 0.5, -100, -30);
  zoom[1](layerArr[2], 1, 0, 0, 0.2, -60, -10);
  zoom[1](layerArr[3], 1, 0, 0, 0.1, -20, -10);
}





function IToMy() {
  zoom[0](layerArr[0], 2, -240, -60, 6, 100, -30);
  zoom[0](layerArr[1], 1.5, -100, -30, 2.8, -150, -40);
  zoom[0](layerArr[2], 1.2, -60, -10, 1.8, -120, -40);
  zoom[0](layerArr[3], 1.1, -20, -10, 0.9, -60, -60);
}
function MyToI() {
  zoom[1](layerArr[0], 2, -240, -60, 6, 100, -30);
  zoom[1](layerArr[1], 1.5, -100, -30, 2.8, -150, -40);
  zoom[1](layerArr[2], 1.2, -60, -10, 1.8, -120, -40);
  zoom[1](layerArr[3], 1.1, -20, -10, 0.9, -60, -60);
}





// memo My - Me 3번이 실행되게
function MyToMe() {
  zoom[0](layerArr[0], 8, -140, -90, 4, 0, 80);
  zoom[0](layerArr[1], 4.3, -250, -70, 5, -100, 0);
  zoom[0](layerArr[2], 3, -180, -50, 7, -170, 20);
  zoom[0](layerArr[3], 2, -80, -70, 3, -270, 20);
}
// memo Me - Myself 4번이 실행되게
function MeToMy() {
  zoom[1](layerArr[0], 8, -140, -90, 4, 0, 80);
  zoom[1](layerArr[1], 4.3, -250, -70, 5, -100, 0);
  zoom[1](layerArr[2], 3, -180, -50, 7, -170, 20);
  zoom[1](layerArr[3], 2, -80, -70, 3, -270, 20);
}