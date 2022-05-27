/*
todo1: 요소 생성
1. 요소 동적 생성 or 요소 호출
뭐가 나을까 일단 html로 다 만들어놯으니까 호출로
*/
const container = document.getElementById("container");
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2");
// console.log(root2);
// console.dir(root2);
const layerArr = Array.from(root2.children);
// console.log(Array.isArray(layerArr));
// ? zoomIn 과 zoomOut 함수를 먼저 선언해 주면 안되나?
// let zoomIn = function(){};
// let zoomOut = function(){}; 

// memo 줌인 틀
zoomIn = function (layerDiv, ratio, layerDivX, layerDivY) {

  // if(current ===0 ){
  layerDiv.animate([{
      transform: ""
    },
    {
      transform: `scale(${ratio}) 
      translate(${layerDivX}%, ${layerDivY}% )`
    }
  ], {
    duration: 2000,
    fill: "forwards"
  })
}
// }




// memo 줌아웃 틀
zoomOut = function (layerDiv, ratio, layerDivX, layerDivY) {
  layerDiv.animate([{
    transform: ""
  }, {
    transform: `scale(${ratio})  translate(${layerDivX}%, ${layerDivY}% )`
  }], {
    duration: 2000,
    fill: "forwards"
  })
}





/* 
todo2: 이벤트 지정
1. wheel해서 나오는 값을 가져온다
2. 그 값이 일정 숫자가 되면 (구간을 설정?)
3. 이벤트 발생
*/
console.dir(window);
console.dir(root2);




// function zoom(event){
// event.preventDefault();
//? 이게 뭐야?
/*
 *Event 인터페이스의 preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우,
 *해당 이벤트에 대한 사용자 에이전트의 기본 동작(이 뭘까)을 실행하지 않도록 지정합니다.
 */
// console.log(event);
// 보니까 이 값은 딱 두가지 종류다 아래로 내리면 음수 위로 올리면 양수 
// ?그러면 음수일때 줌아웃 앙수일떄 줌인?
// }


// memo 스크롤 다시 올릴때 root1 안나오게 없앰
window.addEventListener("wheel", function () {
  let scrollHeight = this.window.scrollY;
  let windowHeight = this.window.innerHeight;
  let docTotalHeight = this.document.body.offsetHeight;
  if (scrollHeight + windowHeight > docTotalHeight) {
    root1.remove();
  }
})






// let current = 0;
// let current = 0;







// ? 3단계가 있는 버튼을 만들고 싶은데( 온<-> 중간<-> 오프 ) 판단식을 2개를 써서 시도함
// memo 함수를 무효화 시키는 코드? 
// memo try...catch 라는게 있대 

let one = {
  zoomInI: function () {
    // console.log("zoomInI")
    zoomIn(layerArr[0], 4, -10, -3);
    zoomIn(layerArr[1], 2, -20, -6);
    zoomIn(layerArr[2], 1.3, -30, -3);
    zoomIn(layerArr[3], 1.2, -30, -3);
  },
  zoomOutI: function () {
    zoomOut(layerArr[0], 4, -10, -3);
    zoomOut(layerArr[1], 2, -20, -6);
    zoomOut(layerArr[2], 1.3, -30, -3);
    zoomOut(layerArr[3], 1.2, -30, -3);
  }
}
let My = {
  zoomInMy: function () {
    zoomIn(layerArr[0], 5, 0, 0);
    zoomIn(layerArr[1], 4, 10, 6);
    zoomIn(layerArr[2], 2, 30, 0);
    zoomIn(layerArr[3], 1.5, 20, -3);
  },
  zoomOutMy: function () {
    zoomOut(layerArr[0], 5, 0, 0);
    zoomOut(layerArr[1], 4, 10, 6);
    zoomOut(layerArr[2], 2, 30, 0);
    zoomOut(layerArr[3], 1.5, 20, -3);
  }
}
// 

// console.log(zoomArr[0].zoomInI);
// let count ;
// count=0;

// function countFunc() {
  //   for (let i = 0; i < current.length; i++) {
    //     if (current[i] === true) {
      //       count++;
      //       // return count;
      //     }
      //   }
      // }
      
      // memo 스위치 역할을 할 핸들러 변수 생성
currentValue = "a";

root2.addEventListener("wheel", (event) => {
  
  // console.log(count)
  
  if (event.wheelDelta < 0 && currentValue === 'a') {//줌인 두번째 -> 결과 : I 페이지
    one.zoomInI()
    console.log("go to page I ")
    currentValue = "b"
  } else if (event.wheelDelta > 0 &&currentValue ==="a" ) {// 줌아웃 -> 0페이지
    // console.log("zoom out from I")
    console.log("back to page 0 ")
    one.zoomOutI()
    // currentValue = "a"
  } 
  
  
  
  else if(event.wheelDelta <0 && currentValue === "b"){ //줌인 두번째 -> 결과 : My 페이지
    console.log("go to page My");
    currentValue = "c"
    
  }else if(event.wheelDelta>0&& currentValue==="b"){ // 줌아웃 두번째-> I 페이지
    // one.zoomOutI()
    console.log("back to page I ");
    currentValue = "a"
  } 
  
  
  
  
  
  else if(event.wheelDelta <0 && currentValue ==="c"){ //줌인 세번째 -> 결과 : Me 페이지
    console.log("go to page Me");
    currentValue ="d"
  }else if(event.wheelDelta>0&&currentValue ==="c" ){// 줌아웃 세번째 -> My페이지
    console.log("back to page My");
    currentValue = "b"
  }
  
  
  
  
  
  else if(event.wheelDelta <0 && currentValue ==="d"){ //줌인 네번째 -> 결과 : Myself 페이지
    console.log("go to page Myself");
    // currentValue = "c"
  }else if(event.wheelDelta>0 && currentValue ==="d"){// 줌아웃  네번째 -> Me페이지
    console.log("back to page Me");
    currentValue = "c"
  }

})


// console.dir(wheelValue);
// todo 질문 : wheel을 굴렸을때 스크롤의 높이 말고 휠을 굴린 만큼 값으로 치환해주는 코드를 찾아서 window의 wheelEvent를 찾게 되었는데
// memo 아 그럼 property가 유사 배열인가요? 갑자기 질문하다가 생각났습니다 



// window.addEventListener("wheel",()=>{
// })
// ?스크롤 값을 가져오긴 했는데 현재 스크롤 값이 계속 가져와지지 않음 -> 검색
// memo window에 이벤트 wheel 달아주면 됨
/*
!문제가 생김 scrollX 는 스크롤의 위치좌표라 무한대로 늘어나지 않음 
? 스크롤의 높이로 이벤트를 제어할 수 없다면 어떻게 해야 좋을까?
1. click이벤트로 바꾼다
2. 휠을 굴린 만큼" 을 뜻하는 값을 찾는다
*/




/* 
todo3:  변수
1. 움직이는 레이어 div
2. 크기 증가률
3. 레이어 div의 기준점

todo4: 줌인 함수 설계
3. 크기가 커지는 움직임 주는 함수 
- 기준점을 원하는 곳으로 변경
- width와 height가 1씩 커진다(setInterval)
- 원하는 크기가 되었을때 (if문)
- 멈춘다 (setTimeOut)
*/
// console.dir(layerArr[0].style);
// layerArr[0].style.size = 7;
// layerArr[0].style.zoom = 1.2;



// todo animate 를 쓰려고 시도해봤으나 막힘

// let In = setInterval(function(layerDiv){
//   if()
// },2000)

/* 
todo5: 줌아웃 함수 transform-origin:${layerDivX}% ${layerDivY}%
1. 크기가 작아지는 움직임 주는 함수(setInterval)
- width와 height가 1씩 작아진다(setInterval)
- 원하는 크기가 되었을때 (if문)
- 멈춘다 (setTimeOut)
*/