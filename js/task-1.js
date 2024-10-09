const category = document.querySelectorAll('#categories .item');
const categoryTitle = document.querySelectorAll(".item h2");
const elementsItem = document.querySelectorAll("ul .elem");
function numberOfCategory(obj) {
  let number = 0;
  obj.forEach(element => {
    number++;
  });
  return number;
}
function deskription(title){
const categoryTitle=Object.values(title);
let titleCategory=[];
for (const val of categoryTitle) {
    titleCategory.push(val.textContent);
} 
    
return titleCategory;
}

function numberItem(obj){
let itemsArray=[];
let count=0;
obj.forEach((ul,index) => {
    count = ul.querySelectorAll('li').length;
    itemsArray.push(count);
});
return itemsArray;
}

function finallyMessage(title, number) {
for (let index = 0; index < title.length; index++) {
    console.log(`Category: ${title[index]}`);
    console.log(`Elements: ${number[index]}`);
}
    
}
console.log('Number of categories: ', numberOfCategory(category));
finallyMessage(deskription(categoryTitle),numberItem(elementsItem));

