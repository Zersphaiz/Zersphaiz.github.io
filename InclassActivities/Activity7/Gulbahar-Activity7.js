var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function addScore() {
	var name = $("name").value;
	var score = $("score").value;

	if (name.trim() === "" || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score.");                    //ALERT DOES NOT WORK
	} else {
		names.push(name);
		scores.push(score);
		$("name").value = "";
		$("score").value = "";
		$("name").focus();
	}
}

function displayResults() {
	var average = 0.0,
	score_highest = 0;

	for (var x = 0; x < scores.length; x++) {
		average += parseFloat(scores[x]);
		if (scores[score_highest] < scores[x])
			score_highest = x;
	}

	average = average / scores.length;

	$("results").innerHTML = "Average score = " + average + "<br />";
	$("results").innerHTML += "High score = " + names[score_highest] + " with a score of " + scores[score_highest];
}

function displayScores() {
	var table = "<table>";
	table += "<tr align='left'><th>Name</th><th>Score</th></tr>";

	for (var x = 0; x < scores.length; x++) {
		table += "<tr><td>" + names[x] + "</td><td>" + scores[x] + "</td></tr>";
	}

	table += "</table>";

	$("scores_table").innerHTML = table;
}

window.onload = function () {
	$("name").focus();
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};