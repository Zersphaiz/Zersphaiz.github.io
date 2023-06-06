$(document).ready(function () {
    $("nav a").click(function (event) {
        event.preventDefault();

        var name_jsonFile = $(this).attr("title") + ".json";

        $("main").empty();

        $.getJSON(name_jsonFile, function (data) {
            var html_speaker = 
                '<h1>' + data.speakers[0].title + '</h1>' +
                '<img src="' + data.speakers[0].image + '">' +
                '<h2>' + data.speakers[0].month + '<br>' + data.speakers[0].speaker + '</h2>' +
                '<p>' + data.speakers[0].text + '</p>';

            $("main").append(html_speaker);
        });
    });
});
