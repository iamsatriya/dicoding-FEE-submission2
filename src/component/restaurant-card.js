class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }
  render() {
    this.innerHTML = `
      <div class="img-container">
          <img src="${this._restaurant.pictureId}" 
          alt="${this._restaurant.name}">
          <p>${this._restaurant.city}</p>
      </div>
      <div class="detail-container">
        <div class="upper-wrapper">
          <h3>${this._restaurant.name}</h3>
          <div class="${this._restaurant.rating >= 4 ? 'orange' : 'red'}">
            <p>${this._restaurant.rating.toFixed(1)}</p>
          </div>
        </div>
        <p class="description">${this._restaurant.description}</p>
        <p class="location">
          <span>${this._restaurant.city}</span>, Indonesia
        </p>
      </div>
    `;
    this.classList.add('restaurant-card');
  }
}
customElements.define('restaurant-card', RestaurantCard);
