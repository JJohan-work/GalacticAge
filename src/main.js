import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Planet from './js/planet.js';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // let planet = new Planet();
    let selectedPlanet = $("select.planets").val();
    console.log($("input.inputAge").val());
    console.log(selectedPlanet);
    // $(".output h3").html(planet.convertAge(selectedPlanet));
    // $(".output p").html(planet.life(selectedPlanet));
  });
});