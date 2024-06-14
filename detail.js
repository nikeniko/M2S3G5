const params = new URLSearchParams(window.location.search);
const pexelId = params.get("pexelId");
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE3OTdjMjM5YzAwMTUyZjRiNDMiLCJpYXQiOjE3MTgzNTI1MDUsImV4cCI6MTcxOTU2MjEwNX0.S53AuMg852k93tnw2qWpBxintM438abUMdclRRl7VV4",
    },
  })
    .then((resp) => resp.json())
    .then((products) => {
      const product = products.find((product) => product._id === pexelId);
      const img = document.createElement("img");
      img.src = product.imageUrl;

      img.style = "max-width:100%";
      document.body.appendChild(img);
    });
});
