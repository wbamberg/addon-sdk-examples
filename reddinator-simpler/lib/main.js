const data = require("sdk/self").data;
const tabs = require("sdk/tabs");

var { ActionButton } = require("sdk/ui/button/action");

var button = ActionButton({
  id: "reddinator",
  label: "Reddinator",
  icon: {
    "16": "./red-16.png",
    "32": "./red-32.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  worker = tabs.activeTab.attach({
    contentScriptFile: data.url("reddinate.js")
  });
  // pass the message on to the active tab's content script
  worker.postMessage("a");
}
