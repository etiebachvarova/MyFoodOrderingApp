let cart = [];

function addToCart(itemId) {
    $.ajax({
        url: 'http://localhost:3000/api/foodCategories',
        method: 'GET',
        success: function(data) {
            const item = data.find(category => category.id === itemId);
            if (item) {
                cart.push(item);
                console.log('Item added to cart:', item);
                updateCartDisplay();
            }
        },
        error: function(error) {
            console.log('Error adding item to cart', error);
        }
    });
}

function updateCartDisplay() {
    let cartHtml = '';
    cart.forEach(item => {
        cartHtml += `
            <div class="card mb-3">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
    });
    $('#cartItems').html(cartHtml);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
}
