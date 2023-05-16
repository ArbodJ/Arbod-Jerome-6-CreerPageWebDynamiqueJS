// call API
const urlApi = await fetch("http://localhost:5678/api/works");
const response = await urlApi.json();
console.log(urlApi);
console.log(response);

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

// Create div filter
const filterDiv = document.querySelector('#filter');

// Create button and text
const btnSortAll = document.createElement('button');
btnSortAll.textContent = 'Tous';
const btnSortObjects = document.createElement('button');
btnSortObjects.textContent = "Objets";
const btnSortFlats = document.createElement('button');
btnSortFlats.textContent = "Appartements";
const btnSortHotelsRestaurants = document.createElement('button');
btnSortHotelsRestaurants.textContent = "Hôtels & restaurants";

// Add CSS on buttons
btnSortAll.classList.add("btnFilter", "btn1");
btnSortObjects.classList.add('btnFilter', 'btn2');
btnSortFlats.classList.add('btnFilter', 'btn3');
btnSortHotelsRestaurants.classList.add('btnFilter', 'btn4');

// placing buttons
filterDiv.appendChild(btnSortAll);
filterDiv.appendChild(btnSortObjects);
filterDiv.appendChild(btnSortFlats);
filterDiv.appendChild(btnSortHotelsRestaurants);

// Event click on buttons
// Default display
btnSortAll.addEventListener('click', function () {
  const listAll = response.filter(function (all) {
    return all.categoryId;
  });
  console.log(listAll);
  document.querySelector(".gallery").innerHTML = "";
  displayImg(listAll);
})

// Objects display
btnSortObjects.addEventListener('click', function () {
  const listObjects = response.filter(function (object) {
    return object.categoryId === 1;
  });
  console.log(listObjects);
  document.querySelector(".gallery").innerHTML = "";
  displayImg(listObjects);
})

// Flats display
btnSortFlats.addEventListener('click', function () {
  const listFlats = response.filter(function (flat) {
    return flat.categoryId === 2;
  });
  console.log(listFlats);
  document.querySelector(".gallery").innerHTML = "";
  displayImg(listFlats);
})

// Hotel and restaurant display
btnSortHotelsRestaurants.addEventListener('click', function () {
  const listHtlRstrt = response.filter(function (htlRstrt) {
    return htlRstrt.categoryId === 3;
  });
  console.log(listHtlRstrt);
  document.querySelector(".gallery").innerHTML = "";
  displayImg(listHtlRstrt);
})