/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("domain").innerHTML = generateDomain();
};

const generateDomain = () => {
  let pronoun = ["the", "our", "this"];
  let adj = ["Great", "Empowering", "Amazing", "Cool", "Cuddly"];
  let noun = ["Thinker", "Dragon", "Unicorn", "Wizard", "Witcher"];
  let extensions = [".com", ".net", ".us", ".io", ".sk", ".perfectProject"];

  return (
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    extensions[Math.floor(Math.random() * extensions.length)]
  );
};
