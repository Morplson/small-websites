	function load() {
		window.removeEventListener("load", load, false);
		
		var filter = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="dummyWaves"> \
			<defs> \
		\
				<filter id="filter" color-interpolation-filters="sRGB"  filterUnits="objectBoundingBox"> \
	    \
	                <feFlood flood-color="#fefefe" flood-opacity="1" result="flood"/> \
		\
					<feBlend mode="darken" in2="SourceGraphic" in="flood" result="blend1"/> \
		\
		\
            	    <feTurbulence type="fractalNoise" baseFrequency="1" result="noisy" /> \
            	    <feColorMatrix type="saturate" values="0"/> \
            	    <feBlend in="blend1" in2="noisy" mode="multiply" result="waves" /> \
		\
		\
	                <feOffset name="red" dx="1" dy="1" in="waves" result="rt1"/> \
		\
	                <feColorMatrix type="matrix" values=" \
	                1 0 0 0 0 \
	                0 0 0 0 0 \
	                0 0 0 0 0 \
	                0 0 0 1 0" in="rt1" result="red"/> \
		\
	                <feGaussianBlur in="red" stdDeviation="0.25,0"  result="redblur"/> \
		\
		\
	                <feOffset name="blue" dx="-1" dy="-1" in="waves" result="bt1"/> \
		\
        	        <feColorMatrix type="matrix" values=" \
   		            0 0 0 0 0 \
            	    0 1 0 0 0 \
	                0 0 1 0 0 \
    	            0 0 0 1 0" in="bt1" result="blue"/> \
		\
    	            <feGaussianBlur in="blue" stdDeviation="0.5, 0"  result="blueblur"/> \
		\
    	            <feBlend mode="screen" in="redblur" in2="blueblur" result="d"/> \
		\
				</filter> \
			</defs> \
		</svg>';

		let body = document.getElementsByTagName('body')[0];
		let container = document.createElement("div");

		body.style.backgroundColor = "#ffffff";

		container.style.hight = "0px";
		container.style.yOverflow = "hidden"
		container.innerHTML = filter;
		body.appendChild(container);

		body.style.filter = "url('#filter')"
	}

	load();