// call API
const urlApi = await fetch("http://localhost:5678/api/works");
const response = await urlApi.json();
console.log(urlApi);
console.log(response);

// ----- DYNAMIC DISPLAY -----
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

// ----- FILTERS -----
// Create div filter and buttons
const filterDiv = document.querySelector('#filter');
const btnSortAll = document.createElement('button');
const btnSortObjects = document.createElement('button');
const btnSortFlats = document.createElement('button');
const btnSortHotelsRestaurants = document.createElement('button');

function filters() {
  // Create button and text
  btnSortAll.textContent = 'Tous';
  btnSortObjects.textContent = "Objets";
  btnSortFlats.textContent = "Appartements";
  btnSortHotelsRestaurants.textContent = "Hôtels & restaurants";
  // placing buttons
  filterDiv.appendChild(btnSortAll);
  filterDiv.appendChild(btnSortObjects);
  filterDiv.appendChild(btnSortFlats);
  filterDiv.appendChild(btnSortHotelsRestaurants);
  // call function for CSS
  filterCSS();
}
filters();

// Add CSS on buttons
function filterCSS(){
  btnSortAll.classList.add('btnFilter', 'btn1');
  btnSortObjects.classList.add('btnFilter', 'btn2');
  btnSortFlats.classList.add('btnFilter', 'btn3');
  btnSortHotelsRestaurants.classList.add('btnFilter', 'btn4');
  // call fuction for events on buttons
  filterEvents();
}

// Event click on buttons
function filterEvents() {
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
}
// ----- LOG IN & LOG OUT -----
// Display of index.html log in or log out page
//selection of elements
const edit = document.getElementById('edit-mod');
const modify = document.getElementById('link-modify');
const filter = document.getElementById('filter');
const log = document.getElementById('link-log');

//app of elements
function logApp() {
  if(localStorage.getItem("token")) {
    //login logout
    log.textContent="logout";
    log.addEventListener('click', function (e) {
      e.preventDefault();
      localStorage.removeItem("token");
      window.location.href="index.html";
    });
    //display logout
    edit.style.display = "flex";
    modify.style.display = "flex";
    filter.style.display = "none";
    
  }else {
    //display login
    edit.style.display = "none";
    modify.style.display = "none";
    filter.style.display = "flex";
  }
}
logApp();

// ----- MODAL WINDOW -----
//Place of modal
const myMdl = document.getElementById('myModal');
myMdl.classList.add('.modal');
//Create dynamically elements of modal
const divMdlContent = document.createElement('div');
const divMdlClose = document.createElement('div');
const iconMdlClose = document.createElement('i');
const titleMdl = document.createElement('p');
const galleryMdl = document.createElement('div');
const lineMdl = document.createElement('div');
const btnAddMdl = document.createElement('button');
const btnDeleteGallery = document.createElement('button');

//Display modal
function dsplModal() {
  //Place of elements
  myMdl.appendChild(divMdlContent);
  divMdlContent.appendChild(divMdlClose);
  divMdlClose.appendChild(iconMdlClose);
  divMdlContent.appendChild(titleMdl);
  divMdlContent.appendChild(galleryMdl);
  divMdlContent.appendChild(lineMdl);
  divMdlContent.appendChild(btnAddMdl);
  divMdlContent.appendChild(btnDeleteGallery);
  //Call function
  modalCSS(); 
}
dsplModal();

//CSS elements of modal
function modalCSS() {
  divMdlContent.classList.add('modalContent');
  divMdlClose.classList.add('modalDivClose');
  iconMdlClose.classList.add('fa-xmark');
  iconMdlClose.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  titleMdl.classList.add('titleModal');
  titleMdl.textContent = "Galerie photo";
  galleryMdl.classList.add('galleryModal');
  lineMdl.classList.add('lineModal');
  btnAddMdl.classList.add('btnModal');
  btnAddMdl.textContent = "Ajouter une photo";
  btnDeleteGallery.classList.add('btnModal1');
  btnDeleteGallery.textContent = "Supprimer la galerie";
  openClose();
}

//Open and close window modal
function openClose() {
  const btnModify = document.getElementById('modify-text');
  const modal = document.getElementById('myModal');
  const divGMdl = document.getElementById('myModal');
  const spanClose = document.getElementsByClassName('fa-xmark')[0];
  //Open modal
  btnModify.addEventListener('click', function() {
    modal.style.display = "flex";
  });
  //Close modal by icon
  spanClose.addEventListener('click', function() {
    modal.style.display = "none";
  });
  //Close by window out
  divGMdl.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
  imgModal(response);
}

// display pictures in modal
function imgModal(response) {
  for (let i = 0; i < response.length; i++) {
    const element = response[i];
    document.querySelector('.galleryModal')[i];
    const mdlFigure = document.createElement('figure');
    const mdlImg = document.createElement('img');
    mdlImg.setAttribute("src", element.imageUrl);
    const mdlMoveDelete = document.createElement('div');
    const mdlDivTrash = document.createElement('div');
    const mdlDivMove = document.createElement('div');
    const mdlFigcaption = document.createElement('figcaption');
    mdlFigcaption.textContent = "éditer";
    //CSS general
    mdlFigure.classList.add('fgrModal');
    mdlMoveDelete.classList.add('moveDelete');
    //CSS trash
    mdlDivTrash.classList.add('divTrash');
    mdlDivTrash.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    //CSS move
    mdlDivMove.classList.add('divMove');
    mdlDivMove.innerHTML = '<i class="fa-solid fa-arrows-up-down-left-right"><i>';
    //CSS img & figcaption
    mdlImg.classList.add('imgModal');
    mdlFigcaption.classList.add('fgcptModal');
    //Place of elements
    galleryMdl.appendChild(mdlFigure);
    mdlFigure.appendChild(mdlMoveDelete);
    mdlMoveDelete.appendChild(mdlDivTrash);
    mdlMoveDelete.appendChild(mdlDivMove);
    mdlFigure.appendChild(mdlImg);
    mdlFigure.appendChild(mdlFigcaption);
  }
}
