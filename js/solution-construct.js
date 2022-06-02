const pageNation = ["A", "B", "C", "D"];

// pseudo 1. 배열의 원소들이 순차적이어야 하니까


// todo promise를 써서 비동기를 동기로 

// let pageNationIndex;
let pageNationIndex = 0;

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(pageNation[pageNationIndex]);
    pageNationIndex++;
    resolve(pageNationIndex)
  }, 1000)
});



// 원래의 코드와 같은 기능을 함
// --> 그러나 원래의 코드와 같은 방식으로 작동하지는 않는 상태 : 억지로 시간을 늘려줘야함
// ? 어떻게 해야 then을 이용해서 동기식 처리를 할 수 있을까?

// 반복되는 코드를 반복문으로 처리할 수 는 없을까?







myPromise.then((currentIndex) => {
  if (currentIndex > 0) {
    setTimeout(() => {
      console.log(pageNation[currentIndex]);
      currentIndex ++
    }, 1000)
  }
  return "이것은 첫번째 then의 리턴입니다"; // 이 함수의 객체 .then에서 받는 매개변수의 인자는 이 함수의 리턴 
}).then((currentIndex) => {
  console.log(currentIndex)
  return currentIndex + 1
}).then((currentIndex) => {
  if (currentIndex > 2) {
    setTimeout(() => {
      console.log(pageNation[currentIndex]);
      console.log("over")
    }, 3000)
  }
})





// return currentIndex;
// }).then((currentIndex)=>{
//   console.log(currentIndex)
//   if(currentIndex > 1){
//     setTimeout(() => {
//       console.log(pageNation[currentIndex]);
//       console.log("over")
//     }, 1000)
//   }
// })

//  todo 함수를 재사용할수있게 만듬 







// if (pageNationIndex > 1) {
//   let timeC = setTimeout(()=> {
//     console.log(pageNation[pageNationIndex]);
//     pageNationIndex++;
//     if(pageNationIndex > 2) {
//       let timeD = setTimeout(() => {
//         console.log(pageNation[pageNationIndex]);
//         pageNationIndex++;
//       },1000);
//     }
//   },1000);
// }