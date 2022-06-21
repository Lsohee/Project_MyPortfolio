export function MyToMe(zoomArr, startSplice) {
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
    scale:2.5,
    x: -300,
    y: -0,
    ratio: 7,
    changeX: -300,
    changeY: -0
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 1.5,
    x: -330,
    y: -10,
    ratio: 2.2,
    changeX: -130,
    changeY: -10
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
    waterColorDeep(layerArr[1])
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
    waterColorOut(layerArr[1])
  }
}