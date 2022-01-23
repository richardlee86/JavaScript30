window.addEventListener('keydown', playSound);

function playSound () {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) {return;} //if theres no audio skip
    audio.currentTime = 0; //reset audio to beginning of file
    audio.play();
    key.classList.add('playing');    
}

function removeTransition (e) {    
    if (e.propertyName !== 'transform') {
        return;
    }

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));