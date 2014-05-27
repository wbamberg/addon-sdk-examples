// get custom event
window.addEventListener("addon-message", function(event) {
  console.log(JSON.stringify(event.detail.greeting));
}, false);