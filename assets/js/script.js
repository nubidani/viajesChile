
$(function() {
    //Smooth scroll
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - $("nav").height()
        }, 900);
        }
    });
    //Modal
    $("#enviarFormulario").click(function (){
        $("#modalFormulario").modal('show');
    })

    //Títulos en color azul al hacer dblclick"
    $('body').on('dblclick','h3',function(){
        $(this).css("color","blue")
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > $("#carouselExampleInterval").offset().bottom) {
            $(".navbar").addClass("bg-black");
        } else {
            $(".navbar").removeClass("bg-black ");
        }
    });
})
//Para que los tooltip funcionen
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
});

