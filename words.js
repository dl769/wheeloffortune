var words={
    1: "ALA",
    2: "DUPA",
    3: "KOSC",
    4: "DREWNO",
    5: "MEMEMEMES"
}
var lengthOfTheWord =0;
var draw =0;
drawTheWord();

function drawTheWord(){
    console.log(words)
    draw =  Math.floor(Math.random() * 5) + 1;
    console.log(words[draw][1],'ddSS')
    console.log(words.jed,'ddSS')
    console.log('->', words[1].length)
    checkLengthOfTheWord();

}

function checkLengthOfTheWord(){

    lengthOfTheWord = words[draw].length
    console.log('length:',words[draw].length,'of the word:',draw,);

    appendLetterBlocks(lengthOfTheWord,draw);
}

function appendLetterBlocks(){ 
    console.log('ppp');

    $('#wordBlocks').append('<table> <tr>'+
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
