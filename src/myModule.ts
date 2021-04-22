// THIS IS A MODULE!

export const helloWorld: string = "Hello world";

export class Beispiel extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>Hello World</h1>";
  }

}
export function changeColorButton() {     
let changeColorButtons : any = document.getElementsByClassName("change-color");     
for ( let changeColorbtn  of changeColorButtons) {               
   changeColorbtn.addEventListener("click", changeColor);    
}
   }
   window.addEventListener("load", changeColorButton);

// Change Background Color
export var place = 0;
      export  function changeColor() {
            // your color list
            var colorList = ["CornflowerBlue","DarkSalmon","PeachPuff","Thistle","LightGreen","MistyRose"];
            // set the color
            document.body.style.backgroundColor = colorList[place]; 
            place++;
            // if place is greater than the list size, reset
            if (place ===colorList.length) place=0; 
        }
