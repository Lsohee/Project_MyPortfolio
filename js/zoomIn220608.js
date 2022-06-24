// pseudo 정적 문서 get
const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
const intro = document.getElementById("intro")

// pseudo 파일 import 
import textContants from "./contantText.js"
import {zeroToI,IToMy, MyToMe,MeToMyself,MyselfToLast,LastToMyself,currentPage} from "./movementValue.js"


// memo 주석과 변수이름좀 똑바로 지어라


// pseudo 내용 삽입(innerHTML에 삽입 string이고 배열이라 키값이 숫자임)
// todo (나중에 객체로 바꾸는게 더 알아보기가 쉽겠다)
intro.innerHTML = textContants.intro




// pseudo 맨 밑까지 스크롤이 내려갔을시 root1을 제거하고 스크롤 이벤트 함수 호출
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


// pseudo 줌인 줌아웃 제어 함수
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
