 var p=JSON.parse(localStorage.getItem("cart"));
var cart=document.getElementById("cartcount");
cart.innerText = p.length;
