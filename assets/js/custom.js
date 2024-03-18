//--------------------------------------
// Search page
//--------------------------------------
$(window).ready(function() {
    $("#search-results").hide();
    var locale = $("html").attr("lang");
    var json_path = "/search/index.json";
    var search_link = '<li class="dropdown-item search-item"><a href="/search/">&rarr; More search info</a></li>';
    if (locale != "en") {
        json_path = "/" + locale + "/search/index.json";
        if(locale == "zh") {
            search_link = '<li class="dropdown-item search-item"><a href="/' + locale + '/search/">&rarr; 更多搜索信息</a></li>';
        }
        else if(locale == "pt") {
            search_link = '<li class="dropdown-item search-item"><a href="/' + locale + '/search/">&rarr; Mais informações de pesquisa</a></li>';
        }
        else if(locale == "es") {
            search_link = '<li class="dropdown-item search-item"><a href="/' + locale + '/search/">&rarr; Más información de búsqueda</a></li>';
        }
    }
    
    if ($("#search-input").length > 0) {
        var sjs = SimpleJekyllSearch({
            searchInput: document.getElementById("search-input"),
            resultsContainer: document.getElementById("search-results"),
            json: json_path,
            fuzzy: false,
            limit:9,
            searchResultTemplate: '<li class="dropdown-item search-item"><a href="{link}">{title}</a><p>{excerpt}</p></li>',
            noResultsText: "No matches",
            searchLink: search_link,
            success: function() {
                
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