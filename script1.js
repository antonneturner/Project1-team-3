$(document).ready(function () {
    $('#startButton').on('click', function () {
        getQuestions();
    })

    function getQuestions() {
        $.ajax({
            type: "GET",
            url: "https://opentdb.com/api.php?amount=25&category=18&type=multiple",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                // var content = $("#content")
                // var quizQuestion = $("<h3>").text(data.results)
                data.results.forEach(function (result) {
                    console.log(result);
                    var quizQuestion = $("<h5>").text(result.question)
                    console.log(quizQuestion);
                    $("#content").append(quizQuestion);
                    var quizCategory = $("<h5>").text(data.results[0].category);
                    $("#content").append(quizCategory);
                    var quizDifficulty = $("<h5>").text(data.results[0].difficulty);
                    $("#content").append(quizDifficulty);
                    var answer1 = $("<h7>").addClass("quiz-answer1").text(data.results[0].correct_answer);
                    $("#content").append(answer1);
                    var answer2 = $("<h7>").addClass("quiz-answer2").text(data.results[0].incorrect_answers[0]);
                    $("#content").append(answer2);
                    var answer3 = $("<h7>").addClass("quiz-answer3").text(data.results[0].incorrect_answers[1]);
                    $("#content").append(answer3);
                    var answer4 = $("<h7>").addClass("quiz-answer4").text(data.results[0].incorrect_answers[2]);
                    $("#content").append(answer4);

                    $(function() {
                        $('button[type="submit"]').click(function() {
                            var quizQuestion = $('<input type="button" value="new button"/><br/>');
                            $("#content").append(quizQuestion);
                        })
                    })
                    $(function () {
                        $('button').on('click', function () {
                            var answer1 = $('<input type="button" value="new button"/><br/>');
                            $("#content").append(answer1);
                            console.log(button)
                        })
                    })
                    $(function () {
                        $('button').on('click', function () {
                            var answer2 = $('<input type="button" value="new button"/><br/>');
                            $("#content").append(answer2);
                        })
                    })
                    $(function () {
                        $('button').on('click', function () {
                            var answer3 = $('<input type="button" value="new button"/><br/>');
                            $("#content").append(answer3);
                        })
                    })
                    $(function () {
                        $('button').on('click', function () {
                            var answer4 = $('<input type="button" value="new button"/><br/>');
                            $("#content").append(answer4);
                        })
                    })
                });
            }
        })
    }
    function searchBooks(searchValue) {
        $("#search-btn").on("click", function () {
            var searchVal = $("#search-value").val()
            $("#search-value").val("")
            searchBooks(searchValue)
        })

        $.ajax({
            type: "GET",
            url: "https://www.googleapis.com/books/v1/volumes?q=" + searchValue,
            dataType: "json",
            success: function(repsponse) {
                $("#newform").empty();
                console.log(response);
                var search = $("#books").val();
                    if (search == "") {
                    changeFormcolor(yellow);
                        }
                            else {
                                var url = "";
                                var img = "";
                                var title = "";
                                var author = "";
                            }
                        for (i = 0; i < response.items.length; i++) {
                            title = $('<h6 class="center-align black-text">' + response.items[i].volumeInfo.title + '</h6>');
                            author = $('<h5 class="center-align black-text"> By: ' + response.items[i].volumeInfo.authors + '</h5>');
                            img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="button blue aligning">Read More</button></a>');
        
                            url = response.items[i].volumeInfo.imageLinks.thumbnail;
                            img.attr('src', url);
                            title.appendTo('#results');
                            author.appendTo('#results');
                            img.appendTo('#results');
                        }
                        return false;
            }
        })
    }
    
});