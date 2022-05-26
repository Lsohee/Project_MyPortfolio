/*
todo1: 요소 생성
1. 요소 동적 생성 or 요소 호출
뭐가 나을까 일단 html로 다 만들어놯으니까 호출로
*/
const root2 = document.getElementById("root2");
// console.log(root2);
// console.dir(root2);
const layerArr = Array.from(root2.children);
// console.log(Array.isArray(layerArr));


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
  
  root2.addEventListener("wheel",(event)=>{
  console.log(event.wheelDelta)
  if(event.wheelDelta > 0 ){
    console.log("zoom in");
  }else if(event.wheelDelta<0){
    console.log("zoom out")
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

todo5: 줌아웃 함수
1. 크기가 작아지는 움직임 주는 함수(setInterval)
- width와 height가 1씩 작아진다(setInterval)
- 원하는 크기가 되었을때 (if문)
- 멈춘다 (setTimeOut)
*/ 