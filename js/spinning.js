
var buttonPressTime = 0;
var buttonReleaseTime = 0;
var spinPower = 0;
var noOfField = 0;


function buttonPress(){
     buttonPressTime = new Date();    
}

function buttonRelease(){
     buttonReleaseTime = new Date();
     console.log(buttonReleaseTime-buttonPressTime);                     //That get us time in ms between button click and push
     spins();
}

$('.wheel').mousedown(buttonPress);
$('.wheel').mouseup(buttonRelease);
 
var projectedAngle = 0;

function spins(){
    spinPower = Math.round((buttonReleaseTime-buttonPressTime)/100);    //spinpower transforms time between pressing and releasing button to no of fields 
    console.log('spinpower:',spinPower);

    spinPower = spinPower + randomization();
    noOfField = noOfField + spinPower;
    console.log(noOfField,1111)
    console.log('spinpower +rnd:',spinPower);
    projectedAngle = spinPower * 15 + currentAngle;                     //projected angle is calculated + added current angle (to prevent moving in wrong direction in the worst case scenario)
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
            fieldRunner();; // po 2s
        }, 2000);
        

 }

 function fieldRunner(){console.log(noOfField,'la')

if (noOfField>24){
    noOfField =  noOfField % 24;
}

 switch(noOfField+1){
    case 1: window.alert("bankrut"); break;
    case 2: window.alert("9000"); break;
    case 3: window.alert("5000"); break;
    case 4:  window.alert("8000"); break;
    case 5:  window.alert("7000"); break;
    case 6:  window.alert("15000"); break;
    case 7:  window.alert("bankrut"); break;
    case 8:  window.alert("6000"); break;
    case 9:  window.alert("9000"); break;
    case 10:  window.alert("5000"); break;
    case 11:  window.alert("7000"); break;
    case 12:  window.alert("6000"); break;
    case 13:  window.alert("10000"); break;
    case 14:  window.alert("3000"); break;
    case 15:  window.alert("8000"); break;
    case 16:  window.alert("15000"); break;
    case 17:  window.alert("3000"); break;
    case 18:  window.alert("9000"); break;
    case 19:  window.alert("lose a turn"); break;
    case 20:  window.alert("7000"); break;
    case 21:  window.alert("10000"); break;
    case 22:  window.alert("6000"); break;
    case 23:  window.alert("8000"); break;
    case 24:  window.alert("3000"); break;
    }
}  
    
