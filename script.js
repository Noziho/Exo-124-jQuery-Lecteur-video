// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').get(0);

let progress = $('.progress__filled');

let buttonPlay = $('.toggle');

let counter = 3

buttonPlay.click(function () {

    counter --;
    if (counter === 2) {
        player.play();
        buttonPlay.text('||');

    }

    if (counter === 1) {
        player.pause();
        buttonPlay.text('►')
        counter = 3;
    }

})