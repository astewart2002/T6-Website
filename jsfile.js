
let itemQuant1 = 1;
let itemQuant2 = 1;
let itemQuant3 = 1;
let itemprice1 = 0;
let itemprice2 = 0;
let itemprice3 = 0;

let removeItem = function(ID)
{
    document.getElementById(ID).remove();
    updateTotal();
}

let updateTotal = function() {
    totalPrice = itemQuant1 * itemprice1 + itemQuant2 * itemprice2 + itemQuant3 * itemprice3;
    totalItems = itemQuant1 + itemQuant2 + itemQuant3;

    document.getElementById("cart-header-total").innerHTML = "Cart (" + totalItems + ")"
    document.getElementById("").innerHTML = totalPrice;
}

let plus = function(itemnum) {
    switch (itemnum) {
        case 1: itemQuant1++; document.getElementById("item-count-1").value = itemQuant1; break;
        case 2: itemQuant2++; document.getElementById("item-count-2").value = itemQuant2; break;
        case 3: itemQuant3++; document.getElementById("item-count-3").value = itemQuant3; break;
    }
    updateTotal()
}

let minus = function(itemnum) {
    switch (itemnum) {
        case 1: itemQuant1--; document.getElementById("item-count-1").value = itemQuant1; break;
        case 2: itemQuant2--; document.getElementById("item-count-2").value = itemQuant2; break;
        case 3: itemQuant3--; document.getElementById("item-count-3").value = itemQuant3; break;
    }
    updateTotal()
}