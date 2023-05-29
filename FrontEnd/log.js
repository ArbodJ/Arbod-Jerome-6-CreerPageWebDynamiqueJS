// select button submit
const loggin = document.querySelector("#sbt");
// event on submit
loggin.addEventListener('click', function (event) {
  event.preventDefault();
  const email = document.querySelector("#mail").value;
  const password = document.querySelector("#pwd").value;
  const emailErr = document.querySelector(".email-error");

  // url API in method post
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password})
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erreur dans l’identifiant ou le mot de passe');
    }
  })
  .then(data => {
    localStorage.setItem("token", data.token);
    window.location.href="index.html";
  })
  .catch(error => {
    console.error(error);
  });   
  // if(email !== email.value) {
    
  //   emailErr.innerHTML = error(error);
  // }
});