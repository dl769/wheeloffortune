var countPlayers = 1;


    function pop(){
        console.log(countPlayers,'ss')
        if(countPlayers==1){
            player.name = $('.surname').val();
            playerOneBio(1);
            $('.surname').val('Player Two');    //Value of player two since first one is already submited [playerOneBio();]

            for(var i=0;i<8;i++){
            document.getElementsByName('face')[i].checked = false;                  //deletes selection of player one
            }
            
        }
        if(countPlayers==2){
            
            player2.name = $('.surname').val();
            playerOneBio(2);
            $("#starter").remove();             //removes starting popup
            introducePlayers();

        }
        countPlayers++;
    }

    function introducePlayers(){

        $('#playersIntroduction').append('<div id="player1stats"><p id="rcorners1"><b><a id="playernametext1">&nbsp'+player.name+'&nbsp</a></b><img src="'+player.face+'" id="displayed"><a id="money1"></a></p></div>'+
        '<div id="player2stats"><p id="rcorners1"><b><a id="playernametext2">&nbsp'+player2.name+'&nbsp</a></b><img src="'+player2.face+'" id="displayed"><a id="money2"></a></p></div>'+
        '<div id="roundC"><p id="rcorners1"><b><a id="roundNoText">&nbspRound&nbsp1&nbspof 4&nbsp</a></b></p></div>');


       window.alert(player.name+', please press spin the wheel by pressing it!');

       $('#pointer').attr('class','fas fa-location-arrow');         //appending arrow which will point values on the wheel
       drawTheWord();
       $('#playernametext1').attr("id","blinkingplayernametext");
    }