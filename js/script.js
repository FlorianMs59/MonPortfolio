$(function(){

    $(".navbar a, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 1000 , function(){window.location.hash = hash;})
        
    });

    // Animation Photo & text
        $(".block").addClass("load");
        $(".block-text").addClass("load");

    // change la couleur principal du thème
    $("#color").change(function() {
        let couleur = $("#color").val();
        let cibles = [$("#menu"), $(".red-divider"), $("#about"), $("#experience"), $("#portfolio"), $(".progress-bar")];
        for(let element of cibles) {
          element.css("background-color", couleur);
        }
      });

    //   Change la couleur des textes
      $("#color").change(function() {
        let couleur = $("#color").val();
        let cibles = [
            $(".colorChang"),
            $(".timeline-heading h4"),
            $(".timeline-badge"),
            $(".education-bloc h3"),
            $(".carousel-item h3"),
            $(".contact p")
        ];
        for(let element of cibles) {
          element.css("color", couleur);
        }
      });

    //   Flèche retour haut de page
      $(function(){
          $.fn.scrollToTop=function(){$(this).hide().removeAttr("href");
          if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}var scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()=="0"){$(scrollDiv).fadeOut("slow")}else{$(scrollDiv).fadeIn("slow")}});
          $(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}
        }); 
      $(function(){
       $("#toTop").scrollToTop();
      });
      
        
        // Popover         
        $('#popover1').popover().click(function () {
          setTimeout(function () {
            $('#popover1').popover('hide');
        }, 3000);
      });
          
        $('#popover2').popover().click(function () {
            setTimeout(function () {
              $('#popover2').popover('hide');
          }, 3000);
        });
          
        $('#popover3').popover().click(function () {
            setTimeout(function () {
              $('#popover3').popover('hide');
          }, 2000);
        });
        
        $('#popover4').popover().click(function () {
            setTimeout(function () {
              $('#popover4').popover('hide');
          }, 3000);
        });
    
    })

