<template >
  <main class="site-main page-spacing">
    <!-- PageBanner -->
    <div class="container-fluid no-padding"
    :class="'pagebanner destinationdetails'"
    :style="{ 'background-image': 'url(' + getToursPage.tourHeaderImage + ')' }"
    >
      <div class="container">
        <h3>{{ getToursPage.tourHeader }}</h3>
      </div>
    </div>
    <!-- PageBanner /- -->

    <!-- Popular Destination 2 -->
    <div class="container-fluid no-padding destination-details-section">
      <div class="section-padding"></div>
      <div class="container">
        <div class="popular-destination2-block" >
          <ul id="lightSlider">
            <li v-for="imageJson in getToursDetailImageJson" :key="imageJson.id" 
            :data-thumb="imageJson['imageUrl']"   
            >
            <img :src="imageJson['imageUrl']" alt="">
          </li>
          
        </ul>
        </div>
        <div class="destination_details-content">
          <p>
            {{ getToursPage.tourContent }}
            
          </p>
        </div>
      </div>

    </div>
  </main>
</template>

<style>
li{
  list-style: none;
}
</style>
<script>

  
import { mapGetters } from "vuex";
import { EventBus } from "../services/event-bus.js";
import Vue from "vue";
import TourGallery from "./TourGallery.vue";
Vue.prototype.$langGlobal = 1;
export default {
  components:{
    TourGallery
  },
  data() {
    return {
      languid: 1,
      turId: 1,
    };
  },
  computed: {
    ...mapGetters(["getToursDetail", "getToursPage","getToursDetailImageJson"]),
  },
  created() {
    Vue.prototype.$langGlobal = this.$langs;
    this.$store.dispatch("getToursDetailHandler", {
      tourId: this.$route.params.id,
      langIds: this.$langGlobal,
    });
    this.$store.dispatch("getToursPageHandler", this.$route.params.id);
  },
  mounted(){
    this.jqsSlider();
  },
  methods:{
    
    jqsSlider(){
      var j = jQuery.noConflict();
      j('#lightSlider').lightSlider({
          gallery: true,
          item: 1,
          loop:true,
          slideMargin: 0,
          thumbItem: 4
      });
	  }
  }
};
</script>