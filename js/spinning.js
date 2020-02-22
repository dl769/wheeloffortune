
var buttonPressTime = 0;
var buttonReleaseTime = 0;
var spinPower = 0;
var noOfField = 0;



function buttonPress(){
     buttonPressTime = new Date();    
}

function buttonRelease(){
     buttonReleaseTime = new Date();
     console.log(buttonReleaseTime-buttonPressTime);                     //That gets us time in ms between button click and release
     spins();
}


//$('.wheel').mousedown(buttonPress);
//$('.wheel').mouseup(buttonRelease);

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

 function fieldRunner(){console.log(noOfField,'la')

if (noOfField>24){
    noOfField =  noOfField % 24;
}

switch(noOfField+1){
    case 25: console.log("bankrut"); break;
    case 2: console.log("9000"); break;
    case 3: console.log("5000"); break;
    case 4:  console.log("8000"); break;
    case 5:  console.log("7000"); break;
    case 6:  console.log("15000"); break;
    case 7:  console.log("bankrut"); break;
    case 8:  console.log("6000"); break;
    case 9:  console.log("9000"); break;
    case 10:  console.log("5000"); break;
    case 11:  console.log("7000"); break;
    case 12:  console.log("6000"); break;
    case 13:  console.log("10000"); break;
    case 14:  console.log("3000"); break;
    case 15:  console.log("8000"); break;
    case 16:  console.log("15000"); break;
    case 17:  console.log("3000"); break;
    case 18:  console.log("9000"); break;
    case 19:  console.log("lose a turn"); break;
    case 20:  console.log("7000"); break;
    case 21:  console.log("10000"); break;
    case 22:  console.log("6000"); break;
    case 23:  console.log("8000"); break;
    case 24:  console.log("3000"); break;
    }
}  



window.addEventListener('load', function(){
    
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    console.log(isChrome,'isChrome?')

	var box1 = document.getElementById('el')
	var statusdiv = document.getElementById('statusdiv')

	var detecttouch = !!('ontouchstart' in window) || !!('ontouchstart' in document.documentElement) || !!window.ontouchstart || !!window.Touch || !!window.onmsgesturechange || (window.DocumentTouch && window.document instanceof window.DocumentTouch)
	var ismousedown = false
    
    //touchscreen support
	box1.addEventListener('touchstart', function(e){
        statusdiv.innerHTML = 'Status: touchstart<br />' 
        buttonPress();
		e.preventDefault()
	}, false)
	
	box1.addEventListener('touchend', function(e){
        statusdiv.innerHTML = 'Status: touchend<br /> '
        buttonRelease();
		e.preventDefault()
    }, false)
    
    //chromeSupport
	if(isChrome){                       
        console.log('chrome');
            $('.wheel').mousedown(buttonPress);
            $('.wheel').mouseup(buttonRelease);
    }
    else{

    if (!detecttouch){

       console.log('notchrome')
        $('.wheel').mousedown(buttonPress);
        $('.wheel').mouseup(buttonRelease);
        console.log('desktop');
        }
    }


}, false)

