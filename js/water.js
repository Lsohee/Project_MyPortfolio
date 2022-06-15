const container = document.getElementById("container");
const box = container.querySelector("div")
console.log(container)
console.dir(box)
container.style.width = "1920px"
container.style.height = "1080px"
container.style.backgroundColor = "black"
box.style.backgroundColor = "red"
box.style.position = "absolute"




let randomWidth, randomHeight;
function randomNum(randomThing) {
  randomWidth =  Math.floor(Math.random()*1800),
  randomHeight =  Math.floor(Math.random()*1000)
  randomLeft =  Math.floor(Math.random()*100)
  randomTop =  Math.floor(Math.random()*100)
  return randomThing
}




container.addEventListener("click",function(){
  box.style.left = randomNum(randomWidth)+"px"
  console.log(randomNum(randomWidth))
  box.style.top = randomNum(randomHeight)+"px"
  console.log(randomNum(randomHeight))
  box.style.width = randomNum(randomLeft)+"px"
  box.style.height= randomNum(randomTop) +'px'
})

