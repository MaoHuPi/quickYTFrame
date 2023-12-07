/*
 * Copyright © 2023 by MaoHuPi
 * quickYTFrame > main.js
 * v1.0.0
 */
'use strict';
function main(){
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    function display(){
        const errorScreen = document.querySelector('#error-screen');
        if(errorScreen){
            errorScreen.innerHTML = '';
            errorScreen.appendChild(iframe);
        }
        else{setTimeout(display, 30);}
    }
    display();
    let lastHref = '';
    function locate(){
        if(lastHref !== location.href){
            lastHref = location.href;
            iframe.src = lastHref.replace('watch', 'embed').replace('?v=', '/');
        }
        setTimeout(locate, 30);
    }
    locate();
}
main();