define( function () {  

	window.console = {
		log:function () {
	    		for (var i = 0; i < arguments.length; i++) {  
	    			if( typeof(arguments[i])!="undefined" && typeof(arguments[i])!="null"    )
	        			arguments[i] =  arguments[i].toString();
	        		else 
	        			arguments[i] =  typeof (arguments[i]);
				}
				Array.prototype.splice.call(arguments, 0, 0, external, 'Javascript console:');
				Function.call.apply(external.log, arguments);
		}
	}; 

	if ( external.loadServer ) {
		var pageExternal = external.loadServer({
			document: document 
		}); 
		window.attachEvent("onunload",function(){
			if( pageExternal && pageExternal.onUnload ){
				pageExternal.onUnload();
			}
		} ); 

		return pageExternal;
	};
	
	return {};
} );
