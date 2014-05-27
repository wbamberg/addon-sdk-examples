var works = document.getElementById("works");
works.addEventListener("click", sendCustomEventWithCloneInto, false);

function sendCustomEventWithCloneInto() {
  var greeting = {"greeting" : "hello world"};
  var cloned = cloneInto(greeting, document.defaultView);
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent("addon-message", true, true, cloned);
  document.documentElement.dispatchEvent(event);
}

var fails = document.getElementById("fails");
fails.addEventListener("click", sendCustomEventWithoutCloneInto, false);

function sendCustomEventWithoutCloneInto() {
  var greeting = {"greeting" : "hello world"};
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent("addon-message", true, true, greeting);
  document.documentElement.dispatchEvent(event);
}