jQuery(document).ready(function ($) {
    $('form').on('submit', function (e) {
        
        e.preventDefault(); 
        $('#tasks').html('');
        
        const text = $('#txtInput').val();
        
        if (text.length > 0) {
            return $('#tasks').prepend(`<h3 class="text-success mt-3">
                ${text} Beautiful Text!
                </h3>`);
        }
        else {
            return $('#tasks').prepend(`<div class="alert alert-danger mt-3" role="alert">
                Your Text can't be Empty!
                </div>`);   
        }

    });
    
});


