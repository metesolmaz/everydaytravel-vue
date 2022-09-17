<template>
  <div>
    
  </div>
</template>
<style>
.basemap {
  width: 100%;
  height: 429px;
}
.marker {
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>
  <script>
import mapboxgl from "mapbox-gl";
var el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage =
      "url(../assets/newimages/mapmarker.png)";
      el.style.backgroundRepeat = "no-repeat";
    el.style.width = "40px";
    el.style.height = "30px";
    el.style.marginLeft = "-71px";
    el.style.marginTop = "15px";
export default {
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoidGVzdHRyYXZlbCIsImEiOiJjbDd0OTl4angweGJxM25wMmhtaDd4anBmIn0.p8j6M_QFW6i6HAmlJ_q0PA",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [28.977813190248156, 41.03315519973722],
      zoom: 17,
      interactive: false,
    });
    new mapboxgl.Marker(el)
      .setLngLat([28.977813190248156, 41.03315519973722])
      .addTo(map);
  },
};
</script>