let allButtons = $('#buttons > button')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index()
        let p = index * -275
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        allButtons.eq(n % size)
            .addClass('red').siblings('.red').removeClass('red')
    })
}

let n = 0
let size = allButtons.length
allButtons.eq(n % size).trigger('click')
    .addClass('red').siblings('.red').removeClass('red')

let timerId = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
        .addClass('red').siblings('.red').removeClass('red')
}, 3000)

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function () {
    timerId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
            .addClass('red').siblings('.red').removeClass('red')
    }, 3000)
})