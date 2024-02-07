console.log('I am in')
let bagobjects;
onload();
function onload() {
    loadbag();
    displayItems();
    bagsummary()
}

function loadbag() {
    bagobjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    })
     console.log(bagobjects)
}

function bagsummary() {
    let summary = document.querySelector('.bag-summary')
    let noofitems = bagobjects.length;
    let total_price = 0;
    let discount= 0;
    let Coupon = 0;
    let total = 0;
    let delivery = 100;

    for(let i = 0;i<bagobjects.length;i++){
        total_price += bagobjects[i].actual_price;
        discount +=  bagobjects[i].actual_price - bagobjects[i].current_price;
    }
    let subtotal = total_price-discount;
    if(subtotal>1000 || subtotal==0){
        delivery = 0;
    }
    else{
        delivery = 100;
    }
    if(subtotal ==0){
        Coupon = 0;
    }
    else if(subtotal>0 && subtotal<1000){
        Coupon = 50;
    }
    else{
        Coupon = 150;
    }
    total = subtotal - Coupon + delivery;

    summary.innerHTML = ` <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${noofitems} Items) </div>
    <div class="price-item">
        <span class="price-item-tag">Total Price</span>
        <span class="price-item-value">Rs${total_price}</span>
    </div>
    <div class="price-item">
        <span class="price-item-tag">Discount on Price</span>
        <span class="price-item-value priceDetail-base-discount">-Rs${discount}</span>
    </div>
    <div class="price-item">
        <span class="price-item-tag">Coupon Applied</span>
        <span class="price-item-value">-Rs ${Coupon}</span>
    </div>
    <div class="price-item">
        <span class="price-item-tag">Delivery Charges</span>
        <span class="price-item-value">Rs ${delivery}</span>
    </div>
    <hr>
    <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">Rs ${total}</span>
    </div>
</div>
<button class="btn-place-order">
                        <div class="place-order">PLACE ORDER</div>
</button>`
}


function displayItems() {
    // console.log(bagItems)
    let Container = document.querySelector('.bag-items-container');
    let innerHTML = '';
    for (let i = 0; i < bagobjects.length; i++) {
        innerHTML += generateItemHTML(bagobjects[i]);
    }
    Container.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagitems', JSON.stringify(bagItems));
    displaybagcount();
    onload();

}
function generateItemHTML(item) {
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

    <div class="remove-from-cart", onclick = "removeFromBag(${item.id})">X</div>
</div>`
}


