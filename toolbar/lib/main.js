//require("sdk/preferences/service").set("javascript.options.strict", false);

var { ActionButton } = require('sdk/ui/button/action');
var { Toolbar } = require("sdk/ui/toolbar");
var { Frame } = require("sdk/ui/frame");

var previous = ActionButton({
  id: "previous",
  label: "previous",
  icon: "./icons/16-back.png"
});

var next = ActionButton({
  id: "next",
  label: "next",
  icon: "./icons/16-next.png"
});

var play = ActionButton({
  id: "play",
  label: "play",
  icon: "./icons/16-play.png"
});

var frame = new Frame({
  url: "./frame-player.html"
});

var toolbar = Toolbar({
  title: "Player",
  items: [previous, next, play, frame]
});

/*
var { ActionButton } = require('sdk/ui/button/action');
var { Frame } = require("sdk/ui/frame");
var { Toolbar } = require("sdk/ui/toolbar");

var button = ActionButton({
  id: "my-button",
  label: "my-button",
  icon: "./my-button.png"
});

var frame = new Frame({
  url: "./my-frame.html"
});

var toolbar = Toolbar({
  title: "Player",
  items: [button, frame]
});
*/
/*
toolbar.on("attach", attached);
toolbar.on("detach", detached);
toolbar.on("show", show);
toolbar.on("hide", hide);

function attached(e) {
  console.log("attached");
  console.log(e);
}

function detached(e) {
  console.log("detached");
  console.log(e);
}

function show(e) {
  console.log("show");
  console.log(e);
  e.destroy();
}

function hide(e) {
  console.log("hide");
  console.log(e);
}



var { Toolbar } = require("sdk/ui/toolbar");
var { Frame } = require("sdk/ui/frame");

var frame = new Frame({
  url: "./frame.html"
});

var toolbar = Toolbar({
  title: "My toolbar",
  items: [frame]
});

toolbar.on("show", showing);
toolbar.on("hide", hiding);

function showing(e) {
  console.log("showing: " + e.title);
  toolbar.removeListener("show", showing);
}

function hiding(e) {
  console.log("hiding: " + e.title);
  toolbar.removeListener("hide", hiding);
}
/*

/*
toolbar.on("attach", attached);
toolbar.on("detach", detached);
toolbar.on("show", show);
toolbar.on("hide", hide);

function attached(e) {
  console.log("attached");
  console.log(e);
}

function detached(e) {
  console.log("detached");
  console.log(e);
}

function show(e) {
  console.log("show");
  console.log(e);
  e.destroy();
}

function hide(e) {
  console.log("hide");
  console.log(e);
}
*/
