<template>
  <div>
    <div
      class="container popular-destination"
      v-for="h in getHomeTours"
      :key="h.id"
    >
      <div class="section-padding"></div>
      <div class="section-header">
        <h3>{{ h.toursHeader }}</h3>
        <span>{{ h.toursText }}</span>
      </div>
      <div class="popular-destination-block">
        <div class="row">
          <div class="col-md-6 popular-destination-left">
            <div class="popular-destinatonbox">
              <img
                :src="getIsPopular[0].tourHeaderImage"
                alt="populardestinaion1-wide"
                width="580"
                height="530"
              />

              <div class="popular-destination-info">
                <router-link
                  :to="`/details/${getIsPopular[0].id}`"
                  @click="scrollToTop"
                >
                  <a
                    ><h3>{{ getIsPopular[0].tourHeader }}</h3></a
                  >
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6 popular-destination-right">
            <div class="col-md-6 col-sm-6 col-xs-6 no-padding">
              <div class="popular-destinatonbox">
                <img
                  :src="getIsPopular[1].tourHeaderImage"
                  alt="populardestinaion2"
                  width="285"
                  height="260"
                />
                <div class="popular-destination-info">
                  <router-link
                    :to="`/details/${getIsPopular[1].id}`"
                    @click="scrollToTop"
                  >
                    <a
                      ><h3>{{ getIsPopular[1].tourHeader }}</h3></a
                    >
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 no-padding">
              <div class="popular-destinatonbox">
                <img
                  :src="getIsPopular[2].tourHeaderImage"
                  alt="populardestinaion3"
                  width="285"
                  height="260"
                />
                <div class="popular-destination-info">
                  <router-link
                    :to="`/details/${getIsPopular[2].id}`"
                    @click="scrollToTop"
                  >
                    <a
                      ><h3>{{ getIsPopular[2].tourHeader }}</h3></a
                    ></router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 no-padding">
              <div class="popular-destinatonbox">
                <img
                  :src="getIsPopular[3].tourHeaderImage"
                  alt="populardestinaion4"
                  width="285"
                  height="260"
                />
                <div class="popular-destination-info">
                  <router-link
                    :to="`/details/${getIsPopular[3].id}`"
                    @click="scrollToTop"
                  >
                    <a
                      ><h3>{{ getIsPopular[3].tourHeader }}</h3></a
                    ></router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 no-padding">
              <div class="popular-destinatonbox">
                <img
                  :src="getIsPopular[4].tourHeaderImage"
                  alt="populardestinaion5"
                  width="285"
                  height="260"
                />
                <div class="popular-destination-info">
                  <router-link
                    :to="`/details/${getIsPopular[4].id}`"
                    @click="scrollToTop"
                  >
                    <a
                      ><h3>{{ getIsPopular[4].tourHeader }}</h3></a
                    >
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
		<router-link
                    :to="'/tours'"
                    @click="scrollToTop"
                  >
				  {{
          h.toursButtonText
        }}
		</router-link>

      </div>
      <div class="section-padding"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EventBus } from "../services/event-bus.js";
import Vue from "vue";

export default {
  computed: {
    ...mapGetters(["getHomeTours", "getIsPopular"]),
  },

  created() {
    Vue.prototype.$langGlobal = this.$langs;
    this.$store.dispatch("getIsPopularHandler", {
      ısPopular: true,
      langIds: this.$langGlobal,
    });
    this.$store.dispatch("getHomeToursHandler", this.$langs);
  },
  
  mounted() {
    EventBus.$on("button-was-clicked", (langId) => {
      langId = { langId };
      Vue.prototype.$langGlobal = this.$langs;
      this.$store.dispatch("getSliderHandler", langId["langId"]);
      this.$store.dispatch("getHomeToursHandler", langId["langId"]);
      this.$store.dispatch("getIsPopularHandler", {
        ısPopular: true,
        langIds: this.$langGlobal,
      });
    });
  },
  methods: {
    scrollToTop() {
    window.scrollTo(0,0);
    },
}
};
</script>