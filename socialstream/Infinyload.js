
/**
 * Author: probing
 * Version: 06_10_2019 (Beta)
 * Loads data in a mosaik
 */

console.log("Infinyload Version 06_10_2019 (Beta) initiated");

class Infinyload{
  constructor(gridid, loader){
    this.grid = document.getElementById(gridid);
    this.iframe = document.createElement("IFRAME");

    this.loader = loader;
    this.loader.destination = this.grid;
    

    this.iframe.style.height = "0px";
    this.iframe.className = "loaderbox";
    this.iframe.src = "loader.html";
    this.grid.appendChild(this.iframe);


    window.addEventListener("scroll", this.infinyload.bind(this));

    window.addEventListener("scroll", this.inview.bind(this));

    window.addEventListener("resize", this.resizeAllItems.bind(this));


    this.load();
    this.resizeAllItems();

    this.allItems = this.grid.getElementsByClassName("item");
    for (var i = this.allItems.length - 1; i >= 0; i--) {
      this.allItems[i].addEventListener('load', this.resizeInstance.bind(this));
    }

  }

  inview(){
    for (var i = this.allItems.length - 1; i >= 0; i--) {
      var item = this.allItems[i];
      if (!item.classList.contains("animate")) {
        var rect = item.getBoundingClientRect();
        if(rect.top + 20<= window.innerHeight){
          item.classList.add("animate")
        }
      }
    }
    

  }

  infinyload(){
    if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight-20){

      this.load();
      this.resizeAllItems();

      this.allItems = this.grid.getElementsByClassName("item");
      for (var i = this.allItems.length - 1; i >= 0; i--) {
        this.allItems[i].addEventListener('load', this.resizeInstance.bind(this));
      }
    }
  }

  resizeAllItems(){
    this.allItems = this.grid.getElementsByClassName("item");
    for (var i = this.allItems.length - 1; i >= 0; i--) {
      this.resizeItem(this.allItems[i]);
    }

    this.inview();
  }

  resizeItem(item){
    let rowHeight = parseInt(window.getComputedStyle(this.grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(this.grid).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((item.firstChild.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));


    item.style.gridRowEnd = "span "+rowSpan;
  }

  resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
  }

  //10 42 0 1
  //WEBWEB1389


  
  load(){
    this.loaderUp();

    this.loader.load();

    //TEST DIVS
    window.setTimeout(this.loaderDown.bind(this),1333);
  }

  loaderUp(){
    this.iframe.style.height = "5rem";
  }

  loaderDown(){
    this.iframe.style.height = "0px";
  }
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


class Loader{
  constructor(destination){
    this.destination = destination;
  }

  load(appandable){
    this.destination.appendChild(appandable);

    return true;
  }

  setDestination(destination){
    this.destination = destination;
  }
}

class TestLoader extends Loader{
  constructor(destination){
    super(destination);
  }

  load(){
    for (var i = 0; i <= 50; i++) {
      var div = document.createElement('div');
      div.setAttribute('class', 'item');
      div.innerHTML = "<div class='content'>"+i+" : "+makeid(Math.floor(Math.random()*500+50))+"</div>";

      this.destination.appendChild(div);
    }

    return true;
  }
}