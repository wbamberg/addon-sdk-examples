var textArea = document.getElementById('edit-box');

// when the user hits return, send a message to main.js
// the message payload is the contents of the edit box
textArea.onkeyup = function(event) {
  if (event.keyCode == 13) {
    // remove newline
    tag = textArea.value.replace(/(\r\n|\n|\r)/gm,"");
    self.postMessage(tag);
    textArea.value = '';
  }
};

self.on("message", function() {
  var textArea = document.getElementById('edit-box');
  textArea.value = '';
  textArea.focus();
});