<template >
    <!-- PageBanner -->
    <div>
      <div class="container-fluid no-padding"
    :class="'pagebanner destinationdetails'"
    :style="{ 'background-image': 'url(' + getToursPage.tourHeaderImage + ')' }"
    >
      <div class="container" >
        <div v-for="gts in getAllToursDetail" :key="gts.id">
          <h3 v-if="getToursPage.tourHeaderImage === gts.tourHeaderImage">{{ gts.tourHeader }}</h3>
        </div>
        
      </div>
    </div>
    <!-- PageBanner /- -->

    <!-- Popular Destination 2 -->
    <div class="container-fluid no-padding destination-details-section">
      <div class="section-padding"></div>
      <div class="container">
        <div class="popular-destination2-block" >
          <div>
            <ul id="lightSlider" >
              <li  
              v-for="imageJson in getToursDetailImageJson" :key="imageJson.id"
              :data-thumb="imageJson['imageUrl']"
              >
                <img :src="imageJson['imageUrl']" alt="">
              </li>


          </ul>
          </div>

        </div>
        <div class="destination_details-content">
          <div v-for="gts in getAllToursDetail" :key="gts.id">
            <p v-if="getToursPage.tourHeaderImage === gts.tourHeaderImage">
            {{ gts.tourContent }}
            
          </p>
          </div>

        </div>
      </div>
    </div>
    </div>
    
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
Vue.prototype.$langGlobal = 1;
export default {

  data() {
    return {
      languid: 1,
      turId: 1,
    };
  },
  computed: {
    ...mapGetters(["getToursDetail", "getToursPage","getAllToursDetail","getToursDetailImageJson"]),
  },
  created() {
    Vue.prototype.$langGlobal = this.$langs;
    this.$store.dispatch("getToursDetailHandler", {
      tourId: this.$route.params.id,
      langIds: this.$langGlobal,
    });
    this.$store.dispatch("getToursPageHandler", this.$route.params.id);
    this.$store.dispatch("getAllToursDetailHandler", this.$langGlobal);
  },
  mounted(){
    EventBus.$on('button-was-clicked', langId => {
      langId = { langId }
      Vue.prototype.$langGlobal = langId['langId'];
      this.$store.dispatch("getToursPageHandler", this.$route.params.id);
      this.$store.dispatch("getAllToursDetailHandler", this.$langGlobal);
    });
  },

};
</script>