// call API
async function getApi(){

  const urlApi = await fetch("http://localhost:5678/api/works", { method: 'GET'});
  const response = await urlApi.json();
  console.log(urlApi);
  console.log(response);
  displayImg(response);
  picturesInModal(response);
  filterEvents(response);
  return response;
}
getApi();
// **************************************************************************
// ----- DYNAMIC DISPLAY -----
// Display picture + title
function displayImg(response) {
  for (let i = 0; i < response.length; i++) {
    const element = response[i];
    // selected placement
    const galleryDiv = document.querySelector('.gallery');
    // created bloc figure
    const figure = document.createElement('figure');
    figure.setAttribute('id', 'figInit');
    // Create and insert image
    const img = document.createElement('img');
    img.setAttribute("src", element.imageUrl);
    // Create and insert tiltle
    const title = document.createElement('figcaption');
    title.textContent = element.title;

    // Elements places
    galleryDiv.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(title);
  }
}
// ******************************************************************************
// ----- FILTERS -----
// Create div filter and buttons
const filterDiv = document.getElementById('filter');
if (typeof window !== 'undefined') {
  console.log('You are on the browser');
  console.log(document.filter);
  console.log(document.getElementById('filter'));
}
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
}
//************************************************************************
// Event click on buttons
function filterEvents(response) {
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
  });
  // Hotel and restaurant display
  btnSortHotelsRestaurants.addEventListener('click', function () {
    const listHtlRstrt = response.filter(function (htlRstrt) {
      return htlRstrt.categoryId === 3;
    });
    console.log(listHtlRstrt);
    document.querySelector(".gallery").innerHTML = "";
    displayImg(listHtlRstrt);
  });
}
//**********************************************************************
// ----- LOG IN & LOG OUT -----
// Display of index.html log in or log out page
//selection of elements
function logInOut() {
  const edit = document.getElementById('edit-mod');
  const modify = document.getElementById('link-modify');
  const filter = document.getElementById('filter');
  const log = document.getElementById('link-log');
  
  if(localStorage.getItem("token")) {
    //login logout
    log.textContent="logout";
    log.addEventListener('click', function () {
      localStorage.removeItem("token");
      log.setAttribute("href", "index.html");
    });
    //display logout
    edit.style.display = "flex";
    modify.style.display = "flex";
    filter.style.display = "none";
    
  } else {
    //display login
    edit.style.display = "none";
    modify.style.display = "none";
    filter.style.display = "flex";
  } 
}
logInOut();
// *********************************************************************

// ----- MODAL 1 & 2 -----

// - MODAL 1 (gallery & options add one, delete one and delete all) -
//button div modify (icon & text selected)
const btnOpenModal = document.querySelector('#link-modify');
//Div modal DOM selected
const modal = document.querySelector('#myModal');
modal.classList.add('modal');
//Create Dom elements of modal
const modalContent = document.createElement('div');
modalContent.classList.add('modalContent');
modal.appendChild(modalContent);

const divIconClose = document.createElement('div');
divIconClose.classList.add('divIconClose');
modalContent.appendChild(divIconClose);

const iconClose = document.createElement('i');
iconClose.classList.add('fa-solid', 'fa-xmark');
divIconClose.appendChild(iconClose);

const titleModal = document.createElement('p');
titleModal.classList.add('titleModal');
titleModal.textContent = 'Galerie photo';
modalContent.appendChild(titleModal);

const galleryInModal = document.createElement('div');
galleryInModal.classList.add('galleryModal');
modalContent.appendChild(galleryInModal);

const lineModal = document.createElement('div');
lineModal.classList.add('lineModal');
modalContent.appendChild(lineModal);

const btnAddOnePicture = document.createElement('button');
btnAddOnePicture.classList.add('btnAddOnePicture');
btnAddOnePicture.textContent = "Ajouter une photo";

modalContent.appendChild(btnAddOnePicture);

const btnDeleteAll = document.createElement('button');
btnDeleteAll.classList.add('btnDeleteAll');
btnDeleteAll.textContent = "Supprimer la gallerie";
btnDeleteAll.addEventListener('click', function() {
  const allDlt = document.querySelectorAll('.figureMdl');
  console.log(allDlt);
  const dltId = allDlt;
  dltAll(dltId);
});
modalContent.appendChild(btnDeleteAll);

//Display pictures gallery in MODAL 1
function picturesInModal(response) {
  for (let i = 0; i < response.length; i++) {
    const element = response[i];
    document.querySelector('galleryInModal');

    const figureInModal = document.createElement('figure');
    figureInModal.classList.add('figureMdl');
    figureInModal.setAttribute('data', element.id);
    galleryInModal.appendChild(figureInModal);

    const imgInModal = document.createElement('img');
    imgInModal.setAttribute('src', element.imageUrl);
    imgInModal.classList.add('imgMdl');
    figureInModal.appendChild(imgInModal);
    
    const divMoveDelete = document.createElement('div');
    divMoveDelete.classList.add('moveDelete');
    figureInModal.appendChild(divMoveDelete);

    const divTrash = document.createElement('div');
    divTrash.classList.add('divTrashMove');
    divTrash.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    //Delete one picture
    divTrash.addEventListener('click', function() {
      
      const selectMdl = document.getElementsByClassName('figureMdl')[i];
      console.log(selectMdl);
      // const selectInit = document.querySelector('#figInit');
      // console.log(selectInit);
      const selectId = selectMdl.getAttribute('data');
      deleteOnePicture(selectId);
    });
    divMoveDelete.appendChild(divTrash);

    const divMove = document.createElement('div');
    divMove.setAttribute('id', 'move');
    divMove.classList.add('divTrashMove');
    divMove.innerHTML = '<i class="fa-solid fa-arrows-up-down-left-right"><i>';
    divMoveDelete.appendChild(divMove);

    const figcaptionInModal = document.createElement('figcaption');
    figcaptionInModal.classList.add('fgcptModal');
    figureInModal.appendChild(figcaptionInModal);

    const textFigcaption = document.createElement('p');
    textFigcaption.textContent = "éditer";
    textFigcaption.classList.add('textFgcpt');
    figcaptionInModal.appendChild(textFigcaption);
  }
}
// *****************************************************************************
//Open & close modal window
function openModal() {
  btnOpenModal.addEventListener('click', function() {
    modal.style.display = "flex";
  });
}
openModal();

function closeWindowModal() {
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
closeWindowModal();

function iconCloseModal() {
  iconClose.addEventListener('click', function() {
    modal.style.display = "none";
  });
}
iconCloseModal();
// **************************************************************************
//Delete one picture
 function deleteOnePicture(selectId) {

   const token = localStorage.getItem('token');
   console.log(token);
  
  fetch(`http://localhost:5678/api/works/${selectId}`, {
    method: 'DELETE',
    headers: {
      'accept': '*/*',
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => {
    if(response.ok) {
      const del = document.querySelector('.divTrashMove');
      del.parentElement.removeChild(del);
      // const figDel = document.querySelector('#figInit');
      // selectPicture.remove();
      // figDel.parentNode.removeChild(figDel);
      console.log(selectPicture);
    }
  })
  .catch(error => {
    console.log(Error);
    alert(Error);
  });
  console.log(selectId);
}

// Delete gallery
function dltAll(dltId) {
  const token = sessionStorage.getItem('token');
   console.log(token);
  
  fetch(`http://localhost:5678/api/works/${dltId}`, {
    method: 'DELETE',
    headers: {
      'accept': '*/*',
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => {
    if(response.ok) {

      const delDlt = document.querySelector('.figureMdl');
      delDlt.parentNode.remove();
      

    }
  })
  .catch(error => {
    console.log(Error);
    alert(Error);
  });
}
// *************************************************************************
// - MODAL 2 (add picture)
// Btn add selected
const modalAdd = document.querySelector('.modal-add');
modalAdd.classList.add('modal-add');
//Create Dom elements of modal
const modalAddContent = document.createElement('div');
modalAddContent.classList.add('modalAddContent');
modalAdd.appendChild(modalAddContent);

const divIconCloseAdd = document.createElement('div');
divIconCloseAdd.classList.add('divIconCloseAdd');
modalAddContent.appendChild(divIconCloseAdd);

const iconCloseAddReturn = document.createElement('i');
iconCloseAddReturn.classList.add('fa-solid', 'fa-arrow-left');
divIconCloseAdd.appendChild(iconCloseAddReturn);

const iconCloseAdd = document.createElement('i');
iconCloseAdd.classList.add('fa-solid', 'fa-xmark');
divIconCloseAdd.appendChild(iconCloseAdd);

const titleModalAdd = document.createElement('p');
titleModalAdd.classList.add('titleModal');
titleModalAdd.textContent = 'Ajouter photo';
modalAddContent.appendChild(titleModalAdd);
//Form
const formModalAdd = document.createElement('form');
formModalAdd.classList.add('form-modal-add');
formModalAdd.setAttribute('method', 'post');
formModalAdd.setAttribute('enctype', 'multipart/form-data');
modalAddContent.appendChild(formModalAdd);
//Div icon btnadd txt
//div icon
const divFormAddPicture = document.createElement('div');
divFormAddPicture.classList.add('div-add-picture');
formModalAdd.appendChild(divFormAddPicture);

const divIconAdd = document.createElement('div');
divIconAdd.classList.add('icon-add');
divIconAdd.innerHTML = '<i class="fa-regular fa-image"></i>';
divFormAddPicture.appendChild(divIconAdd);

//div btn & txt
const divBtnTxt = document.createElement('div');
divBtnTxt.classList.add('div-btn-txt');
divFormAddPicture.appendChild(divBtnTxt);

const labelAddImg = document.createElement('label');
labelAddImg.setAttribute('for', 'upload-img');
labelAddImg.classList.add('label-add-img');
labelAddImg.textContent = '.jpg, .png : 4mo max';
divBtnTxt.appendChild(labelAddImg);


const btnAdd = document.createElement('button');
btnAdd.classList.add('btn-add');
divBtnTxt.appendChild(btnAdd);

const inputAddImg = document.createElement('input');
inputAddImg.setAttribute('type', 'file');
inputAddImg.setAttribute('id', 'upload-img');
inputAddImg.setAttribute('name', 'upload-img');
inputAddImg.setAttribute('accept', '.jpg, .png');
inputAddImg.setAttribute('multiple', '');
inputAddImg.style.opacity = "0";
btnAdd.appendChild(inputAddImg);

const txtAdd = document.createElement('p');
txtAdd.classList.add('txt-add');
txtAdd.textContent = "+ Ajouter photo";
btnAdd.appendChild(txtAdd);
// div send work
const divSendWork = document.createElement('div');
divSendWork.classList.add('div-send-work');
modalAddContent.appendChild(divSendWork);
// input title
const labelAddTitle = document.createElement('label');
labelAddTitle.classList.add('label-add-title');
labelAddTitle.setAttribute('for', 'upload-title');
labelAddTitle.textContent = 'Titre';
divSendWork.appendChild(labelAddTitle);

const inputTitle = document.createElement('input');
inputTitle.setAttribute('type', 'text');
inputTitle.setAttribute('id', 'upload-title');
inputTitle.setAttribute('name', 'upload-title');
inputTitle.classList.add('input-title-cat');
divSendWork.appendChild(inputTitle);

// input Category
const labelAddCat = document.createElement('label');
labelAddCat.classList.add('label-add-cat');
labelAddCat.setAttribute('for', 'upload-cat');
labelAddCat.textContent = 'Catégorie';
divSendWork.appendChild(labelAddCat);

const inputCat = document.createElement('input');
inputCat.setAttribute('list', 'listCat');
inputCat.setAttribute('id', 'upload-cat');
inputCat.setAttribute('name', 'upload-cat');
inputCat.classList.add('input-title-cat');
divSendWork.appendChild(inputCat);

const dataList = document.createElement('datalist');
dataList.setAttribute('id', 'listCat');
inputCat.appendChild(dataList);

const option1 = document.createElement('option');
option1.setAttribute('value', 'Objets');
dataList.appendChild(option1);

const option2 = document.createElement('option');
option2.setAttribute('value', 'Appartements');
dataList.appendChild(option2);

const option3 = document.createElement('option');
option3.setAttribute('value', 'Hotels & restaurants');
dataList.appendChild(option3);

const lineModalAdd = document.createElement('div');
lineModalAdd.classList.add('lineModal-add');
divSendWork.appendChild(lineModalAdd);

const inputValid = document.createElement('input');
inputValid.setAttribute('type', 'submit');
inputValid.setAttribute('value', 'Valider');
// inputValid.textContent = "Valider";
inputValid.classList.add('btn-add');
divSendWork.appendChild(inputValid);




// **********************************************************************
// - open & close MODAL 2 -
function openModalAddPicture(){
  btnAddOnePicture.addEventListener('click', function(){
    modalAdd.style.display = "flex";
    modal.style.display = "none";
  });
}
openModalAddPicture();

function iconCloseModalAdd() {
  iconCloseAdd.addEventListener('click', function() {
    modalAdd.style.display = "none";
  });
}
iconCloseModalAdd();
// - MODAL 2 return to MODAL 1
function iconReturnMdl2ToMdl1() {
  iconCloseAddReturn.addEventListener('click', function() {
    modalAdd.style.display = 'none';
    modal.style.display = 'flex';
  });
};
iconReturnMdl2ToMdl1();