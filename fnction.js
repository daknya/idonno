const makerandomcolor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
      return `rgb(${r},${g},${b} )`;
}
const buttons = document.querySelectorAll('.self');
for (let button of buttons){
    button.addEventListener('click',  colorize);
}
function colorize(){
    this.style.backgroundColor = makerandomcolor();
    this.style.color = makerandomcolor();
}
const btn = document.querySelector('#body');
const body =document.querySelector('.body');
btn.addEventListener('click',()=>{
    document.body.style.backgroundColor= makerandomcolor();
});