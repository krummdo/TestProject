define([
    "marionette", 'app',
], function (
    Marionette, App
) {
    var Controller = Marionette.Controller.extend ({
        
        initialize: function(options) {
            console.log("Controller", options)
            this.app = options.App;
        },
        
        main: function() {
            this.app.router.navigate('main');
            this.app.showMain();
        },

        test: function () {
            this.app.router.navigate('test');
            this.app.showMain().complete(_.bind(function () {
                //this.App.test();
            }, this));
        }
                
    });

    return Controller;
});