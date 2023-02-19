'use strict'

let gElCanvas
let gCtx


function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    renderEmojis()
}

function renderMeme() {
    disableRemoveLine()
    let currMeme = getMeme()
    let img = document.getElementById(currMeme.selectedImgId)

    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    for (var i = 0; i < currMeme.lines.length; i++) {
        gCtx.beginPath()
        gCtx.lineWidth = 2
        gCtx.strokeStyle = currMeme.lines[i].sColor
        gCtx.fillStyle = currMeme.lines[i].color
        gCtx.font = currMeme.lines[i].size + 'px Impact'
        gCtx.textAlign = currMeme.lines[i].align
        gCtx.strokeText(currMeme.lines[i].txt, currMeme.lines[i].x, currMeme.lines[i].y)
        gCtx.fillText(currMeme.lines[i].txt, currMeme.lines[i].x, currMeme.lines[i].y)
    }

    drawLine(currMeme.lines[currMeme.selectedLineIdx].x - 200, currMeme.lines[currMeme.selectedLineIdx].y + 20)
    drawLine(currMeme.lines[currMeme.selectedLineIdx].x - 200, currMeme.lines[currMeme.selectedLineIdx].y - currMeme.lines[currMeme.selectedLineIdx].size)
    // drawRect(currMeme.lines[currMeme.selectedLineIdx].x - currMeme.lines[currMeme.selectedLineIdx].txt.length * 22, currMeme.lines[currMeme.selectedLineIdx].y - currMeme.lines[currMeme.selectedLineIdx].size, currMeme.lines[currMeme.selectedLineIdx].x + 300, currMeme.lines[currMeme.selectedLineIdx].y)
}

function onImgSelect(el) {
    setImg(el)
    renderMeme()
    let elGalleryModal = document.querySelector('.gallery-modal')
    let elMain = document.querySelector('.main-layout')
    let elBtbGallery = document.querySelector('.btn-gallery')
    let elMemesCont = document.querySelector('.saved-memes')
    elGalleryModal.style.display = 'none'
    elMain.style.display = 'flex'
    elBtbGallery.style.color = 'white'
}

function onSetColor(color) {
    setColor(color)
    renderMeme()
}

function onSetStrokeColor(color) {
    setStrokeColor(color)
    renderMeme()
}

function onSetSize(size) {
    setSize(size)
}

function onAddSize() {
    addSize()
}

function onDecSize() {
    decSize()
}

function onSwitchLines() {
    switchLines()
}

function onAddLine(txt) {
    addLine(txt)
    renderMeme()
    showValues()
}

function onSetLineTxt(el) {
    setLineTxt(el)
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
    showValues()
}

function onAlignChange(val) {
    alignChange(val)
    renderMeme()
}

function onMoveUp() {
    moveUp()
    renderMeme()
}

function onMoveDown() {
    moveDown()
    renderMeme()
}

function onMoveRight() {
    moveRight()
    renderMeme()
}

function onMoveLeft() {
    moveLeft()
    renderMeme()
}

function onSetEmoji(emoji) {
    onAddLine(emoji)
}

function onShowGallery() {
    var elGalleryModal = document.querySelector('.gallery-modal')
    var elMain = document.querySelector('.main-layout')
    elGalleryModal.style.display = 'flex'
    elMain.style.display = 'none'

    let elBtbGallery = document.querySelector('.btn-gallery')
    elBtbGallery.style.color = 'black'
}

function toggleMenu() {
    document.querySelector('.header-links').classList.toggle('display-block')
    if (document.querySelector('.menu').innerHTML === 'X') {
        document.querySelector('.menu').innerHTML = '☰'
    } else { document.querySelector('.menu').innerHTML = 'X' }
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
