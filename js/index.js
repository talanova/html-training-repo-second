import "../scss/style.scss";
import "../scss/sidepanel.scss";
import "../scss/post.scss";

document.getElementById("sidepanel_openbtn").addEventListener("click", () => {
  document.getElementById("sidepanel").style.width = "220px";
});

document.getElementById("sidepanel_closebtn").addEventListener("click", () => {
  document.getElementById("sidepanel").style.width = "0";
});
