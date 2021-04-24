let headline : any = document.getElementById("headline");
let image : any = document.getElementById("image");
let description : any = document.getElementById("description");
let inputSearch: any = document.getElementById("search");

interface Artwork {
    headline:string;
    image: string;
    description: string;
}
var artworks:Artwork[]= [{
    headline:"Mona Lisa",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/515px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    description:"Description"
},
{
    headline:"Mona Herbert",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/515px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    description:"Description"
}]

export function searchArtworks() {
    let search:string = inputSearch.value;
    let searchArtwork:any=artworks.find(e=>e.headline.includes(search))
setArtwork(searchArtwork);


}
export function randomArtwork() {
setArtwork(artworks[Math.floor(Math.random()*artworks.length)]);
}



function setArtwork(artwork:Artwork){
    let loadingPage : any = document.getElementById("loadingPage");
    loadingPage.style.display="none";
    
    let artworkPage : any = document.getElementById("artworkPage");
    artworkPage.style.display="block";
    
    
    
    headline.innerHTML= artwork.headline;
    image.src= artwork.image;
    description.innerHTML= artwork.description;
}

