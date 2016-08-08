define([
    'jquery', 'backbone',
    'cfg',
], function (
	$, Backbone,
    cfg
) {
	return Backbone.Model.extend({

		defaults: {
			someattr: undefined,
			someattr2: undefined,
			someattr3: undefined,
		},

		initialize: function (options) {

		},

		parse: function (response) {
			
			return response;
		},
		
		url: function () {
			return cfg.baseApiUrl + 'Test/' + (!!this.id ? this.id : '');
		}
    });
});