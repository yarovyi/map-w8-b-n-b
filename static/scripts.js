mapboxgl.accessToken = 'ТУТ_КЛЮЧ_ДО_МАПБОКС';
const map = new mapboxgl.Map({
    container: 'map', // ID контейнера
    style: 'mapbox://styles/mapbox/streets-v11', // Стиль мапи
    center: [30.5234, 50.4501], // Координати для центру карти (Київ)
    zoom: 10 // Рівень масштабу
});

function performAction(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            if (data === "moveMapToLviv()") {
                moveMapToLviv();
            } else {
                alert(data);
            }
        })
        .catch(error => console.error('Помилка:', error));
}

function moveMapToLviv() {
    map.flyTo({
        center: [24.0316, 49.8429], // Координати Львова
        zoom: 12 // Новий рівень масштабу
    });
}
