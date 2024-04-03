$(function() {
    //Smooth scroll//
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

        window.location.hash = hash;
        });
        }
    });
    //Modal//
    $("#enviarForm").click(function (){
        $("#modalForm").modal('show')
    })

    //Títulos en color azul al hacer dblclick"
    $('body').on('dblclick','h3',function(){
        $(this).css("color","blue")
    })
})
//Para que los tooltip funcionen//
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})