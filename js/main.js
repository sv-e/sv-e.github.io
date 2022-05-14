'use strict';

$(document).ready(function(){    

    // Sticky Header
    function navbarFixed(){
        if($('.page-header').length){
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();

                if (scroll > 100 ){
                    $('.page-header').addClass("sticky");
                } else {
                    $('.page-header').removeClass("sticky");
                }
            });
        }
    }
    navbarFixed();
    
    // Img in Bg
    function imgBackground(){
        var imgs = $('.portfolio-link img');
        imgs.each(function(){
            var item = $(this).closest('.portfolio-item');
            item.css({
                'background-image': 'url(' + $(this).attr('src') + ')', 
                'background-position': 'center center',            
                '-webkit-background-size': 'cover',
                'background-size': 'cover', 
            });
            $(this).hide();
        });
    }    
    imgBackground();  

    

    

	/*-----------------------------------------------------------------*/
    /*  PLUGINS */
    /*-----------------------------------------------------------------*/

    function wowAnimation(){
        new WOW({
            offset: 100,          
            mobile: true
        }).init()
    }
    wowAnimation();

    
    // --- Tooltip
    $('[data-tipso]').each(function(){
        var $this = $(this),
            tooltip = $this.data('tooltip');
        
        $this.tipso({
            background: '#ffffff',
            color: '#b7b7b7',
            animationIn: 'fadeInDown',
            //animationOut: 'fadeInOut',
            useTitle: false,
            size: 'small',
            tooltipHover: false,
        });
    });

    $('[data-fancybox]').fancybox({
        touch: false,
        afterShow: function(){
            $('.modal-slider').slick('setPosition');
        } 
    });
    
    

    /*=========== Page Scrool to id ===========*/
    if($(".m_PageScroll2id").length){
        $(".m_PageScroll2id").mPageScroll2id({
            offset: 50
        });
    }
    
    
    /*=========== Phone Mask ===========*/
    $('.js-phone').mask("+7(999)999-9999");
    
    /*=========== Slick Slider ===========*/
    if($('.modal-slider').length){
        $('.modal-slider').each(function(){

            var $this = $(this);

            $this.slick({
                slidesToShow: 1,
                slidesToScroll: 1,               
                dots: false,
                infinite: true,
                touchMove: true,
                draggable:true,
                lazyLoad: 'ondemand',
                prevArrow:'<button class="slick-prev"><i class="fas fa-caret-left"></i></button>',
                nextArrow:'<button class="slick-next"><i class="fas fa-caret-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 8000,
                easing: 'swing',
                adaptiveHeight: true, 
                fade: true,
                responsive: [                        
                    {
                      breakpoint: 992,
                      settings: {
                        adaptiveHeight: true
                      }
                    }
                ]
            });   

        }); 
    }

    
     // Smooth Scroll
    // if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, {passive: false});
    // window.onmousewheel = document.onmousewheel = wheel;

    // function wheel(event) {
    //     var delta = 0;
    //     if (event.wheelDelta) delta = event.wheelDelta / 120;
    //     else if (event.detail) delta = -event.detail / 3;

    //     handle(delta);
    //     if (event.preventDefault) event.preventDefault();
    //     event.returnValue = false;
    // }

    // var goUp = true;
    // var end = null;
    // var interval = null;

    // function handle(delta) {
    //     var animationInterval = 20; //lower is faster
    //     var scrollSpeed = 20; //lower is faster

    //         if (end == null) {
    //         end = $(window).scrollTop();
    //     }
    //     end -= 20 * delta;
    //     goUp = delta > 0;

    //     if (interval == null) {
    //         interval = setInterval(function () {
    //             var scrollTop = $(window).scrollTop();
    //             var step = Math.round((end - scrollTop) / scrollSpeed);
    //             if (scrollTop <= 0 || 
    //                     scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
    //                     goUp && step > -1 || 
    //                     !goUp && step < 1 ) {
    //                 clearInterval(interval);
    //                 interval = null;
    //                 end = null;
    //             }
    //             $(window).scrollTop(scrollTop + step );
    //         }, animationInterval);
    //     }
    // }

    
    
    /*=========== Callback ===========*/
    // (function() {

    //     var app = {

    //         init: function() {
    //             this.setUpListeners();
    //         },

    //         setUpListeners: function() {

    //             $(document).on('submit', 'form', this.submitForm);
    //             $(document).on('keyup', 'input', this.removeError);
    //         },

    //         submitForm: function(e) {
    //             e.preventDefault();
    //             var form = $(this),
    //                 btnSubmit = form.find('[type="submit"]'),
    //                 calcForm = $('.calculation-form'),
    //                 defForm = $('.form'),
    //                 btnSubmit = form.find('[type="submit"]');

    //             if (form.validate().form() === false){

    //                 btnSubmit.addClass('disabled');
    //                 return false;
    //             } else {
    //                 btnSubmit.removeClass('disabled');
    //             }
                
                


    //             var str = form.serialize();

    //             var sc = $('#success-form');

    //             $.ajax({
    //                 url: 'contacts.php',
    //                 type: 'post',
    //                 data: str + document.location.search.replace('?', '&')
    //             }).done(function(msg) {

    //                 if (msg === "OK") {

    //                     setTimeout(function() {
    //                         $.fancybox.close();
    //                     }, 1000);


    //                     if (typeof form[0].reset == "function") {
    //                         form[0].reset();
    //                     } else {
    //                         form[0].reset.click();
    //                     }

                        

    //                     if(form.hasClass('calculation-form')){

    //                         $.fancybox.close();
    //                         navigateTo(curIndex() + 1);

    //                     } else {

    //                         $.fancybox.open({
    //                             src: sc,
    //                             type: 'inline',
    //                         });

    //                     } 


    //                     // $.fancybox.open({
    //                     //     src: sc,
    //                     //     type: 'inline',
    //                     // });


    //                 } else {

    //                     $.fancybox.open({
    //                         src: sc,
    //                         type: 'inline',
    //                     });

    //                 }

    //             }).always(function() {

    //             });
    //         },

    //         removeError: function() {
    //             var $this = $(this),
    //                       formGroup = $this.closest('.form-group'),
    //                       form = $(this).closest('form'),
    //                       btnSubmit = form.find('[type="submit"]');
                      
                      
    //             if ($this.valid()){
    //               btnSubmit.removeClass('disabled');  
    //             } else {
    //               btnSubmit.addClass('disabled'); 
    //             }
    //         }
    //     }

    //     app.init();
    // })();

});



$(window).on('load', function(){

    // function loader(){
        
    //     $('#preloader').addClass('loaded');

    //     if ($('#preloader').hasClass('loaded')) {
            
    //         $('#preloader').delay(900).queue(function () {
    //             $(this).remove();
    //         });
    //     }
        
    // }
    // loader();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.post-up').fadeIn();
        } else {
            $('.post-up').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.post-up').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


    function gridMasonry(){
        var grid = $(".grid")
        if( grid.length ){
            grid.imagesLoaded( function() {
                grid.isotope({
                    layoutMode: 'masonry',
                    gutter: 15
                });

                grid.packery({
                    itemSelector: '.grid-item',
                    // columnWidth: 100
                });

                // make all grid-items draggable
                grid.find('.grid-item').each( function( i, gridItem ) {
                    var draggie = new Draggabilly( gridItem );
                    // bind drag events to Packery
                    grid.packery( 'bindDraggabillyEvents', draggie );
                });
            });

            
        }
    }
    gridMasonry();

    
});

$(window).on('load resize', function() {
    var 
        winWidth = $(window).width(),
        thisLeft, 
        thisWidth;           

    function animateIntro() {
        $('.intro').each(function(){
            var 
                $this = $(this),
                thisLeft = $this.offset().left,
                thisWidth = $this.width(),
                title = $('.intro-head'),
                titleTop = title.find('.intro-title'),
                titleTik = title.find('.intro-subtitle'),
                mySplitText = new SplitText(titleTik, {type:"words, chars"}), 
                chars = mySplitText.chars,
                meta = $('.intro-body').find('p'),
                pin1 = $('.intro-thumb'),
                button = $('.intro-inner .btn');

                var tl =  new TimelineMax();

            if(thisLeft < winWidth){
                if(!this.getAttribute("data-done")) {                    

                    TweenMax.to(pin1, 1.2, {
                        top: "+=20",
                        ease: Power1.easeInOut,
                        repeat:10,
                        yoyo:true
                    });                        

                    tl.set(title, {
                        yPercent: 30,
                    });

                    tl.to(title, 1, {
                        startAt: {
                          x: -250
                        },
                        x: 0,
                        ease: Power2.easeOut,
                        immediateRender: !0
                    }, 0.5);

                    tl.to(titleTop, 1, {
                        startAt: {
                            opacity: 0
                        },
                        opacity: 1,
                        ease: Power2.easeOut,
                        immediateRender: !0
                    }, 0.7);


                    tl.to(title, 0.8, {
                        startAt: {
                            yPercent: 30
                        },
                        yPercent: 0,
                        ease: Power2.easeInOut
                    }, 1.2);


                    tl.set(titleTik, {
                        opacity: 1
                    }, 1.5);

                    TweenMax.to(titleTik, 0.72, {
                        rotation: -5,
                        ease: Power1.easeInOut,
                        // repeat:1,
                        // yoyo:true
                    });

                    tl.to(meta, 1, {
                        startAt: {
                            opacity: 0,
                            yPercent: 30
                        },
                        opacity: 1,
                        yPercent: 0,
                        ease: Power2.easeOut,
                        immediateRender: !0
                    }, 1.7);


                    tl.staggerTo(
                        chars, 
                        0.8, 
                        {
                            startAt: {
                                opacity: 0,
                                scale: 0,
                                y: 80,
                                rotationX: 180,
                                rotationY: 90,
                                transformOrigin: "0% 50% -50"
                            },
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            rotationX: 0,
                            rotationY: 0,
                            ease: Back.easeOut,
                            immediateRender: true
                        }, 
                        0.05, 
                        1.5
                    );

                    tl.to(button, 0.5, {
                      startAt: {
                        opacity: 0,
                        //yPercent: 30
                      },
                      opacity: 1,
                      //yPercent: 0,
                      ease: Power1.easeInOut,
                      immediateRender: !0
                    }, 1.7);


                    this.setAttribute("data-done",true);
                }
                
            } else{
                
            }
        });        
    }
    
    animateIntro();  
    

});