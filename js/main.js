'use strict'

let gElCanvas
let gCtx


function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function renderMeme() {
    var currMeme = getMeme()
    console.log(currMeme)
    var img = document.getElementById(currMeme.selectedImgId)
    gCtx.lineWidth = 3
    gCtx.strokeStyle = currMeme.lines[currMeme.selectedLineIdx].color
    gCtx.fillStyle = currMeme.lines[currMeme.selectedLineIdx].color
    gCtx.font = currMeme.lines[currMeme.selectedLineIdx].size + 'px arial'
    gCtx.textAlign = currMeme.lines[currMeme.selectedLineIdx].align
    gCtx.strokeText(currMeme.lines[currMeme.selectedLineIdx].txt, 400, 50)
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onImgSelect(el){
    setImg(el)
    renderMeme()
}

function onSetColor(color){
    setColor(color)
}



// function loadImageFromInput(ev, onImageReady) {
//     const reader = new FileReader()
//     // After we read the file
//     reader.onload = function (event) {
//         let img = new Image() // Create a new html img element
//         img.src = event.target.result // Set the img src to the img file we read
//         // Run the callBack func, To render the img on the canvas
//         img.onload = onImageReady.bind(null, img)
//         // Can also do it this way:
//         // img.onload = () => onImageReady(img)
//     }
//     reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
// }

