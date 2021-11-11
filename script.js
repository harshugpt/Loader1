var text = document.querySelector('.text');
var progress = document.querySelector('.progress');
var count = 4;
var per = 16;
var loader = setInterval(animate, 50);
function animate(){
    if(count == 100 && per == 400){
        text.classList.add(.blink);
        clearInterval(loading);
    }else{
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        text.textContent = count + '%';

    }
}