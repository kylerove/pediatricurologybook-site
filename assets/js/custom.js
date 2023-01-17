//--------------------------------------
// Search page
//--------------------------------------
$(window).ready(function() {
    $("#search-results").hide();
    var locale = $("html").attr("lang");
    var json_path = "/search/index.json";
    if (locale != "en") {
        json_path = "/" + locale + "/search/index.json";
    }
    
    if ($("#search-input").length > 0) {
        var sjs = SimpleJekyllSearch({
            searchInput: document.getElementById("search-input"),
            resultsContainer: document.getElementById("search-results"),
            json: json_path,
            fuzzy: false,
            searchResultTemplate: '<li class="dropdown-item"><a href="{link}">{title}</a></li>',
            noResultsText: "No matches",
            success: function() {
                searchSuccess();
                //$("#search-results").show();
            }
        });

        // Execute search again if using back button.
        var value = $("#search-input").val();
        if (value.length > 0) {
            setTimeout(function() {
                sjs.search(value);
            }, 750);
            $("#search-results").show();
        }
        else {
            $("#search-results").hide();
        }
    }
    else {
        //$("#search-results").hide();
    }
});

var searchSuccess = function() {
    //$("#search-results").show();
}