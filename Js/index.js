console.log('working fine');
/* 1. SWAPPING TWO VALUES */

var swap1 = document.getElementById('button');

swap1.addEventListener('click', swap);


function swap(){
  let num1 = document.getElementById('num1').value
  let num2 = document.getElementById('num2').value
  console.log(num1);
  console.log(num2);
  document.querySelector('.result1').innerHTML=num1;
  document.querySelector('.result2').innerHTML=num2;
 
  document.getElementById('num1').remove();
  document.getElementById('num2').remove();


  let temp = num1;
  num1=num2;
  num2=temp;
  console.log('Swapped numbers :',num1,num2);

  document.querySelector('.result3').innerHTML=num1;
  document.querySelector('.result4').innerHTML=num2;
 
};


/* 2. CaAPTILIZING FIRST LETTER */

let startbutton = document.querySelector('.start');

startbutton.addEventListener('click', function(){
  let userInput = document.getElementById('username').value;
  console.log(userInput);
  document.querySelector('.username1').innerHTML= userInput;

  let a = userInput.toUpperCase();
  console.log(a[0]);
  
  let b = userInput.toLowerCase();
  console.log(b.slice(1,b.length));

  const capitalizedName = a[0] + b.slice(1,b.length);
  console.log(capitalizedName);

  document.querySelector('.username2').innerHTML = capitalizedName;
});


/* GENEERATE RANDOM NUMBERS  */

var generatebtn = document.querySelector('.generate');
generatebtn.addEventListener('click', generatenum/* {once:true} */);

function generatenum(){
  var radomnum = Math.floor(Math.random()*10);

  /* var randiv = document.createElement('h1');
  var space = document.querySelector('.randomnum');
  var randivtext = document.createTextNode(radomnum);
  randiv.appendChild(randivtext);
  space.appendChild(randiv); */
  
  document.querySelector('.randomnum').innerHTML=radomnum;

};

/* FIND FAMILY MEMBER */

var findmember = document.querySelector('.find');
findmember.addEventListener('click',find);

function find(){
  
  var family = ['suhas', 'subash', 'padma', 'sunjith'];
  console.log(family)
  var userInput = document.getElementById('familymembername').value;
  console.log(userInput)

  if (family.includes(userInput)){
    document.querySelector('.familyoutput').innerHTML = "Hi! " + userInput + " you're a family member!";

  } else {
    document.querySelector('.familyoutput').innerHTML = "Hi! " + userInput + " you're not a family member, however you're always welcome to have a look into this Project!";
  }

}

/* FIZZBUZZ GAME */

var fizzstart = document.querySelector('.fizzbuzzbtn');
fizzstart.addEventListener('click', function(){
  var n = document.querySelector('.fizzbuzzNumber').value
  var fizzbuzz = [];

  for(i=1;i<n;i++){
    
    if(i%3===0 && i%5===0){
      fizzbuzz.push('FizzBuzz')
    } else if (i%3===0){
      fizzbuzz.push('Fizz')
    } else if (i%5===0){
      fizzbuzz.push('Buzz')
    } else {
      fizzbuzz.push(i)
    }

    const fizzbuzzstring = JSON.stringify(fizzbuzz, null, 4);

    document.querySelector('.fizzbuzzoutput').innerHTML = fizzbuzzstring;
 /*    fizzbuzz.push(i)

    if (fizzbuzz[i]%3===0 && fizzbuzz[i]%5===0){
      fizzbuzz[i]='FizzBuzz';
    } else if (fizzbuzz[i]%3==0){
      fizzbuzz[i]='Fizz';
    } else if (fizzbuzz[i]%5==0){
      fizzbuzz[i]='Buzz';
    } else {
      fizzbuzz[i]=i;
    } */
  }
  console.log(fizzbuzz)
})


/* Who is buying the Lunch */

document.querySelector('.lunch').addEventListener('click', function()
{
  const lunchNames = ['Me', 'Punith', 'Loku', 'Sumanth','Kiran'];
  let lunchnum = Math.floor(Math.random()*lunchNames.length)
/*   console.log(lunchNames[lunchnum])
 */  
    var outputlunch = document.querySelector('.lunchoutput');
    b=lunchNames[lunchnum];
   let a= outputlunch.innerHTML=b;

/*     var lunchele = document.createElement('h3');
    lunchele.innerHTML=a;   
    outputlunch.appendChild(lunchele)
  console.log(outputlunch) */
}
, /* {once :true} */);



/* Find Fibonacci Series */ 

var fibo = document.querySelector('.fibocontainer');
document.querySelector('.fibofind').addEventListener('click', function(){

  let n = document.querySelector('#fibonumber').value
  console.log(n)

  let fibooutput =[];
  if (n==1){
    fibooutput=[1]
    console.log(fibooutput)

  } else if (n==2){
    fibooutput=[1,2]
    console.log(fibooutput)

  } else {

    fibooutput=[1,2];
    for(i=2;i<n;i++){
      fibooutput[i]=fibooutput[fibooutput.length-1] + fibooutput[fibooutput.length-2];
    }
    console.log(fibooutput)
    var fibonumbers = JSON.stringify(fibooutput,null,5);
    document.querySelector('.fibonumbers').innerHTML=fibonumbers;
  }

/*   var newele=document.createElement('input');
  newele.setAttribute('placeholer','Enter Number here!');
  newele.setAttribute('type','number');
  
  fibo.append(newele);
  console.log(fibo) */

})


/* DICE GAME */

document.querySelector('.startGame').addEventListener('click', function(){
  var dice1Random = Math.floor(Math.random()*6) +1;
  var dice2Random = Math.floor(Math.random()*6) +1;
  var dice1RdmImg = "images/dice" + dice1Random + ".png";
  var dice2RdmImg = "images/dice" + dice2Random + ".png";
/*   console.log('Dice 1: ',dice1Random)
  console.log('Dice 2: ',dice2Random) */
  document.querySelector('#diceImg1').setAttribute('src',dice1RdmImg)
  document.querySelector('#diceImg2').setAttribute('src',dice2RdmImg)

  var diceoutput = document.querySelector('.diceBodyResult');

  if(dice1Random>dice2Random){
    diceoutput.innerHTML = "The winner is Player 1 "
  } else if(dice1Random===dice2Random){
    diceoutput.innerHTML = "Game Draw "
  } else {
    diceoutput.innerHTML = "The winner is Player 2 "
  }
});


/* DRUM KIT CHALLENGE */

document.querySelector('.viewdrums1').addEventListener('click', function(){

  document.querySelector('.viewdrums1').classList.add('visi')
  document.querySelector('.viewdrums2').classList.remove('visi')
  document.querySelector('.drums').classList.remove('visi')

  document.querySelector('.viewdrums2').addEventListener('click', closeDrums);
  function closeDrums(){
    document.querySelector('.viewdrums2').classList.add('visi');
    document.querySelector('.viewdrums1').classList.remove('visi');
    document.querySelector('.drums').classList.add('visi')
  };

/*   console.log(document.querySelectorAll('.drumkit'))
 */  

  let n = document.querySelectorAll('.drumkit')
  console.log(n)

  for(i=0;i<n.length;i++){
    n[i].addEventListener('click', drumKit);
  }

  function drumKit(){
    let letter = this.id;
    switch(letter){
      case 'Q' :
        console.log('Q Sound');
        let mySound1 = new Audio('sounds/crash.mp3')
        mySound1.play()
        break;
      case 'W' :
        console.log('W Sound');
        let mySound2 = new Audio('sounds/kick-bass.mp3')
        mySound2.play()
        break;
      case 'E' :
        console.log('E Sound');
        let mySound3 = new Audio('sounds/snare.mp3')
        mySound3.play()
        break;
      case 'R' :
        console.log('R Sound');
        let mySound4 = new Audio('sounds/tom-1.mp3')
        mySound4.play()
        break;
      case 'T' :
        console.log('T Sound');
        let mySound5 = new Audio('sounds/tom-2.mp3')
        mySound5.play()
        break;
      case 'Y' :
        console.log('Y Sound');
        let mySound6 = new Audio('sounds/tom-3.mp3')
        mySound6.play()
        break;
      case 'U' :
        console.log('U Sound');
        let mySound7 = new Audio('sounds/tom-4.mp3')
        mySound7.play()
        break;
      default :
      console.log('nothing No Sound')
    }
  }

  document.addEventListener('keydown', function(event){
    let letter = event.key;
    switch(letter){
      case 'Q' :
        console.log('Q Sound');
        let mySound1 = new Audio('sounds/crash.mp3')
        mySound1.play()
        break;
      case 'W' :
        console.log('W Sound');
        let mySound2 = new Audio('sounds/kick-bass.mp3')
        mySound2.play()
        break;
      case 'E' :
        console.log('E Sound');
        let mySound3 = new Audio('sounds/snare.mp3')
        mySound3.play()
        break;
      case 'R' :
        console.log('R Sound');
        let mySound4 = new Audio('sounds/tom-1.mp3')
        mySound4.play()
        break;
      case 'T' :
        console.log('T Sound');
        let mySound5 = new Audio('sounds/tom-2.mp3')
        mySound5.play()
        break;
      case 'Y' :
        console.log('Y Sound');
        let mySound6 = new Audio('sounds/tom-3.mp3')
        mySound6.play()
        break;
      case 'U' :
        console.log('U Sound');
        let mySound7 = new Audio('sounds/tom-4.mp3')
        mySound7.play()
        break;
      default :
      console.log('nothing No Sound')
    }
    
  });


});







