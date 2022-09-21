<template>
  <div>
    <div v-for="about in getAboutUs" :key="about.id">
      <div
        class="container-fluid no-padding"
        :class="'pagebanner aboutus'"
        :style="{ 'background-image': 'url(' + about.mainImage + ')' }"
      >
        <div class="container">
          <h3>{{ about.mainHeader }}</h3>
        </div>
      </div>
      <!-- PageBanner /- -->

      <!-- TourInfo -->
      <div class="container">
        <div class="tourinfo-section">
          <div class="section-padding"></div>
          <div class="col-md-5">
            <img
              :src="about.topImageLeft"
              alt="tourinfo-men"
              width="407"
              height="496"
            />
          </div>
          <div class="col-md-7 tourinfo-content">
            <h3>
              {{ about.topContentHeader }}
            </h3>
            <p>
              {{ about.topContentDescription }}
            </p>
            <div class="row">
              <div class="col-md-7 col-sm-7 col-xs-6">
                <ul>
                  <li
                    style="
                      color: black;
                      font-family: 'Franklin Gothic Medium', 'Arial Narrow',
                        Arial, sans-serif;
                    "
                    v-for="topjs in getAboutUsTopJsons"
                    :key="topjs.id"
                  >
                    {{ topjs["content"] }}
                  </li>
                </ul>
              </div>
              <div class="col-md-5 col-sm-5 col-xs-6">
                <div class="tourinfo-img">
                  <img
                    :src="about.topImageRight"
                    alt="tourinfo-item"
                    width="270"
                    height="193"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="section-padding"></div>
        </div>
      </div>
      <!-- TourInfo /- -->

      <!-- Feature Section -->
      <div
        class="container-fluid no-padding"
        :class="'feature-section'"
        :style="{ 'background-image': 'url(' + about.midContentImage + ')' }"
      >
        <div class="container">
          <div class="row">
            <div class="featurecontent-block col-md-10 col-sm-12">
              <div
                class="col-md-6 col-sm-6 feature-box"
                v-for="midjs in getAboutUsMidJsons"
                :key="midjs.id"
              >
                <span :class="'icon icon-' + midjs['icon']"></span>
                <div class="feature-box-content">
                  <h3>{{ midjs["header"] }}</h3>
                  <p>
                    {{ midjs["description"] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Feature Section /- -->

      <!-- Partner Section -->
      <Reviews />
      <!-- Partner Section /- -->

      <!-- CallOut -->
      <CallOut />
      <!-- CallOut /- -->
    </div>
    
  </div>
  
</template>
<script>
import CallOut from "./CallOut.vue";
import { mapGetters } from "vuex";
import { EventBus } from '../services/event-bus.js';
import Reviews from "./Reviews.vue";

export default {
  components: {
    CallOut,
    Reviews
},
  data(){
    return{
      langId: 1
    }
  },
  computed: {
    ...mapGetters([
      "getAboutUs",
      "getAboutUsTopJsons",
      "getAboutUsMidJsons",
      "getAboutUsBottomJsons",
    ]),
  },
  created() {
    this.$store.dispatch("getAboutUsHandler", this.$langs);
  },  
  mounted(){
    EventBus.$on('button-was-clicked', langId => {
    langId = {langId}
    this.$store.dispatch("getAboutUsHandler", langId['langId']);
  });
  }
};
</script>
