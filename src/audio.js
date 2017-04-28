import flip from './audio/card-flip.mp3';
import flipBack from './audio/card-flip-back.mp3';
import countdown from './audio/countdown.wav';

let sounds = {};
sounds.flip = new Audio(flip);
sounds.flipBack = new Audio(flipBack);
sounds.countdown = new Audio(countdown);

export let play = sound => {
    if (sounds[sound]) {
        sounds[sound].currentTime = 0;
        sounds[sound].play();
    }
};

export let stop = sound => {
    if (sounds[sound]) {
        sounds[sound].pause();
    }
};