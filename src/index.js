// define the main cities and their corresponding time zones
const CITIES = {
  "los-angeles": "America/Los_Angeles",
  "rome": "Europe/Rome",
  "bangkok": "Asia/Bangkok",
  "fiji": "Pacific/Fiji",
};

// set the text content of an element and if applicable its datetime attribute
const setText = (root, selector, value, datetime) => {
  const el = root.querySelector(selector);
  if (!el) return;
  el.textContent = value;
  if (datetime) el.setAttribute("datetime", datetime);
};

// check if the user has chosen a 12-hour or 24-hour format
const stored = localStorage.getItem("hour12");
let hour12 =
  stored !== null
    ? stored === "true"
    : new Intl.DateTimeFormat(undefined, { hour: "numeric" }).resolvedOptions()
        .hour12;

// render the time for a specific city
const renderClock = (root, prefix, now) => {
  setText(root, `.${prefix}date`, now.format("MMMM Do YYYY"), now.format("YYYY-MM-DD"));
  setText(
    root,
    `.${prefix}time`,
    now.format(hour12 ? "hh:mm:ss" : "HH:mm:ss"),
    now.format("HH:mm:ss")
  );
  setText(root, `.${prefix}time-reference`, hour12 ? now.format("A") : "");
};

// update the time for all listed cities
const updateTime = () => {
  Object.entries(CITIES).forEach(([id, zone]) => {
    const row = document.getElementById(id);
    if (row) renderClock(row, `${id}-`, moment.tz(zone));
  });
};

let selectedZone = "";

function updateCityTime() {
  if (!selectedZone) return;
  const cityTimeZone =
    selectedZone === "current" ? moment.tz.guess() : selectedZone;
  const cities = document.querySelector("#cities");

  // if the selected city is different from the current one, update the content
  if (cities.dataset.zone !== selectedZone) {
    cities.dataset.zone = selectedZone;
    cities.innerHTML = `
      <div class="row">
        <div class="col-6 city">
            <h2></h2>
            <time class="date"></time>
        </div>
        <div class="col-6">
            <time class="time"></time>
            <small class="time-reference"></small>
        </div>
      </div>
      <div class="row" id="link">
      <a href="index.html" id="back-link">Back to all cities →</a>
      </div>`;
    cities.querySelector("h2").textContent = cityTimeZone
      .replace("_", " ")
      .split("/")[1];
  }

  renderClock(cities, "", moment.tz(cityTimeZone));
}

updateTime();
// update the time every second
setInterval(updateTime, 1000);
setInterval(updateCityTime, 1000);


const formatToggle = document.getElementById("format-toggle");

// update the text in the toggle button based on the current format
const syncToggle = () => {
  formatToggle.textContent = hour12
    ? "Switch to 24-hour format"
    : "Switch to 12-hour format";
};
syncToggle();

// toggle between 12-hour and 24-hour formats when the button is clicked
formatToggle.addEventListener("click", () => {
  hour12 = !hour12;
  localStorage.setItem("hour12", String(hour12));
  syncToggle();
  updateTime();
  updateCityTime();
});

// handle the change event for the city select dropdown
const citySelect = document.getElementById("city");
citySelect.addEventListener("change", (event) => {
  selectedZone = event.target.value;
  updateCityTime();
});
