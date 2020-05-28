console.log('Connected!');

const PLAYER1 = "fa-circle-o";
const PLAYER2 = "fa-times";
let round = 1;

let area = [...document.querySelectorAll('.block')];

function pick(event){
    const turn = round % 2 === 0 ? PLAYER2 : PLAYER1;
    event.target.classList.add(turn);
    round++;
}

area.forEach(block=> block.addEventListener('click', pick));


//RESET BUTTON SECTION
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    location.reload();
})




function vibrate(){
    navigator.vibrate([500, 500]);
}
//END OF BUTTON SECTION
