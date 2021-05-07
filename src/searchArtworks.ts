let headline : any = document.getElementById("headline");
let image : any = document.getElementById("image");
let artist: any= document.getElementById("artist");
let period: any = document.getElementById("period");
let description : any = document.getElementById("description");
let inputSearch: any = document.getElementById("search");

interface Artwork {
    headline:string;
    image: string;
    artist: string;
    period: string;
    description: string;
}
var artworks:Artwork[]= [{
    headline:"Mona Lisa (1503-1506)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/515px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    artist: "by Leonardo da Vinci",
    period: "Renaissance",
    description:"The Mona Lisa is one of the most valuable paintings in the world. It holds the Guinness World Record for the highest known insurance valuation in history at US$100 million in 1962 (equivalent to $660 million in 2019)."
},
{
    headline:"Sunflowers (1888)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Van_Gogh_Vase_with_Fifteen_Sunflowers.jpg/186px-Van_Gogh_Vase_with_Fifteen_Sunflowers.jpg",
    artist:"by Vincent van Gogh",
    period:"Post-Impressionism",
    description:"Sunflowers (original title, in French: Tournesols) is the name of two series of still life paintings by the Dutch painter Vincent van Gogh. The first series, executed in Paris in 1887, depicts the flowers lying on the ground, while the second set, made a year later in Arles, shows a bouquet of sunflowers in a vase. In the artist's mind both sets were linked by the name of his friend Paul Gauguin, who acquired two of the Paris versions."
},
{
    headline:"Self-Portrait with Thorn Necklace and Hummingbird (1940)",
    image:"https://upload.wikimedia.org/wikipedia/en/1/1e/Frida_Kahlo_%28self_portrait%29.jpg",
    artist:"by Frida Kahlo",
    period:"Symbolism, Modern Art, Surrealism",
    description:"Kahlo painted the self-portrait, which includes a black cat and a monkey, after her divorce from Diego Rivera and the end of her affair with photographer Nickolas Muray. Muray bought the portrait shortly after it was painted, and it is currently part of the Nickolas Muray collection at the Harry Ransom Center at the University of Texas at Austin."
},
{
    headline:"The Persistence of Memory (1931)",
    image:"https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    artist:"by Salvador Dali",
    period:"Surrealism",
    description:"The Persistence of Memory (Spanish: La persistencia de la memoria) is a 1931 painting by artist Salvador Dalí and one of the most recognizable works of Surrealism."
},
{
    headline:"The Starry Night (1889)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/600px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    artist:"by Vincent van Gogh",
    period:"Post-Impressionism",
    description:"The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village."
},
{
    headline:"Girl with a Pearl Earring (1665)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1011px-1665_Girl_with_a_Pearl_Earring.jpg",
    artist:"by Johannes Vermeer",
    period:"Golden Age",
    description:"Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it became known by its present title towards the end of the 20th century after the earring worn by the girl portrayed there. The work has been in the collection of the Mauritshuis in The Hague since 1902 and has been the subject of various literary treatments. In 2006, the Dutch public selected it as the most beautiful painting in the Netherlands."
},
{
    headline:"Impression, Sunrise (1872)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/800px-Monet_-_Impression%2C_Sunrise.jpg",
    artist:"by Claude Monet",
    period:"Impressionism",
    description:"Impression, Sunrise (French: Impression, soleil levant) is a painting by Claude Monet first shown at what would become known as the 'Exhibition of the Impressionists' in Paris in April, 1874. The painting is credited with inspiring the name of the Impressionist movement."
},
{
    headline:"The Great Wave off Kanagawa (1831)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/700px-Tsunami_by_hokusai_19th_century.jpg",
    artist:"by Katsushika Hokusai",
    period:"Ukiyo-e",
    description:"The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. 'Under the Wave off Kanagawa'), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833."
},
{
    headline:"Wanderer above the Sea of Fog (1818)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/600px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
    artist:"by Caspar David Friedrich",
    period:"Romantic",
    description:"Wanderer above the Sea of Fog (German: Der Wanderer über dem Nebelmeer), also known as Wanderer above the Mist or Mountaineer in a Misty Landscape, is an oil painting c. 1818 by the German Romantic artist Caspar David Friedrich. It has been considered one of the masterpieces of Romanticism and one of its most representative works. It resides in the Kunsthalle Hamburg, Germany."
},
{
    headline:"American Gothic (1930)",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/480px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    artist:"by Grant Wood",
    period:"Modern Arts",
    description:"American Gothic is a 1930 painting by Grant Wood in the collection of the Art Institute of Chicago. Wood was inspired to paint what is now known as the American Gothic House in Eldon, Iowa, along with 'the kind of people [he] fancied should live in that house'. It depicts a farmer standing beside his daughter – often mistakenly assumed to be his wife. The painting is named for the house's architectural style."
},
]

export function searchArtworks() {
    let search:string = inputSearch.value;
    if(search.length > 0){
        let searchArtwork:any=artworks.find(e=>e.headline.toLowerCase().includes(search.toLowerCase()))
        if(searchArtwork){
            inputSearch.value=""
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
    period.innerHTML= artwork.period;
    description.innerHTML= artwork.description;
}

export function printArtwork() {
    window.print();
}