import textContants from "./contantText.js"

// pseudo text들어있는 div get
const intro = document.getElementById("intro")
const I = document.getElementById("I")
const contantDiv = document.getElementById("contants")
const Me = document.getElementById("me")
const Myself1 = document.getElementById("Myself1")
const Myself2 = document.getElementById("Myself2")

// pseudo 버튼이 될 공기방울 요소 get
const wantToLearnBtn = document.getElementById("wantToLearnBtn")
const prosAndConsBtn = document.getElementById("prosAndConsBtn")
const mottoBtn = document.getElementById("mottoBtn")
const projectsBtn = document.getElementById("projectsBtn")
const pickMeBtn = document.getElementById("pickMe")
const makeHappy = document.getElementById("makeHappy")





// pseudo 이벤트 함수 묶음
export default function writeContant(){

  // pseudo My 페이지에서의 클릭 이벤트 
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
    let projectLinks = Array.from(contantDiv.children)

    // pseudo 각각의 프로젝트 설명 notion으로 이동하는 링크함수와 클릭 이벤트 연결
    projectLinks[2].onclick = moveToCocktail 
    projectLinks[2].style = " cursor: pointer;"

    projectLinks[3].onclick = moveToIDle
    projectLinks[3].style = " cursor: pointer;"
    
    projectLinks[4].onclick = moveToCube
    projectLinks[4].style = " cursor: pointer;"
    
    projectLinks[5].onclick = moveToFishgame
    projectLinks[5].style = " cursor: pointer;"

    projectLinks[6].onclick = moveToPortfolio
    projectLinks[6].style = " cursor: pointer;"
    
  })


  //  pseudo 내용
  intro.innerHTML = textContants.intro
  I.innerHTML= textContants.I
  Myself1.innerHTML = textContants.Myself1
  Myself2.innerHTML = textContants.Myself2


  pickMeBtn.addEventListener("click",()=>{
    Me.src = "./img/뽑아야하는 이유 3px.svg"
  })
  makeHappy.addEventListener("click",()=>{
    Me.src = "./img/행복하게 하는 것 저는 행복을 자아 실현이라고 생각합니다 거창하게 들리지만 그 방법은 간단합니다 내가 좋아하는 것, 싫어하는 것등등 나에 대한 것들을 하나씩 알아가면 어느 순간 내가 행복해지려면 무엇이 필요한지 알 수 있을 거라는게 제 결론입니다._행복하게 하는 것 저는 행복을 자아 실현이라고 생각합니다 거창하게 들리지만 그 방법은 간단합니다 내가 좋아하는 것, 싫어.svg"
  })



}

// pseudo 각각의 프로젝트의 링크를 연결해주는 함수
function moveToCocktail(){
window.open( "https://second-seaplane-826.notion.site/8b6e6dba46b64a04847452452ea65daf")
}

function moveToIDle(){
window.open("https://second-seaplane-826.notion.site/0c411ed3137a4aedb5fbfc07af0e7521")
}

function moveToCube(){
  window.open("https://second-seaplane-826.notion.site/6cc90d55e2be4742a3dd4081efce27a0")
}

function moveToFishgame(){
  window.open("https://second-seaplane-826.notion.site/fish-game-8c16b0e6de29497ab7d05731702603dc")
}

function moveToPortfolio(){
  window.open("https://second-seaplane-826.notion.site/c1afe8248a2e44ada52750aea44e2a58")
}