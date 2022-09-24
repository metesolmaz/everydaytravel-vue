<template>
  <div>
    <div v-for="tourview in getToursView" :key="tourview.id">
      <div class="container-fluid no-padding" :class="'pagebanner aboutus'"
        :style="{ 'background-image': 'url(' + tourview.tourHeaderImage + ')' }">
        <div class="container">
          <h3>{{tourview.tourHeader}}</h3>
        </div>
      </div>
      <!-- PageBanner /- -->

      <div class="container partner-section">
        <div class="section-padding"></div>
        <div class="container" v-for="mt in getMainTours.tours" :key="mt.id">
          <div class="section-header">
            <h3>{{mt.tourName}}</h3>
          </div>
          <div class="popular-destination-block">
            <div class="row">
              <div v-for="bottomjs in getMainTours.toursJson" :key="bottomjs.id">
                <div class="col-md-4" v-if="bottomjs.tourId === mt.id" >
                <figure class="imghvr-blur"
                  style="margin-top:35px;">
                  <img :src="bottomjs.tourHeaderImage" width="400px" height="250px"/>
                  <figcaption>
                    <div>
                      <router-link :to="`details/${bottomjs.id}`" @click="scrollToTop">
                        <h3>{{bottomjs.tourHeader}}</h3>
                      </router-link>
                    </div>
                  </figcaption>
                </figure>
              </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
import { mapGetters } from "vuex";
import { EventBus } from '../services/event-bus.js';
import Vue from 'vue';
Vue.prototype.$langGlobal = 1;
export default {
  computed: {
    ...mapGetters([
      "getToursView",
      "getAboutUs",
      "getAboutUsTopJsons",
      "getAboutUsMidJsons",
      "getAboutUsBottomJsons",
      "getToursDetail",
      "getMainTours",
    ]),
  },
  methods: {
    scrollToTop() {
    window.scrollTo(0,0);
    }
  },
  created() {
    Vue.prototype.$langGlobal = this.$langs;
    this.$store.dispatch("getToursViewHandler", this.$langGlobal);
    this.$store.dispatch("getAboutUsHandler", this.$langGlobal);
    this.$store.dispatch("getMainToursHandler", this.$langGlobal);
  },
  mounted() {
    EventBus.$on('button-was-clicked', langId => {
      this.$store.commit('setResetToursJson',[]);
      langId = { langId }
      Vue.prototype.$langGlobal = langId['langId'];
      this.$store.dispatch("getToursViewHandler", this.$langGlobal);
      this.$store.dispatch("getMainToursHandler", this.$langGlobal);
    });
  },
  beforeDestroy() {
    this.$store.commit('setResetToursJson',[]);
    },
  

};
</script>