let btnAdd = document.getElementsByClassName('add');
let btnSubtract = document.getElementsByClassName('subtract');
let input = document.getElementsByClassName('num');
let price = document.querySelector("#price");
let supprimer = document.getElementsByClassName("btn");
let card = document.getElementsByClassName("card");


for (let i = 0; i < supprimer.length; i++) {
  supp = supprimer[i]
  supp.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
  })
}

for (let i = 0; i < btnAdd.length; i++) {
  add = btnAdd[i];
  add.addEventListener('click', (e) => {
    var quantity = e.target.previousElementSibling.value;
    quantity++;
    e.target.previousElementSibling.value = quantity;
    var price = e.target.nextElementSibling.value;

    price=parseInt(price)+5;
    e.target.nextElementSibling.value = price;
  });
}


for (let i = 0; i < btnSubtract.length; i++) {
  sub = btnSubtract[i]
  sub.addEventListener('click', (e) => {
    if (e.target.nextElementSibling.value == 1) {
     
      var price = e.target.nextElementSibling.nextElementSibling.nextElementSibling.value;

      price.parseInt(price)-5;
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.value = price;
      return alert("error:can't buy negative ");
      
    } else {
      quantity = e.target.nextElementSibling.value;
      quantity--;
      e.target.nextElementSibling.value = quantity;
      var price = e.target.nextElementSibling.nextElementSibling.nextElementSibling.value;

      price=parseInt(price)-5;
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.value = price;

    }


  })
}
console.log(btnAdd);
console.log(add);
console.log(sub)

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
} 