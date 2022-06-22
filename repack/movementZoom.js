let zoom = [
  function (movementValueObject) {
    layerArr[movementValueObject.layerDiv].animate([{
        transform: `scale(${movementValueObject.scale}) 
      translate(${(movementValueObject.x)/(currentWidth)*100}%, ${(movementValueObject.y)/(currentHeight)*100}%)
      `
      },
      {
        transform: `scale(${movementValueObject.ratio}) 
      translate(${(movementValueObject.changeX)/currentWidth*100}%,${(movementValueObject.changeY)/currentHeight*100}%) 
      `
      }
    ], {
      duration: 2000,
      fill: "forwards"
    })
  },
  function (movementValueObject) {
    layerArr[movementValueObject.layerDiv].animate([{
        transform: `scale(${movementValueObject.ratio}) 
    translate(${(movementValueObject.changeX)/currentWidth*100}%, ${(movementValueObject.changeY)/currentHeight*100}%)`
      },
      {
        transform: `scale(${movementValueObject.scale}) 
    translate(${(movementValueObject.x)/currentWidth*100}%,${(movementValueObject.y)/currentHeight*100}%)`
      }
    ], {
      duration: 2000,
      fill: "forwards"
    })
  }

]

export {zoom}