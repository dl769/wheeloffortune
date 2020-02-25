var roundCounter = 1;                   //in general 4 rounds

function nextRound(){
    roundCounter++;
    
    ///
    properLetters =0; 
    usedLetters = [];
    ///

    $('#roundNoText').html('&nbspRound&nbsp'+roundCounter+'&nbspof 4&nbsp');

    $('#lettersTable').remove();
    $('#lettersTable').remove();                //need to remove both answer and grey blocks

    player.cash = 0;
    player2.cash = 0;
    console.log('cr PL ',currentPlayer);

    if((roundCounter%2 == 0 && currentPlayer == 1) || (roundCounter%2 != 0 && currentPlayer == 2))  nextPlayer();
    //player 2 starst 2 and 4th round, function nextPlayer changes players if needed and gives blinking effect
    
console.log('cr PL ',currentPlayer);
    drawTheWord();          //starts again with new word

}

function endOfTheGame(){

    //TODOOooo
}