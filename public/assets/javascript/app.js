$(function () {

    $("#addburger").on("click", function (event) {
        event.preventDefault();

        let newBurger = {
            burger: $("#auth").val().trim()
        };

        if (newBurger.burger !== "") {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    location.reload();
                }
            );

        }
    })

    $(".eatburger").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                location.reload();
            }
        )
    });
});