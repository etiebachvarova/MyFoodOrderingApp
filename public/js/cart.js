let cart = [];

function addToCart(categoryId, itemName, itemPrice) {
    const item = {
        categoryId,
        name: itemName,
        price: itemPrice,
        quantity: 1
    };

    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === itemName);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push(item);
    }

    console.log('Item added to cart:', item);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    let totalAmount = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong> x ${item.quantity} - $${itemTotal.toFixed(2)}
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function proceedToPayment() {
    // Logic to proceed to payment
    alert('Proceeding to payment...');
    // Reset cart after proceeding to payment
    cart = [];
    updateCart();
}

