<template>
  <div>
    <div v-for="sv in getServiceView" :key="sv.id">
      <div
        class="container-fluid no-padding"
        :class="'pagebanner aboutus'"
        :style="{ 'background-image': 'url(' + sv.serviceImage + ')' }"
      >
        <div class="container">
          <h3 >
            {{ sv.serviceHeader }}
          </h3>
        </div>
      </div>
      <!-- PageBanner /- -->

      <div class="container partner-section">
        <div class="section-padding"></div>
        <div class="container" style="margin-bottom: 100px">
          <div class="section-header">
            <h3 >
               {{ sv.serviceHeader }}
            </h3>
          </div>
          <div class="popular-destination-block">
            <div class="row">
              <div >
                <div>
                    <div>
                        {{ sv.serviceText }}
                    </div>
                  <div
                    class="col-md-4"
                    v-for="s in getService" :key="s.id"
                  >
                    <figure class="imghvr-blur" style="margin-top: 35px">
                      <img
                        :src="s.serviceImage"
                        width="400px"
                        height="250px"
                      />
                      <figcaption>
                        <div>
                          
                            <h3
                              class="ih-zoom-out"
                              style="
                                background-color: rgb(152, 32, 32);
                                margin-top: 190px;
                                text-decoration: none;
                                font-family: 'Slabo 27px', serif;
                              "
                            >
                             {{ s.serviceName}}
                            </h3>
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
    <CallOut />
  </div>
</template>

<style>
    .imghvr-blur:hover > img {
    -webkit-filter: blur(1px);
            filter: blur(1px);
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
}
</style>

<script>
import { mapGetters } from "vuex";
import { EventBus } from "../services/event-bus.js";
import CallOut from "./CallOut.vue";
import Vue from "vue";
Vue.prototype.$langGlobal = 1;
export default {
    components:{
        CallOut
    },
  computed: {
    ...mapGetters(["getService", "getServiceView"]),
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    Vue.prototype.$langGlobal = this.$langs;
    this.$store.dispatch("getServiceHandler", this.$langGlobal);
    this.$store.dispatch("getServiceViewHandler", this.$langGlobal);
  },
  mounted() {
    EventBus.$on("button-was-clicked", (langId) => {
      langId = { langId };
      Vue.prototype.$langGlobal = langId["langId"];
      this.$store.dispatch("getServiceHandler", this.$langGlobal);
      this.$store.dispatch("getServiceViewHandler", this.$langGlobal);
    });
  },
};
</script>
  