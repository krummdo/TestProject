Handlebars.registerHelper('slug', function (context, options) {
    return context.toString().toLowerCase().replace(/[^\w-]+/g,'-').replace(/-$/,'').replace(/^-/,'');
});

