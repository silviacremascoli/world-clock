function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles.length) {
    let losAngelesDate = document.querySelector(".date");
    losAngelesDate.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("MMMM Mo YYYY");

    let losAngelesTime = document.querySelector(".time");
    losAngelesTime.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("hh:mm:ss");

    let losAngelesTimeReference = document.querySelector(".time-reference");
    losAngelesTimeReference.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("A");
  }

  let fiji = document.querySelector("#fiji");
  if (fiji.length) {
    let fijiDate = document.querySelector(".date");
    fijiDate.innerHTML = moment.tz("Pacific/Fiji").format("MMMM Mo YYYY");

    let fijiTime = document.querySelector(".time");
    fijiTime.innerHTML = moment.tz("Pacific/Fiji").format("hh:mm:ss");

    let fijiTimeReference = document.querySelector(".time-reference");
    fijiTimeReference.innerHTML = moment.tz("Pacific/Fiji").format("A");
  }

  let bangkok = document.querySelector("#bangkok");
  if (bangkok.length) {
    let bangkokDate = document.querySelector(".date");
    bangkokDate.innerHTML = moment.tz("Asia/Bangkok").format("MMMM Mo YYYY");

    let bangkokTime = document.querySelector(".time");
    bangkokTime.innerHTML = moment.tz("Asia/Bangkok").format("hh:mm:ss");

    let bangkokTimeReference = document.querySelector(".time-reference");
    bangkokTimeReference.innerHTML = moment.tz("Asia/Bangkok").format("A");
  }

  let rome = document.querySelector("#rome");
  if (rome.length) {
    let romeDate = document.querySelector("#rome-date");
    romeDate.innerHTML = moment.tz("Europe/Rome").format("MMMM Mo YYYY");

    let romeTime = document.querySelector("#rome-time");
    romeTime.innerHTML = moment.tz("Europe/Rome").format("hh:mm:ss");

    let romeTimeReference = document.querySelector("#rome-time-reference");
    romeTimeReference.innerHTML = moment.tz("Europe/Rome").format("A");
  }
}

function updateCityTime(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
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

setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCityTime);
