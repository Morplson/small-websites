	function load() {
		window.removeEventListener("load", load, false);
		
		var filter = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="dummyWaves"> \
				<defs> \
\
				<filter id="filter" color-interpolation-filters="sRGB"  filterUnits="objectBoundingBox"> \
\
				<feColorMatrix in="SourceGraphic" type="saturate" values="1" result="gry"/> \
\
				<feTurbulence type="fractalNoise" baseFrequency="1" result="noisy" /> \
            	<feColorMatrix type="saturate" values="0"/> \
            	<feBlend in="gry" in2="noisy" mode="multiply" result="noise" />\
\
				<feColorMatrix type="matrix" values=" \
                -1 0 0 0 1 \
                0 -1 0 0 1 \
                0 0 -1 0 1 \
                0 0 0 1 0" in="noise" result="inv"/> \
\
                <feColorMatrix type="matrix" values=" \
                0 0 0 0 0 \
                0 1 0 0 0 \
                0 0 0 0 0 \
           		0 0 0 1 0" in="inv" result="green"/> \
\
                <feGaussianBlur in="green" stdDeviation="1,0.125"  result="blurgreen"/> \
\
                <feFlood flood-color="#001a00" flood-opacity="1" result="flood"/> \
\
				<feBlend mode="lighten" in="blurgreen" in2="flood" result="blend1"/> \
\
				</filter> \
				</defs> \
				</svg>';

		let body = document.getElementsByTagName('body')[0];
		let container = document.createElement("div");

		container.style.hight = "0px";
		container.style.yOverflow = "hidden"
		container.innerHTML = filter;
		body.appendChild(container);

		body.style.filter = "url('#filter')"
	}

	load();