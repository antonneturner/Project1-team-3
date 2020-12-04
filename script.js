$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://opentdb.com/api.php?amount=3&category=18&difficulty=easy&type=multiple",
        dataType: "https",
        success: function (){
            console.log(data);
        }
    })
});

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://developers.google.com/books/docs/v1/using",
        dataType: "https",
        success: function (){
            console.log(data);
        }
    })
});
