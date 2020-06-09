window.addEventListener('load', init);
const myWords = ['javascript', 'html', 'course', 'laurence','coding','brackets ']
function init() {
   let div = document.createElement('div');
   div.setAttribute('class', "message");
   document.body.appendChild(div);
   div.innerText = "Press start button";
   let button = document.createElement('button');
   button.type = "button";
   document.body.appendChild(button);
   button.innerText = "Start Game";
   let div1 = document.createElement('div');
   div1.classList.add('game');
   document.body.appendChild(div1);
  button.addEventListener('click', start);

  }

  function start() {
  this.style.display = "none";
  message(buci)
  }

  function message(output) {
    document.querySelector('.message').innerHTML = output;
  }



