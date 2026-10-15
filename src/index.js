const updateTime = () => {
  const losAngeles = document.getElementById("los-angeles");
  if (losAngeles) {
    const losAngelesDate = document.querySelector(".los-angeles-date");
    losAngelesDate.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");

    const losAngelesTime = document.querySelector(".los-angeles-time");
    losAngelesTime.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("hh:mm:ss");

    const losAngelesTimeReference = document.querySelector(
      ".los-angeles-time-reference"
    );
    losAngelesTimeReference.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("A");
  }

  const fiji = document.getElementById("fiji");
  if (fiji) {
    const fijiDate = document.querySelector(".fiji-date");
    fijiDate.innerHTML = moment.tz("Pacific/Fiji").format("MMMM Do YYYY");

    const fijiTime = document.querySelector(".fiji-time");
    fijiTime.innerHTML = moment.tz("Pacific/Fiji").format("hh:mm:ss");

    const fijiTimeReference = document.querySelector(".fiji-time-reference");
    fijiTimeReference.innerHTML = moment.tz("Pacific/Fiji").format("A");
  }

  const bangkok = document.getElementById("bangkok");
  if (bangkok) {
    const bangkokDate = document.querySelector(".bangkok-date");
    bangkokDate.innerHTML = moment.tz("Asia/Bangkok").format("MMMM Do YYYY");

    const bangkokTime = document.querySelector(".bangkok-time");
    bangkokTime.innerHTML = moment.tz("Asia/Bangkok").format("hh:mm:ss");

    const bangkokTimeReference = document.querySelector(
      ".bangkok-time-reference"
    );
    bangkokTimeReference.innerHTML = moment.tz("Asia/Bangkok").format("A");
  }

  const rome = document.getElementById("rome");
  if (rome) {
    const romeDate = document.querySelector(".rome-date");
    romeDate.innerHTML = moment.tz("Europe/Rome").format("MMMM Do YYYY");

    const romeTime = document.querySelector(".rome-time");
    romeTime.innerHTML = moment.tz("Europe/Rome").format("hh:mm:ss");

    const romeTimeReference = document.querySelector(".rome-time-reference");
    romeTimeReference.innerHTML = moment.tz("Europe/Rome").format("A");
  }
};

let selectedZone = "";

function updateCityTime() {
  if (!selectedZone) return;
  const cityTimeZone =
    selectedZone === "current" ? moment.tz.guess() : selectedZone;
  const cityName = cityTimeZone.replace("_", " ").split("/")[1];
  const cityTime = moment.tz(cityTimeZone);
  const cities = document.querySelector("#cities");

  if (cities.dataset.zone !== selectedZone) {
    cities.dataset.zone = selectedZone;
    cities.innerHTML = `
  <div class="row">
    <div class="col-6 city">
        <h2></h2>
        <div class="date"></div>
    </div>
    <div class="col-6">
        <span class="time"></span>
        <small class="time-reference"></small>
    </div>
  </div>
  <div class="row" id="link">
  <a href="index.html" id="back-link">Back to all cities →</a>
  </div>`;
    cities.querySelector("h2").textContent = cityName;
  }

  cities.querySelector(".date").textContent = cityTime.format("MMMM Do YYYY");
  cities.querySelector(".time").textContent = cityTime.format("hh:mm:ss");
  cities.querySelector(".time-reference").textContent = cityTime.format("A");
}

updateTime();
setInterval(updateTime, 1000);
setInterval(updateCityTime, 1000);

const citySelect = document.getElementById("city");
citySelect.addEventListener("change", (event) => {
  selectedZone = event.target.value;
  updateCityTime();
});
