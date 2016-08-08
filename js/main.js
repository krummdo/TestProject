(function () {

	require.config({
        
		locale: 'en_us',

		hbs: {
			disableI18n: true,
			disableHelpers: false,

			compileOptions: {}
		},

		paths: {
			'jquery': 'vendor/jquery-2.0.3',
			'json2': 'vendor/json2',

			'underscore': 'vendor/underscore',
			'backbone': 'vendor/backbone',
			'd3': 'vendor/d3',

			'marionette': 'vendor/backbone.marionette',
			'backbone.wreqr': 'vendor/backbone.wreqr',
			'backbone.eventbinder': 'vendor/backbone.eventbinder',
			'backbone.babysitter': 'vendor/backbone.babysitter',
			'backbone.fetch-cache': 'vendor/backbone.fetch-cache',
			'backbone-filtered-collection': 'vendor/backbone-filtered-collection',

			'handlebars': 'vendor/handlebars',
			'hbs': 'vendor/handlebars/hbs',
			'i18nprecompile': 'vendor/handlebars/i18nprecompile',
            
			'templates': '../templates/',
			'base64': 'vendor/webtoolkit.base64',
			'player': 'vendor/jquery.jplayer.min',
			'corner': 'vendor/jquery.corner',
			'bootstrap': 'vendor/bootstrap/bootstrap',
			'datepicker': 'vendor/bootstrap-datepicker',
			'sortable': 'vendor/jquery.sortable.min',
			'app': 'app'
		},

		shim: {
			'json2': {
				exports: 'JSON'
			},
			'jquery': {
				exports: '$'
			},
			'underscore': {
				exports: '_'
			},
			'backbone': {
				deps: ['jquery', 'underscore'],
				exports: 'Backbone'
			},
			'backbone-filtered-collection': {
				deps: ['backbone'],
				exports: 'FilteredCollection'
			},
			'marionette': {
				deps: ['jquery', 'underscore', 'backbone'],
				exports: 'Marionette'
			},
			'bootstrap': {
				deps: ['jquery']
			},
			'handlebars': {
				exports: 'Handlebars'
			},
			'corner': {
				deps: ['jquery'],
			},
			'datepicker': {
				deps: ['bootstrap'],
			},
			'treeGenerator': {
				deps: ['jquery', 'svg']
			},
		    'sortable': {
		        deps: ['jquery']
		    }
		},
	});
    require.devmode=true
	require([
		'jquery', 'backbone', 'app'
	], function ($, Backbone, App) {
		App.start()
	});
})();