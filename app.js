
// app.js - OpenLayers map for Hacettepe University Beytepe Campus

// Initialize map if the target exists on this page
function initMap(){
  const el = document.getElementById('map');
  if(!el) return;

  // Create the map
  const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([32.7490, 39.8700]), // Beytepe approx
      zoom: 15
    })
  });

  // Marker style
  const markerStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'https://openlayers.org/en/latest/examples/data/icon.png'
    })
  });

  // Feature for campus
  const feature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([32.7490, 39.8700])),
    name: 'Hacettepe Üniversitesi - Beytepe Kampüsü'
  });
  feature.setStyle(markerStyle);

  const vectorSource = new ol.source.Vector({ features: [feature] });
  const vectorLayer = new ol.layer.Vector({ source: vectorSource });
  map.addLayer(vectorLayer);

  // Simple popup
  const popup = document.createElement('div');
  popup.className = 'card';
  popup.style.position = 'absolute';
  popup.style.transform = 'translate(-50%, -100%)';
  popup.style.padding = '10px 12px';
  popup.style.fontSize = '14px';
  popup.style.pointerEvents = 'none';
  popup.innerText = 'Hacettepe Üniversitesi\nBeytepe Kampüsü';
  document.body.appendChild(popup);

  const overlay = new ol.Overlay({
    element: popup,
    positioning: 'bottom-center',
    stopEvent: false
  });
  map.addOverlay(overlay);
  overlay.setPosition(ol.proj.fromLonLat([32.7490, 39.8700]));
}

document.addEventListener('DOMContentLoaded', () => {
  // Animate progress bars on load
  document.querySelectorAll('.progress[data-val]').forEach(el => {
    const val = el.getAttribute('data-val') || '0%';
    setTimeout(() => el.style.setProperty('--val', val), 200);
  });
  initMap();
});
