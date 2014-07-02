'use strict';

Parse.initialize("g0JGurVGJcdLG0qlxKo00GSNRllu6OyvCZuD7pHR", "YdgqTpZJGwKcizqtEdh8DLP6YhXjlNbIh3aRfABd");


////////////////////////////////
// User Object
////////////////////////////////

var User = Parse.Object.extend({
	className: "User",

});




/*var SignUpView = Parse.View.extend({
	template: _.template($('.signup-template').text()),

	className: 'signup-view',

	events: {
		"click .signup-button" : "signup"
	},

	initialize: function(){
		$('.signup-container').append(this.el);
		this.render();
		console.log('signUp has been rendered');
	},

	render: function() {
		var signupHtmlTemplate = this.template;
		this.$el.html(signupHtmlTemplate);
		
		return this;
	},

	signup: function() {

		$('.sign-up-button').click(function() {
	var userName = $('.signup-username').val();
	var userPassword = $('.signup-password').val();
	var userEmail = $('.signup-email').val();
	var user = new Parse.User();
	user.set("username", userName);
	user.set("password", userPassword);
	user.set("email", userEmail);
	user.signUp(null, {

			success: function(user) {
			console.log("success");
		},

			error: function(user, error) {
			console.log("error");
		},
	});*/
































////////////////////////////////
// Signing up click function
////////////////////////////////


/*$('.sign-up-button').click(function() {
	var userName = $('.signup-username').val();
	var userPassword = $('.signup-password').val();
	var userEmail = $('.signup-email').val();
	var user = new Parse.User();
	user.set("username", userName);
	user.set("password", userPassword);
	user.set("email", userEmail);
	user.signUp(null, {

			success: function(user) {
			console.log("success");
		},

			error: function(user, error) {
			console.log("error");
		}

	});
});*/


////////////////////////////////
// Login Function
////////////////////////////////


/*$('.login-button').click(function() {
 	var userName = $('.login-username').val();
 	var userPassword = $('.login-password').val();

 	Parse.User.logIn(userName, userPassword, {
 		ACL: new Parse.ACL(),
 		success: function(user) {
 			console.log("success");

 		},

 		error: function(user, error) {
 			console.log(user);
 			console.log(error);

 		},
 	});
 	event.preventDefault();
 	this.model.remove();
 
 });*/

////////////////////////////////
// Current User
////////////////////////////////

// cashed as a session.  Assumes the user is already logged in.
var currentUser = Parse.User.current();
	if(currentUser) {
		console.log("pass");
	} else {
		console.log("fail");
	};

Parse.User.logOut();

///////////////////////////
//Resetting Password
//////////////////////////

/*Parse.User.requestPasswordReset("tfaithk@yahoo.com", {
	success: function() {
		console.log("pass");
	},
	error: function(error) {
		alert("Error:" + error.code + "" + error.message);

	}
});*/
