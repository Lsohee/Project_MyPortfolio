import textContants from "./contantText.js"

// pseudo text들어있는 div get
const intro = document.getElementById("intro")
const I = document.getElementById("I")
const contantDiv = document.getElementById("contants")

// pseudo 버튼이 될 공기방울 요소 get
const wantToLearnBtn = document.getElementById("wantToLearnBtn")
const prosAndConsBtn = document.getElementById("prosAndConsBtn")
const mottoBtn = document.getElementById("mottoBtn")
const projectsBtn = document.getElementById("projectsBtn")




// pseudo 이벤트 함수 묶음
export default function writeContant(){
  wantToLearnBtn.addEventListener("click", ()=>{
    contantDiv.innerHTML = textContants.wantToLearn
    console.log("wantToLearn")
  })
  
  prosAndConsBtn.addEventListener("click", () => {
    contantDiv.innerHTML = textContants.prosAndCons
    console.log("prosAndCons")
  })
  
  mottoBtn.addEventListener("click",()=>{
    contantDiv.innerHTML = textContants.motto
    console.log("motto")
  })

  projectsBtn.addEventListener("click",()=>{
    contantDiv.innerHTML = textContants.projects
    console.log("prrjects")
  })
  intro.innerHTML = textContants.intro
  I.innerHTML= textContants.I
}
