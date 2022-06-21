function IToMy(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 1.5,
    x: -100,
    y: -10,
    ratio: 10,
    changeX: 0,
    changeY: -40
  });
  zoom[zoomArr]({
    layerDiv: 1,
    scale: 1.5,
    x: -100,
    y: -30,
    ratio: 3.3,
    changeX: -320,
    changeY: -20
  });
  zoom[zoomArr]({
    layerDiv: 2,
    scale: 1.2,
    x: -10,
    y: -10,
    ratio: 2.5,
    changeX: -300,
    changeY: -0
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 1.1,
    x: -20,
    y: -10,
    ratio: 1.5,
    changeX: -330,
    changeY: -10
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
    waterColorDeep(layerArr[0])
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
    waterColorOut(layerArr[0])
  }
}
export{IToMy}