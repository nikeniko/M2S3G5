document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("brand").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const price = document.getElementById("price").value;

    const newProduct = {
      name: name,
      description: description,
      brand: brand,
      imageUrl: imageUrl,
      price: price,
    };

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE3OTdjMjM5YzAwMTUyZjRiNDMiLCJpYXQiOjE3MTgzNTI1MDUsImV4cCI6MTcxOTU2MjEwNX0.S53AuMg852k93tnw2qWpBxintM438abUMdclRRl7VV4",
      },
      body: JSON.stringify(newProduct),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  });

document.getElementById("modify").addEventListener("click", function (e) {
  e.preventDefault();

  const _id = document.getElementById("_id").value;
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const price = document.getElementById("price").value;

  const modificatedProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };

  fetch(`https://striveschool-api.herokuapp.com/api/product/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE3OTdjMjM5YzAwMTUyZjRiNDMiLCJpYXQiOjE3MTgzNTI1MDUsImV4cCI6MTcxOTU2MjEwNX0.S53AuMg852k93tnw2qWpBxintM438abUMdclRRl7VV4",
    },
    body: JSON.stringify(modificatedProduct),
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
  });
});

document.getElementById("delete").addEventListener("click", function (e) {
  e.preventDefault();

  if (!confirm("sei sicuro di voler cancellare questo elemento?")) {
    return;
  }

  const _id = document.getElementById("_id").value;

  fetch(`https://striveschool-api.herokuapp.com/api/product/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE3OTdjMjM5YzAwMTUyZjRiNDMiLCJpYXQiOjE3MTgzNTI1MDUsImV4cCI6MTcxOTU2MjEwNX0.S53AuMg852k93tnw2qWpBxintM438abUMdclRRl7VV4",
    },
  }).then((resp) => {
    if (resp.ok) {
      alert("Elemento cancellato con successo!");
      return resp.json();
    }
  });
});
