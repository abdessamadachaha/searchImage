const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("searchBox");
const images = document.getElementById("images");
const accessKey = "8A6E4p-SNIzAZgesu8MOPNk2DiGgc2HfTm2JNokejvs";
let page = 1;
let keyWord = "";


async function searchImages() {
   keyWord = searchBox.value;
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}`;
   const response = await fetch(url);  
   const data = await response.json();

 

   data.results.forEach(result => {
     
      let image = document.createElement("img");
      let link = document.createElement("a");
      image.src = result.urls.small;
      link.href = result.links.html;
      link.target = "_blank"

      link.appendChild(image);
      images.appendChild(link);

   })

   document.getElementById("more").style.display = "block"
   
}

searchForm.addEventListener("submit", e => {
   e.preventDefault();
   page = 1;
   images.innerHTML = "";
   searchImages();
})

document.getElementById("more").addEventListener("click", e => {
   page++;
   searchImages();
})