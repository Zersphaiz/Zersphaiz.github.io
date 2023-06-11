const fetchRandomCoffee = async () => {
  try {
    const response = await fetch("https://coffee.alexflipnote.dev/random.json");
    const jsonData = await response.json();
    const container = document.querySelector(".random-img-container");
    container.innerHTML = `<img src=${jsonData.file} class="random-img" />`;
  } catch (err) {                                                   //This .js file shows random image every time page loaded
    console.log(err);                                               //External AJAX Request
  }
};

window.addEventListener("load", fetchRandomCoffee);
