'use strict';
//
////////////////////////////////
// login View
////////////////////////////////

var LoginView = Parse.View.extend({
	template: _.template($('.login-view-template').text()),

	className: 'login-view',

	events: {
		"click .login-button" : "login",
		/*"click .reset-button" : "reset"*/
	},

	initialize: function(){
		
		$('.login-view-container').append(this.el);
		this.render();
		console.log('LoginView has been rendered');
	},

	render: function() {
		var loginHtmlTemplate = this.template;
		this.$el.html(loginHtmlTemplate);
		// Idea with render is that you should generally return this.
		// The reason is that you can keep chaining stuff onto render
		return this;
	},

	login: function() {

		var userName = $('.login-username').val();
		var userPassword = $('.login-password').val();

		Parse.User.logIn(userName, userPassword, {
			ACL: new Parse.ACL(),
			success: function(user) {
				console.log("success");
			},
		

			error: function(user, error) {
				console.log(user)
				console.log(error)
			},
		})

		event.preventDefault();
		this.remove();
		var home = new HomeView();
	},
});
	/*reset: function() {

	Parse.User.requestPasswordReset("tfaithk@yahoo.com", {
	success: function() {
		console.log("passss");
		//password reset request sent successfully
	},
	error: function(error) {
		//show the error message somewhere
		alert("error: "+ error.code + "" + error.message);

	}
});*/
	


////////////////////////////////
// logout View
////////////////////////////////

var LogoutView = Parse.View.extend({
	template: _.template($('.logout-view-template').text()),


	logout: function() {
		Parse.User.logOut();
		console.log("logout works");
	},
});

////////////////////////////////
// signup View
////////////////////////////////

var SignUpView = Parse.View.extend({
	template: _.template($('.signup-template').text()),

	className: 'signup-view',

	events: {
		"click .sign-up-button" : "signup"
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
		
		});
		
		this.remove();
		var signupView = new HomeView();
	},
});

////////////////////////////////
// Home View
////////////////////////////////

var HomeView = Parse.View.extend({
	template: _.template($('.home-view-template').text()),

	className: 'home-page-wrap',



	initialize: function(){
		$('body').append(this.el);
		this.render();

	},

	render: function() {
		var homeHtmlTemplate = this.template;
		this.$el.html(homeHtmlTemplate);
		// Idea with render is that you should generally return this.
		// The reason is that you can keep chaining stuf onto render
		return this;
	}
});

/*////////////////////////////////
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
*/





/////////////////////////////
//Resetting Passwords
////////////////////////////


 /*reset: function() {
	var self = this;
	var email = this.$("resetting-email").val(); 

Parse.User.requestPasswordReset("email@example.com", {
	success: function() {
		new LoginView();
		self.undelegateEvents();
		delete self;
		console.log("passss");
		//password reset request sent successfully
	},
	error: function(error) {
		//show the error message somewhere
		self.$(".reset-form.error").html(error.message).show();
		this.$(".reset-form button").removeAttr("disabled");
		alert("error: "+ error.code + "" + error.message);

	}
});
		this.$(".reset-form button").attr("disabled","disabled");

		return false;
	},
});*/


Parse.User.requestPasswordReset("tfaithk@yahoo.com", {
	success: function() {
		console.log("passss");
		//password reset request sent successfully
	},
	error: function(error) {
		//show the error message somewhere
		alert("error: "+ error.code + "" + error.message);

	}
});











