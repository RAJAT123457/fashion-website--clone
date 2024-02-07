console.log("Hello baccha party")
let itemcontainer = document.querySelector('.items-container');
let bagItems;
let wishItems;
loading()



function loading(){
    let bagstr = localStorage.getItem('bagitems');
    bagItems = bagstr ? JSON.parse(bagstr):[];
    let wishstr = localStorage.getItem('wishitems');
    wishItems = wishstr ? JSON.parse(wishstr):[];
    displayonhome();
    displaybagcount();
    displaywishcount()
    
}
function addtobag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagitems',JSON.stringify(bagItems));
    displaybagcount()
}
function addtoWishlist(itemId){
    wishItems.push(itemId);
    uniquewish();
    localStorage.setItem('wishitems',JSON.stringify(wishItems));
    displaywishcount();

}
function uniquewish(){
    let output = Array.from(new Set(wishItems))
    wishItems = output;
    console.log(wishItems)
}
function displaywishcount(){
    let wcount = document.querySelector('.wishcount');
    if(wishItems.length>0){
        wcount.style.visibility = 'visible';
        wcount.innerText = wishItems.length;
    }
    else{
        wcount.style.visibility = 'hidden';
    }    
}

function displaybagcount(){
    let count = document.querySelector('.bagcount');
    if(bagItems.length>0){
        count.style.visibility = 'visible';
        count.innerText = bagItems.length;
    }
    else{
        count.style.visibility = 'hidden';
    }    
}
function clearing(){
bagItems.splice(0,bagItems.length);
localStorage.setItem('bagitems',JSON.stringify(bagItems));
displaybagcount()
    
}
function displayonhome() {
    if(!itemcontainer){
        return;
    }
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `<div class="item">
    <img class="image" src="${item.image}" alt="Product Item">
    <div class="rating">
        ${item.rating.star}⭐ | ${item.rating.count}k
    </div>
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="actual-price">Rs ${item.actual_price}</span>
        <span class="discount">(${item.disount}% OFF)</span>
    </div>
    <button class="btn-add-Cart", onclick = "addtobag(${item.id})">Add To Cart</button>
    <button class="btn-add-Wish", onclick = "addtoWishlist(${item.id})">Add To WishList</button>
    
    </div>`
    })
    itemcontainer.innerHTML = innerHTML;

}




//Extra gyan....


function men() {
    innerHTML = ''
    items_men.forEach(item => {
        innerHTML += `<div class="item">
        <img class="image" src="${item.image}" alt="Product Item">
        <div class="rating">
            ${item.rating.star}⭐ | ${item.rating.count}k
        </div>
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="actual-price">Rs ${item.actual_price}</span>
            <span class="discount">(${item.disount}% OFF)</span>
        </div>
        <button class="btn-add-Cart", onclick = "addtobag(${item.id})">Add To Cart</button>
        <button class="btn-add-Wish", onclick = "addtoWishlist(${item.id})">Add To WishList</button>
        </div>`
    })
    itemcontainer.innerHTML = innerHTML;
}





function women() {
    innerHTML = ''
    items_women.forEach(item => {
        innerHTML += `<div class="item">
        <img class="image" src="${item.image}" alt="Product Item">
        <div class="rating">
            ${item.rating.star}⭐ | ${item.rating.count}k
        </div>
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="actual-price">Rs ${item.actual_price}</span>
            <span class="discount">(${item.disount}% OFF)</span>
        </div>
        <button class="btn-add-Cart", onclick = "addtobag(${item.id})">Add To Cart</button>
        <button class="btn-add-Wish", onclick = "addtoWishlist(${item.id})">Add To WishList</button>
        </div>`
    })
    itemcontainer.innerHTML = innerHTML;
}

function beauty(){
    innerHTML = ''
    items_beauty.forEach(item => {
        innerHTML += `<div class="item">
        <img class="image" src="${item.image}" alt="Product Item">
        <div class="rating">
            ${item.rating.star}⭐ | ${item.rating.count}k
        </div>
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="actual-price">Rs ${item.actual_price}</span>
            <span class="discount">(${item.disount}% OFF)</span>
        </div>
        <button class="btn-add-Cart", onclick = "addtobag(${item.id})">Add To Cart</button>
        <button class="btn-add-Wish", onclick = "addtoWishlist(${item.id})">Add To WishList</button>
        </div>`
    })
    itemcontainer.innerHTML = innerHTML;
}

function home(){
    innerHTML = ''
    items_home.forEach(item => {
        innerHTML += `<div class="item">
        <img class="image" src="${item.image}" alt="Product Item">
        <div class="rating">
            ${item.rating.star}⭐ | ${item.rating.count}k
        </div>
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="actual-price">Rs ${item.actual_price}</span>
            <span class="discount">(${item.disount}% OFF)</span>
        </div>
        <button class="btn-add-Cart", onclick = "addtobag(${item.id})">Add To Cart</button>
        <button class="btn-add-Wish", onclick = "addtoWishlist(${item.id})">Add To WishList</button>
        </div>`
    })
    itemcontainer.innerHTML = innerHTML;
}



