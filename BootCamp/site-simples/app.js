'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function(){
  document.body.classList.toggle('dark-theme');
}
var ClassName = document.body.className;
if (ClassName == "light-theme") {
  this.textContent ="Dark";
} 
else {
  this.textContent = "Light";
});