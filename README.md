<div id="bootcamp"><img style="display: none;" src="https://static.bc-edx.com/data/dl-1-2/m15/lms/img/banner.jpg" alt="lesson banner" />

# Global Earthquake Monitoring Dashboard

## Overview

This project visualizes global seismic activity through an interactive geospatial dashboard built with Leaflet.js and real-time earthquake data from the United States Geological Survey (USGS).

The dashboard transforms raw geospatial earthquake records into an intuitive visual experience, allowing users to explore earthquake magnitude, depth, and location through dynamic mapping and interactive data layers.

The project demonstrates how real-time environmental data can be integrated, analyzed, and communicated through modern web-based visualization tools.

---

# Project Objectives

The primary goals of this project are to:

* Visualize global earthquake activity using interactive maps
* Integrate real-time geospatial data from public APIs
* Explore relationships between earthquake magnitude and depth
* Build dynamic geographic visualizations for public awareness
* Apply GIS and mapping techniques to scientific datasets
* Create intuitive visual tools for environmental monitoring

---

# Data Source

Earthquake data is retrieved from the United States Geological Survey (USGS) GeoJSON feed.

The dataset includes:

* Earthquake magnitude
* Geographic coordinates
* Depth measurements
* Event locations
* Event timestamps
* Seismic activity metadata

The data is continuously updated by the USGS and provides near real-time information about global earthquake activity.

---

# Dashboard Features

## Interactive Earthquake Map

Built an interactive Leaflet map displaying earthquake events worldwide.

Each earthquake is plotted using geographic coordinates and can be explored directly through map interactions.

---

## Magnitude-Based Visualization

Marker size is scaled according to earthquake magnitude.

This allows users to quickly identify major seismic events and distinguish them from smaller earthquakes.

Visual scaling helps communicate earthquake intensity without requiring additional filtering.

---

## Depth Analysis

Earthquake depth is represented through color coding.

Color gradients provide immediate visual context regarding:

* Shallow earthquakes
* Intermediate-depth earthquakes
* Deep seismic events

This approach enables simultaneous analysis of multiple earthquake characteristics.

---

## Interactive Event Information

Each earthquake marker includes an interactive popup displaying:

* Magnitude
* Geographic location
* Depth information
* Event details

Users can explore individual earthquake records directly from the map interface.

---

## Dynamic Legend

A custom legend was implemented to provide interpretation of color-coded depth values.

The legend improves usability and supports accurate reading of the visualization.

---

## Geospatial Exploration

The dashboard supports exploration of global seismic activity patterns, including:

* Regional earthquake clustering
* High-risk seismic zones
* Distribution of earthquake depth
* Relative event intensity

---

# Technologies Used

* JavaScript
* Leaflet.js
* D3.js
* HTML
* CSS
* GeoJSON
* USGS Earthquake API

---

# Key Skills Demonstrated

This project demonstrates experience with:

* Geospatial analytics
* Interactive mapping
* GIS visualization
* GeoJSON processing
* API integration
* Data visualization
* Dashboard development
* Environmental data analysis
* Real-time data applications
* Front-end web development

---

# Key Insights

Major observations from the visualization include:

* Earthquake activity is concentrated along major tectonic boundaries.
* Earthquake depth varies significantly across different geographic regions.
* Large-magnitude events are relatively infrequent compared to smaller seismic events.
* Interactive mapping provides a more effective way to communicate geospatial risk than static charts.
* Combining magnitude and depth into a single visualization enables multidimensional analysis of seismic activity.

---

# Deployment

The dashboard is deployed through GitHub Pages and can be accessed directly through a web browser.

---

# Disclaimer

This project was completed for educational and portfolio purposes.

Earthquake data is provided by the United States Geological Survey (USGS) and is used to demonstrate geospatial analytics, interactive mapping, and data visualization techniques.
