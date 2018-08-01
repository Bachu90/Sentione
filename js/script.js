$(document).ready(function(){
    
    /* MENU HOVER */
    
    $('.menu_item').hover(
        function(){
            $('.link_hover', this).css('visibility', 'visible');
        },
        function(){
            $('.link_hover', this).css('visibility', 'hidden');
        }
    );
    
    /* MENU ACTIVE */
    
    $('.menu_item').click(function(){
        $('.menu_item').removeClass('active');
        $(this).addClass('active');
    });
    
    /* MOBILE MENU */
    
    $('#mobile_button').click(function(){
        $('.mobile_menu').slideToggle('0,5s');
    });
    
    /* SIGN UP VALIDATION */
    
    $('#signup').submit(function(){
        
        var emailTest = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/;
        var emailAdress = $('#email_box').val();
        var result = emailAdress.match(emailTest);
            

        if(result == null){
            $('.error_alert').slideDown();
            $('#email_box').addClass('error');
            return false; 
        }else{
            return true;
        };
    });
    
    $('#signup').keydown(function(){
        $('.error_alert').slideUp();
        $('#email_box').removeClass('error');
    }); 
    
    /* SCROLL DOWN ARROW */
    
    $('.header_arrow').click(function(){
        var pos = $('#footer').offset().top;
        $('html, body').animate({ scrollTop: pos }, 1200);
	});
});