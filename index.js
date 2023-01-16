window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    switch(evt['key']){
        case 'a':
                var a = new Audio('sounds/crash.mp3'); 
                a.play();
                buttonAnimation(document.querySelector('.'+evt['key']))
        break;
        case 's':
                var s = new Audio('sounds/kick-bass.mp3'); 
                s.play();
                buttonAnimation(document.querySelector('.'+evt['key']))
        break;
        case 'd':
                var d = new Audio('sounds/snare.mp3'); 
                d.play();
                buttonAnimation(document.querySelector('.'+evt['key']))
        break;
        case 'f':
                var f = new Audio('sounds/tom-1.mp3'); 
                f.play();
                buttonAnimation(document.querySelector('.'+evt['key']))
        break;
        case 'g':
                var g = new Audio('sounds/tom-2.mp3'); 
                g.play();
                buttonAnimation(document.querySelector('.'+evt['key']))
        break;
        case 'h':
                var h = new Audio('sounds/tom-3.mp3'); 
                h.play();
                buttonAnimation(document.querySelector('.'+evt['key']))
        break;
        case 'j':
                var j = new Audio('sounds/tom-4.mp3'); 
                j.play();
                buttonAnimation(document.querySelector('.'+evt['key']))
        break;
    }
}

function onClickDo(key){
    switch(key){
        case 'a':
                var a = new Audio('sounds/crash.mp3'); 
                a.play();
                buttonAnimation(document.querySelector('.'+ key))
        break;
        case 's':
                var s = new Audio('sounds/kick-bass.mp3'); 
                s.play();
                buttonAnimation(document.querySelector('.'+ key))
        break;
        case 'd':
                var d = new Audio('sounds/snare.mp3'); 
                d.play();
                buttonAnimation(document.querySelector('.'+ key))
        break;
        case 'f':
                var f = new Audio('sounds/tom-1.mp3'); 
                f.play();
                buttonAnimation(document.querySelector('.'+ key))
        break;
        case 'g':
                var g = new Audio('sounds/tom-2.mp3'); 
                g.play();
                buttonAnimation(document.querySelector('.'+ key))
        break;
        case 'h':
                var h = new Audio('sounds/tom-3.mp3'); 
                h.play();
                buttonAnimation(document.querySelector('.'+ key))
        break;
        case 'j':
                var j = new Audio('sounds/tom-4.mp3');  
                j.play();
                buttonAnimation(document.querySelector('.'+ key))
        break;
    }
}


function buttonAnimation(activeButton) {
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
}

