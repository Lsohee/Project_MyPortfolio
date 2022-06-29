var requestRoot = "test.json"
var req = new XMLHttpRequest();
req.open("GET",requestRoot)
req.responseType = "json"
req.send(null);
let myData


req.onload = function(){
  myData = JSON.parse(JSON.stringify(req.response))
  console.log(myData)
}