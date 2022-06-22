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
export {currentPage,movement}