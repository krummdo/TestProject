define([
	'handlebars', 'jquery'
], function (
	Handlebars, $
) {
	function select (context, options) {
        var $el;
        $el = $('<select />').html(options.fn(this));
        $el.find('[value=' + context + ']').attr({ 'selected': 'selected' });

        return $el.html();
	}

	Handlebars.registerHelper('select', select);

	return select;
});