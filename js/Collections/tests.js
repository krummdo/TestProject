define([
    'jquery', 'backbone',
    'Models/test',
    'cfg'
], function (
	$, Backbone,
    Test,
    cfg
) {
    return Backbone.Collection.extend({

        model: Test,

		url: function () {
			return cfg.baseApiUrl + 'Tests';
		}
    });
});