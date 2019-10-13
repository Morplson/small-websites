


	function initSidemenu(methode) {
		if (!methode) {
			methode = "click";
		}

		const inserts = document.querySelectorAll('.itembarmodul');
		console.info("initSidemenu");

		for (const insert of inserts) {
			insert.addEventListener(methode, animationTrigger, false);
			console.log("added event to Element: '"+insert.id+"'");

			let sidenode = document.createElement('div');
			sidenode.className = "sidemodul";
			sidenode.id = "side"+insert.id;

			document.getElementById("sidecontainer").appendChild(sidenode);
		}

		document.getElementById("closeside").addEventListener(methode, animationTrigger, false);
		console.log("added event to Element: 'closeside'");

		document.getElementById("overlay").addEventListener(methode, animationTrigger, false);
		console.log("added event to Element: 'overlay'");

	}

	function animationTrigger(event){
		event.preventDefault();

		if (event.currentTarget.id == "overlay" || event.currentTarget.id == "closeside") {

			document.getElementById("sidecontainer").style.width = "0";
			document.getElementById("overlay").style.opacity = "0";
			document.getElementById("closeside").style.opacity = "0";

			setTimeout(()=>{
				document.getElementById("overlay").style.zIndex = "-10";
				document.getElementById("overlay").style.display = "none";
				document.getElementById("closeside").style.display = "none";

				const inserts = document.querySelectorAll('.sidemodul');

				for (const insert of inserts) {
					insert.style.display = "none";
				}

			}, 666);

		} else {

			var url = event.currentTarget.dataset.target;
			var body = JSON.stringify({});

			if(document.getElementById("side"+event.currentTarget.id).style.display != "block"){
				const inserts = document.querySelectorAll('.sidemodul');

				for (const insert of inserts) {
					if(insert != document.getElementById("side"+event.currentTarget.id)){
						insert.style.display = "none";
					}
				}


				var destination = "side"+event.currentTarget.id; 
				sideLoader(url, body, destination);
			}

		}
	}

	function sideLoader(url, body, destination){
		document.getElementById("sidecontainer").style.width = "26rem";
		document.getElementById("overlay").style.display = "block";


		document.getElementById("closeside").style.display = "block";
		document.getElementById("closeside").style.opacity = "1";
		document.getElementById("overlay").style.opacity = "0.25";
		document.getElementById("overlay").style.zIndex = "19";
			

		fetch(url, {
			method: 'post',
			headers: {
				"Content-type": "text/html"
			},
			body: body
		}).then(function (response) {
			return response.text();
		}).then(function (data) {
			//console.log(data);
			document.getElementById(destination).style.display = "block";
			document.getElementById(destination).innerHTML = ""+data;

		}).catch(function (error) {
			console.log('Request failed', error);
		});
	}
