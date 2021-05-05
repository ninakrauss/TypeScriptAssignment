//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!



import { changeBackgroundColor, soundEffect} from "./changeBackgroundColor";
import { randomArtwork, searchArtworks} from "./searchArtworks";

let artworkPage : any = document.getElementById("artworkPage");
artworkPage.style.display="none";

let errorMessage : any = document.getElementById("errorMessage");
errorMessage.style.display="none";

let changeColorButtons : any= document.getElementsByClassName("change-color");
changeColorButtons[0].addEventListener("click", changeBackgroundColor);

let colorSound : any= document.getElementsByClassName("change-color");
colorSound[0].addEventListener("click", soundEffect);

let searchButtons : any= document.getElementsByClassName("search-btn");
searchButtons[0].addEventListener("click", searchArtworks);

let discoverButtons : any= document.getElementsByClassName("discover-btn");
discoverButtons[0].addEventListener("click", randomArtwork);

let newButtons : any= document.getElementsByClassName("new-btn");
newButtons[0].addEventListener("click", randomArtwork);



const myInputValue = document.querySelector<HTMLInputElement>("#myInput");





