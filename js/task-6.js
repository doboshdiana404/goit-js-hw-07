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
  for (let index = 0; index < amount; index++) {
    let markup = document.createElement('div');
    markup.style.width = `${sizeBox}px`;
    markup.style.height = `${sizeBox}px`;
    markup.style.backgroundColor = getRandomHexColor();
    boxDiv.append(markup);
    sizeBox += 10;
    boxDiv.style.display = 'flex';
    boxDiv.style.flexWrap = 'wrap';
    boxDiv.style.gap = '44px';
    boxDiv.style.justifyContent = 'center';
    console.log(markup);
  }
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

