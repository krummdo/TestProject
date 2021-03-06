define([
	'handlebars', 'jquery'
], function (
	Handlebars, $
) {
	function openTag(type, closing, attr) {
		var html = ['<' + type];
		for (var prop in attr) {
			// A falsy value is used to remove the attribute.
			// EG: attr[false] to remove, attr['false'] to add
			if (attr[prop]) {
				html.push(prop + '="' + attr[prop] + '"');
			}
		}
		return html.join(' ') + (!closing ? ' /' : '') + '>';
	}

	function closeTag(type) {
		return '</' + type + '>';
	}

	function createElement(type, closing, attr, contents) {
		return openTag(type, closing, attr) + (closing ? (contents || '') + closeTag(type) : '');
	}
	
	// @TODO
	function check (name, value, checked, options) {
		var attr = {
			name: name,
			type: 'checkbox',
			value: value
		};
		if (checked === true || checked === value) {
			attr.checked = 'checked';
		}
		// Don't add an id attribute if the name uses the multiple character sequence, eg: 'food[]'
		if (!/\[\]/.test(name)) {
			attr.id = name;
		}
		return new Handlebars.SafeString(createElement('input', false, extend(attr, options.hash)));
	}

	Handlebars.registerHelper('check', check);

	return check;
});