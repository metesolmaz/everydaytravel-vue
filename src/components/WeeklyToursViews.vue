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
        <div class="container" style="margin-bottom:100px">
          <div class="section-header" >
            <h3 v-if="tourview.languageId === $langGlobal">
            {{ getToursViewJson[1]["tour"] }}
          </h3>
        </div>
          <div class="popular-destination-block">
            <div class="row">
              <div v-for="mtjson in getMainTours.toursJson" :key="mtjson.id">
                <div class="col-md-4" v-if="mtjson.tourId === getCategories.id && mtjson.languageId === $langGlobal">
                  <figure class="imghvr-blur" style=" margin-top: 35px">
                    <img
                      :src="mtjson.tourHeaderImage"
                      width="400px"
                      height="250px"
                    />
                    <figcaption>
                      <div>
                        <router-link
                          :to="`details/${mtjson.id}`"
                          @click="scrollToTop"
                        >
                        <h3 class="ih-zoom-out" style="background-color:rgb(152, 32, 32);margin-top:190px;text-decoration: none;font-family: 'Slabo 27px', serif;">{{ mtjson.tourHeader }}</h3>

                        </router-link>

                      </div>
                    </figcaption>
                    <div :class="{ 'kurdele-alani' : mtjson.ısVip === true}">
                            <div :class="{ 'kurdele' : mtjson.ısVip === true}" v-text=" mtjson.ısVip === true ? 'Vip' : '' "></div>
                          </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CallOut />
  </div>
</template>

<style>

</style>

<script>
import { mapGetters } from "vuex";
import { EventBus } from '../services/event-bus.js';
import Vue from 'vue';
import CallOut from "./CallOut.vue";

Vue.prototype.$langGlobal = 1;
export default {
    data() {
        return {
            weekid: 2,
        };
    },
    computed: {
        ...mapGetters([
            "getToursView",
            "getToursDetail",
            "getMainTours",
            "getToursViewJson",
            "getCategories"
        ]),
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
    created() {
        Vue.prototype.$langGlobal = this.$langs;
        this.$store.dispatch("getToursViewHandler", this.$langGlobal);
        this.$store.dispatch("getMainToursHandler", this.$langGlobal);
        this.$store.dispatch("getCategoriesHandler", { id: 2, langIds: this.$langGlobal });
    },
    mounted() {
        EventBus.$on("button-was-clicked", langId => {
            langId = { langId };
            Vue.prototype.$langGlobal = langId["langId"];
            this.$store.dispatch("getToursViewHandler", this.$langGlobal);
            this.$store.dispatch("getMainToursHandler", this.$langGlobal);
            this.$store.dispatch("getCategoriesHandler", { id: 2, langIds: this.$langGlobal });
        });
    },
    components: { CallOut }
};
</script>