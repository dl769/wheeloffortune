var wordsPL={
    1: "ALA",
    2: "SZLAK BESKIDZKI",
    3: "KOSC",
    4: "DREWNO",
    5: "PORTFEL",
    6: "ANNA MARIA",
    7: "CHLEBAK",
    8: "BROWARNIK",
    9: "SZLACHTA POLSKA",                //words should be always UPPERCASED!!
    10: "STAJNIA AUGIASZA",
    11: "SERNIK NA ZIMNO",
    12: "KLUB SPORTOWY",
    13: "BEZSENNE NOCE",
    14: "GORZKI SZLOCH",
    15: "ODKURZANIE",
    16: "PALONE DREWNO",
    17: "IMIENINY CIOCI",
    18: "WYJAZD NA WAKACJE",
    19: "ZIMOWY SEN",
    20: "JEDZENIE CUKRU"
}
var words={
    1: "ACE IN THE HOLE",
    2: "AGAINST THE GRAIN",
    3: "AGE BEFORE BEAUTY",
    4: "GENERATION X",
    5: "GET THE SACK",
    6: "GIDDY GOAT",
    7: "KETTLE OF FISH",
    8: "KNOW THE ROPES",
    9: "NEEDS MUST",
    10: "NIP AND TUCK",
    11: "NO TRUCK WITH",
    12: "NOSY PARKER",
    13: "NUL POINTS",
    14: "PASS THE BUCK",
    15: "PETTY CASH",
    16: "PIPING HOT",
    17: "POETIC JUSTICE",
    18: "PISS AND VINEGAR",
    19: "RAISE CAIN",
    20: "RED TAPE"
}
var wordsEN={
    1: "ACE IN THE HOLE",
    2: "AGAINST THE GRAIN",
    3: "AGE BEFORE BEAUTY",
    4: "GENERATION X",
    5: "GET THE SACK",
    6: "GIDDY GOAT",
    7: "KETTLE OF FISH",
    8: "KNOW THE ROPES",
    9: "NEEDS MUST",
    10: "NIP AND TUCK",
    11: "NO TRUCK WITH",
    12: "NOSY PARKER",
    13: "NUL POINTS",
    14: "PASS THE BUCK",
    15: "PETTY CASH",
    16: "PIPING HOT",
    17: "POETIC JUSTICE",
    18: "PISS AND VINEGAR",
    19: "RAISE CAIN",
    20: "RED TAPE"
}
var lengthOfTheWord = 0;
var draw = 0;
var noOfSpaces = 0;
var lang;
var myList;
var lengthOfWordsArray;

function drawTheWord(){
    draw =  Math.floor(Math.random() * Object.keys(words).length) + 1;
    checkLengthOfTheWord();

}

function checkLengthOfTheWord(){

    lengthOfTheWord = words[draw].length

    appendLetterBlocks(lengthOfTheWord,draw);
    checkForSpaces();
}

function appendLetterBlocks(){ 

    $('#wordBlocks').append('<table id="lettersTable"> <tr>'+
    '<td>  <p class="letters" id="1l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="2l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="3l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="4l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="5l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="6l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="7l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="8l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="9l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="10l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="11l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="12l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="13l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="14l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="15l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="16l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="17l"><a id=pass></a></p></td>'+
    '<td>  <p class="letters" id="18l"><a id=pass></a></p></td>'+
     '</tr>  </table>');

     for (var i=lengthOfTheWord+1;i<19;i++){                        //removes unused blocks (+1 because we don't want to delete the last letter)
         $('#'+i+'l').remove();
     }
     
}

function appendProperAnswer(){

    for (var i=lengthOfTheWord;i>0;i--){                        
        $('#'+i+'l').remove();
    }

    $('#wordBlocks').append('<table id="lettersTable"> <tr>'+
    '<td>  <p class="letterd" id="1l"><a id=pass>'+words[draw][0]+'</a></p></td>'+
    '<td>  <p class="letterd" id="2l"><a id=pass>'+words[draw][1]+'</a></p></td>'+
    '<td>  <p class="letterd" id="3l"><a id=pass>'+words[draw][2]+'</a></p></td>'+
    '<td>  <p class="letterd" id="4l"><a id=pass>'+words[draw][3]+'</a></p></td>'+
    '<td>  <p class="letterd" id="5l"><a id=pass>'+words[draw][4]+'</a></p></td>'+
    '<td>  <p class="letterd" id="6l"><a id=pass>'+words[draw][5]+'</a></p></td>'+
    '<td>  <p class="letterd" id="7l"><a id=pass>'+words[draw][6]+'</a></p></td>'+
    '<td>  <p class="letterd" id="8l"><a id=pass>'+words[draw][7]+'</a></p></td>'+
    '<td>  <p class="letterd" id="9l"><a id=pass>'+words[draw][8]+'</a></p></td>'+
    '<td>  <p class="letterd" id="10l"><a id=pass>'+words[draw][9]+'</a></p></td>'+
    '<td>  <p class="letterd" id="11l"><a id=pass>'+words[draw][10]+'</a></p></td>'+
    '<td>  <p class="letterd" id="12l"><a id=pass>'+words[draw][11]+'</a></p></td>'+
    '<td>  <p class="letterd" id="13l"><a id=pass>'+words[draw][12]+'</a></p></td>'+
    '<td>  <p class="letterd" id="14l"><a id=pass>'+words[draw][13]+'</a></p></td>'+
    '<td>  <p class="letterd" id="15l"><a id=pass>'+words[draw][14]+'</a></p></td>'+
    '<td>  <p class="letterd" id="16l"><a id=pass>'+words[draw][15]+'</a></p></td>'+
    '<td>  <p class="letterd" id="17l"><a id=pass>'+words[draw][16]+'</a></p></td>'+
    '<td>  <p class="letterd" id="18l"><a id=pass>'+words[draw][17]+'</a></p></td>'+
     '</tr>  </table>');
     
     for (var i=lengthOfTheWord+1;i<19;i++){                        //removes unused blocks (+1 because we don't want to delete the last letter)
         $('#'+i+'l').remove();
     }
     
}


function checkForSpaces(){


    for(var i=0; i<words[draw].length; i++){
        if(words[draw][i] == ' '){
            noOfSpaces++;
            i=i+1;                                               
            $('#'+i+'l').css("background-color","transparent");;
            i=i-1;
        }

    }
properLetters = properLetters + noOfSpaces;                     
}
