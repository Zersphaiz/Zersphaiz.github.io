$(document).ready(function() {
    // Click event handler for sidebar links
    $("nav a").click(function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the name of the JSON file from the link's title attribute
        var jsonFileName = $(this).attr("title") + ".json";

        // Clear the content in the main element
        $("main").empty();

        // Retrieve JSON data using Ajax
        $.getJSON(jsonFileName, function(data) {
            // Create HTML elements for the speaker data
            var speakerHTML = '<h1>' + data.speakers[0].title + '</h1>' +
                              '<img src="' + data.speakers[0].image + '">' +
                              '<h2>' + data.speakers[0].month + '<br>' + data.speakers[0].speaker + '</h2>' +
                              '<p>' + data.speakers[0].text + '</p>';

            // Append the speaker HTML to the main element
            $("main").append(speakerHTML);
        });
    });
});
