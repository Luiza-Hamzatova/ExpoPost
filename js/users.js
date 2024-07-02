const usersContainer = document.querySelector(".users");
const cards_holder = document.querySelector(".cards-holder");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => renderUsers(res));

const renderUsers = (users) => {
  users.map((user) => cards_holder.append(createUser(user)));
};

const createUser = (user) => {
  const card = document.createElement("div");
  card.classList.add("card", "w-100");
  const card_body = document.createElement("div");
  card_body.classList.add("card-body");
  const card_name = document.createElement("h5");
  card_name.classList.add("card-name");
  card_name.innerText = user.name;
  const card_username = document.createElement("p");
  card_username.classList.add("card-username");
  card_username.innerText = user.username;
  const card_email = document.createElement("p");
  card_email.classList.add("card-email");
  card_email.innerText = user.email;
  const card_phone = document.createElement("p");
  card_phone.classList.add("card-phone");
  card_phone.innerText = user.phone;
  const card_website = document.createElement("p");
  card_website.classList.add("card-website");
  card_website.innerText = user.website;
  const btn = document.createElement("a");
  btn.classList.add("btn", "btn-dark");
  btn.href = `user.html?id=${user.id}&userId=${user.userId}`;
  btn.innerHTML = "Перейти на страницу пользователя";
  card.append(card_body);
  card_body.append(card_name);
  card_body.append(card_username);
  card_body.append(card_email);
  card_body.append(card_phone);
  card_body.append(card_website);
  card_body.append(btn);
  return card;
};
