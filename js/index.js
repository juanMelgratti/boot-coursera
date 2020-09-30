$(function(){
    $("[data-toggle='tooltip']").tooltip();

    $('.carousel').carousel({
        interval: 2000
    },

    $('#myModal').on('show.bs.modal', function(e){
        $('myModal').removeClass('btn.info');
        $('#myModal').addClass('btn-primary');
        $('#myModal').prop('disabled', true);
    }),

    $('#myModal').on('shown.bs.modal', function(e){
        console.log('el modal se mostro');
    }),

    $('#myModal').on('hide.bs.modal', function(e){
        console.log('el modal esta escondiendo');
    }),

    $('#myModal').on('hidden.bs.modal', function(e){
        console.log('el modal se escondio');
    })
})