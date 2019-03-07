
let x = document.getElementById("x")

let y = document.getElementById("y")

// function myFunction(event) {
//   event.preventDefault();
// let item = document.getElementById("item")
// alert(item.value) 
//   x.innerHTML = `<li> ${item.value} </li>` 
// }


// BUTTON ADDS ITEM IN GROCERY LIST
document.getElementById("click").addEventListener("click", function(event){
  event.preventDefault()
  let item = document.getElementById("item")
   x.innerHTML = x.innerHTML + `<li> ${item.value} <button id="cart" type="submit"  value="${item.value}">Add To Cart</button> </li>` 
  

  alert("1")
});

// good
 
// ADDS ITEM FROM TOP LIST TO CART
document.getElementById("ddd").addEventListener("click", function(event){
  event.preventDefault()
  let item = document.getElementById("y")
   y.innerHTML = y.innerHTML + `<li> ${item.value} <button id="cart" type="submit"  value="${item.value}">Delete</button> </li>` 
  alert("2")
  
});

// ADDS ITEM FROM YOUR CART TO GROCERY TO LIST.
document.getElementById("toCart").addEventListener("click", function(event){
  event.preventDefault()
  let item = document.getElementById("toCart")
  x.innerHTML = x.innerHTML + `<li> ${item.value} <button id="toCart" type="submit"  value="${item.value}">Add to list</button> </li>`

  alert("3")
});


 






