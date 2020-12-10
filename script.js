// $(document).ready(function () {

//   let content = document.getElementById('content');

    
//         let rightButton = document.querySelector("#answer1")
//         let wrongButton = document.querySelector("#answer2")
//         let wrongerButton = document.querySelector("#answer3")
//         let wrongestButton = document.querySelector("#answer4")

//     const showData = data => {
//         let quizQuestions =`
//         <h5>Category: ${data.results[0].category}<br></h5>
//         <h5>Difficulty: ${data.results[0].difficulty}<br></h5>
//         <h5>Question: ${data.results[0].question}<br></h5>
//         <button>${data.results[0].correct_answer}<br></button>
//         <h7>${data.results[0].incorrect_answers[0]}<br></h7>
//         <h7>${data.results[0].incorrect_answers[1]}<br></h7>
//         <h7>${data.results[0].incorrect_answers[2]}<br></h7>
//         `
//         content.innerHTML = quizQuestions;
//     }
//     rightButton.addEventListener("click",()=>{
//         fetch("https://opentdb.com/api.php?amount=25&category=18&type=multiple")
//         .then(response => {
//             return response.json();
//         })
//         .then(json_data => {
//             console.log(json_data);
//             showData(json_data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     })
    

//     // Google Book Search API//

//     $("#newform").submit(function (response) {
//         console.log(response);
//         var search = $("#books").val();
//         if (search == "") {
//             alert("Title search information required")
//         } else {
//             var url = "";
//             var img = "";
//             var title = "";
//             var author = "";

//             $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

//                 for (i = 0; i < response.items.length; i++) {
//                     title = $('<h6 class="center-align black-text">' + response.items[i].volumeInfo.title + '</h6>');
//                     author = $('<h5 class="center-align black-text"> By: ' + response.items[i].volumeInfo.authors + '</h5>');
//                     img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="button blue aligning">Read More</button></a>');

//                     url = response.items[i].volumeInfo.imageLinks.thumbnail;
//                     img.attr('src', url);
//                     title.appendTo('#results');
//                     author.appendTo('#results');
//                     img.appendTo('#results');
//                 }
//             });
//         }
//     })
//     return false;
// });