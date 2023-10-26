import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  if (validateEmptyInput(userName)) return;
  getUserData(userName);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;
  
  if (isEnterKeyPressed) {
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
  }
});

function validateEmptyInput (userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuário do Github");
    return true;
  }
}

async function getUserData(userName) {
  const userRespose = await getUser(userName);

  if (userRespose.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  const repositoriesRespose = await getRepositories(userName);

  user.setInfo(userRespose);
  user.setRepositories(repositoriesRespose);

  screen.renderUser(user);
}
