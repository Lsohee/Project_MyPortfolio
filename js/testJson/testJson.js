const fs = require('fs');

fs.readFile('./json-example-1.json', 'utf-8', (error, jsonfile) => {
  if (error) { return error;}
  const jsonData = JSON.parse(jsonfile);
  // * 읽고 싶은 파일이 json 파일이기 때문에 자바스크립트 일반 객체로 보고자 JSON.parse() 메서드를 활용했다.
  console.log(jsonData); // * 일반적인 자바스크립트 객체방식으로 데이터를 조회할 수 있다
});

const example = {
  name:"피카츄",
  work:"programming" 
}

const exampleJSON = JSON.stringify(example);

fs.writeFileSync('test.JSON', exampleJSON);