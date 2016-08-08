define([
	'jquery', 'backbone', 'marionette', 'handlebars',
	'Views/MainView',
	'Routers/AppRouter', 'controller',
	'cfg'
], function 
	($, Backbone, Marionette, Handlebars,
	MainView,                                       
     AppRouter, Controller,                                            
     cfg                                                                       
	) {

	// BACKBONE SYNC
	(function () {
		var proxiedSync = Backbone.sync;

		Backbone.sync = function (method, model, options) {
			options || (options = {});

			if (!options.crossDomain) {
				options.crossDomain = true;
			}
			if (!options.timeout) {
				options.timeout = 30000;
			}

			if (!options.xhrFields) {
				//options.xhrFields = {withCredentials:true};
			}

			return proxiedSync(method, model, options);
		};
	})();

	//APPLICATION PRELODERS
	$.ajaxSetup({
		beforeSend: function (xhr, settings) {
			//APPLICATION PRELOADER
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

			$('#mainLoader h7').css({'top': h / 2 + document.body.scrollTop - 50, 'left': w / 2 - 50 });
			$('#mainLoader').css({'height': $(document).height() - 1, 'width': $(document).width()}).show();
		}
	});
	$(document).ajaxStart(function (aa) {

		$("*").css("cursor", "progress");
	});
	$(document).ajaxStop(function () {

		$('#mainLoader').hide();
		$("*").css("cursor", "");
	});

	var MyApp = new Backbone.Marionette.Application({
		regions: {
			region: '#container'
		}
	});

	MyApp.on("before:start", function (options) {
		console.log("App => before start")
		MyApp.myController = new Controller({App: this});
	});

	MyApp.addInitializer(function (options) {
		console.log("App => addInitializer => set router passing controller")
		MyApp.router = new AppRouter({controller: this.myController});

		if (Backbone.history) {
			Backbone.history.start();
		}

		return MyApp.router;
	});

	MyApp.showMain = function () {
		console.log("App => showMain")
		this.mainView = new MainView({
			app: MyApp
		});
		MyApp.region.show(this.mainView);
	}

	return MyApp;
});
