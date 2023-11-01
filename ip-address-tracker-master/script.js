import api from "./config.js";

const btn = document.getElementsByClassName("ip-search-button")[0];
const ip = document.getElementsByTagName("input")[0];
const ipLoc = document
  .getElementsByClassName("ip-location")[0]
  .getElementsByTagName("h3")[0];
const loc = document
  .getElementsByClassName("location")[0]
  .getElementsByTagName("h3")[0];
const timezone = document
  .getElementsByClassName("timezone")[0]
  .getElementsByTagName("h3")[0];
const isp = document
  .getElementsByClassName("isp")[0]
  .getElementsByTagName("h3")[0];

let map;

btn.addEventListener("click", async () => {
  let res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${api}&ipAddress=${ip.value}`
  );
  let data = await res.json();

  let lat = data.location.lat;
  let lng = data.location.lng;

  ipLoc.innerText = data.ip;
  loc.innerText = data.location.city + ", " + data.location.region;
  timezone.innerText = "UTC " + data.location.timezone;
  isp.innerText = data.isp;

  //   map = L.map("map").setView([lat, lng], 13);
  map =
    map === undefined
      ? L.map("map").setView([lat, lng], 13)
      : map.setView([lat, lng], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, lng]).addTo(map);
});
