
/**
 * Author: probing
 * Version: 06_10_2019 (Beta)
 * Loads data in a mosaik
 */

console.log("Infinyload Version 06_10_2019 (Beta) initiated");

class Infinyload{
  constructor(id){
    this.grid = document.getElementById(id);
    this.iframe = document.createElement("IFRAME");
    

    this.iframe.style.height = "0px";
    this.iframe.className = "loaderbox";
    this.iframe.src = "loader.html";
    this.grid.appendChild(this.iframe);


    window.addEventListener("scroll", this.infinyload.bind(this));

    window.addEventListener("scroll", this.inview.bind(this));

    window.addEventListener("resize", this.resizeAllItems.bind(this));


    this.load();
    this.resizeAllItems();

    this.allItems = document.getElementsByClassName("item");
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

      this.allItems = document.getElementsByClassName("item");
      for (var i = this.allItems.length - 1; i >= 0; i--) {
        this.allItems[i].addEventListener('load', this.resizeInstance.bind(this));
      }
    }
  }

  resizeAllItems(){
    this.allItems = document.getElementsByClassName("item");
    for (var i = this.allItems.length - 1; i >= 0; i--) {
      this.resizeItem(this.allItems[i]);
    }

    this.inview();
  }

  resizeItem(item){
    let rowHeight = parseInt(window.getComputedStyle(this.grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(this.grid).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));


    item.style.gridRowEnd = "span "+rowSpan;
  }

  resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
  }


  
  load(){
    this.loaderUp();

    //TEST DIVS
    for (var i = 0; i <= 50; i++) {
      var div = document.createElement('div');
      div.setAttribute('class', 'item');
      div.innerHTML = "<div class='content'>"+i+" : "+makeid(Math.floor(Math.random()*500+50))+"</div>";

      this.grid.appendChild(div);
    }




     window.setTimeout(this.loaderDown.bind(this),333);
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


