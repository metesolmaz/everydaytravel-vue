<template >
  <!-- PageBanner -->
  <div>
    <div class="container-fluid no-padding" :class="'pagebanner destinationdetails'"
      :style="{ 'background-image': 'url(' + getToursPage.tourHeaderImage + ')' }">
      <div class="container">
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
        <div class="popular-destination2-block">
          <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="imageJson in getToursDetailImageJson" :key="imageJson.id">
                <img :src="imageJson['imageUrl']" alt="">
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div thumbsSlider="" class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="imageJson in getToursDetailImageJson" :key="imageJson.id">
                <img :src="imageJson['imageUrl']" alt="">
              </div>
            </div>
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
li {
  list-style: none;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    ...mapGetters(["getToursDetail", "getToursPage", "getAllToursDetail", "getToursDetailImageJson"]),
  },
  created() {
    Vue.prototype.$langGlobal = this.$langs;
    this.$store.dispatch("getToursDetailHandler", {
      tourId: this.$route.params.id,
      langIds: this.$langGlobal,
    });
    this.$store.dispatch("getToursPageHandler", this.$route.params.id);
    this.$store.dispatch("getAllToursDetailHandler", this.$langGlobal);
    this.slidercalis();
  },
  mounted() {
    EventBus.$on('button-was-clicked', langId => {
      langId = { langId }
      Vue.prototype.$langGlobal = langId['langId'];
      this.$store.dispatch("getToursPageHandler", this.$route.params.id);
      this.$store.dispatch("getAllToursDetailHandler", this.$langGlobal);
    });
this.slidercalis();
  },
  
  methods: {
    slidercalis() {
        var swiper = new Swiper(".mySwiper", {
          loop: true,
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".mySwiper2", {
          loop: true,
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper,
          },
        });

    }
  }
};
</script>