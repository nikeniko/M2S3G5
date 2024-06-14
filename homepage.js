const cards = document.getElementById("cards-container");
cards.innerHTML = "";

const productCardsGenerator = (
  imageUrl,
  name,
  brand,
  description,
  id,
  prices
) => {
  const col = document.createElement("div");
  col.className = "col-md-4";

  const card = document.createElement("div");
  card.className = "card mb-4 shadow-sm";

  const brandName = document.createElement("img");
  brandName.className = "card-brand mt-3 align-self-center";
  brandName.src = brand;
  brandName.style.width = "40%";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = name;
  img.id = id;

  img.style.cursor = "pointer";
  img.addEventListener("click", (event) => {
    const imgId = event.target.id;
    window.location.assign("./detail.html?pexelId=" + img.id);
  });

  const body = document.createElement("div");
  body.className = "card-body";

  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = name;

  const p = document.createElement("p");
  p.className = "card-text";
  p.innerText = description;

  const flexContainer = document.createElement("div");
  flexContainer.className = "d-flex justify-content-between align-items-center";

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "btn-group";

  const buttonModify = document.createElement("button");
  buttonModify.className = "btn btn-sm btn-outline-primary";
  buttonModify.innerText = "modify";
  buttonModify.addEventListener("click", function () {
    window.location.href = "back-office.html";
  });

  const small = document.createElement("small");
  small.className = "text-muted fs-5";
  small.innerText = prices + "€";

  buttonGroup.append(buttonModify);
  flexContainer.append(buttonGroup, small);
  body.append(h5, p, flexContainer);
  card.append(img, brandName, body);
  col.append(card);
  cards.append(col);
};

const cardGen = (event, query) => {
  cards.innerHTML = "";
  if (query === 1) {
    console.log(query);
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE3OTdjMjM5YzAwMTUyZjRiNDMiLCJpYXQiOjE3MTgzNTI1MDUsImV4cCI6MTcxOTU2MjEwNX0.S53AuMg852k93tnw2qWpBxintM438abUMdclRRl7VV4",
      },
    })
      .then((resp) => resp.json())
      .then((products) => {
        console.log(products);
        products.forEach((product) => {
          const { imageUrl, name, brand, description, _id, price } = product;
          productCardsGenerator(imageUrl, name, brand, description, _id, price);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    event.preventDefault();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  cardGen("load", 1);
});
