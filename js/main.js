let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");


let countDown = () => {
  let futureDate = new Date("16 June 2023");
  var x = setInterval(() => {
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
  
    let days = Math.floor(myDate / (1000 * 60 * 60 * 24));
  
    let hours = Math.floor((myDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    let min = Math.floor((myDate % (1000 * 60 * 60)) / (1000 * 60));
  
    let sec = Math.floor((myDate % (1000 * 60)) / 1000);
  
    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;

    if (myDate < 0){
      clearInterval(x);
      daysItem.innerHTML = 0;
      hoursItem.innerHTML = 0;
      minItem.innerHTML = 0;
      secItem.innerHTML = 0;
    }

  }, 1000);
}

countDown()

// Promo
let hariItem = document.querySelector("#hari");
let jamItem = document.querySelector("#jam");
let menitItem = document.querySelector("#menit");
let detikItem = document.querySelector("#detik");


let countDownPromo = () => {
  let futureDate = new Date("10 Jun 2023");

  var x = setInterval(() => {
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
  
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  
    let min = Math.floor(myDate / 1000 / 60) % 60;
  
    let sec = Math.floor(myDate / 1000) % 60;
  
    hariItem.innerHTML = days;
    jamItem.innerHTML = hours;
    menitItem.innerHTML = min;
    detikItem.innerHTML = sec;

    if (myDate < 0){
      clearInterval(x);
      hariItem.innerHTML = 0;
      jamItem.innerHTML = 0;
      menitItem.innerHTML = 0;
      detikItem.innerHTML = 0;
    }

  }, 1000);
}

countDownPromo();


