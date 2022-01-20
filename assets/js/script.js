$(function() {
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
    $("#enviarCorreo").click(function (){
        $("#modalCorreo").modal('show')
    })


    $('body').on('dblclick','h2',function(){
        $(this).css("color","blue")
    })
})
//Para que los tooltip funcionen//
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})