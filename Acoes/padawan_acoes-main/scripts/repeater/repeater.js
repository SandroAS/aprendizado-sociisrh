$(document).ready(function () {
    $('.file-repeater, .contact-repeater, .repeater-default, .repeater').repeater({
        isFirstItemUndeletable: false,
        initEmpty: false,
        ready: function () {
            // $('.select2').select2({
            //     placeholder: "Select an option...",
            // });  
        },
        show: function() {                   
            $(this).slideDown();       
            // $('.select2').select2({
            //     placeholder: "Select an option...",
            // });  
        },
        hide: function(deleteElement) {
            if (confirm('deseja remover este item?')) {
                $(this).slideUp(deleteElement);
            }
        }
    });
});