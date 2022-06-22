export default function start(){
  window.addEventListener("wheel", function () {
  let scrollHeight = this.window.scrollY;
  let windowHeight = this.window.innerHeight;
  let docTotalHeight = this.document.body.offsetHeight;
  if (scrollHeight + windowHeight > docTotalHeight) {
    // memo 여기는 안움직임
    console.log("scroll is work")
    // allAboutRoot1(true)
  }
  
  console.log("function start() is work")
})
}