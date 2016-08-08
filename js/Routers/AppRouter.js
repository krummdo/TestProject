define([
    "marionette"
], function (
    Marionette
) {
  var AppRouter;
  AppRouter = Backbone.Marionette.AppRouter.extend({
    
    appRoutes: {
      '': 'main',
      'main': 'main',
      'test': 'test'
    },
    
    initialize: function() {
      console.log("Router")
    }
    
  });
  return AppRouter;
});