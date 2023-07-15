// call API
let allWorks = []
async function getApi(){

  const urlApi = await fetch("http://localhost:5678/api/works");
  const response = await urlApi.json();
  console.log(urlApi);
  console.log(response);
  allWorks = response;
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
btnDeleteAll.addEventListener('click', (e) => {
  e.preventDefault();
  const allDlt = document.querySelectorAll('.figureMdl');
  console.log(allDlt);
  const dltId = allDlt;
  dltAll(dltId);
});
modalContent.appendChild(btnDeleteAll);

//Display pictures gallery in MODAL 1
function picturesInModal(response) {
  for (let i = 0; i < response.length; i++) {
    const elementM = response[i];
    document.querySelector('galleryInModal');

    const figureInModal = document.createElement('figure');
    figureInModal.classList.add('figureMdl');
    figureInModal.setAttribute('data', elementM.id);
    galleryInModal.appendChild(figureInModal);

    const imgInModal = document.createElement('img');
    imgInModal.setAttribute('src', elementM.imageUrl);
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
 async function deleteOnePicture(selectId) {

   const token = localStorage.getItem('token');
   console.log(token);
  
  await fetch(`http://localhost:5678/api/works/${selectId}`, {
    method: 'DELETE',
    headers: {
      'accept': '*/*',
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => {
    if(response.status === 200 || response.status === 204) {
      console.log("supprimer")
      // on supprime le work qui a le meme id que select id
      allWorks = allWorks.filter((work) => {
        return work.id != selectId
      })
      // on vide la liste
      document.querySelector(".gallery").innerHTML = "";
      // on regénére la liste avec le work supprimé en moins
      displayImg(allWorks);
      document.querySelector('.galleryModal').innerHTML = "";
      picturesInModal(allWorks)
    }
    if(response.status === 401 || response.status === 400) {
      console.log('Error');
    }
  });
}
//********************************************************************
// Delete gallery
async function dltAll(dltId) {
  console.log(dltId);
  const token = localStorage.getItem('token');
  console.log(token);
  const delDlt = document.querySelectorAll('.figureMdl');
  
  // await fetch(`http://localhost:5678/api/works/${dltId}`, {
  //   method: 'DELETE',
  //   headers: {
  //     'accept': '*/*',
  //     'Authorization': "Bearer" + token ,
  //   },
  // })
  
    if(response.ok) {
      console.log(delDlt);
    } else {
      throw new Error("Erreur : Impossible de supprimer.");
    }

  // })
  // .catch(error => {
  //   console.log(Error);
  // });
}

// *************************************************************************
// - MODAL 2 (add picture)
// Btn add selected
const modalAdd = document.querySelector('.modal-add');

// Create Dom elements of modal
const modalAddContent = document.querySelector('.modalAddContent');

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

//----------------
// Add one picture
//----------------

const divPicture = document.querySelector('.div-add-picture');
const inputAddImg = document.querySelector('#image');
const preview = document.querySelector('.icon-add');
const divBtnTxt = document.querySelector('.div-btn-txt');
const pTxtAdd = document.querySelector('.txt-add');
const inputTitle = document.querySelector('#title');
const inputCategory = document.querySelector('#category');
const btnAdd = document.querySelector('.btn-add');

// - display one picture
inputAddImg.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = inputAddImg.files;
  if (curFiles.length === 0) {
    const para = document.querySelector('.fa-regular fa-image');
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    divPicture.appendChild(list);
    
    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.style.width = '129px';
        image.style.height = '169px';

        pTxtAdd.style.display = 'none';
        divBtnTxt.style.display = 'none';
        preview.style.display = 'none';
        para.style.display = 'none';

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        pTxtAdd.style.display = 'flex';
        divBtnTxt.style.display = 'flex';
        preview.style.display = 'flex';
        para.style.display = 'block';
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }
      list.appendChild(listItem);
    }
  }
}

const fileTypes = [
  "image/jpg",
  "image/png",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}
// - Send picture title and category to modal and page

const getCategory = async () => {
  const response = await fetch('http://localhost:5678/api/categories')
  const result = await response.json()
  document.querySelector('#category').innerHTML = result.map((category) => {
    return `<option value="${category.id}">${category.name}</option>`
  }).join('')
  console.log(result)
}
const formElem = document.forms.namedItem("formAdd");
formElem.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  formElem.querySelector('input[name = "image"]');
  formElem.querySelector('input[name = "title"]');
  formElem.querySelector('#category');

  const formData = new FormData(formElem);
  console.log(formData.get("image"));
  console.log(formData.get("title"));
  console.log(formData.get("category"));
  const newWork = {
    image: formData.get("image"),
    title: formData.get("title"),
    category: parseInt(formData.get("category"))
  }
  console.log(newWork)
  sendNewForm(newWork);
});
getCategory();
async function sendNewForm(newWork) {
  const token = localStorage.getItem('token');
  const formData = new FormData();

  if(
    newWork.title === ''
    || newWork.image.name === ''
  ) {
    document.querySelector(".error-add").style.display = "block"
    return
  } else {
    document.querySelector(".error-add").style.display = "none"
  }
  formData.append('title', newWork.title)
  formData.append('image', newWork.image)
  formData.append('category', newWork.category)
  const response = await fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
      'Authorization': "Bearer " + token,
    },
    body: formData,
  });
  const result = await response.json();
  allWorks.push(result)
  document.querySelector(".gallery").innerHTML = "";
  displayImg(allWorks)
  document.querySelector('.galleryModal').innerHTML = "";
  picturesInModal(allWorks)
}

// **********************************************************************
// - open & close MODAL 2 -
function openModalAddPicture(){
  const btnAddOnePicture = document.querySelector('.btnAddOnePicture');
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