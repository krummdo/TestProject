define([
	'jquery', 'backbone'
], function ($, Backbone) 
{	
    _.extend(Backbone.View.prototype, {
    
        searchStringInArray: function (str, strArray) {
        
            for (var j=0; j<strArray.length; j++) {
                //console.log(strArray[j].trim(), str)
                if (typeof(strArray[j]) == 'string') {
                    if (strArray[j].trim().match(str.trim())) return j;
                }
            
                //if (strArray[j].indexOf( str ) > -1) return j
            }
            return -1;
        },
    
        replaceAll: function (str, mapObj) {
            var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

            return str.replace(re, function(matched){
                return mapObj[matched.toLowerCase()];
            });
        },
    
        scrollTo: function (el) {
            var target = $(el);
            if (target.length) {
                $('html,body').animate({scrollTop: target.offset().top},'slow');
            }
        },
    });
}