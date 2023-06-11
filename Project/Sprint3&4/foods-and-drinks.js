const fetchData = () => {
  $.getJSON("foods-and-drinks.json", function (data) {
    let coffeesHtml = "";                                        //This .js file takes data from foods-and-drinks.json
    let softDrinksHtml = "";                                     //Local AJAX Request
    let foodsHtml = "";
    let dessertsHtml = "";

    data.coffees.forEach((coffee) => {
      coffeesHtml += `
        <article class="item">
            <p class="name">${coffee.name}</p>
            <p class="price">${coffee.price.toFixed(2)}</p>
        </article>
    `;
    });

    data.softDrinks.forEach((softDrink) => {
      softDrinksHtml += `
          <article class="item">
              <p class="name">${softDrink.name}</p>
              <p class="price">${softDrink.price.toFixed(2)}</p>
          </article>
      `;
    });

    data.foods.forEach((food) => {
      foodsHtml += `
            <article class="item">
                <p class="name">${food.name}</p>
                <p class="price">${food.price.toFixed(2)}</p>
            </article>
        `;
    });

    data.desserts.forEach((dessert) => {
      dessertsHtml += `
              <article class="item">
                  <p class="name">${dessert.name}</p>
                  <p class="price">${dessert.price.toFixed(2)}</p>
              </article>
          `;
    });

    $(".coffee-menu").append(coffeesHtml);
    $(".soft-drink-menu").append(softDrinksHtml);
    $(".food-menu").append(foodsHtml);
    $(".dessert-menu").append(dessertsHtml);
  });
};

window.addEventListener("load", fetchData);
