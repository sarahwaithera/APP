var countEl = document.getElementById("count-el");
var addBtn = document.getElementById("add-btn")
var btn1 = document.getElementById('btn-1')
var btn2 = document.getElementById('btn-2')
var pEntries = document.getElementById('entries')

var add = 0;
addBtn.addEventListener("click", () => {
 add = add+1;  
countEl.innerHTML = add + " " ;
})
btn1.addEventListener("click", () => {
var countStr = add * add;
pEntries.textContent += countStr;
// addBtn.textContent = 0;
add = 0;
})


btn2.addEventListener("click", () => {
   var add = 0;
   add = 0;
   countEl.textContent = 0;
   var reset = 'previous entries : ';
   pEntries.textContent = reset;
})

addBtn.addEventListener("click", () => {
   add=add+1;
   countEl.innerHTML=add + " ";
   })

   // function square (number) {
   //    console.log(number * number)
   // };





