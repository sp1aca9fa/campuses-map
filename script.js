const map = L.map("map").setView([35.6762, 139.6503], 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap",
}).addTo(map);

const mapEl = document.getElementById("map");

const cities = {
  rio: [-22.9068, -43.1729],
  berlin: [52.52, 13.405],
  sao_paulo: [-23.5505, -46.6333],
  barcelona: [41.3874, 2.1686],
  paris: [48.8566, 2.3522],
  london: [51.5072, -0.1276],
  melbourne: [-37.8136, 144.9631],
  marseille: [43.2965, 5.3698],
  buenos_aires: [-34.6037, -58.3816],
  bali: [-8.3405, 115.092],
  mexico_city: [19.4326, -99.1332],
  lima: [-12.0464, -77.0428],
  casablanca: [33.5731, -7.5898],
  lisbon: [38.7223, -9.1393],
  montreal: [45.5019, -73.5674],
  nantes: [47.2184, -1.5536],
  mauritius: [-20.3484, 57.5522],
  tokyo: [35.6762, 139.6503],
  amsterdam: [52.3676, 4.9041],
  lyon: [45.764, 4.8357],
};

let isMapVisible = false;
let activeCityKey = null;
let currentMarker = null;

function isMapCenteredOn(coords, tolerance = 0.01) {
  const center = map.getCenter();
  return (
    Math.abs(center.lat - coords[0]) < tolerance &&
    Math.abs(center.lng - coords[1]) < tolerance
  );
}

function handleCityClick(cityKey) {
  const coords = cities[cityKey];
  if (!coords) return;

  // Case 1: map is hidden → open it
  if (!isMapVisible) {
    mapEl.classList.add("is-visible");
    isMapVisible = true;

    map.invalidateSize();
    map.setView(coords, 12);

    currentMarker = L.marker(coords).addTo(map);
    activeCityKey = cityKey;
    return;
  }

  // Case 2: same city clicked again
  if (activeCityKey === cityKey) {
    // If user is already viewing that city → close map
    if (isMapCenteredOn(coords)) {
      mapEl.classList.remove("is-visible");
      isMapVisible = false;
      return;
    }

    // Otherwise, recenter (user panned/zoomed away)
    map.setView(coords, 12);
    return;
  }

  // Case 3: different city clicked
  map.setView(coords, 12);

  if (currentMarker) {
    map.removeLayer(currentMarker);
  }

  currentMarker = L.marker(coords).addTo(map);
  activeCityKey = cityKey;
}

Object.keys(cities).forEach((cityKey) => {
  const btn = document.getElementById(`btn-${cityKey}`);
  if (!btn) return;

  btn.addEventListener("click", () => handleCityClick(cityKey));
});
