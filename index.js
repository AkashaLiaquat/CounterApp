// const countValue=document.querySelector('#counter');

// const increment=()=>{
//   //Get Value From UI
// let value=parseInt(countValue.innerText);/* string to integer */
//   //Update The Value
// value+=1;
//   //Set The Value Onto UI
// countValue.innerText=value;
// }
// const decrement=()=>{
//  //Get Value From UI
// let value=parseInt(countValue.innerText);/* string to integer */
// //Update The Value
// value-=1;
// //Set The Value Onto UI
// countValue.innerText=value;
// }


const Counter=document.getElementById('counter');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

//Event Listener function for Button 1
function decrement(){
  let CounterValue=parseInt(  Counter.innerText);
  CounterValue-=1;
  Counter.innerText=CounterValue;
}
button1.addEventListener('click' , decrement);

//Event Listener function for Button 2
function increment(){
  let CounterValue=parseInt( Counter.innerText);
  CounterValue+=1;
  Counter.innerText=CounterValue;
}
button2.addEventListener('click',increment);/* call without parenthesis bcz
 if we use pranthesis it will invoke function right away the event listener
added but if reference is given mean used without prenthesis it will wait
until it is clicked */