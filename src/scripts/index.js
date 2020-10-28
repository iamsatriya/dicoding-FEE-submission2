import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import data from '../DATA.json';
import '../component/restaurant-list.js';

const restaurantListElement = document.querySelector('restaurant-list');
const menuBar = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.mobile-nav');
const navLink = document.querySelectorAll('.mobile-nav a');
const loadRestaurant = () => {
  restaurantListElement.restaurants = data.restaurants;
};
const navListClick = () => {
  navLink.forEach((e) => {
    e.addEventListener('click', function() {
      nav.classList.toggle('right');
    });
  });
};
const openNav = () => {
  nav.classList.toggle('right');
  console.log('click');
};
document.addEventListener('DOMContentLoaded', function() {
  navListClick();
  menuBar.addEventListener('click', openNav);
  loadRestaurant();
});
