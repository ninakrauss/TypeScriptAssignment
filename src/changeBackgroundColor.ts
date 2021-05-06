let place = 0;
let sound : any = document.getElementById("audio");

export function changeBackgroundColor() {
    console.log( "Change Color")
     let colors : string[] = ["CornflowerBlue","DarkSalmon","PeachPuff","Thistle","LightGreen","MistyRose"];
     document.body.style.backgroundColor = colors[place]; 
     place++;
     if (place ===colors.length) {place=0}; 
}

export function soundEffect() {
    console.log("Sound Effect")
    sound.play();
}