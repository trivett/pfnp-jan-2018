$('#movie-search-form').keyup(function (e) {
  e.preventDefault();
  $('.result').hide();
  var userSearchQuery = this.query.value;
  if (userSearchQuery.length > 2) {
    searchOMDB(userSearchQuery);
  }
});

function searchOMDB(query) {
  $.getJSON('https://www.omdbapi.com/', {
    t: query,
    apikey: "2c2826e6",
    plot: "short",
    r: 'json'
  }, function (omdbData) {
    if (omdbData.Response === "True") {

      renderMovie(omdbData)
    } else {
      renderError();
    }
  });
}

function renderMovie(omdbData) {
  $('.result').show();
  $('#title').html(omdbData.Title);
  $('#year').html(omdbData.Year);
  $('#actors').html(omdbData.Actors);
  $("#plot").html(omdbData.Plot);
  $('#director').html(omdbData.Director)
  $('#awards').html(omdbData.Awards)
  $('#poster').attr("src", omdbData.Poster);
  $('#movie-website').attr("href", omdbData.Website);
  $('.error').hide();
}

function renderError() {
  $('.error').show();
}