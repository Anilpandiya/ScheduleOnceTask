/*---------------------------------
Author  : Anil
Date    : 16 Nov 2018
find me : https://www.anilpandiya.tech
-----------------------------------*/

//JavaScript program for Macro Polo Game

var result = '';

//function to convert number into macro polo
function playMacroPolo(totalNumber){
    for(var i=1 ; i<=totalNumber ; i++){
         result += (i%4 == 0 && i%7 == 0 ? 'marcopolo': i%4==0 ? 'macro' : i%7 ==0 ? 'polo' : i)+',';}

    return result.slice(0, -1);
}

console.log(playMacroPolo(100));

