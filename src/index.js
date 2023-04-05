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

  let seoulDate = document.querySelector("#seoul-date");
  seoulDate.innerHTML = moment.tz("Asia/Seoul").format("MMMM Mo YYYY");

  let seoulTime = document.querySelector("#seoul-time");
  seoulTime.innerHTML = moment.tz("Asia/Seoul").format("hh:mm:ss");

  let seoulTimeReference = document.querySelector("#seoul-time-reference");
  seoulTimeReference.innerHTML = moment.tz("Asia/Seoul").format("A");

  let romeDate = document.querySelector("#rome-date");
  romeDate.innerHTML = moment.tz("Europe/Rome").format("MMMM Mo YYYY");

  let romeTime = document.querySelector("#rome-time");
  romeTime.innerHTML = moment.tz("Europe/Rome").format("hh:mm:ss");

  let romeTimeReference = document.querySelector("#rome-time-reference");
  romeTimeReference.innerHTML = moment.tz("Europe/Rome").format("A");
}

updateTime();
setInterval(updateTime, 1000);
