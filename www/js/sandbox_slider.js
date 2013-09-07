	// -- mobileinit event --
    // -- this code is executed once, when jquery mobile is loaded (and must be placed before jqm is loaded)
    // -- this is where you can change default options or behavior
	$(document).bind('mobileinit', function() {
		console.log('mobileinit event');
		//$.mobile.page.prototype.options.domCache = true;
	});


	$(function() {


            console.log('jquery document ready function');

			// -- pagebeforechange event --
		    // -- this code is executed every time ANY page (cached or new) is about to be loaded, BEFORE the page is displayed/loaded
		    // -- this is where you can see what page was requested,  stop the request, or alter the request
			$(document).on( "pagebeforechange", function( event, data ){
				if ( typeof data.toPage === "string" ) {
            		console.log('pagebeforechange event - ALL pages');

            		console.log(data);

            		// .. do stuff here
				}
			});

			// -- pageinit event that fires for SPECIFIC PAGE ONLY --
			// -- this code is executed only once upon initital page load (or if it is no longer in the cache)
		    $(document).on("pageinit", "#example_page_one", function() {
		    	console.log('pageinit event - #example_page_one only');
			    // .. do stuff for example page one here


			});


			// -- pageshow event --
			// -- this code is executed every time ANY page is shown (cached or new)
			// -- this is where you can manipulate the contents of the page being shown - think of it as JQM's version of jquery's $(function(){ .. }
			$(document).on( "pageshow", function(){
	            console.log('pageshow event - ALL pages');
                // .. do stuff here
			});

			// -- pageshow event that fires for SPECIFIC PAGE ONLY --
			// -- the second parameter targets the id value of the page div used in the body section, aka: <div data-role="page" id="example_page_one" ..> .. </div>
			// -- this code is executed every time the 'example_page_one' page is loaded (cached or new)
			// -- we include code for all the different pages at once in the head because jqm will only every process the head .. /head content ONCE and never again
		    $(document).on("pageshow", "#example_page_one", function() {
		    	console.log('pageshow event - #example_page_one only');
			    // .. do stuff for example page one here
			});

		    $(document).on("pageshow", "#example_page_two", function() {
		    	console.log('pageshow event - #example_page_two only');
			    // .. do stuff for example page two here
			});

		    $(document).on("pageshow", "#example_page_three", function() {
		    	console.log('pageshow event - #example_page_three only');
			    // .. do stuff for example page three here
			});


	});