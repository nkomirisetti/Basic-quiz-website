/*global document, $
*/

$(document).ready(function () {
    "use strict";
    
    
    $(".questions-title").html("Answered Questions");
    $(".questions-section").append("<div class=\"container answered-questions-container\"></div>");
    $(".answered-questions-container").append("<h1 class=\"title answers-title\">Answered Questions</h1>");
    $(".answered-questions-container").append($(".question-answered-text").parent().parent());
        
    $(".header-container").append("<input id=\"myInput\" type=\"text\" placeholder=\"Search within question text..\"><br>");
  	$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".question").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  		});
	});

	// Add functionality to sort questions alphabetically AND by answerCount.
	 $(".header-container").append("<button class=\"button sortAlphabetically\">Sort Alphabetically</button>");
	 $(".sortAlphabetically").on("click", function () {
	 	var allquestions = $(".questions-title").sort(function (a, b) {
            return ('' + a.attr).localeCompare(b.attr);
        });
	 	$("").append(allquestions);
    }); 
    

	 // jquery search alphabetically -- pass in function with two arguments, compare text
	 // sort returns array
	 // append sorted array back to questions container

	 $(".header-container").append("<button class=\"button answerCountSort\">Sort by answer count </button>");
    
    $(".question-body").append("<button class=\"button hideButton\">Show/Hide Answers</button>");
    $(".question-body").append("<br><br>");
    $(".hideButton").on("click", function () {
        $(this).prev().slideToggle("slow","swing");
    }); 
    
    $(".question").each(function () {
        $(this).find(".question-header").append("<br>answer count: " + $(this).data("answercount"));
    });
    
});


