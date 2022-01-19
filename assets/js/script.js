$(function() {
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