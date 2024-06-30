$(document).ready(function() {
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
});
