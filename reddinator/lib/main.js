const data = require("sdk/self").data;
const tabs = require("sdk/tabs");

var panel = require("sdk/panel").Panel({
  width: 150,
  height: 70,
  contentURL: data.url("tag-selector.html"),
  contentScriptFile: data.url("tag-selector.js"),
  // Listen for messages coming from the panel's content script.
  onMessage: function(tag) {
    worker = tabs.activeTab.attach({
      contentScriptFile: data.url("reddinate.js")
    });
    // pass the message on to the active tab's content script
    worker.postMessage(tag);
    this.hide();
  },
  onShow: function() {
    this.postMessage("show");
  },
  onHide: handleHide
});

var { ToggleButton } = require("sdk/ui/button/toggle");

var button = ToggleButton({
  id: "reddinator",
  label: "Reddinator",
  icon: {
    "16": "./red-16.png",
    "32": "./red-32.png"
  },
  onChange: handleChange
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}