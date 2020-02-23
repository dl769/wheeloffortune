var countPlayers = 1;

    function pop(){
        console.log(countPlayers,'ss')
        if(countPlayers==1){
            player.name = $('.surname').val();
            playerOneBio();
        }
        if(countPlayers==2){
            $("#starter").remove();             //removes starting popup

        }
        countPlayers++;
    }