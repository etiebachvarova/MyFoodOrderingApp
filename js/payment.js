$(document).ready(function() {
    $('#paymentForm').submit(function(event) {
        event.preventDefault();
        const paymentData = {
            name: $('#paymentName').val(),
            cardNumber: $('#paymentCard').val(),
            expiryDate: $('#paymentExpiry').val(),
            cvc: $('#paymentCVC').val(),
            cartItems: cart
        };
        console.log('Payment data:', paymentData); // Log the form data
        $.ajax({
            url: 'http://localhost:3000/api/payment',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(paymentData),
            success: function(response) {
                console.log('Payment successful:', response);
                // Handle successful payment (e.g., show a confirmation message)
            },
            error: function(error) {
                console.log('Error processing payment', error);
                // Handle payment error (e.g., show an error message)
            }
        });
    });
});
