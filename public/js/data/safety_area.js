let safetyAreasStyles = {
  strokeCollor: "black",
  fillColor: "rgba(29, 84, 180, 0.8)",
};

// Instantiate a circle object (using the default style):
var safetyArea = new H.map.Circle({ lat: -8.367838, lng: -35.03406 }, 1000, {
  style: safetyAreasStyles,
});
safetyArea.setData(
  "CD UNILEVER,cidade: IPOJUCA/PE, endereco: ROD. ARMINIO GUILHERME, IPOJUCA - PE, 55590-000"
);
safetyArea.addEventListener("tap", (event) => {
  alert(event.target.getData());
});
