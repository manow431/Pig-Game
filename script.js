//*************    PgGame   ************

var scores, activePlayer, dice, roundScore, gamePlaying;

init();
//dice  = Math.floor(Math.random() * 6) + 1;
//console.log(dice);


document.querySelector('.btn-roll').addEventListener('click', function(){
    //random no.
   if(gamePlaying){
     dice = Math.floor(Math.random() * 6 + 1);
    //display the results
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src= 'dice-' + dice + '.png';

    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }
   }

});

    document.querySelector('.btn-hold').addEventListener('click', function(){
        if (gamePlaying){
            //adding current score to global score
        scores[activePlayer] += roundScore;
        // display winner
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 20 )  {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;

        }else 
            nextPlayer();

        }
  
});

function nextPlayer(){
     activePlayer === 0?  activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        // removing active class
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //hiding the dice after player plays
        document.querySelector('.dice').style.display = 'none';
};

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em> + dice +</em>';

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.getElementById('name-0').textContent = 'player 1';
        document.getElementById('name-1').textContent = 'player 2';

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');

        gamePlaying = true;
};