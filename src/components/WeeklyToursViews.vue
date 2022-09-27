<template>
  <div>
    <div v-for="tourview in getToursView" :key="tourview.id">
      <div
        class="container-fluid no-padding"
        :class="'pagebanner aboutus'"
        :style="{ 'background-image': 'url(' + tourview.tourHeaderImage + ')' }"
      >
        <div class="container" v-for="tv in getToursViewJson" :key="tv.id">
          <h3 v-if="tourview.languageId === $langGlobal">
            {{ getToursViewJson[1]["tour"] }}
          </h3>
        </div>
      </div>
      <!-- PageBanner /- -->

      <div class="container partner-section">
        <div class="section-padding"></div>
        <div class="container" >
          <div class="section-header" >
            <h3 v-if="tourview.languageId === $langGlobal">
            {{ getToursViewJson[1]["tour"] }}
          </h3>
        </div>
          <div class="popular-destination-block">
            <div class="row">
              <div
                v-for="mtjs in getMainTours.toursJson"
                :key="mtjs.id"
              >
              <div v-for="mt in getMainTours.tours" :key="mt.id">
                <div class="col-md-4"  v-if="mtjs.tourId === mt.id">
                  <figure class="imghvr-blur" style="margin-top: 35px">
                    <img
                      :src="mtjs.tourHeaderImage"
                      width="400px"
                      height="250px"
                    />
                    <figcaption>
                      <div>
                        <router-link
                          :to="`details/${mtjs.id}`"
                          @click="scrollToTop"
                        >
                          <h3>{{ mtjs.tourHeader }}</h3>

                        </router-link>

                      </div>
                    </figcaption>
                    <div class="kurdele-alani">
                            <div class="kurdele">Vip</div>
                          </div>
                  </figure>
                </div>
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
      "getToursViewJson"
    ]),
  },
  methods: {
    scrollToTop() {
    window.scrollTo(0,0);
    }
  },
  created() {
    this.$store.commit('setResetToursJson',[]);
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