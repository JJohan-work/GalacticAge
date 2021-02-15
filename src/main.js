import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Planet from './js/planet';
import Display from './js/display';
import Planet from './js/planet';


function drawPlanetSelector(display) {
  if (display.position - 2 < 0) {
    $("#planet0").css("background-image",`none`);
  } else {
    $("#planet0").css("background-image",`url(${display.getURL(String(display.position-2))})`);
  }
  if (display.position - 1 < 0) {
    $("#planet1").css("background-image",`none`);
  } else {
    $("#planet1").css("background-image",`url(${display.getURL(String(display.position-1))})`);
  }
  $("#planet2").css("background-image",`url(${display.getURL(String(display.position))})`);

  if (display.position + 1 > 7) {
    $("#planet3").css("background-image",`none`);
  } else {
    $("#planet3").css("background-image",`url(${display.getURL(String(display.position+1))})`);
  }
  if (display.position + 2 > 7) {
    $("#planet4").css("background-image",`none`);
  } else {
    $("#planet4").css("background-image",`url(${display.getURL(String(display.position+2))})`);
  }
}

function drawOutput(planet, display) {
  const planetName = display.getPlanet();
  $("#planetSelected").html(`Planet: ${planetName}`);

  $("#ageout>p").html(`${planet.convertAge(planetName)} ${display.getUnit()} years`);

  $("#nextBirthday>h3").html(`Next Birthday on ${display.getPlanet()}`);
  $("#nextBirthday>p").html(String(planet.getNextBirthday(planetName)).slice(0,15));

  $("#lifespan>p").html(`${planet.getLifeSpan(planetName)} ${display.getUnit()} years`);

  const expectancy = planet.getTimeLeft(planetName);
  $("#timeLeft>h3").html(`Years ${expectancy[1] ? "Over" : "Under"} Lifespan`);
  $("#timeLeft>p").html(`${expectancy[0]} ${display.getUnit()} years`);
}

function main() {
  // let planet = new Planet(1999,8,19);
  let display = new Display();
  let planet;
  drawPlanetSelector(display);
  $("#planetSelection").hide();
  $("#output").hide();

  $("form").on("submit", (event) => {
    event.preventDefault();
    planet = new Planet($("#year").val(),$("#month").val()-1,$("#day").val());
    drawOutput(planet,display);
    $("#planetSelection").show();
    $("#output").show();
  });

  $("#pHiderBefore").on("click", () => {
    display.changePlanet(false);
    drawPlanetSelector(display);
    drawOutput(planet,display);
  });

  $("#pHiderAfter").on("click", () => {
    display.changePlanet(true);
    drawPlanetSelector(display);
    drawOutput(planet,display);
  });
}

main();

//`You are expected to live for ${this.lifeExpectancy} earth years. If you lived on ${planet} you would be ${this.convertAge(planet,this.lifeExpectancy)-this.convertAge(planet)>0 ? `${(this.convertAge(planet,this.lifeExpectancy)-this.convertAge(planet)).toFixed(1)} ${this.belongTo[planet]} years over`:`${(this.convertAge(planet,this.convertAge(planet))-this.lifeExpectancy).toFixed(1)} ${this.belongTo[planet]} years under`} your earth life expectancy.`;
