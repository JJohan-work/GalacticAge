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


//`You are expected to live for ${this.lifeExpectancy} earth years. If you lived on ${planet} you would be ${this.convertAge(planet,this.lifeExpectancy)-this.convertAge(planet)>0 ? `${(this.convertAge(planet,this.lifeExpectancy)-this.convertAge(planet)).toFixed(1)} ${this.belongTo[planet]} years over`:`${(this.convertAge(planet,this.convertAge(planet))-this.lifeExpectancy).toFixed(1)} ${this.belongTo[planet]} years under`} your earth life expectancy.`;
