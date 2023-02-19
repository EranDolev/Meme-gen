'use strict'

let gGallery = [
    {
        photoName: '1.jpg',
        photoId: 1,
        searchWord: 'politic trump'
    },
    { 
        photoName: '2.jpg',
        photoId: 2,
        searchWord: 'dogs'
    },
    { 
        photoName: '3.jpg',
        photoId: 3,
        searchWord: 'dog baby cute'
    },
    { 
        photoName: '4.jpg',
        photoId: 4,
        searchWord: 'cat sleep'
    },
    { 
        photoName: '5.jpg',
        photoId: 5,
        searchWord: 'baby power'
    },
    { 
        photoName: '6.jpg',
        photoId: 6,
        searchWord: 'history'
    },
    { 
        photoName: '7.jpg',
        photoId: 7,
        searchWord: 'baby surpurise'
    },
    { 
        photoName: '8.jpg',
        photoId: 8,
        searchWord: 'movie hat'
    },
    { 
        photoName: '9.jpg',
        photoId: 9,
        searchWord: 'baby'
    },
    { 
        photoName: '10.jpg',
        photoId: 10,
        searchWord: 'politic obama'
    },
    { 
        photoName: '11.jpg',
        photoId: 11,
        searchWord: 'basketball pierce'
    },
    { 
        photoName: '12.jpg',
        photoId: 12,
        searchWord: 'righteous'
    },
    { 
        photoName: '13.jpg',
        photoId: 13,
        searchWord: 'movie'
    },
    { 
        photoName: '14.jpg',
        photoId: 14,
        searchWord: 'movie'
    },
    { 
        photoName: '15.jpg',
        photoId: 15,
        searchWord: 'movie'
    },
    { 
        photoName: '16.jpg',
        photoId: 16,
        searchWord: 'movie'
    },
    { 
        photoName: '17.jpg',
        photoId: 17,
        searchWord: 'politic putin'
    },
    { 
        photoName: '18.jpg',
        photoId: 18,
        searchWord: 'movie toystory'
    },
]

function renderGallery(gallery = gGallery) {
    var strHtmls = gallery.map(photo =>
        `<img id=${photo.photoId} class="gallery-img" onclick="onImgSelect(this)" src="./img/${photo.photoName}" alt=""></img>`
    )
    document.querySelector('.gallery-modal').innerHTML = strHtmls.join('')
}

function getGallery() {
    return gGallery
}