$(document).ready(function() {
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
});
