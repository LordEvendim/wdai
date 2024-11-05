const URL = "https://dummyjson.com/products";

const container = document.getElementById("container");

const display = async () => {
  const response = await fetch(URL);
  const data = (await response.json()).products;

  for (let i = 0; i < data.length; i++) {
    const item = document.createElement("div");
    container.appendChild(item);

    const image = document.createElement("img");
    const title = document.createElement("h2");
    const description = document.createElement("div");

    item.appendChild(title);
    item.appendChild(description);
    item.appendChild(image);

    image.style = "height: 100px";

    image.src = data[i].images[0];
    title.innerText = data[i].title;
    description.innerText = data[i].description;
  }
};

display();
