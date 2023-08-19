// Welcome
console.log("Welcome to Jiahui's Module 15!");

// Apply Earthquakes' URL
var earthq_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//Function to determine the circle marker size based on the magnitude of earthquakes
function circlesize(mag) {
    return mag * 30000;
}

//Function to determine circle marker size based on the magnitude of earthquakes
function circlecolor(mag) {
    var color="#FFEDA0";
    switch(true) {
        case (mag < 10):
            color="#FFEDA0";
            break;
        case (mag < 30):
            color="#FEB24C";
            break;
        case (mag < 50):
            color="#FD8D3C";
            break;
        case (mag < 70):
            color="#E31A1C";
            break;
        case (mag < 90):
            color="#BD0026";
            break;
        case (mag >= 90):
            color="#800026";
            break;
    }
    return color;
}

// Get the data with d3
d3.json(earthq_url, function(data) {

    // Create circle markers for each earthquake in the dataset
    var earthquakes = []

    data.features.forEach(x => {
        var lat=x.geometry.coordinates[1];
        var lng=x.geometry.coordinates[0];

        earthquakes.push(
            L.circle([lat,lng], {
                stroke: false,
                fillOpacity: 0.8,
                fillColor: circlecolor(x.geometry.coordinates[2]),
                radius: circlesize(x.properties.mag)
            }).bindPopup(
                "<h3>" + x.properties.place +
      "</h3><hr><p>" + new Date(x.properties.time) + "</p>", {
                maxWidth : 560
            })
        )
    });

    // Create a layer out of the circles
    var earthq_layers = L.layerGroup(earthquakes);

    // Create Tile Layers
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
   
   // Create a baseMaps to hold Satellite, Grayscale, and Outdoors Map layer
   var baseMaps = {
       "Street Map": streetmap
   };
   
   // Create a OverlayMaps to hold earthquakes layer
   var overlayMaps = {
       "Earthquake": earthq_layers
   };
   
   // Create the map object with options
   var myMap = L.map("map", {
       center: [40.7, -73.95],
       zoom: 11,
       layers: [streetmap, earthq_layers]
   });

    // Create a layer control
    L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(myMap);

    // Create a legend to display information about our legend
    var legend = L.control({
        position: "bottomright"
    });

    // When the layer control is added, insert a div with the class of "legend"
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "legend");
        div.innerHTML=[
            "<h2>Depth (km)</h2>",
            "<p class='l10'>Less than 10</p>",
            "<p class='l30'>Between 10 and 30</p>",
            "<p class='l50'>Between 30 and 50</p>",
            "<p class='l70'>Between 50 and 70</p>",
            "<p class='l90'>Between 70 and 90</p>",
            "<p class='g90'>Greater than 90</p>"
        ].join("");

        return div;
    };
    // Add the info legend to the map
    legend.addTo(myMap);
});

