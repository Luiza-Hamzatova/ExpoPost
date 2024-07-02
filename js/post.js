const comments = document.querySelector(".comments");
const post = document.querySelector(".post");
const title = document.querySelector(".h5");
if (location.search) {
  fetch(`https://jsonplaceholder.typicode.com/comments${location.search}`)
    .then((res) => res.json())
    .then((res) => renderComments(res));

  fetch(
    `https://jsonplaceholder.typicode.com/posts/${location.search.substring(8)}`
  )
    .then((res) => res.json())
    .then((res) => renderPost(res));
}
const renderPost = (post) => {
  post.append(createPost(post));
};

const createPost = (post) => {
  const col = document.createElement("div");
  col.classList.add("col");
  const card = document.createElement("div");
  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = post.title;
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = post.body;
  cardBody.append(cardTitle, cardText);
  card.append(cardBody);
  col.append(card);
  console.log(post);
  return col;
};

const renderComments = (commentsArr) => {
  commentsArr.map((comment) => comments.append(createComment(comment)));
  title.innerHTML = `Комментарии (${commentsArr.length})`;
};

const createComment = (comment) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const card_header = document.createElement("div");
  card_header.classList.add("card-header");
  card_header.innerText = comment.email;
  const card_body = document.createElement("div");
  card_body.classList.add("card-body");
  const card_title = document.createElement("h5");
  card_title.classList.add("card-title");
  card_title.innerText = comment.name;
  const card_text = document.createElement("p");
  card_text.classList.add("card-text");
  card_text.innerText = comment.body;
  card.append(card_header, card_body);
  card_body.append(card_title, card_text);
  return card;
};
