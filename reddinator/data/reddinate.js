self.on("message", function(name) {
  var elements = document.getElementsByTagName(name);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
  }
});