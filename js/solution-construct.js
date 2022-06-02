const pageNation = ["A", "B", "C", "D"];

// pseudo 1. 배열의 원소들이 순차적이어야 하니까


// todo promise를 써서 비동기를 동기로 

// let pageNationIndex;
let pageNationIndex = 0;

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(pageNation[pageNationIndex]);
    pageNationIndex++;
    // console.log(pageNationIndex)
    resolve(pageNationIndex)
  }, 1000)
});


myPromise.then((currentIndex) => {
  if(currentIndex > 0){
    setTimeout(() => {
      console.log(pageNation[currentIndex]);
      console.log(currentIndex)
  }, 1000)}})
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