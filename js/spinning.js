
var buttonPressTime = 0;
var buttonReleaseTime = 0;
var spinPower = 0;
var noOfField = 0;
var currentPlayer = 1;


function buttonPress(){
     buttonPressTime = new Date();    
}

function buttonRelease(){
     buttonReleaseTime = new Date();
     console.log(buttonReleaseTime-buttonPressTime);                     //That gets us time in ms between button click and release
     spins();
}

var projectedAngle = 0;

function spins(){
    spinPower = Math.round((buttonReleaseTime-buttonPressTime)/100);    //spinpower transforms time between pressing and releasing button to no of fields 
    console.log('spinpower:',spinPower);

    spinPower = spinPower + randomization();
    noOfField = noOfField + spinPower;
    console.log(noOfField,1111)
    console.log('spinpower +rnd:',spinPower);
    projectedAngle = spinPower * 15 + currentAngle;                     //projected angle is calculated + added current angle (eg to prevent moving in wrong direction in the worst case scenario)
    spinTheWheel();
}

function randomization(){                                               //randomize the result
    var random = Math.floor(Math.random() * 4) + 1;
    console.log('rnd',random);
    return random
    
}
        
var currentAngle=0;

function spinTheWheel(){

    $(".wheel").rotate({
        angle: currentAngle,
        animateTo: projectedAngle,
        easing: $.easing.easeInOutElastic
        })

        //
        console.log(currentAngle,projectedAngle);
        currentAngle = projectedAngle;
        //
        setTimeout(function() {
            fieldRunner();; // after 0.85s
        }, 850);
        

 }

var answer = '';

 function fieldRunner(){console.log(noOfField,'la')

if (noOfField>24){
    noOfField =  noOfField % 24;
}

switch(noOfField+1){
    case 25: console.log("bankrut"); answer = window.prompt("Bankrupt, next player's turn!");addMoney(-1); break;
    case 2: console.log("9000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(9000);} break;
    case 3: console.log("5000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(5000);} break;
    case 4:  console.log("8000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(8000);} break;
    case 5:  console.log("7000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(7000);} break;
    case 6:  console.log("15000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(15000);} break;
    case 7:  console.log("bankrut"); answer = window.alert("Bankrupt, next player's turn!"); addMoney(-1); break;
    case 8:  console.log("6000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(6000);} break;
    case 9:  console.log("9000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(9000);} break;
    case 10:  console.log("5000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(5000);} break;
    case 11:  console.log("7000"); answer = window.prompt("Please select the letter");if(checkAnswer()){addMoney(7000);} break;
    case 12:  console.log("6000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(6000);} break;
    case 13:  console.log("10000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(10000);} break;
    case 14:  console.log("3000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(3000);} break;
    case 15:  console.log("8000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(8000);} break;
    case 16:  console.log("15000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(15000);} break;
    case 17:  console.log("3000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(3000);} break;
    case 18:  console.log("9000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(9000);} break;
    case 19:  console.log("lose a turn"); answer = window.prompt("Next player's turn!"); nextPlayer(); break;
    case 20:  console.log("7000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(7000);} break;
    case 21:  console.log("10000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(10000);} break;
    case 22:  console.log("6000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(6000);} break;
    case 23:  console.log("8000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(8000);} break;
    case 24:  console.log("3000"); answer = window.prompt("Please select the letter"); if(checkAnswer()){addMoney(3000);} break;
    }  console.log('check,',player.face,player.name);
}  

function checkAnswer(){
    
    for (var i=0; i<lengthOfTheWord; i++){
        if (answer.toUpperCase() === words[draw][i] ) {
            $('#'+i+'l').html(words[draw][i]);
        
                
                
                                                                                                        //     $('#'+i+'l').html(words[draw][i+1]);    
                                                                                                        // $('#'+i+'l').css("background-color","#efe4b0");
                            
            return true;     //TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        }
    }
    window.alert('Wrong letter! Next player\'s turn');
    nextPlayer();
   
}


function addMoney(prize){
    console.log(currentPlayer,'crrrrrrrrrrrrrrrrrrrrr')
    if(currentPlayer == 1){
        if(prize == -1){
        player.cash = 0;
        $('#money1').html(' ·  '+player.cash+'  ·');
        currentPlayer = 2; prize =0;                            //price =0 to prevent jumping into another if with prize =-1 and retain proper order 
        }else{
            player.cash = player.cash + prize;
            $('#money1').html(' ·  '+player.cash+'  ·');
        }
    }

    if(currentPlayer == 2){
        if(prize == -1){
        player2.cash = 0;
        $('#money2').html(' ·  '+player2.cash+'  ·');
        currentPlayer = 1;
        }else{
            player2.cash = player2.cash + prize;
            $('#money2').html(' ·  '+player2.cash+'  ·');
        }
    }
    console.log(currentPlayer,'crrrrrrrrrrrrrrrrrrrrr')
}

function nextPlayer(){
    ////TODO 
    console.log(currentPlayer,'nextplayer,,,')
    if(currentPlayer==1){
        currentPlayer = 2;
    }else{
        currentPlayer = 1;
    }
}

var player = {
    name: '',
    face: '',
    cash: 0,
}

var player2 = {
    name: '',
    face: '',
    cash: 0,
}

function playerOneBio(playerF){                         //assign face to the player

    var face = 0;

    if (document.getElementById('1').checked) {
        face = "avatars/face1.png"

    }   else if (document.getElementById('2').checked) {
        face= "avatars/face2.png"

    }   else if (document.getElementById('3').checked) {
        face = "avatars/face3.png"

    }   else if (document.getElementById('4').checked) {
        face = "avatars/face4.png"
   
    }   else if (document.getElementById('5').checked) {
        face = "avatars/face5.png"
   
    }   else if (document.getElementById('6').checked) {
        face = "avatars/face6.png"

    }   else if (document.getElementById('7').checked) {
        face = "avatars/face7.png"

    }   else if (document.getElementById('8').checked) {
        face = "avatars/face8.png"
    }

    if(face!=0){   
        if  (playerF == 1) player.face = face;
        if  (playerF == 2) player2.face = face;
    }else{
        if  (playerF == 1) player.face =    'avatars/face10.png';              //if no match, assigning transparent face
        if  (playerF == 2) player2.face =   'avatars/face10.png';
    }

}