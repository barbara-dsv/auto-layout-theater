let h2 = document.querySelector('h2');
var map;

function success(pos) {
    if (map === undefined) {
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    } else {
        map.remove();
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Eu estou aqui!')
        .openPopup();

    var LeafIcon = L.Icon.extend({
        options: {
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76]
        }
    });

    var firstIcon = new LeafIcon({iconUrl: '../img/icons-svg/pino-1.svg'}),
        secondIcon = new LeafIcon({iconUrl: '../img/icons-svg/pino-2.svg'}),
        thirdIcon = new LeafIcon({iconUrl: '../img/icons-svg/pino-3.svg'});

    L.marker([-3.756702, -38.486017], {icon: firstIcon}).addTo(map).bindPopup("Iguatemi Bosque Fortaleza");
    L.marker([-3.732948, -38.570544], {icon: secondIcon}).addTo(map).bindPopup("RioMar Kennedy Fortaleza");
    L.marker([-3.76471, -38.57486], {icon: thirdIcon}).addTo(map).bindPopup("North Shopping Fortaleza");
}

function error(err) {
    console.log(`ERROR(${err.code}): ${err.message}`);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
});

