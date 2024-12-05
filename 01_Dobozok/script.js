/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/


/*
 -element Js reprezentációját
 -esemény kiválasztása
 -funkcionalitás leírása
*/

var one = document.getElementById('element-one');
var blurOn = false;
//console.log(one)

one.addEventListener('click', function(){
    blurOn = !blurOn;
    if(blurOn){
        one.classList.add('blur');
    }
    else{
        one.classList.remove('blur');
    }
    
});


/*
console.warn("Figyelmeztetés")
console.error("Hibaüzenet")
console.dir(one)


one.onclick = function(){

}
*/


/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/

var two = document.getElementById('element-two');

//onmouseover
two.onmouseenter = function(){
    //console.log("müködik?");
    two.style.backgroundColor = 'red';
}
//onmouseout
two.onmouseleave = function(){
    two.style.backgroundColor = '';
}


/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

var three = document.getElementById('element-three');
console.dir(three);
three.ondblclick = function(){
    //console.log(randomNumber());
    three.firstElementChild.innerHTML = randomNumber();
}

function randomNumber(){
    return Math.floor(Math.random() * 20) + 1;
}

/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/
var four = document.getElementById('element-four');

four.onclick = function(){
    four.hidden = true;
    //four.style.display = "none";
    setTimeout(function() {
        four.hidden = false;
        //four.style.display = "block";
    }, 1000);
}

//display
//setTimeout



/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/

//console.log(document.querySelector('.shape'));
console.log(document.querySelectorAll('.shape'));
var allBox = document.querySelectorAll('.shape');

var five = document.getElementById('element-five');
var isBorderRadius = false;

five.onclick = function(){
    isBorderRadius = !isBorderRadius;
    for (var box of allBox){
        if(isBorderRadius){
            box.style.borderRadius = "50%";
        }
        else{
            box.style.borderRadius = "0%";
        }
    }
}


/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/

var six = document.getElementById('element-six');
var box6 = document.getElementById('box-6');

box6.onsubmit = function(event){
    event.preventDefault();
    console.dir(event);
    number = event.target.elements.boxNumber.value;
    six.firstElementChild.innerHTML = number;
}


/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/
var seven = document.getElementById('element-seven');
var box7 = document.getElementById('box7-input');

box7.onkeydown = function(event){
    console.dir(event);
    seven.firstElementChild.innerHTML = event.key;

}





/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/

var eight = document.getElementById('element-eight');
var mX = 0;
var mY = 0;

document.onmousemove = function(event){
    console.dir(event);
    mX = event.clientX;
    mY = event.clientY;
    eight.firstElementChild.innerHTML = 
    "X: " + mX + " Y: " + mY;
    //`X: ${mX}`;
}

/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

*/

var state = 9;
var nine = document.getElementById('element-nine');
var box9 = document.getElementById('box-9');

box9.onsubmit = function(event){
    event.preventDefault();
    var operand = Number(event.target.elements.operand.value);
    var operator = event.target.elements.operator.value;
    switch(operator){
        case "mult":
            state *= operand;
            break;
        case "div":
            state /= operand;
            break;
        case "add":
            state += operand;
            break;
        case "sub":
            state -= operand;
    }
    nine.firstElementChild.innerHTML = state;

}
