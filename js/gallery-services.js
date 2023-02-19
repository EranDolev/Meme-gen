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
    { 
        photoName: '9.jpg',
        photoId: 9
    },
    { 
        photoName: '10.jpg',
        photoId: 10
    },
    { 
        photoName: '11.jpg',
        photoId: 11
    },
    { 
        photoName: '12.jpg',
        photoId: 12
    },
    { 
        photoName: '13.jpg',
        photoId: 13
    },
    { 
        photoName: '14.jpg',
        photoId: 14
    },
    { 
        photoName: '15.jpg',
        photoId: 15
    },
    { 
        photoName: '16.jpg',
        photoId: 16
    },
    { 
        photoName: '17.jpg',
        photoId: 17
    },
    { 
        photoName: '18.jpg',
        photoId: 18
    },
]

function renderGallery() {
    var strHtmls = gGallery.map(photo =>
        `<img id=${photo.photoId} class="gallery-img" onclick="onImgSelect(this)" src="./img/${photo.photoName}" alt=""></img>`
    )
    document.querySelector('.gallery-modal').innerHTML = strHtmls.join('')
}