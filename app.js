// Progress barları doldur
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.progress[data-val]').forEach(el => {
    const val = el.getAttribute('data-val') || '0%';
    requestAnimationFrame(() => el.firstElementChild?.style.setProperty('--val', val));
  });

  // Harita sadece index sayfasında var
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof ol === 'undefined') return;

  const map = new ol.Map({
    target: 'map',
    layers: [ new ol.layer.Tile({ source: new ol.source.OSM() }) ],
    view: new ol.View({
      center: ol.proj.fromLonLat([32.7490, 39.8700]), // Beytepe yaklaşık
      zoom: 15
    })
  });

  // Marker
  const feature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([32.7490, 39.8700])),
    name: 'Hacettepe Üniversitesi - Beytepe Kampüsü'
  });
  feature.setStyle(new ol.style.Style({
    image: new ol.style.Icon({ anchor:[0.5,1], src:'https://openlayers.org/en/latest/examples/data/icon.png' })
  }));

  const vector = new ol.layer.Vector({ source: new ol.source.Vector({ features:[feature] }) });
  map.addLayer(vector);

  // Basit popup
  const popup = document.createElement('div');
  popup.className = 'card';
  popup.style.position = 'absolute';
  popup.style.transform = 'translate(-50%, -100%)';
  popup.style.padding = '10px 12px';
  popup.style.fontSize = '14px';
  popup.style.pointerEvents = 'none';
  popup.style.backdropFilter = 'none'; // tam şeffaf
  popup.innerText = 'Hacettepe Üniversitesi\nBeytepe Kampüsü';
  document.body.appendChild(popup);

  const overlay = new ol.Overlay({ element: popup, positioning: 'bottom-center', stopEvent: false });
  map.addOverlay(overlay);
  overlay.setPosition(ol.proj.fromLonLat([32.7490, 39.8700]));
});

