$(document).ready(function() {
//identifying the location of the stuff we want to affect "#blanks form"
//submit the function
  $("#blanks form").submit(function(event) {
    // created a variable for an array and for the empty array
    // to fill with the user input []
    var groceries = ["item1","item2","item3","item4","item5","item6"];
    var groceriesInput = [];
      // This is were the action happens. This is the start to the
      //forEach loop
      //variable.meathod(function(pointer) { The pointer is created
      // for a singular version of the plural named array
      groceries.forEach(function(grocery) {
        //within the loop we add the variables that need to be
        //identified in the loop
        //   variable = JQ(INPUT ID TAG) + Singular pointer).val();
        var userInput = $("input#" + grocery).val();
        // we are generating a new array name that will take the
        //information from the old array and adding upperCase to it
        //  new array = old array.toUpperCase("")for Each""
        var allCaps = userInput.toUpperCase("");
        //variable is adding all the user input  into the empty array
        // empty array.push(all caps is the variable that was once userInput)
        groceriesInput.push(allCaps);
        //close this loop
     });
     //the once empty, now filled array with users input and alphabetize
     //with .sort
     groceriesInput.sort();
     //This is calling the #form group and a method that displays the text
     //your calling .text
     $("#form-group").text(groceriesInput);
     //This is the sort loop after sorting. it displays the results.
     groceriesInput.forEach(function(grocery) {
       //We are taking the grocery input and making the list inside of java script not html
       $("#list").append("<li>" + grocery + "</li>");
     });

         $("form").hide();

         $("#list").show();


    event.preventDefault();
  });
 });

// var groceries = ["item1","item2","item3","item4","item5","item6"];
// var uppers = groceries.map(function(x) { return x.toUpperCase(); });



// var upperCase = groceries.map(function(groceries) {
//   return groceries.toUpperCase();
// });
// groceries.sort();







// var NewFavs = blanks.slice(1,3);
// NewFavs.push("favCandy");

// var total = 0;
// var friends =  ["Sarah", "GG", "Josh", "Ruhie"];
// friends.forEach(function(friend) {
//   total += friend;
// });
// alert(total); //This adds them like they were combined
// //as one not what i was going for
//
// var friends = ["Sara", "GG", "Josh", "Rushie"];
// friends.forEach(function(friend) {
// alert("It worked Im amazing and so is," + friend);
// });
//
// var total = 0
// var numbers = [1,2,3,4,5,6];
//
// numbers.forEach(function(number) {
//   total += number;
// });
