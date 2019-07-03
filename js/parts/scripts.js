(function() {
	'use strict';
	

	var nav = document.getElementById('header');
	var height = nav.clientHeight;
	var toggle = document.getElementById('toggle_navigation');
	var hero = document.getElementById('cover');
	var window_height = window.innerHeight;

	var fixed_class = ' fixed ';

	var logo_class = ' with-logo ';

    window.onscroll = function() {
    	var position = window.scrollY;

    	/* Fix header? */
    	if (  position >= (window_height-height) && nav.className.indexOf(fixed_class) == -1 ) {
    		nav.className += fixed_class;
    	}
    	else if ( position <= (window_height-height) ) {
    		nav.className = nav.className.replace(fixed_class, '');
		}
		
		console.log('scroll', position, window_height, height, nav.className, position >= (window_height-height))

    	/* Show logo? */
    	//var logo_offset = hero.offsetHeight  + window_height- nav.clientHeight;
    	var logo_offset = window_height-height;

    	if ( position > logo_offset && nav.className.indexOf(logo_class) == -1 ) {
    		nav.className += logo_class;
    	}
    	else if ( position < logo_offset )  {
    		nav.className = nav.className.replace(logo_class, '');
    	}
    }

	var t = document.getElementsByTagName('pre');
	for (var i in t) {
		
		if (typeof t[i] == 'object') {
			// hljs.highlightBlock(t[i])
		}
	}

	// hljs.configure({useBR: true});
	// hljs.initHighlightingOnLoad();
/*
		
	var toggle_class = ' reveal ';

	toggle.onclick = function() {
		if ( nav.className.indexOf(toggle_class) == -1 ) {
			nav.className += toggle_class;
		}
		else {
			nav.className = nav.className.replace(toggle_class, '');
		}
	};

	/** WAYPOINTS * /
	var point_active = ' appear-active ';
	var points = document.querySelectorAll('.appear');
	var p = [];

	Array.prototype.forEach.call(points, function(el, i) {
		p[i] = new Waypoint({
			element:el,
			handler:function(dir) {
				var delay = el.dataset.delay || 0;

				setTimeout(function(){
					if ( el.className.indexOf(point_active) == -1 ) {
						el.className += point_active;
					}	
				}, delay);
			},
			offset: (window_height/4)*3
		});
	})
*/
	
})();