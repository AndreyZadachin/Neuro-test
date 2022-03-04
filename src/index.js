import './pages/index.css';

class UsersCard {
  constructor() {}

  createCardUsers(cardUsers) {
    const usersContainer = document.createElement('div');
    usersContainer.classList.add('users__container');

    const usersImage = document.createElement('img');
    usersImage.classList.add('users__image');

    const usersEmail = document.createElement('p');
    usersEmail.classList.add('users__email');

    const usersName = document.createElement('p');
    usersName.classList.add('users__name');

    const usersLastName = document.createElement('p');
    usersLastName.classList.add('users__last-name');

    usersContainer.appendChild(usersImage);
    usersContainer.appendChild(usersEmail);
    usersContainer.appendChild(usersName);
    usersContainer.appendChild(usersLastName);

    usersImage.setAttribute('src', cardUsers.avatar);
    usersImage.setAttribute('alt', 'Здесь должен быть аватар пользователя');
    usersEmail.textContent = cardUsers.email;
    usersName.textContent = cardUsers.first_name;
    usersLastName.textContent = cardUsers.last_name;

    return usersContainer;
  }
}

class UsersCardList {
  constructor(card) {
    this.card = card;
  }

  renderUsersCard(carouselCell) {
    this.card.append(carouselCell);
  }
}

class UsersApi {
  constructor(urlUsers) {
    this.url = urlUsers;
  }

  getUsers() {
    return fetch(`${this.url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this.responce(res))
      .catch((err) => {
        throw err;
      });
  }

  responce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
}

const elemContainerForUsers = document.querySelector('.section');
const baseUrl = 'https://reqres.in/api/users';
const usersCard = new UsersCard();
const usersCardList = new UsersCardList(elemContainerForUsers);
const usersApi = new UsersApi(baseUrl);

usersApi.getUsers().then((res) => {
  res.data.forEach((newsContainer) => {
    usersCardList.renderUsersCard(usersCard.createCardUsers(newsContainer));
  });
  console.log(res.data);
});
