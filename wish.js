let wishobjects;
loadwish()
displayItems()





function loadwish() {
    wishobjects = wishItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    })
     console.log(wishobjects)
}


function displayItems(){
    let wishcontainer = document.querySelector('.wish-items-container')
   let innerHTML ='';
   for (let i = 0; i<wishobjects.length; i++) {
    innerHTML += generateItemHTMLw(wishobjects[i]);
}
    wishcontainer.innerHTML = innerHTML;

}
console.log(wishItems.length)

function removeFromWish(itemId) {
    wishItems = wishItems.filter(wishItemId => wishItemId != itemId);
    localStorage.setItem('wishitems', JSON.stringify(wishItems));
    displaywishcount();
    loadwish();
    displayItems()

}

function generateItemHTMLw(item) {
    return `<div class="bag-item-container">
    <div class="item-left-part">
        <img class="bag-item-img" src="${item.image}">
    </div>
    <div class="item-right-part">
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.actual_price}</span>
            <span class="discount-percentage">(${item.disount}% OFF)</span>
        </div>
        <div class="return-period">
            <span class="return-period-days">${item.return} days</span> return available
        </div>
        <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${item.delivery}</span>
        </div>
    </div>

    <div class="remove-from-cart", onclick = "removeFromWish(${item.id})">X</div>
</div>`
}