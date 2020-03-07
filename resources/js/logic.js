var scrReset = 0;
var result = 0;
var isDec = 0;
var logActive = 0;
var shwLogActive = 0;
var operatorActive = 0;

function OnNumber(value) {
  operatorActive = 0;
  if (
    document.getElementById("mainDisplay").innerHTML.trim() == "0" ||
    scrReset == 1
  ) {
    scrReset = 0;
    document.getElementById("mainDisplay").innerHTML = "";
    if (value == ".") {
      document.getElementById("mainDisplay").innerHTML = "0";
    }
  }
  if (value != "." || isDec == 0) {
    result = 0;
    document.getElementById("mainDisplay").innerHTML += value;
  }
  if (value == ".") {
    isDec = 1;
  }
}

function OnOperator(value) {
  scrReset = 1;
  result = 1;
  isDec = 0;
  if (document.getElementById("mainDisplay").innerHTML.slice(-1) == ".") {
    document.getElementById("mainDisplay").innerHTML = document
      .getElementById("mainDisplay")
      .innerHTML.slice(0, -1);
  }
  if (operatorActive == 1) {
    document.getElementById("secDisplay").innerHTML =
      document.getElementById("secDisplay").innerHTML.slice(0, -2) +
      value +
      " ";
  } else {
    document.getElementById("secDisplay").innerHTML += document.getElementById(
      "mainDisplay"
    ).innerHTML;
    document.getElementById("mainDisplay").innerHTML = eval(
      document.getElementById("secDisplay").innerHTML
    );
    document.getElementById("secDisplay").innerHTML += " " + value + " ";
    operatorActive = 1;
  }
}

function OnEqual() {
  scrReset = 1;
  result = 1;
  isDec = 0;
  document.getElementById("secDisplay").innerHTML += document.getElementById(
    "mainDisplay"
  ).innerHTML;
  var tempSec = document.getElementById("secDisplay").innerHTML;
  document.getElementById("mainDisplay").innerHTML = eval(
    document.getElementById("secDisplay").innerHTML
  );
  document.getElementById("secDisplay").innerHTML = "";
  var tempMain = document.getElementById("mainDisplay").innerHTML;
  if (document.getElementById("mainDisplay").innerHTML == "NaN") {
    document.getElementById("mainDisplay").innerHTML = "Result is not defined";
  }
  LogCreate(tempSec + " =", tempMain);
}

function OnNegate() {
  var neg = Math.sign(eval(document.getElementById("mainDisplay").innerHTML));
  if (neg == 1) {
    document.getElementById("mainDisplay").innerHTML =
      "-" + document.getElementById("mainDisplay").innerHTML;
  } else if (neg == -1) {
    document.getElementById("mainDisplay").innerHTML = eval(
      "-(" + document.getElementById("mainDisplay").innerHTML + ")"
    );
  }
}

function OnCE() {
  document.getElementById("mainDisplay").innerHTML = "0";
  scrReset = 1;
}

function OnClear() {
  document.getElementById("secDisplay").innerHTML = "";
  document.getElementById("mainDisplay").innerHTML = "0";
  scrReset = 1;
  isDec = 0;
}

function OnBks() {
  if (result == 0) {
    if (document.getElementById("mainDisplay").innerHTML.slice(-1) == ".") {
      isDec = 0;
    }
    document.getElementById("mainDisplay").innerHTML = document
      .getElementById("mainDisplay")
      .innerHTML.slice(0, -1);
  }
  if (document.getElementById("mainDisplay").innerHTML.trim() == "") {
    document.getElementById("mainDisplay").innerHTML = "0";
  }
}

function LogCreate(secDisplay, mainDisplay) {
  if (logActive == 0) {
    var clearLog = document.createElement("button");
    clearLog.className = "otherButton";
    clearLog.onclick = "clearLog()";
    clearLog.id = "ClearLog";
    clearLog.appendChild(document.createTextNode("Clear History"));
    document.getElementById("TrashBar").appendChild(clearLog);
    document.getElementById("noHis").innerHTML = "";
    logActive = 1;
  }
  var log = document.createElement("div");
  var secLog = document.createElement("div");
  var mainLog = document.createElement("div");
  log.className = "Log";
  mainLog.className = "mainDisplay";
  secLog.className = "secDisplay";
  log.appendChild(secLog);
  log.appendChild(mainLog);
  document.getElementById("Logs").prepend(log);
  secLog.appendChild(document.createTextNode(secDisplay));
  mainLog.appendChild(document.createTextNode(mainDisplay));
}

function clearLog() {
  document.getElementById("History").innerHTML = "";
  logActive = 0;
}

//ne radi zbog nekog razloga
function reloadLog(secLog) {
  document.getElementById("secDisplay").innerHTML = secLog;
  document.getElementById("secDisplay").innerHTML = document
    .getElementById("secDisplay")
    .innerHTML.slice(0, -1);
  document.getElementById("mainDisplay").innerHTML = eval(
    document.getElementById("secDisplay").innerHTML
  );
}

//napraviti slide from the bottom upwards
function shwHideHistory() {
  if (shwLogActive == 0) {
    //$("#History").fadeIn();
    document.getElementById("History").style.removeProperty("display");
    document.getElementById("History").style.removeProperty("visibility");
    document.getElementById("History").style.animation =
      "slideUp 0.2s ease-out 0s normal forwards";
    shwLogActive = 1;
  } else {
    document.getElementById("History").style.removeProperty("animation");
    document.getElementById("History").style.visibility = "visible";
    $("#History").fadeOut();
    shwLogActive = 0;
  }
}

$(function() {
  $("#Calculator").draggable();
});

$(function() {
  $("#Calculator").resizable();
});
