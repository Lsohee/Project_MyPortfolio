
const root2 = document.getElementById("root2");
const wirte = document.createElement("div");
let circles = Array.from(root2.children); 
// root2.un
// circles[0].appendChild(wirte)
// wirte.classList.add("textContents");


console.log(circles)
// circles.unshift(wirte)
// ? 이미지는 자식으로 안들어가니?
//  바보야 box2.children으로 해야지



wirte.textContent = ``




// // todo 1. box1없애기 2. box2 키우기 3. box1에 있는 요소 없애기
// memo 줌인은 css의 transform으로 하는 방법밖에 못찾음 -> 
//? css로 scale를 키우는 transform class를 만든다음 일정 값만큼 wheel를 했을때 class가 붙어서 작동하면 ?
// todo 1. css class 만들기 2. class를 붙이는 js코드 찾기

//  todo 3. 원 요소들의 기준점을 가운데, 즉 원점으로 옮기는 방법 찾기 4. 원요소들의 크기를 조절하는 class를 wheel이벤트에 따라 심었다 뺐다함 
  
  let current =1;
  // circles[1].style.transformOrigin = "50% 0";
  console.dir(circles[0]);
  // console.log(circles[1].style.offset)

  root2.addEventListener("click",function(){
    if(current===1){
    circles[0].classList.add("zoomInFirst")
    circles[1].classList.add("zoomInSecond")
    circles[2].classList.add("zoomInThird")
    circles[3].classList.add("zoomInFourth")
    console.log("I")
    current=2
    } else if(current===2){
    console.log("My")
    current=3
    }  else if(current ===3){
      console.log("Me");
      current=4
    } else if(current===4){
      console.log("Mine");
      current =1;
    }
  })
  // 요소를 에펙에서의 레이어처럼 써서 z-index로 겹친다음 크기를 키우는 비율을 다르게 둬서 줌인하는 듯한 효과를 줌
  // console.log(wirte)
  // wirte.classList.add("zoomOut")
  // wirte.remove()
