let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");


let countDown = () => {
  let futureDate = new Date("16 June 2023");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;
  //console.log(myDate);

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

  let min = Math.floor(myDate / 1000 / 60) % 60;

  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)

// Promo
let hariItem = document.querySelector("#hari");
let jamItem = document.querySelector("#jam");
let menitItem = document.querySelector("#menit");
let detikItem = document.querySelector("#detik");


let countDownPromo = () => {
  let futureDate = new Date("23 May 2023");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;
  //console.log(myDate);

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

  let min = Math.floor(myDate / 1000 / 60) % 60;

  let sec = Math.floor(myDate / 1000) % 60;

  hariItem.innerHTML = days;
  jamItem.innerHTML = hours;
  menitItem.innerHTML = min;
  detikItem.innerHTML = sec;
}

countDownPromo()

setInterval(countDownPromo, 1000)

