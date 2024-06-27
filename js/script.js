const container = document.querySelector(".posts .row");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((res) => renderPosts(res));

const renderPosts = (posts) => {
  posts.map((post) => container.append(createPost(post)));
};
const createPost = (post) => {
  const col = document.createElement("div");
  col.classList.add("col-md-4");
  const card = document.createElement("div");
  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-boady");
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = post.title;
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = post.body;
  const btn = document.createElement("a");
  btn.classList.add(["btn", "btn-dark"]);
  btn.innerHTML="Открыть пост"
  cardBody.append(cardTitle, cardText, btn);
  card.append(cardBody);
  col.append(card);
  return col;
};
