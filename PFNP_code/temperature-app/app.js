function farenheitToCelsiusConverter(f) {
  let x = f - 32;
  let c = (x * 5) / 9;
  return c;
}

function clearInputsAndWarnings() {
  $('#boiling-warning').hide();
  $('#freezing-warning').hide();
  $('#farenheit-input').val('');
}

function showAnswersAndWarnings(c) {
  $('#answer').html(c);

  if (c >= 100) {
    $('#boiling-warning').fadeIn();
  } else if (c <= 0) {
    $('#freezing-warning').fadeIn();
  }
}


// I wrote this for you, let's look at it together.
$("#temperature-conversion-form").on("submit", function () {
  let f = $('#farenheit-input').val();
  clearInputsAndWarnings();
  let c = farenheitToCelsiusConverter(f);
  showAnswersAndWarnings(c);
});