const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const mytext=document.querySelector('#text')
// define more constants and variables here
const mysearch=document.querySelector('#search')
const myreset=document.querySelector('#reset')

var check=true;
let mymytext=mytext.innerHTML.split(" ")
let mymymytext=[]

btn_toggle.onclick = () => {
  // your code here
  var myauthor=author;
  if(check){
  btn_toggle.innerHTML='Display Author'
  check=false;
  }
  else
  {
    btn_toggle.innerHTML='Display Calculation'
    check=true;
  }
}

// more codes for Search and Reset buttons here
mysearch.onclick=()=>{
for (let index = 0; index < mymytext.length; index++) {
  if (if(mymytext[index])==length.value) {
    mymytext
  } 
  
}
}
myreset.onclick=()=>{
  
}