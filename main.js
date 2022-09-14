function Num(val){
    document.getElementById('result').value += val;
}

function equal(){
    let input = document.getElementById('result').value;
    let Ontput = eval(input);
    document.getElementById('result').value = Ontput
}

function clr(){
    document.getElementById('result').value = '';
}
function deletelast(){
    var x =  document.getElementById('result').value;
    console.log(x.length);

}
var opirations = [];
function saveopiration(){
   var opiration = document.getElementById('result').value;
   opirations.push(opiration);
   document.getElementById('affichage').innerHTML = document.getElementById('affichage').innerHTML+'<br>'+opiration;
}
