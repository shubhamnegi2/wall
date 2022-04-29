$(function () {

    // Validate Email   
    let isEmailValid ;
    function isFormValid() {
        let email = $('#email').val();
        let regex =  /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if(regex.test(email)){
            $('#newsletter label').hide();
            isEmailValid = true;
        }else if(email === '') {
            $('#newsletter label').show();
            $('#newsletter label').text('please enter your Email');
            isEmailValid = false;
        }else{
            $('#newsletter label').show();
            $('#newsletter label').text('please enter valid Email');
            isEmailValid = false;
        }
        return isEmailValid;               
    }

    $('#email').blur(function(){
        isFormValid(); 
    }); 

    $("form").submit(function(event){
        event.preventDefault()        
        if(isEmailValid){
            $('#newsletter label').hide();
            window.location = 'assets/php/newsletter.php'           
        }else{
            $('#newsletter label').show();
            $('#newsletter label').text('please enter valid Email');  
        }
    });





    
    $('.uncover').click(function () {
        $('.map-cover').css({
            transition: 'all .3s ease',
            height: '15%'
        });
        $('.location-icon').hide();
        $('.uncover').hide();
        $('.uncover-icon').hide();
        $('.cover').show();
    });

    $('.cover').click(function () {
        $('.map-cover').css({
            transition: 'all .3s ease',
            height: '100%'
        });
        $('.location-icon').show();
        $('.uncover').show();
        $('.uncover-icon').show();
        $('.cover').hide();
    });

    /* home slider */
    $('.client-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.main-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('.owl-carousel .owl-nav .owl-prev span').html('<i class="fa-solid fa-circle-arrow-left"></i>');
    $('.owl-carousel .owl-nav .owl-next span').html('<i class="fa-solid fa-circle-arrow-right"></i>');


    $('.services').click(function () {
        $('.services').removeClass('active-service');
        $(this).addClass('active-service');
    });

    function hidden() {
        $('.sub-content-wrapper').css({
            visibility: 'hidden',
            opacity: '0',
            transition: 'all .3s ease'
        });
    }




    $('.creative').click(function () {
        hidden();
        $(this).addClass('active');
        $('.creative-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
        $('.services-read-more a').attr('href','designing.html');
    });

    
    $('.google-ad').click(function () {
        hidden();
        $('.google-ad-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
        $('.services-read-more a').attr('href','google-ad.html');
    });

    $('.web').click(function () {
        hidden();
        $('.web-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
        $('.services-read-more a').attr('href','web-development-services-in-delhi.html');
    });

    $('.smo').click(function () {
        hidden();
        $('.smo-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
        $('.services-read-more a').attr('href','smo-services-in-delhi.html');
    });

    $('.seo').click(function () {
        hidden();
        $('.seo-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
        $('.services-read-more a').attr('href','seo-services-in-delhi.html');
    });

    $('.smm').click(function () {
        hidden();
        $('.smm-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
        $('.services-read-more a').attr('href','smm-services-in-delhi.html');
    });











    $('.portfolio-tabs ul li').click(function () {
        $('.portfolio-tabs ul li').removeClass('active-tab');
        $(this).addClass('active-tab');
    });

    function none() {
        $('.portfolio-target').css({
            display: 'none'
        });
    }


    $('.logos').click(function () {
        none();
        $('.logos-image-wrapper').css({
            display: 'block'
        });
        $('.portfolio-tab-target .see-more a').attr('href','logos.html')
    });

    $('.web').click(function () {
        none();
        $('.web-image-wrapper').css({
            display: 'block'
        });
        $('.portfolio-tab-target .see-more a').attr('href','web-development.html')
    });

    $('.poster-banner').click(function () {
        none();
        $('.poster-banner-image-wrapper').css({
            display: 'block'
        });
        $('.portfolio-tab-target .see-more a').attr('href','poster-and-banner.html')
    });

    $('.packaging').click(function () {
        none();
        $('.packaging-banner-image-wrapper').css({
            display: 'block'
        });
        $('.portfolio-tab-target .see-more a').attr('href','packaging.html')
    });
    $('.brochure-catalogue').click(function () {
        none();
        $('.brochure-catalogue-banner-image-wrapper').css({
            display: 'block'
        });
        $('.portfolio-tab-target .see-more a').attr('href','brochure-and-catalogue.html')
    });
    $('.smb').click(function () {
        none();
        $('.smb-banner-image-wrapper').css({
            display: 'block'
        });
        $('.portfolio-tab-target .see-more a').attr('href','smb.html')
    });







    $('.why-us').mouseover(function () {
        $('.quality .fa-magnifying-glass').animate({
            left: '-50px',
        }, 500);
        $('.quality .fa-magnifying-glass').animate({
            left: '0px',
        }, 500);
    })










});