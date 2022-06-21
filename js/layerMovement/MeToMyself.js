export function MeToMyself(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 10,
    x: 0,
    y: -40,
    ratio: 10,
    changeX: 0,
    changeY: -40
  });
  zoom[zoomArr]({
    layerDiv: 1,
    scale: 3.3,
    x: -320,
    y: -20,
    ratio: 10,
    changeX: -50,
    changeY: -20
  });
  zoom[zoomArr]({
    layerDiv: 2,
    scale:7,
    x: -300,
    y: -0,
    ratio: 17,
    changeX: -400,
    changeY: -0
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 2.2,
    x: -130,
    y: -10,
    ratio: 4.2,
    changeX: -250,
    changeY: -20
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
    waterColorDeep(layerArr[2])
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
    waterColorOut(layerArr[2])
  }
}