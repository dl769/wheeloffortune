var words={
    1: "ALA",
    2: "DUPA",
    3: "KOSC",
    4: "DREWNO",
    5: "MEMEMEMES",
    6: "AHA DA",
    7: "DS DS",
    8: "DANIE DUPY",
    9: "DUPY",                //words should be always UPPERCASED!!
    10: "STAJNIA AUGIASZA",
    11: "SERNIK NA ZIMNO",
    12: "KLUB SERC",
    13: "BEZSENNE NOCE",
    14: "GORZKI SZLOCH",
    15: "ODKURZANIE",
    16: "PALONE DREWNO",
    17: "IMIENINY CIOCI",
    18: "WYJAZD NA WAKACJE",
    19: "ZIMOWY SEN",
    20: "PALENIE JANA"
}
var lengthOfTheWord = 0;
var draw = 0;
var noOfSpaces = 0;

function drawTheWord(){
    console.log(words)
    draw =  Math.floor(Math.random() * 20) + 1;
    console.log(words[draw][1],'ddSS')
    console.log(words.jed,'ddSS')
    console.log('->', words[1].length)
    checkLengthOfTheWord();

}

function checkLengthOfTheWord(){

    lengthOfTheWord = words[draw].length
    console.log('length:',words[draw].length,'of the word:',draw,);

    appendLetterBlocks(lengthOfTheWord,draw);
    checkForSpaces();
}

function appendLetterBlocks(){ 
    console.log('ppp');

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
     console.log('words[draw][i]',words[draw][0]);
     
     
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
     console.log('words[draw][i]',words[draw][0]);

     
}


function checkForSpaces(){


    for(var i=0; i<words[draw].length; i++){
        if(words[draw][i] == ' '){
            console.log("spacja");
            noOfSpaces++;
            i=i+1;                                               
            $('#'+i+'l').css("background-color","transparent");;
            i=i-1;
        }
        console.log('noofsspac',noOfSpaces);

    }
properLetters = properLetters + noOfSpaces;                     
}
