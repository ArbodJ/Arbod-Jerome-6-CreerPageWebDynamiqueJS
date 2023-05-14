// call API
const urlApi = await fetch("http://localhost:5678/api/works");
const response = await urlApi.json();
console.log(urlApi);

// Display picture + title
function displayImg(response) {
  for (let i = 0; i < response.length; i++) {
    const item = response[i];
    // selected placement
    const galleryDiv = document.querySelector('.gallery');
    // created bloc figure
    const figure = document.createElement('figure');
    // Create and insert image
    const img = document.createElement('img');
    img.setAttribute("src", item.imageUrl);
    // Create and insert tiltle
    const title = document.createElement('figcaption');
    title.textContent = item.title;

    // Elements places
    galleryDiv.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(title);
  }
}
displayImg(response);