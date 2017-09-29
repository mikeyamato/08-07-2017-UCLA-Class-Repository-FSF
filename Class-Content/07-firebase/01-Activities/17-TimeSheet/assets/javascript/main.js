/* 
 
*/

$(function(){  // this is shorthand for '$(document).ready(function(){'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAsFs_MTuZo0Tpwwwa81igpDg_mO7J2LM0",
    authDomain: "acme-fd643.firebaseapp.com",
    databaseURL: "https://acme-fd643.firebaseio.com",
    projectId: "acme-fd643",
    storageBucket: "acme-fd643.appspot.com",
    messagingSenderId: "349432851592"
  };
  firebase.initializeApp(config);

var dataRef = firebase.database(); // why is this here? what does this do? 

// pulls data from form

var empNameData = "";
var empRoleData = "";
var startDateData =0;
var monthRateData = "";


	$("form").submit(function(event){
		event.preventDefault();   // this line prevents the form entries from disappearing. must include 'event' in the above function
		
		empNameData = $("#empName").val().trim();
		console.log(empNameData);

		empRoleData = $("#empRole").val();
		console.log(empRoleData);

		startDateData = $("#startDate").val();
		console.log(startDate.value);

		monthRateData = $("#monthRate").val();
		console.log(monthRateData);

		dataRef.ref().push({
			name: empNameData,
			role: empRoleData,
			start: startDateData,
			rate: monthRateData

		})
	});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref().on("child_added", function(childSnapshot) {

// Log everything that's coming out of snapshot
console.log(childSnapshot.val().name);
console.log(childSnapshot.val().role);
console.log(childSnapshot.val().start);
console.log(childSnapshot.val().rate);
});


// // full list of items to the well
// $("#full-member-list").append("<div class='well'><span id='name'> " + childSnapshot.val().name +
// " </span><span id='email'> " + childSnapshot.val().email +
// " </span><span id='age'> " + childSnapshot.val().age +
// " </span><span id='comment'> " + childSnapshot.val().comment + " </span></div>");

// // Handle the errors
// }, function(errorObject) {
//   console.log("Errors handled: " + errorObject.code);
// });

    // dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

    //   // Change the HTML to reflect
    //   $("#name-display").html(snapshot.val().name);
    //   $("#email-display").html(snapshot.val().email);
    //   $("#age-display").html(snapshot.val().age);
    //   $("#comment-display").html(snapshot.val().comment);
    // });


// resets all fields
	$("#resetBtn").on("click", function(){
		$("#searchTerm").val("");
		$("#numOfRec").val(5);
		$("#startYear").val("");
		$("#endYear").val("");
	});
	
// pull data from firebase



});






