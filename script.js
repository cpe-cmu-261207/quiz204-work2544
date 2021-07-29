const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const mytext=document.querySelector('#text')
// define more constants and variables here
var check=true;
btn_toggle.onclick = () => {
  // your code here
  var myauthor=author;
  if(check){
  myauthor.innerHTML=author[0]
  btn_toggle.innerHTML='Display Author'
  check=false;
  }
  else
  {
    myauthor.innerHTML=author[1]
    btn_toggle.innerHTML='Display Calculation'
    check=true;
  }
}


// more codes for Search and Reset buttons here
