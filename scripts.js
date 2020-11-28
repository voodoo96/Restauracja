$(document).ready(function () {
    $("#login").click(function (event) {
        event.preventDefault();
        var name = $("name").val();
        var name = $("email").val();
        var name = $("password").val();

        $("#contact-right").html(name + "<br>" + email + "<br>" + password);
    });
});