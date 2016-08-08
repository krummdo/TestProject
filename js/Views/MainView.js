define([
	'jquery', 'backbone', 'marionette', 'handlebars', 'bootstrap',
	'hbs!templates/Main',
    	'app'
], function ($, Backbone, Marionette, Handlebars, Bootstrap,                  
     Template,                                                        
     App                                                              
	) {
	return Marionette.LayoutView.extend({

		template: Template,

		events: {

		},

		regions: {
			content: '#content'
		},

		commit: function () {
			return !this._currentContent || !this._currentContent.commit || this._currentContent.commit();
		},

		initialize: function (options) {
			this.app = options.App;
		},

		onShow: function () {

		}
	});
});

