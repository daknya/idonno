//const makerandomcolor = () => {
 //   const r = Math.floor(Math.random() * 255);
 //   const g = Math.floor(Math.random() * 255);
//    const b = Math.floor(Math.random() * 255);
//      return `rgb(${r},${g},${b} )`;
//}



const buttons = document.querySelectorAll('.self');
for (let button of buttons){
    button.addEventListener('click',  colorize);
}
function colorize(){
    this.style.backgroundColor = 'black';
   
}
const btn = document.querySelector('#body');
const body =document.querySelector('.body');


const black = document.querySelector('#black');
const erase = document.querySelector('#erase');
const green = document.querySelector('#green');
const red = document.querySelector('#red');


black.addEventListener('click',function() {
    console.log('clicked');
});


erase.addEventListener('click',function() {
    console.log('clicked');
});
red.addEventListener('click',function() {
    console.log('clicked');
});
green.addEventListener('click',function() {
    console.log('clicked');
});