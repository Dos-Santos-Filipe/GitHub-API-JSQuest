const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                      <img src= "${
                        user.avatarUrl
                      }" alt="Foto do perfil do usuário"/>
                      <div class="data">
                          <h1>${
                            user.name ?? "Não possui nome cadastrado 🙁"
                          }</h1>
                          <p>${user.bio ?? "Não possui bio cadastrada 🙁"}</p>
                          <div class="follow">
                            <p class="followers"><span>Seguidores: </span>${user.followers}</p>
                            <p class="following"><span>Seguindo: </span>${user.following}</p>
                          </div>
                      </div>
                    </div>`;

    let repositoriesItens = "";
    user.repositories.forEach(
      repo =>
        repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
    );

    if(user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                        </div>`;
    }

    let eventsItens = "";
    user.events.forEach(
      event =>
        eventsItens += `<li><span>${event.repo.name}</span> - ${event.payload.ref}</li>`
    );

    if(user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="events">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                        </div>`;
    }
  },
  renderNotFound(){
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
  },
  renderNoEvents(){
    this.userProfile.innerHTML += `<div class="events">
                                    <p>O usuário não possui eventos do tipo CreateEvent e PushEvent</p>
                                  </div>`;
  },
};

export { screen };
