var label = window.document.getElementById("linky");

label.addEventListener("click", function() {
  window.parent.postMessage({
    "type" : "ping",
    "reason" : "they clicked me"
  }, "*");
}, true);

function ponged(message) {
  label.textContent = message.data;
}

window.addEventListener("message", ponged, false);

