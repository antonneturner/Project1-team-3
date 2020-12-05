$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://opentdb.com/api.php?amount=3&category=18&difficulty=easy&type=multiple",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var searchValue = "Javascript";

            $.ajax({
                type: "GET",
                url: "https://opentdb.com/api.php?amount=3&category=18&difficulty=medium&type=multiple",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    var searchValue = "Javascript";

                    $.ajax({
                        type: "GET",
                        url: "https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple",
                        dataType: "json",
                        success: function (data) {
                            console.log(data);
                            var searchValue = "Javascript";

                            $.ajax({
                                type: "GET",
                                url: "https://www.googleapis.com/books/v1/volumes?q=" + searchValue,
                                dataType: "json",
                                success: function (data) {
                                    console.log(data);
                                }
                           })
                        }
                    });
                }
            });
        }
    });
});