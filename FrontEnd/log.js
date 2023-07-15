// event on submit
const loggin = document.querySelector("#form");

let email = document.querySelector("#mail").value;
let password = document.querySelector("#pwd").value;

const mailErr = document.querySelector('.email-error');
mailErr.classList.add('email-error');
mailErr.style.display = 'none';
const pwdErr = document.querySelector('.pwd-error');
pwdErr.classList.add('pwdl-error');
pwdErr.style.display = 'none';

loggin.addEventListener('submit', (e) => {
  email = document.querySelector("#mail").value;
  password = document.querySelector("#pwd").value;
  e.preventDefault();
  logSubmit();
});

async function logSubmit() {
  // url API in method post
  await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email
    }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur dans l’identifiant ou le mot de passe');
    } 
    
    else {
      
      return response.json();
    }
    
  })
  .then(data => {
    
    const token = data.token;
    localStorage.setItem("token", token);
    window.location.href="index.html";
    
  })
  .catch(error => {
    if(email == '') {
      mailErr.style.display = 'block';
      mailErr.textContent = error;
    } else {
      mailErr.style.display = 'none';
    }
    
    if(password == '') {
      pwdErr.style.display = 'block';
      pwdErr.textContent = error;
    } else {
      pwdErr.style.display = 'none';
    }
    
    // alert(error);
    console.log(error);
  });   
}