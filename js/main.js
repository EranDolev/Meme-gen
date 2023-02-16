'use strict'

let gElCanvas
let gCtx


function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
}

function renderMeme() {
    disableRemoveLine()
    var currMeme = getMeme()
    var img = document.getElementById(currMeme.selectedImgId)

    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    for (var i = 0; i < currMeme.lines.length; i++) {
        gCtx.beginPath()
        gCtx.lineWidth = 1
        gCtx.strokeStyle = currMeme.lines[i].color
        gCtx.fillStyle = currMeme.lines[i].color
        gCtx.font = currMeme.lines[i].size + 'px Impact'
        gCtx.textAlign = currMeme.lines[i].align
        console.log(currMeme.selectedLineIdx);
        console.log(currMeme.lines.length);
        gCtx.strokeText(currMeme.lines[i].txt, 400, currMeme.lines[i].y)
        gCtx.fillText(currMeme.lines[i].txt, 400, currMeme.lines[i].y)
    }

    drawLine(400, currMeme.lines[currMeme.selectedLineIdx].y + 20)
    drawLine(400, currMeme.lines[currMeme.selectedLineIdx].y - currMeme.lines[currMeme.selectedLineIdx].size)

}

function onImgSelect(el) {
    setImg(el)
    renderMeme()
    var elGalleryModal = document.querySelector('.gallery-modal')
    var elMain = document.querySelector('.main-layout')
    elGalleryModal.style.display = 'none'
    elMain.style.display = 'flex'
}

function onSetColor(color) {
    setColor(color)
}

function onSetSize(size) {
    setSize(size)
}

function onSwitchLines() {
    switchLines()
}

function showGallery() {
    var elGalleryModal = document.querySelector('.gallery-modal')
    var elMain = document.querySelector('.main-layout')
    elGalleryModal.style.display = 'flex'
    elMain.style.display = 'none'
}

function toggleMenu(){
    document.querySelector('.header-links').classList.toggle('display-block')
    if (document.querySelector('.menu').innerHTML === 'X'){
        document.querySelector('.menu').innerHTML = '☰'
    } else {document.querySelector('.menu').innerHTML = 'X'}
}

// function addTextLine() {
//     var elTxtSection = document.querySelector('.text-edit')
//     elTxtSection.innerHTML += '<input oninput="setLineTxt(this)" id="1" class="input-text1" type="text"></input>'
//     gMeme.lines.push({
//         txt: ' ',
//         size: 50,
//         align: 'left',
//         color: 'red'
//     })
// }



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

