let place = 0;
let sound : any = document.getElementById("audio");

export function changeBackgroundColor() {
    console.log( "Change Color")
     let colorList : string[] = ["CornflowerBlue","DarkSalmon","PeachPuff","Thistle","LightGreen","MistyRose"];
     document.body.style.backgroundColor = colorList[place]; 
     place++;
     if (place ===colorList.length) {place=0}; 
}

export function soundEffect() {
    console.log("Sound Effect")
    sound.play();
}