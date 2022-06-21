const container = document.getElementById("container");
const box = container.querySelector("div")
// console.log(container)
// console.dir(box)
container.style.width = "1920px"
container.style.height = "1080px"
container.style.backgroundColor = "black"
box.style.backgroundColor = "red"
box.style.position = "absolute"
box.style.borderRadius = Math.floor(Math.random()*80)+"%"


let randomWidth, randomHeight,randomLeft,randomTop;

let makeButton = document.createElement('button');
let button = container.appendChild(makeButton)
button.textContent = "click"

let buttonHandlerValue = true


let timer 


button.addEventListener("click",function(){
  if (buttonHandlerValue===true){
    timer = setInterval(function(){
      console.log("this is example")
    },1000)
    buttonHandlerValue = false;
  } else if (buttonHandlerValue === false){
    console.log("end")
    clearInterval(timer)
    buttonHandlerValue = true;
  }
})




// container.innerHTML =  '<button>click</button>';
// ? 위처럼 innerHTML을 사용해서 문자열을 html인것 처럼 쓰면 저 요소는 어떻게 가져와서 제어해야하는 지 모르겠음
// ? 그냥 getElementById는 안되던데?


// function randomNum(randomThing) {
//   setInterval(function(){  
//     randomWidth =  Math.floor(Math.random()*40),
//     randomHeight =  Math.floor(Math.random()*40)
//     randomLeft =  Math.floor(Math.random()*30)+10
//     randomTop =  Math.floor(Math.random()*30)+10
//   },60)
//   return randomThing
// }




// container.addEventListener("click",function(){
//   box.style.left = randomNum(randomWidth)+"px"
//   box.style.top = randomNum(randomHeight)+"px"
//   box.style.width = randomNum(randomLeft)+"px"
//   box.style.height= randomNum(randomTop) +'px'
// })

