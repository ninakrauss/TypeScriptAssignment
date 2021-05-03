let headline : any = document.getElementById("headline");
let image : any = document.getElementById("image");
let artist: any= document.getElementById("artist");
let description : any = document.getElementById("description");
let inputSearch: any = document.getElementById("search");

interface Artwork {
    headline:string;
    image: string;
    artist: string;
    description: string;
}
var artworks:Artwork[]= [{
    headline:"Mona Lisa (1503-1506)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/515px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    artist: "Leonardo da Vinci",
    description:"The Mona Lisa is one of the most valuable paintings in the world. It holds the Guinness World Record for the highest known insurance valuation in history at US$100 million in 1962 (equivalent to $660 million in 2019)."
},
{
    headline:"Sunflowers (1888)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Van_Gogh_Vase_with_Fifteen_Sunflowers.jpg/186px-Van_Gogh_Vase_with_Fifteen_Sunflowers.jpg",
    artist:"Vincent van Gogh",
    description:"Sunflowers (original title, in French: Tournesols) is the name of two series of still life paintings by the Dutch painter Vincent van Gogh. The first series, executed in Paris in 1887, depicts the flowers lying on the ground, while the second set, made a year later in Arles, shows a bouquet of sunflowers in a vase. In the artist's mind both sets were linked by the name of his friend Paul Gauguin, who acquired two of the Paris versions."
},
{
    headline:"Self-Portrait with Thorn Necklace and Hummingbird (1940)",
    image:"https://upload.wikimedia.org/wikipedia/en/1/1e/Frida_Kahlo_%28self_portrait%29.jpg",
    artist:"Frida Kahlo",
    description:"Kahlo painted the self-portrait, which includes a black cat and a monkey, after her divorce from Diego Rivera and the end of her affair with photographer Nickolas Muray. Muray bought the portrait shortly after it was painted, and it is currently part of the Nickolas Muray collection at the Harry Ransom Center at the University of Texas at Austin."
},
{
    headline:"The Persistence of Memory (1931)",
    image:"https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    artist:"Salvador Dali",
    description:"The Persistence of Memory (Spanish: La persistencia de la memoria) is a 1931 painting by artist Salvador Dalí and one of the most recognizable works of Surrealism."
},
{
    headline:"The Starry Night (1889)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/600px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    artist:"Vincent van Gogh",
    description:"The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village."
}]

export function searchArtworks() {
    let search:string = inputSearch.value;
    if(search.length > 0){
        let searchArtwork:any=artworks.find(e=>e.headline.toLowerCase().includes(search.toLowerCase()))
        if(searchArtwork){
            setArtwork(searchArtwork);
        }
        else{
            let errorMessage : any = document.getElementById("errorMessage");
            errorMessage.style.display="block";

            let artworkPage : any = document.getElementById("artworkPage");
            artworkPage.style.display="none";
    
        }
    

    }  
    else {
        alert("Please type in a search term");
    }
    



}
export function randomArtwork() {
setArtwork(artworks[Math.floor(Math.random()*artworks.length)]);
}



function setArtwork(artwork:Artwork){
    let loadingPage : any = document.getElementById("loadingPage");
    loadingPage.style.display="none";
    
    let artworkPage : any = document.getElementById("artworkPage");
    artworkPage.style.display="block";
    
    let errorMessage : any = document.getElementById("errorMessage");
    errorMessage.style.display="none";
    
    
    headline.innerHTML= artwork.headline;
    image.src= artwork.image;
    artist.innerHTML= artwork.artist;
    description.innerHTML= artwork.description;
}

