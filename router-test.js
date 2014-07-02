'use strict';
////////////////////////////////
// Router
////////////////////////////////
// References: 
// http://backbonetutorials.com/what-is-a-router/
// http://adrianmejia.com/blog/2012/09/11/backbone-dot-js-for-absolute-beginners-getting-started
// https://github.com/thoughtbot/backbone-support/blob/master/README.md
// http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/

var AppRouter = Parse.Router.extend({

	routes: {
		'login':				'login',
		'logout':				'logout',
		'signup':				'signup',
		'forgot-password':		'forgotPassword',
		'dashboard':			'dashboard',
		'areas':				'areas',
		'area/:id':				'area',
		'scavenger-hunt/:id':	'scavengerHunt',
		'location/:id':			'location',
		'discover':				'discoverAll',
		'discover/:id':			'discoverSelected',
		'capture/:id':			'capture',
		'*actions':				'default'
	},

	initialize: function(options){
		// this.appView = options.appView;
		// this.el = $('home-page-wrap');
		// $('.home-page-wrap').append('router initialized');
		this.currentView = null;
	},

	login: function(){
		// login view should render
		var view = new LoginView();
		this.swap(view);
	},

	logout: function(){
		$('.home-page-wrap').append('logout');
	},

	signup: function(){
		$('.home-page-wrap').append('signup');
	},
 	
 	forgotPassword: function(){
		$('.home-page-wrap').append('forgot password');
	},

 	dashboard: function(){
		// if not logged in, redirect to homepage

		// * auto recommend of scavenger hunts based on the user's proximity to them 
		// * listing: scavenger hunts you're subscribed to/apart of
		// * if the user is not subscribed to any scavenger hunts, they're shown a CTA explain to them how to do so
		// * button: to search scavenger hunts
		// * button: discover mode
		// * button: create a scavenger hunt - backburner
		$('.home-page-wrap').append('dashboard');
	},

 	areas: function(){
		// if not logged in, redirect to homepage

		// * listing of areas scavenger hunts are in
		$('.home-page-wrap').append('areas');
	},

 	area: function(areaId){
		// if not logged in, redirect to homepage

		// * area a scavenger hunt is in (show basic info like name, description, map location, etc)
		// * show a listing of scavenger hunts

		$('.home-page-wrap').append('area: ' + areaId);
	},

 	scavengerHunt: function(scavengerHuntId) {
		// if not logged in, redirect to homepage

		// scavenger hunt detail view
		// * overview of scavenger hunt's general info, area, participants, etc
		// * listing of scavenger hunt items (list or on map)

		$('.home-page-wrap').append('scavengerHunt: ' + scavengerHuntId);
	},

 	location: function(locationId) {
		// if not logged in, redirect to homepage

		// location detail view - aka hunt item
		// * location (on map)
		// * clue - information stored to 
		// * has photo or not
		// * button: to go into discover mode for just this item


		$('.home-page-wrap').append('scavengerHunt: ' + locationId);
	},

 	discoverAll: function() {
		// if not logged in, redirect to homepage

		// mode 1 - free forall 
		// * listing of scavenger hunt items (or order of proximity)
		// * once you're within X feet of the landmark you're given a button to capture that landmark
		// * button: submit a scavenger hunt item (photo, geolocation, description, user)
		$('.home-page-wrap').append('discover (all)');
	},

	discoverSelected: function(locationId){
		// mode 2 - a specific hunt location
		// * listing of scavenger hunt items (or order of proximity)
		// * once you're within X feet of the landmark you're given a button to capture that landmark
		// * button: submit a scavenger hunt item (photo, geolocation, description, user)
		$('.home-page-wrap').append('discover (selected): ' + locationId);
 	},

 	capture: function(locationId) {
		// * taking a photo, entering a description
		// - redo photo option - trigger
		// * button: share on facebook
		// * button: share on twitter
		// * congratulation alert: great job, buddy. go to the next one

		$('.home-page-wrap').append('capture: ' + locationId);
 	},

 	default: function(actions) {
 		// default action to take when not logged in.
 		// debugger
		var view = new HomeView();
		this.swap(view);
 	},

	swap: function(view) {
		// mason's swap function
		if (this.currentView) this.currentView.remove();
		this.currentView = view;
		this.currentView.render();

		/*if (this.currentView && this.currentView.leave) {
			this.currentView.leave();
		}

		this.currentView = newView;
		$(this.el).empty().append(this.currentView.render().el);*/
	}
});


////////////////////////////////
// Router start
////////////////////////////////

// $(document).ready(function(){
 	var router = new AppRouter();
	Parse.history.start();
// });