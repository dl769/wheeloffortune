var countPlayers = 1;


    function pop(){
        console.log(countPlayers,'ss')
        if(countPlayers==1){
            player.name = $('.surname').val();
            playerOneBio(1);
            $('.surname').val(language.player2);    //Value of player two since first one is already submited [playerOneBio();]

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
var cc;
    function introducePlayers(){
        
        //console.log(en.welcome,'XDS');
        $('#playersIntroduction').append('<div id="player1stats"><p id="rcorners1"><b><a id="playernametext1">&nbsp'+player.name+'&nbsp</a></b><img src="'+player.face+'" id="displayed"><a id="money1"></a></p></div>'+
        '<div id="player2stats"><p id="rcorners1"><b><a id="playernametext2">&nbsp'+player2.name+'&nbsp</a></b><img src="'+player2.face+'" id="displayed"><a id="money2"></a></p></div>'+
        '<div id="roundC"><p id="rcorners1"><b><a id="roundNoText">&nbspRound&nbsp1&nbspof 4&nbsp</a></b></p></div>');

       window.alert(player.name+language.pleaseSpin);

       $('#pointer').attr('class','fas fa-location-arrow');         //appending arrow which will
       drawTheWord();
       $('#playernametext1').attr("id","blinkingplayernametext");
       //appendFinalTable(); just testing/didnt wanna wait till end of the game so put it here to delete...
    }


     
    