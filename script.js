'use strict';


function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    
}

DomElement.prototype.Create = function() {
    let element;
   if(this.selector[0] === '.'){
        element = document.createElement('div');
        element.setAttribute('class', `${this.selector.substr(1)}`);
   }else if(this.selector[0] === '#'){
        element = document.createElement('p');
        element.setAttribute('id', `${this.selector.substr(1)}`);
   }
   document.body.appendChild(element);
   element.innerHTML = 'любой текст';
   element.style.cssText = `height: ${this.height}px;
   width: ${this.width}px;
   background-color: ${this.bg};
   font-size: ${this.fontSize}px;
   `;
};





const domElement = new DomElement('#book', '500', '500', 'red', '14');
const domElement2 = new DomElement('.div', '250', '250', 'green', '16');
domElement.Create();
domElement2.Create();
