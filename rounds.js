var roundCounter = 1;                   //in general 4 rounds
var winner ={
    name: 'zwyciezca',
    face: "",
    cash: 0
    
}
var runnerup={
    name: 'f',
    face: "",
    cash: 0
    
}

function nextRound(){
    roundCounter++;
    
    ///
    properLetters =0; console.log('SDX',usedLetters)
    usedLetters = [];
    noOfSpaces = 0;console.log('SDX',usedLetters)
    ///

    $('#roundNoText').html('&nbsp'+language.round+'&nbsp'+roundCounter+'&nbsp'+language.of+' 4&nbsp');

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

function whoHasWon(){
    if(player.totalCash>player2.totalCash){
        winner.name = player.name;
        winner.cash = player.totalCash;
        winner.face = player.face;
        runnerup.name = player2.name;
        runnerup.cash = player2.totalCash;
        runnerup.face = player2.face;
    }else{
        winner.name = player2.name;
        winner.cash = player2.totalCash;
        winner.face = player2.face;
        runnerup.name = player.name;
        runnerup.cash = player.totalCash;
        runnerup.face = player.face;
    }
}

function endOfTheGame(){

    whoHasWon();
    $('#playersIntroduction').remove();
    $('#lettersTable').remove();
    $('#cont').remove();

    appendFinalTable();
    //removeplayers $(#playersIntroduction).remove();
    //removeletters $(#lettersTable).remove();
    //removeTheWheel $(#cont).remove(); if mobile -> $(#rollerH).remove();
    //appendFinalTable(); -gotowe
    

    // $('#playersIntroduction').remove();
    // $('#lettersTable').remove();
    // $('#cont').remove();
    //TODOOooo 
}

function appendFinalTable(){

    $('#playersIntroduction').remove();
    $('#lettersTable').remove();
    $('#cont').remove();

    $('#congrats').append('<table id="congratulations"><tr><td> <center><a id="winner">'+language.winner+', '+winner.name+'</a> </center></td><td> <center><a id="placetwo">'+runnerup.name+'</a> </center></td> </tr>'+
    '<tr><td>  <center><img src ="'+winner.face+'"></center></td><td>  <center><img src ="'+runnerup.face+'"></center></td></tr>'+
    '<tr><td>  <center><a id="winner"></a><img src ="flags/medal.png"></center></td><td>  <center><a id="winner"></a><img src ="flags/money.png"></center></td></tr>'+
    '<tr><td>  <center><a id="winner"></a><img src ="flags/money.png"></center></td><td>  <center><a id="placetwo">$ '+runnerup.cash+'</a></center></td></tr>'+
    '<tr><td>  <center><a id="winner">$ '+winner.cash+'</a></center></td><td>  <center><a href ="index.html"><button id="playagain">&nbsp;'+language.playAgain+'&nbsp;</button></a></center></td></tr>'+
    '<tr><td>  &nbsp;</td><td>  </td></tr>'+
    '<tr><td>  &nbsp;</td><td>  </td></tr>'+
    '<tr><td>  &nbsp;</td><td>  </td></tr></table>');

  }