// var i = 4;
// console.log(1)
// $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
//   console.log(3)
//   peopleResponse.forEach(function(person) {
//     console.log(i++)
//     console.log(person.name);
//     console.log(i++)
//   });
//   console.log(12)
// });
// console.log(2)

// Question 1

// console.log(1);
// $(document).click(function(clickEvent) {
//   console.log(3);
//   console.log("The click event:", clickEvent);
//   console.log(4);
// });
// console.log(2);

// Question 2

// console.log(1)
//
// $.get("https://async-workshops-api.herokuapp.com/people", console.log(2), function(peopleResponse) {
//   console.log(4)
//   console.log("People response:", peopleResponse);
//   console.log(5)
//
// });
// console.log(3)

// Question 3
console.log(1);

var getReturnValue = $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  console.log(3);
  console.log(peopleResponse);
  return peopleResponse;
});

console.log(2);
console.log(getReturnValue);

// Question 4

// console.log(1);
// $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
//   console.log(3);
//   peopleResponse.forEach(function(person) {
//     console.log(4);
//     console.log(person.name);
//     console.log(5);
//   });
// });
// console.log(2);
