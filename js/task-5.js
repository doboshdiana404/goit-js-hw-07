function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body= document.querySelector("body");
const button = document.querySelector('.change-color');
const nameColor=document.querySelector(".color");
const handleClick = () => {
body.style.backgroundColor=getRandomHexColor();
nameColor.textContent=`${body.style.backgroundColor}`;

};

button.addEventListener('click', handleClick);
