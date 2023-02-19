'use strict'

let gEmojis = [
    {
        emoji: '😀'
    },
    {
        emoji: '😂'
    },
    {
        emoji: '😈'
    },
    {
        emoji: '😎'
    },
    {
        emoji: '😍'
    },
    {
        emoji: '😋'
    },
    {
        emoji: '😡'
    },
    {
        emoji: '😭'
    },

]

function renderEmojis() {
    var strHtmls = gEmojis.map(emoji =>
        `<button onclick="onSetEmoji(this.value)" value="${emoji.emoji}" class="card">${emoji.emoji}</button>`
    )
    document.querySelector('.scrolling-wrapper').innerHTML = strHtmls.join('')
}