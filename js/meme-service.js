'use strict'

var gMeme

function setImg(imgEl){
    console.log(imgEl)
    gMeme = {
        selectedImgId: imgEl.id, 
        selectedLineIdx: 0, 
        lines: [
            { txt: 'I sometimes eat Falafel', 
            size: 50, 
            align: 'left', 
            color: 'red' }
        ] 
    }
}

function getMeme(){
    return gMeme
}

function setLineTxt(txt){
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    renderMeme()
    gCtx.lineWidth = 3
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.font = gMeme.lines[gMeme.selectedLineIdx].size + 'px arial'
    gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].align
    // gCtx.textBaseline = 'middle'
    // gCtx.fillText(val, 500, 500)
    gCtx.strokeText(gMeme.lines[gMeme.selectedLineIdx].txt, 400, 50)
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