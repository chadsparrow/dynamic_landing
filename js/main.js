const greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name"),
  time = document.querySelector("#time"),
  focus = document.querySelector("#focus"),
  preloader = document.querySelector("#preloader"),
  afterloader = document.querySelector("#afterloader");

function setTime() {
  let today = new Date();
  let min = today.getMinutes();
  let hour = today.getHours();
  let sec = today.getSeconds();

  const amPM = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPM}`;
  setTimeout(() => {
    setTime();
  }, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setGreet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    greeting.innerHTML = "Good Morning";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
  } else if (hour < 18) {
    greeting.innerHTML = "Good Afternoon";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
  } else {
    greeting.innerHTML = "Good Evening";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    document.body.style.color = "white";
  }
}

function getPreloader() {
  if (localStorage.getItem("preloader") === null) {
    preloader.textContent = "[Enter Name]";
    afterloader.style.display = "none";
  } else {
    preloader.textContent = localStorage.getItem("preloader");
    preloader.style.display = "none";
  }
}
function setPreloader(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      localStorage.removeItem("preloader");
      preloader.style.display = "none";
      getName();
      preloader.blur();
      afterloader.style.display = "contents";
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
    afterloader.style.display = "contents";
    preloader.style.display = "none";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
preloader.addEventListener("keypress", setPreloader);
preloader.addEventListener("blur", setPreloader);

getPreloader();
setTime();
setGreet();
getName();
getFocus();
