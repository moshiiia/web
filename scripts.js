var elements = document.getElementsByClassName("sales__cards__item__price__text");
for(var i = 0; i < elements.length; i++) {
    elements[i].onclick = function(){
        let form = document.querySelector('form');
        form.classList.add('form-on');
    }
}

document.querySelector('.buying-form__button').onclick = function(){
    let form = document.querySelector('form');
    form.classList.remove('form-on');
}

var sliders = document.getElementsByClassName("square");
var pictures = document.getElementsByClassName("row-palette__element");
sliders[0].onclick = function(){
    pictures[0].src='./res/Home1.png'
    pictures[1].src='./res/Home2.png'
    pictures[2].src='./res/Home3.png'
}

sliders[1].onclick = function(){
    pictures[0].src='./res/Home4.png'
    pictures[1].src='./res/Home5.png'
    pictures[2].src='./res/Home6.png'
}

sliders[2].onclick = function(){
    pictures[0].src='./res/Home7.png'
    pictures[1].src='./res/Home8.png'
    pictures[2].src='./res/Home9.png'
}

sliders[3].onclick = function(){
    pictures[0].src='./res/Home10.png'
    pictures[1].src='./res/Home11.png'
    pictures[2].src='./res/Home12.png'
}