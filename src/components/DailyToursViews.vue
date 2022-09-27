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
            {{ getToursViewJson[0]["tour"] }}
          </h3>
        </div>
      </div>
      <!-- PageBanner /- -->

      <div class="container partner-section">
        <div class="section-padding"></div>
        <div class="container" >
          <div class="section-header" >
            <h3 v-if="tourview.languageId === $langGlobal">
            {{ getToursViewJson[0]["tour"] }}
          </h3>
        </div>
          <div class="popular-destination-block">
            <div class="row">
              <div
                v-for="bottomjs in getMainTours.toursJson"
                :key="bottomjs.id"
              >
              <div v-for="mt in getMainTours.tours" :key="mt.id">
                <div class="col-md-4"  v-if="bottomjs.tourId === mt.id">
                  <figure class="imghvr-blur" style="margin-top: 35px">
                    <img
                      :src="bottomjs.tourHeaderImage"
                      width="400px"
                      height="250px"
                    />
                    <figcaption>
                      <div>
                        <router-link
                          :to="`details/${bottomjs.id}`"
                          @click="scrollToTop"
                        >
                          <h3>{{ bottomjs.tourHeader }}</h3>

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
.kurdele-alani {
  width: 85px;
  height: 88px;
  overflow: hidden;
  position: absolute;
  top: -3px;
  right: -3px;
}
.kurdele {
  font: bold 13px Sans-Serif;
  color: #fff;
  text-align: center;
  text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 0px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  position: relative;
  padding: 7px 0;
  left: -5px;
  top: 15px;
  width: 120px;
  background-color: rgb(152, 32, 32);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#bfdc7a),
    to(#8ebf45)
  );
  background-image: -webkit-linear-gradient(top, #bfdc7a, #8ebf45);
  background-image: -moz-linear-gradient(top, #bfdc7a, #8ebf45);
  background-image: -ms-linear-gradient(top, #bfdc7a, #8ebf45);
  background-image: -o-linear-gradient(top, #bfdc7a, #8ebf45);

  -webkit-box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}
.kurdele:before,
.kurdele:after {
  content: "";
  border-top: 3px solid #6e8900;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  position: absolute;
  bottom: -3px;
}
.kurdele:before {
  left: 0;
}
.kurdele:after {
  right: 0;
}
</style>

<script>
import { mapGetters } from "vuex";
import { EventBus } from "../services/event-bus.js";
import Vue from "vue";
Vue.prototype.$langGlobal = 1;
export default {
  computed: {
    ...mapGetters([
      "getToursView",
      "getToursDetail",
      "getMainTours",
      "getToursViewJson",
    ]),
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.$store.commit("setResetToursJson", []);
    Vue.prototype.$langGlobal = this.$langs;
    this.$store.dispatch("getToursViewHandler", this.$langGlobal);
    this.$store.dispatch("getAboutUsHandler", this.$langGlobal);
    this.$store.dispatch("getMainToursHandler", this.$langGlobal);
  },
  mounted() {
    EventBus.$on("button-was-clicked", (langId) => {
      this.$store.commit("setResetToursJson", []);
      langId = { langId };
      Vue.prototype.$langGlobal = langId["langId"];
      this.$store.dispatch("getToursViewHandler", this.$langGlobal);
      this.$store.dispatch("getMainToursHandler", this.$langGlobal);
    });
  },
  beforeDestroy() {
    this.$store.commit("setResetToursJson", []);
  },
};
</script>