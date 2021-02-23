import "../scss/style.scss";
import "../scss/sidepanel.scss";
import "../scss/post.scss";

import Handlebars from "handlebars/dist/handlebars";
import json from "../data.json";

console.log(json);

// grab the source
const source = document.querySelector("#main-template").innerHTML;

// compile it using Handlebars
const template = Handlebars.compile(source);

// get the HTML after passing the template the context
const html = template(json);

// get the element to set the new HTML into
const destination = document.querySelector("#main-destination");

// set the new HTML
destination.innerHTML = html;

document.getElementById("sidepanel_openbtn").addEventListener("click", () => {
  document.getElementById("sidepanel").style.width = "220px";
});

document.getElementById("sidepanel_closebtn").addEventListener("click", () => {
  document.getElementById("sidepanel").style.width = "0";
});
