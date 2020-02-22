
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
    
   
    var isMobile = false; 
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
if(isMobile){
    $('#rollerH').html('<i class="far fa-life-ring fa-5x" id="roller">');
}


	var roll = document.getElementById('rollerH')
	var statusdiv = document.getElementById('statusdiv')

	var detecttouch = !!('ontouchstart' in window) || !!('ontouchstart' in document.documentElement) || !!window.ontouchstart || !!window.Touch || !!window.onmsgesturechange || (window.DocumentTouch && window.document instanceof window.DocumentTouch)
	var ismousedown = false
    
    //touchscreen support
	roll.addEventListener('touchstart', function(e){

        buttonPress();
		e.preventDefault()
	}, false)
	
	roll.addEventListener('touchend', function(e){
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

