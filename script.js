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

//Coding Level Questions for Quiz set with var for arrays Novice, Intermediate, and Expert
var questionsNovice = [
    {
    title: "What does the &quot;MP&quot; stand for in MP3?",
    options: ["Moving Picture", "Music", "Multi Pass", "Micro Point"],
    answer: "Moving Picture"    
},
{
    title: "Which programming language shares its name with an island in Indonesia?",
    options: ["Python", "Java", "Jakarta", "C"],
    answer: "Java"
},
{
    title: "In computing, what does LAN stand for?",
    options: ["Long Antenna Node", "Local Area Network", "Light Access Node", "Land Address Navigation"],
    answer: "Local Area Network" 
},
];

// Intermediate Questions
var questionsIntermediate = [
    {
    title: "In the server hosting industry IaaS stands for...",
    options: ["Internet and a Server", "Infrastructure as a Service", "Internet as a Service", "Infrastructure as a Server"],
    answer: "Infrastructure as a Service"
},
{
    title: "What is the name of the default theme that is installed with Windows XP?",
    options: ["Luna", "Bliss", "Neptune", "Whistler"],
    answer: "Luna" 
},
{
    title: "How many bits make up the significant portion of a single precision floating point number?",
    options: ["53", "8", "15", "23"],
    answer: "23"
},
];

// Expert Questions
var questionsExpert = [
    {
    title: "Which of these names was an actual codename for a cancelled Microsoft project?",
    options: ["Pollux", "Saturn", "Neptune", "Enceladus"],
    answer: "Neptune"
},
{
    title: "America Online (AOL) started out as which of these online service providers?",
    options: ["Quantum Link", "Prodigy", "GEnie", "CompuServe"],
    answer: "Quantum Link"
},
{
    title: "Which of these is not a key value of Agile software development?",
    options: ["Customer collaboration", "Responding to change", "Comprehensive documentation", "Individuals and interactions"],
    answer: "Comprehensive documentation" 
},
{
    title: "What does the International System of Quantities refer 1024 bytes as?",
    options: ["Kylobyte", "Kibibyte", "Kelobyte", "Kilobyte"],
    answer: "Kibibyte"
},
{
    title: "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    options: ["A&#039; + B&#039", "AB&#039; + AB", "A&#039;B + B&#039;A", "A&#039;B&#039;"],
    answer: "A&#039; + B&#039"
},
];
// Scoring function per quiz level//
