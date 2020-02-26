var language ={
    "welcome": "Choose your avatar, language, name and click to start!", 
    "languageText": "Language",
    "player1": "Player One",
    "player2": "Player Two",
    "letterSelect": "Please select the letter!", 
    "loseATurn":"Next Player's turn", 
    "bankrupt":"Bankrupt! Next Player\'s turn", 
    "wrongLetter": "Wrong letter! Next player\'s turn",
    "wrongAnswer": "Wrong answer! Next player\'s turn",
    "pleaseSpin":  ", please spinn the Wheel by pressing it. Longer means harder!",
    "round": "Round",
    "of": "of",
    "winner": "Winner",
    "playAgain": "Play Again",
    "guessed": "Well done! You guessed the answer!"
}


$(document).ready(function(){

    $('#wlc').html(language.welcome);
    $('#lng').html(language.languageText);
    $('#playerTXT').attr('value',language.player1);

});

function languageSelector(){

        if (document.getElementById('ukFlag').checked) {
            language ={
                "welcome": "Choose your avatar, language, name and click to start!", 
                "languageText": "Language",
                "player1": "Player One",
                "player2": "Player Two",
                "letterSelect": "Please select the letter!", 
                "loseATurn":"Next Player's turn", 
                "bankrupt":"Bankrupt! Next Player\'s turn", 
                "wrongLetter": "Wrong letter! Next player\'s turn",
                "wrongAnswer": "Wrong answer! Next player\'s turn",
                "pleaseSpin":  ", please spinn the Wheel by pressing it. Longer means harder!",
                "round": "Round",
                "of": "of",
                "winner": "Winner",
                "playAgain": "Play Again",
                "guessed": "Well done! You guessed the answer!"
            }
            $('#wlc').html(language.welcome);
            $('#lng').html(language.languageText);
            $('#playerTXT').attr('value',language.player1);
        
        }   else {
            language ={
                "welcome": "Wybierz avatar, język i kliknij, żeby rozpocząć!", 
                "languageText": "Język",
                "player1": "Gracz 1",
                "player2": "Gracz 2",
                "letterSelect": "Wybierz literę lub podaj hasło: ", 
                "loseATurn": "Kolejka następnego gracza!", 
                "bankrupt": "Bankrut! Kolejka następnego gracza!", 
                "wrongLetter": "Zła litera! Kolejka następnego gracza!",
                "wrongAnswer": "Zła odpowiedź! Kolejka następnego gracza!",
                "pleaseSpin":  ", zakręć kołem nasikając na nie. Im dłużej tym mocniej!",
                "round": "Runda",
                "of": "z",
                "winner": "Zwycięzca",
                "playAgain": "Graj ponownie",
                "guessed": "Brawo! Zgadłeś odpowiedź!"
            }
            $('#wlc').html(language.welcome);
            $('#lng').html(language.languageText);
            $('#playerTXT').attr('value',language.player1);
        
        }
    
}