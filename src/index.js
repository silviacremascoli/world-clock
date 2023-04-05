function updateTime() {
  let losAngelesDate = document.querySelector("#los-angeles-date");
  losAngelesDate.innerHTML = moment
    .tz("America/Los_Angeles")
    .format("MMMM Mo YYYY");

  let losAngelesTime = document.querySelector("#los-angeles-time");
  losAngelesTime.innerHTML = moment
    .tz("America/Los_Angeles")
    .format("hh:mm:ss");

  let losAngelesTimeReference = document.querySelector(
    "#los-angeles-time-reference"
  );
  losAngelesTimeReference.innerHTML = moment
    .tz("America/Los_Angeles")
    .format("A");

  let sydneyDate = document.querySelector("#sydney-date");
  sydneyDate.innerHTML = moment.tz("Australia/Sydney").format("MMMM Mo YYYY");

  let sydneyTime = document.querySelector("#sydney-time");
  sydneyTime.innerHTML = moment.tz("Australia/Sydney").format("hh:mm:ss");

  let sydneyTimeReference = document.querySelector("#sydney-time-reference");
  sydneyTimeReference.innerHTML = moment.tz("Australia/Sydney").format("A");

  let bangkokDate = document.querySelector("#bangkok-date");
  bangkokDate.innerHTML = moment.tz("Asia/Bangkok").format("MMMM Mo YYYY");

  let bangkokTime = document.querySelector("#bangkok-time");
  bangkokTime.innerHTML = moment.tz("Asia/Bangkok").format("hh:mm:ss");

  let bangkokTimeReference = document.querySelector("#bangkok-time-reference");
  bangkokTimeReference.innerHTML = moment.tz("Asia/Bangkok").format("A");

  let romeDate = document.querySelector("#rome-date");
  romeDate.innerHTML = moment.tz("Europe/Rome").format("MMMM Mo YYYY");

  let romeTime = document.querySelector("#rome-time");
  romeTime.innerHTML = moment.tz("Europe/Rome").format("hh:mm:ss");

  let romeTimeReference = document.querySelector("#rome-time-reference");
  romeTimeReference.innerHTML = moment.tz("Europe/Rome").format("A");
}

function updateCityTime(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);
    let cities = document.querySelector("#cities");
    cities.innerHTML = `
  <div class="row">
    <div class="col-6 city">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Mo YYYY")}</div>
    </div>
    <div class="col-6">
        <span class="time">${cityTime.format("hh:mm:ss")}</span>
        <small class="time-reference">${cityTime.format("A")}</small>
    </div>
  </div>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCityTime);
