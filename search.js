$(document).ready(function () {
    var dz = [];

    $("#mySearch").keypress(function (event) {
        var key = event.keyCode;
        if (key == '13') {
            search();
        }
    });

    $("#btn").click(function () {
        search();
    });

    function search() {
        $searcText = $("#mySearch").val();

        if ($searcText != "" && dz.indexOf($searcText) == -1) {
            dz.push($searcText);
            $(".recent").prepend("<li> <span class=\"rs\"> <img src=\"img/clock.png\" > &nbsp;" + $searcText + "</span><span class=\"remove\"> X </span></li>");
        }
        $("#mySearch").val("");
    }

    $(document).on("click", ".remove", function () {
        $rmvtext = $(this).parent().children(".rs").text();
        dz.splice(dz.indexOf($rmvtext), 1)

        $(this).parent().remove();

    });

    $(document).on("click", ".rs", function () {
        $("#mySearch").val($(this).text());
    });

});