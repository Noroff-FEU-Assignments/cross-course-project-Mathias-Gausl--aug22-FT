const cart_content= document.querySelector("#cart_con")
const totall= document.querySelector("#totall")
let content= []
let sum= 0;
content.push(localStorage.getItem("shoppingcart"));
content.push(localStorage.getItem("shoppingcart2"));
content.push(localStorage.getItem("shoppingcart3"));

let filteredContent= content.filter( items=> {return items !== null})

function displayContent(){
       for(let i=0; i < filteredContent.length; i++ ){
        let parsedContent=JSON.parse(filteredContent[i])
        cart_content.innerHTML += `<div class="cart_items"><h2>Name: ${parsedContent.name}</h2><p>Price: ${parsedContent.price}$</div>`
        let remove_btn= document.createElement("button");
        remove_btn.innerHTML += "-";
        cart_content.append(remove_btn)
        sum += parsedContent.price;
        totall.innerHTML= sum + "$";
    }}
 
if(localStorage.length >= 1){
    displayContent()
}
else{
    cart_content.innerHTML += `<div class="cart_items"><h2>Your cart is Empty</h2><div>`
}
