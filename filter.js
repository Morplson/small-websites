	window.addEventListener('load', load);

	function load() {

	var filter = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="dummyWaves"> \
		<defs> \
\
			<filter id="filter" color-interpolation-filters="sRGB"  filterUnits="objectBoundingBox"> \
\
\
                <feTurbulence type="fractalNoise" baseFrequency="30" result="noisy" /> \
                <feColorMatrix type="saturate" values="0"/> \
                <feBlend in="SourceGraphic" in2="noisy" mode="multiply" result="waves" /> \
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
                <feGaussianBlur in="red" stdDeviation="0.5,0"  result="redblur"/> \
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
                <feGaussianBlur in="blue" stdDeviation="1.5,0.5"  result="blueblur"/> \
\
                <feBlend mode="screen" in="redblur" in2="blueblur" result="3d"/> \
\
			</filter> \
		</defs> \
	</svg>';

		let body = document.getElementsByTagName('body')[0];
		let container = document.createElement("div");
		container.innerHTML = filter;
		body.appendChild(container);

		body.style.filter = "url('#filter')"
	}