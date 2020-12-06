$(document).ready(function () {


    // Novice Questions//
    $.ajax({
        type: "GET",
        url: "https://opentdb.com/api.php?amount=3&category=18&difficulty=easy&type=multiple",
        dataType: "json",
        success: function nextQuestion(data) {
            $('.submit').on('click', function () {
                console.log(data);
                var searchValue = "Javascript";

                let newAnswer = $("input").val();
                let rightAnswer = data[''].answer;
                console.log(rightAnswer);

                if (newAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
                    $('h3').text("Correct!")
                    $('input').val('');

                } else {
                    $('h3').text("Incorrect!");
                }

                var counter = 30;
                var clock = setInterval(function () {
                    $('h3').text(count + "" + "seconds(S)left")
                    counter - 0;

                    if (counter === 0) {
                        stopInterval();
                    }


                }, 1000);

                var stopInterval = function () {
                    $('h3').text("Timed Out!")
                    $('h3').text("Your Score is " + points + "points")
                    $(".submit").hide();
                    clearInterval(timer);
                }


                // Intermediate Questions//

                $.ajax({
                    type: "GET",
                    url: "https://opentdb.com/api.php?amount=3&category=18&difficulty=medium&type=multiple",
                    dataType: "json",
                    success: function nextQuestion(data) {
                      
                        $('.submit').on('click', function () {
                            console.log(data);
                            var searchValue = "Javascript";

                            let newAnswer = $("input").val();
                            let rightAnswer = data[''].answer;
                            console.log(rightAnswer);

                            if (newAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
                                $('h3').text("Correct!")
                                $('input').val('');

                            } else {
                                $('h3').text("Incorrect!");
                            }

                            var counter = 30;
                            var clock = setInterval(function () {
                                $('h3').text(count + "" + "seconds(S)left")
                                counter - 0;

                                if (counter === 0) {
                                    stopInterval();
                                }


                            }, 1000);

                            var stopInterval = function () {
                                $('h3').text("Timed Out!")
                                $('h3').text("Your Score is " + points + "points")
                                $(".submit").hide();
                                clearInterval(timer);
                            }

                            // Expert Questions//

                            $.ajax({
                                type: "GET",
                                url: "https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple",
                                dataType: "json",
                                success: function nextQuestion(data) {
                                   
                                    $('.submit').on('click', function () {
                                        console.log(data);
                                        var searchValue = "Javascript";

                                        let newAnswer = $("input").val();
                                        let rightAnswer = data[''].answer;
                                        console.log(rightAnswer);

                                        if (newAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
                                            $('h3').text("Correct!")
                                            $('input').val('');

                                        } else {
                                            $('h3').text("Incorrect!");
                                        }

                                        var counter = 30;
                                        var clock = setInterval(function () {
                                            $('h3').text(count + "" + "seconds(S)left")
                                            counter - 0;

                                            if (counter === 0) {
                                                stopInterval();
                                            }


                                        }, 1000);

                                        var stopInterval = function () {
                                            $('h3').text("Timed Out!")
                                            $('h3').text("Your Score is " + points + "points")
                                            $(".submit").hide();
                                            clearInterval(timer);
                                        }

                                        // Google Book Search API//

                                        $("#newform").submit(function (response) {
                                            console.log(response);
                                            var search = $("#books").val();
                                            if (search == "") {
                                                alert("Title search information required")
                                            } else {
                                                var url = "";
                                                var img = "";
                                                var title = "";
                                                var author = "";

                                                $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

                                                    for (i = 0; i < response.items.length; i++) {
                                                        title = $('<h6 class="center-align black-text">' + response.items[i].volumeInfo.title + '</h6>');
                                                        author = $('<h5 class="center-align black-text"> By: ' + response.items[i].volumeInfo.authors + '</h5>');
                                                        img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="button blue aligning">Read More</button></a>');

                                                        url = response.items[i].volumeInfo.imageLinks.thumbnail;
                                                        img.attr('src', url);
                                                        title.appendTo('#reults');
                                                        author.appendTo('#results');
                                                        img.appendTo('#results');
                                                    }
                                                });
                                            }
                                            return false;
                                        });
                                    })
                                }
                            })
                        })
                    }


                })
            })

        }

    })

});