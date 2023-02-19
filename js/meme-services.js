'use strict'

var gMeme
var gMemes = []
var gDrag = false

function setImg(imgEl){
    console.log(imgEl)
    gMeme = {
        selectedImgId: imgEl.id, 
        selectedLineIdx: 0, 
        lines: [
            { txt: ' ', 
            size: 50, 
            align: 'center', 
            color: '#000000',
            sColor: '#000000',
            x: 400,
            y: 100},
        ] ,
        
    }
}

function getMeme(){
    return gMeme
}

function setLineTxt(el){
    gMeme.lines[gMeme.selectedLineIdx].txt = el.value
}

function setColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setStrokeColor(color){
    gMeme.lines[gMeme.selectedLineIdx].sColor = color
}

function setSize(size){
    if (size >= 20 && size <= 100){
    gMeme.lines[gMeme.selectedLineIdx].size = size
    renderMeme()
    } else return
}

function addSize(){
    if (gMeme.lines[gMeme.selectedLineIdx].size >= 100) {
        return
    } else {
        gMeme.lines[gMeme.selectedLineIdx].size += 2
        renderMeme()
    }
}


function decSize(){
    if (gMeme.lines[gMeme.selectedLineIdx].size <= 20) {
        return
    } else {
        gMeme.lines[gMeme.selectedLineIdx].size -= 2
        renderMeme()
    }
}

function switchLines(){
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    }else {gMeme.selectedLineIdx = gMeme.selectedLineIdx + 1}
    console.log(gMeme.selectedLineIdx)
    renderMeme()
    //sets current values on DOM
    showValues()
}

function drawLine(x, y){
    gCtx.beginPath()
    gCtx.moveTo(x, y)
    gCtx.lineTo(x+400, y)
  
    gCtx.lineWidth = 5
    gCtx.strokeStyle = 'white'
    gCtx.stroke()
}

function addLine(txt =' '){
    if (gMeme.lines.length === 1){
        gMeme.lines.push({ txt, 
            size: 50, 
            align: 'center', 
            color: '#000000',
            sColor: '#000000',
            x: 400,
            y: 800})
            console.log(gMeme);
            gMeme.selectedLineIdx = gMeme.lines.length - 1
    } else {
    gMeme.lines.push({ txt, 
    size: 50, 
    align: 'center', 
    color: '#000000',
    sColor: '#000000',
    x: 400,
    y: 500})
    console.log(gMeme);
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    }
}

function drawRect(x1, y1, x2, y2) {
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(x1, y1, x2, y2)
  }

function removeLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    gMeme.selectedLineIdx = 0
}

function disableRemoveLine(){
    if (gMeme.lines.length === 1){
        document.querySelector('.remove-line').disabled = true
    } else {document.querySelector('.remove-line').disabled = false}
}

function alignChange(val){
    gMeme.lines[gMeme.selectedLineIdx].align = val
}

function moveUp(){
    gMeme.lines[gMeme.selectedLineIdx].y -= 10
}

function moveDown(){
    gMeme.lines[gMeme.selectedLineIdx].y += 10
}

function moveRight(){
    gMeme.lines[gMeme.selectedLineIdx].x += 10
}

function moveLeft(){
    gMeme.lines[gMeme.selectedLineIdx].x -= 10
}

function showValues(){
    var elTextColor = document.querySelector('.color')
    var elText = document.querySelector('.input-text1')
    elTextColor.value = gMeme.lines[gMeme.selectedLineIdx].color
    elText.value = gMeme.lines[gMeme.selectedLineIdx].txt
}

function setDrag(val){
    gDrag = val
}

// function saveToStorage(){
//     gMemes.push(gMeme)
//     console.log(gMemes)
// }

// function showSavedMemes(){
//     let elMemesCont = document.querySelector('.saved-memes')
//     let elGallery = document.querySelector('.gallery-modal')
//     var strHtmls = gMemes.map(meme =>
//         `<tr>
//             <td><img class="small-image" src="./img/${meme.selectedImgId}.jpg" alt=""></td>
//             <td>${meme.lines.length - 1}</td>
//             <td><button onclick="editMeme(${meme})">Edit</button></td>
//         </tr>`
//         )
//         strHtmls.unshift(`<table>
//         <tr>
//         <th>Image</th>
//         <th>Number Of Lines</th>
//         <th>Edit</th>
//     </tr>`
//     )
//     strHtmls.push(`</table>`)
//     elMemesCont.innerHTML = strHtmls.join('')
//     elMemesCont.classList.toggle('display-none')
//     elGallery.classList.toggle('display-none')
//     console.log(elGallery)
// }

// function editMeme(meme){
//     console.log(meme)
//     gMeme = meme
//     renderMeme()
//     let elMemesCont = document.querySelector('.saved-memes')
//     elMemesCont.classList.toggle('display-none')
// }