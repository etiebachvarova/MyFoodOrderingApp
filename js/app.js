$(document).ready(function() {
    // Handle registration
    $('#registerForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'api/register',
            method: 'POST',
            data: {
                name: $('#registerName').val(),
                email: $('#registerEmail').val(),
                password: $('#registerPassword').val()
            },
            success: function(response) {
                // Handle success
            },
            error: function(error) {
                // Handle error
            }
        });
    });

    // Handle login
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'api/login',
            method: 'POST',
            data: {
                email: $('#loginEmail').val(),
                password: $('#loginPassword').val()
            },
            success: function(response) {
                // Handle success
            },
            error: function(error) {
                // Handle error
            }
        });
    });

    // Load food categories
    function loadFoodCategories() {
        $.ajax({
            url: 'api/foodCategories',
            method: 'GET',
            success: function(data) {
                // Populate categories
            }
        });
    }

    // Add item to cart
    function addToCart(itemId) {
        $.ajax({
            url: 'api/cart',
            method: 'POST',
            data: { itemId: itemId },
            success: function(response) {
                // Update cart
            },
            error: function(error) {
                // Handle error
            }
        });
    }

    // Handle payment
    $('#paymentForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'api/payment',
            method: 'POST',
            data: {
                // Payment data here
            },
            success: function(response) {
                // Handle success
            },
            error: function(error) {
                // Handle error
            }
        });
    });

    // Initial load
    loadFoodCategories();
});
