const btn = document.querySelector('.btn');
const player1 = document.querySelector('player1');
const player2 = document.querySelector('player2');
const dices = document.querySelector('.dices');
const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');
const dice = document.querySelector('.dice');


function randomNumber(){
    let valor = Math.floor(Math.random() * 6) + 1;
    return valor;

}

function pickWinner(){
    const title = document.querySelector('.title');
    const imagen1 = document.querySelector('.img1');
    const imagen2 = document.querySelector('.img2');    
    const header = document.querySelector('header');
    
    const dice1number = randomNumber();
    const dice2number = randomNumber();
    
    imagen1.remove();
    imagen2.remove();
    

    const img1 = document.createElement('IMG');
    const img2 = document.createElement('IMG');
    
    

    img1.src =`images/dice${dice1number}.png`;
    img2.src =`images/dice${dice2number}.png`;

    dice1.appendChild(img1);
    dice2.appendChild(img2);

    img1.classList.add("img1");
    img2.classList.add("img2");


    if(dice1number>dice2number){
        title.remove();
        const player1wins = document.createElement('H1');
        player1wins.textContent = '🚩Player 1 wins!';
        header.appendChild(player1wins);
        player1wins.classList.add('title');


    }else if(dice1number<dice2number){
        title.remove();
        const player2wins = document.createElement('H1');
        player2wins.textContent = 'Player 2 wins!🚩';
        header.appendChild(player2wins);
        player2wins.classList.add('title');

    }else{
        title.remove();
        const tie = document.createElement('H1');
        tie.textContent = 'Tie!, Try again';
        header.appendChild(tie);
        tie.classList.add('title');

    }

}

addEventListener('click',pickWinner);

