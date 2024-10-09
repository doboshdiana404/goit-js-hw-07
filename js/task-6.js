function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonCreate = document.querySelector('#create-btn');
const buttonDestroy = document.querySelector('#destroy-btn');
const inputValue = document.querySelector('#controls input');
const boxDiv = document.querySelector('#boxes');
let sizeBox = 30;
function valid() {
  if (inputValue.value < 1 || inputValue.value > 100) {
    console.log('Error');
    destroyBoxes();
    return;
  }
  createBoxes(inputValue.value);
}
function createBoxes(amount) {
  destroyBoxes();
  let markup=document.createDocumentFragment();
  for (let index = 0; index < amount; index++) {
    let newDiv = document.createElement('div');
    newDiv.style.width=`${sizeBox}px`;
    newDiv.style.height=`${sizeBox}px`;
    newDiv.style.backgroundColor=getRandomHexColor();
    markup.appendChild(newDiv);
    sizeBox += 10;
  }
  boxDiv.appendChild(markup);
  boxDiv.style.display = 'flex';
    boxDiv.style.flexWrap = 'wrap';
    boxDiv.style.gap = '44px';
    boxDiv.style.justifyContent = 'center';
}
function destroyBoxes() {
  boxDiv.innerHTML="";
  sizeBox=30;
}
buttonCreate.addEventListener('click', valid);
buttonDestroy.addEventListener('click', ()=>{
  inputValue.value="";
  destroyBoxes();
});

