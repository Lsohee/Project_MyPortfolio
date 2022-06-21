function zeroToI(zoomArr, startSplice) {
  zoom[zoomArr]({
    layerDiv: 0,
    scale: 1,
    x: 0,
    y: 0,
    ratio: 1.5,
    changeX: -100,
    changeY: -10
  });
  zoom[zoomArr]({
    layerDiv: 1,
    scale: 1,
    x: 0,
    y: 0,
    ratio: 1,
    changeX: -80,
    changeY: -10
  });
  zoom[zoomArr]({
    layerDiv: 2,
    scale: 1,
    x: 0,
    y: 0,
    ratio: 1.2,
    changeX: -60,
    changeY: -10
  });
  zoom[zoomArr]({
    layerDiv: 3,
    scale: 1,
    x: 0,
    y: 0,
    ratio: 1.1,
    changeX: -20,
    changeY: -10
  });
  if (zoomArr === 0) {
    currentPage.splice(startSplice, 2, false, true)
  } else if (zoomArr === 1) {
    currentPage.splice(startSplice, 2, true, false)
  }
}
export{zeroToI}