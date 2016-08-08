Handlebars.registerHelper('debug', function ( o ) {
   console.log("Handlebars debug this: " + this);
   if(o) {
       console.log("++++ Debug ++++");
       console.log(o);
       console.log("+++++++++++++++")
   }

});
