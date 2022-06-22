export default function allAboutRoot2(trueValue){
  function createLayer(layerValue){
    return `<div>hello world this is layer ${layerValue}</div>`
  }
  root2.innerHTML = `${createLayer(0)}${createLayer(1)}${createLayer(2)}${createLayer(3)}`
 
  }