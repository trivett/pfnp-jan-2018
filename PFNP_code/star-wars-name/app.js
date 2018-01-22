/**
 * I remembered some stupid chain letter joke thing from the 90s the other day that went something like this: 		
 * 
 * How to find your Star Wars name:
 * 
 * To get your first name, Take the first 3 letters of your first name, then add the first three letters of your last name.
 * Your last name is the first three letters of your street name plus the first three letters of your city
 *
 * Sound like an algorithm? Yeah pretty much
 * Google challenges:
 *  - How do you get the first x letters of a string in JavaScript? 		
 *  - How do you make a string lower case?
 *  - How do you capitalize the first letter of a string with JavaScript?
 * 
 * BONUS:
 * 
 * Can you look through jQuery's documentation to see how the answer can update every time the user makes a keystroke rather than just showing it on submit?
 * 
 */

function cleanString(str) {
  return str.substring(0, 3);
}

// function capitalizeFirst(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function myStarWarsName(firstName, lastName, street, city) {
//   let rawFirst = cleanString(firstName) + cleanString(lastName);
//   let rawLast = cleanString(street) + cleanString(city);
//   let swFirst = capitalizeFirst(rawFirst);
//   let swLast = capitalizeFirst(rawLast);

//   return `Your star wars name is: ${swFirst} ${swLast}`;
// }



function myStarWarsName(firstName, lastName, street, city) {
  let swFirst = _.startCase(cleanString(firstName) + cleanString(lastName));
  let swLast = _.startCase(cleanString(street) + cleanString(city));
  return `Your star wars name is: ${swFirst} ${swLast}`;
}

// I wrote this jQuery listener function for you, but let's walk through together.

$("#sw-name-inputs").on("keyup", function () {
  let first = $("#first-name").val(); // get the value in the form input with ID of "first-name" (see the HTML) and set it to `first`;
  let last = $("#last-name").val(); // you get the idea
  let street = $("#street").val();
  let city = $("#city").val();
  let starWarsName = myStarWarsName(first, last, street, city); // run your special function and set the return value to `starWarsName`
  $("#answer").html(starWarsName)
});