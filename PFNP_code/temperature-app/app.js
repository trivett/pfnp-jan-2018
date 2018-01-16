

function farenheitToCelsiusConverter(f) {
  // paste your function that converts farenheit to celcius here:

}

function clearInputsAndWarnings() {
  // this function will clear the slate after we ask for another conversion


}

function showAnswersAndWarnings(c) {
  // this function will take in celsius temperature and show the user whether it is freezing or boiling
}


// I wrote this for you, let's look at it together.
$("#temperature-conversion-form").on("submit", function () {
  let f = $('#farenheit-input').val();
  clearInputsAndWarnings();
  let c = farenheitToCelsiusConverter(f);
  showAnswersAndWarnings(c);
});