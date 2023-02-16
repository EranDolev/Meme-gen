'use strict'

var gMeme

function setImg(imgEl){
    console.log(imgEl)
    gMeme = {
        selectedImgId: imgEl.id, 
        selectedLineIdx: 0, 
        lines: [
            { txt: ' ', 
            size: 50, 
            align: 'left', 
            color: '#000000',
            y: 100},
            { txt: ' ', 
            size: 50, 
            align: 'left', 
            color: '#000000',
            y: 800}
        ] ,
        
    }
}

function getMeme(){
    return gMeme
}

function setLineTxt(el){
    console.log(el)
    console.log(el.id)
    gMeme.lines[gMeme.selectedLineIdx].txt = el.value
    console.log(gMeme)
    renderMeme()
    // gCtx.lineWidth = 3
    // gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color
    // gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
    // gCtx.font = gMeme.lines[gMeme.selectedLineIdx].size + 'px arial'
    // gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].align
    // // gCtx.textBaseline = 'middle'
    // // gCtx.fillText(val, 500, 500)
    // gCtx.strokeText(gMeme.lines[gMeme.selectedLineIdx].txt, 400, 50)
    console.log(gMeme)
}

function setColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
    // gCtx.lineWidth = 3
    // gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color
    // gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
    // gCtx.font = gMeme.lines[gMeme.selectedLineIdx].size + 'px arial'
    // gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].align
    // gCtx.strokeText(gMeme.lines[gMeme.selectedLineIdx].txt, 400, 50)
    console.log(gMeme)
}

function setSize(size){
    if (size >= 20 && size <= 80){
    gMeme.lines[gMeme.selectedLineIdx].size = size
    renderMeme()
    // gCtx.lineWidth = 3
    // gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color
    // gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
    // gCtx.font = gMeme.lines[gMeme.selectedLineIdx].size + 'px arial'
    // gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].align
    // gCtx.strokeText(gMeme.lines[gMeme.selectedLineIdx].txt, 400, 50)
    console.log(gMeme)
    } else return
}

function switchLines(){
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = 1
    }else {gMeme.selectedLineIdx = 0}
    console.log(gMeme.selectedLineIdx)
    renderMeme()

    //sets current values on DOM
    var elTextColor = document.querySelector('.color')
    var elText = document.querySelector('.input-text1')
    var elSize = document.getElementById('pixels')
    elTextColor.value = gMeme.lines[gMeme.selectedLineIdx].color
    elText.value = gMeme.lines[gMeme.selectedLineIdx].txt
    elSize.value = gMeme.lines[gMeme.selectedLineIdx].size
    console.log(elTextColor.value);
}

function drawLine(x, y){
    gCtx.beginPath()
    gCtx.moveTo(x, y)
    gCtx.lineTo(x+400, y)
  
    gCtx.lineWidth = 5
    gCtx.strokeStyle = 'white'
    gCtx.stroke()
}