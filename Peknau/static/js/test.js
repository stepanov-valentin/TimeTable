/**
 * Created by stepanov on 19.05.15.
 */
$ = jQuery;
//if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");

jQuery(document).ready(function ($) {
    $(".sp_del").click = function () {
        alert("blabla");
    };
});

$('#successModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
})

jQuery(document).ready(function () {
    $(".btn-primary").click(function () {
        alert($(this).attr('spec_id'));

        $.ajax({
            url: '/admin/specialty/delete',
            type: "DELETE",
            data: {
                "id": $(this).attr('spec_id')
            },
            success: function (result) {
                $("#modalSuccess").modal('show');
                $("#modalSuccess").find('.modal-body').text(result);
            }
        })
    });
});