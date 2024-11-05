mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkaWxrb3Zza3kiLCJhIjoiY20zNGI3ejNsMXBpYjJpc2FrNzRiMmoxbCJ9.mP73e1WrGJUSHriWgvyLPg';
const map = new mapboxgl.Map({
    container: 'map', // ID контейнера
    style: 'mapbox://styles/mapbox/dark-v11', // Стиль мапи
    center: [30.5234, 50.4501], // Координати для центру карти (Київ)
    zoom: 10 // Рівень масштабу
});

function performAction(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            if (data === "moveMapToKha()") {
                moveMapToKha();
            } else if (data === "moveMapToUzh()") {
                moveMapToUzh();
            } else {
                alert(data);
            }
        })
        .catch(error => console.error('Помилка:', error));
}

function moveMapToKha() {
    map.flyTo({
        center: [36.2304, 49.9935], // Координати Харкова
        zoom: 12 // Новий рівень масштабу
    });
}

function moveMapToUzh() {
    map.flyTo({
        center: [22.2879, 48.6208], // Координати Uzhhorod
        zoom: 12 
    });
}
