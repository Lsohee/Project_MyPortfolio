function waterColorDeep(layerDiv){
  layerDiv.animate([{
    opacity: 1
  },
  {opacity:0.9,offset:0.6},
    {
    opacity: 0
  }], {
    duration: 2000,
    fill: "forwards"
  })
  }
  function waterColorOut(layerDiv){
  layerDiv.animate([{
    opacity: 0
  },
  {
    opacity: 1
  }
  ], {
  duration: 1000,
  fill: "forwards"
  })
  }
  export {waterColorDeep}