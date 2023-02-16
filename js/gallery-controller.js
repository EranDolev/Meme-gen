'use strict'

let gGallery = [
    {
        photoName: '1.jpg',
        photoId: 1
    },
    { 
        photoName: '2.jpg',
        photoId: 2
    },
    { 
        photoName: '3.jpg',
        photoId: 3
    },
    { 
        photoName: '4.jpg',
        photoId: 4
    },
    { 
        photoName: '5.jpg',
        photoId: 5
    },
    { 
        photoName: '6.jpg',
        photoId: 6
    },
    { 
        photoName: '7.jpg',
        photoId: 7
    },
    { 
        photoName: '8.jpg',
        photoId: 8
    },
]

function renderGallery() {
    var strHtmls = gGallery.map(photo =>
        `<img id=${photo.photoId} onclick="onImgSelect(this)" src="./img/${photo.photoName}" alt=""></img>`
    )
    document.querySelector('.gallery-modal').innerHTML = strHtmls.join('')
}