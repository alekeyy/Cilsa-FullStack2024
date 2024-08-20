$(document).ready(function(){

    $('#first_form').submit(function(e){
        e.preventDefault();
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var password = $('#password').val();

        $(".error").remove();

        if(first_name.length < 1) $('#first_name').after('<span class="error">This field is required</span>');
        if(last_name.length < 1) $('#last_name').after('<span class="error">This field is required</span>');
        if(email.length < 1) $('#email').after('<span class="error">This field is required</span>');
        if(password.length < 1) {
            $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
        } else {
            var regEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
            var validEmail = regEx.test(email);
            if(!validEmail){
                $('#email').after('<span class="error">Enter a valid email</span>');
            } else {-
                // ingresar
                $('#enviar').after('<h2 class="msj">Lograste ingresar</h2>');
                $(".nota").html("APROBADO");
                $('<div>hello</div>').appendTo('.nota');
                //limpiar formulario
                $('form').get(0).reset();
            }
        }
    })
})