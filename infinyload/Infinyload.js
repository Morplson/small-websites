
/**
 * Author: probing
 * Version: 06_10_2019
 * Loads data in a mosaik
 */

class Infinyload{
  constructor(id){
    this.grid = document.getElementById(id);


    window.addEventListener("scroll", this.infinyload.bind(this));
    window.addEventListener("resize", this.resizeAllItems.bind(this));


    this.load();
    this.resizeAllItems();


    this.allItems = document.getElementsByClassName("item");
    for (var i = this.allItems.length - 1; i >= 0; i--) {
      this.allItems[i].addEventListener('load', this.resizeInstance.bind(this));
    }
  }

  infinyload(){
    console.log(eval(document.documentElement.scrollTop + document.documentElement.clientHeight)+" : "+eval(document.documentElement.scrollHeight-20));
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
    //TEST DIVS
    for (var i = 0; i <= 50; i++) {
      var div = document.createElement('div');
      div.setAttribute('class', 'item');
      div.innerHTML = "<div class='content'>"+i+" : "+makeid(Math.floor(Math.random()*100+1))+"</div>";

      this.grid.appendChild(div);
    }
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


