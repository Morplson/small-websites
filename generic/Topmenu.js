
/**
 * Author: probing
 * Version: 13_10_2019 (Beta)
 * Topmenu
 */
class Topmenu{
	constructor(search, methode) {
		if (!methode) {
			methode = "click";
		}

		const inserts = document.querySelectorAll('.item');
		console.info("initTopMenu");

		for (const insert of inserts) {
			insert.addEventListener(methode, this.topLink.bind(this), false);
		}

		if(search) {
			this.search = search;
			
			let searchinp = document.getElementById("searchinp");
			searchinp.addEventListener("keyup", ()=>{
				if (event.key === "Enter") {
					this.search();
				}
			}, false);
	
			let searchb = document.getElementById("searchb");
			searchb.addEventListener(methode, this.search.bind(this), false);
		}
	}

	topLink(event) {
		let target = event.currentTarget.dataset.target;

		if(target.indexOf('#')==0){
			document.getElementById(target.replace('#','')).scrollIntoView();
		}else{
			top.window.location.href = target;
		}
	}

	search(){
		top.window.location.href = this.search+""+document.getElementById("searchinp").value;
	}
}
