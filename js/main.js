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
        gCtx.lineWidth = 2
        gCtx.strokeStyle = currMeme.lines[i].sColor
        gCtx.fillStyle = currMeme.lines[i].color
        gCtx.font = currMeme.lines[i].size + 'px Impact'
        gCtx.textAlign = currMeme.lines[i].align
        console.log(currMeme.selectedLineIdx);
        console.log(currMeme.lines.length);
        gCtx.strokeText(currMeme.lines[i].txt, currMeme.lines[i].x, currMeme.lines[i].y)
        gCtx.fillText(currMeme.lines[i].txt, currMeme.lines[i].x, currMeme.lines[i].y)
    }

    drawLine(currMeme.lines[currMeme.selectedLineIdx].x - 200, currMeme.lines[currMeme.selectedLineIdx].y + 20)
    drawLine(currMeme.lines[currMeme.selectedLineIdx].x - 200, currMeme.lines[currMeme.selectedLineIdx].y - currMeme.lines[currMeme.selectedLineIdx].size)

}

function onImgSelect(el) {
    setImg(el)
    renderMeme()
    var elGalleryModal = document.querySelector('.gallery-modal')
    var elMain = document.querySelector('.main-layout')
    let elMemesCont = document.querySelector('.saved-memes')
    elGalleryModal.style.display = 'none'
    elMain.style.display = 'flex'
}

function onSetColor(color) {
    setColor(color)
}

function onSetStrokeColor(color) {
    setStrokeColor(color)
}

function onSetSize(size) {
    setSize(size)
}

function onAddSize(){
    addSize()
}

function onDecSize(){
    decSize()
}

function onSwitchLines() {
    switchLines()
}

function onAddLine(txt){
    addLine(txt)
}

function onSetLineTxt(el){
    setLineTxt(el)
}

function onRemoveLine(){
    removeLine()
}

function onAlignChange(val){
   alignChange(val)
}

function onMoveUp(){
   moveUp()
}

function onMoveDown(){
   moveDown()
}

function onMoveRight(){
   moveRight()
}

function onMoveLeft(){
   moveLeft()
}

function onSetEmoji(emoji){
    onAddLine(emoji)
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

function downloadImg(elLink) {
    var currMeme = getMeme()
    var img = document.getElementById(currMeme.selectedImgId)

    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    for (var i = 0; i < currMeme.lines.length; i++) {
        gCtx.beginPath()
        gCtx.lineWidth = 3
        gCtx.strokeStyle = currMeme.lines[i].sColor
        gCtx.fillStyle = currMeme.lines[i].color
        gCtx.font = currMeme.lines[i].size + 'px Impact'
        gCtx.textAlign = currMeme.lines[i].align
        console.log(currMeme.selectedLineIdx);
        console.log(currMeme.lines.length);
        gCtx.strokeText(currMeme.lines[i].txt, currMeme.lines[i].x, currMeme.lines[i].y)
        gCtx.fillText(currMeme.lines[i].txt, currMeme.lines[i].x, currMeme.lines[i].y)
    }

    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    // Send a post req with the image to the server
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        // If the request is not done, we have no business here yet, so return
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        // if the response is not ok, show an error
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        // Same as
        // const url = XHR.responseText

        // If the response is ok, call the onSuccess callback function, 
        // that will create the link to facebook using the url we got
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
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

