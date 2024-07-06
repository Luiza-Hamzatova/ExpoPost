const userContainer = document.querySelector(".user");
const postsContainer = document.querySelector(".cards");

fetch(`https://jsonplaceholder.typicode.com/users${location.search}`)
  .then((res) => res.json())
  .then((res) => renderUser(res));

fetch(`https://jsonplaceholder.typicode.com/posts/${location.search}`)
  .then((res) => res.json())
  .then((posts) => renderPosts(posts));

const renderUser = (user) => {
  user.forEach((user) => {
    userContainer.append(createUser(user));
  });
};

const createUser = (user) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = user.id;

  const card_body = document.createElement("div");
  card_body.classList.add("card-body");
  card.append(card_body);

  const card_name = document.createElement("h5");
  card_name.classList.add("card-name");
  card_body.append(card_name);
  card_name.innerText = user.name;

  const card_username = document.createElement("p");
  card_username.classList.add("card-username");
  card_body.append(card_username);
  card_username.innerText = user.username;

  const card_email = document.createElement("p");
  card_email.classList.add("card-email");
  card_body.append(card_email);
  card_email.innerText = user.email;

  const card_phone = document.createElement("p");
  card_phone.classList.add("card-phone");
  card_body.append(card_phone);
  card_phone.innerText = user.phone;

  const card_website = document.createElement("p");
  card_website.classList.add("card-website");
  card_body.append(card_website);
  card_website.innerText = user.website;

  return card;
};

// <div class="card" data-id="1">

/* <div class="card-body">
<h5 class="card-name">Имя пользователя</h5>
<p class="card-username">Ник</p>
<p class="card-email">почта</p>
<p class="card-phone">номер</p>
<p class="card-website">сайт</p>
</div>
</div> */

const renderPosts = (postsArr) => {
  const title = document.querySelector("h5");
  postsArr.map((post) => postsContainer.append(createPost(post)));
  title.innerHTML = `посты пользователя (${postsArr.length})`;
  title.append(postsContainer);
};

const createPost = (user) => {
  const col = document.createElement("div");
  col.classList.add("col");
  const card = document.createElement("div");
  card.classList.add("card");

  col.append(card);

  const card_body = document.createElement("div");
  card_body.classList.add("card-body");

  card.append(card_body);

  const card_title = document.createElement("h5");
  card_title.classList.add("card-title");
  card_title.innerText =
    user.title.length > 25 ? user.title.substring(0, 25) + "..." : user.title;

  card_body.append(card_title);

  const card_text = document.createElement("p");
  card_text.classList.add("card-text");
  card_text.innerText =
    user.body.length > 115 ? user.body.substring(0, 115) + "..." : user.body;

  card_body.append(card_text);

  card_body.innerHTML += `<a href="post.html?postId=${user.id}" class="btn btn-dark">Открыть пост</a>`;

  return col;
};

{
  /* <div class="col">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the
        card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div> */
}
