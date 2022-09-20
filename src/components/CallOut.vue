<template>
  <div>
    <div v-for="cl of getCallout" :key="cl.id">
      <div
        class="container-fluid no-padding"
        :class="'callout-section'"
        :style="{ 'background-image': 'url(' + cl.image + ')' }"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-sm-7 col-xs-10">
              <div class="callout-content" v-for="info of getMidBanners" :key="info.id">
                <h3>{{ cl.callOutTopText }}</h3>
                <span>{{ cl.callOutBottomText }}</span>
                <ul>
                  <li>
                    <span :class="'icon icon-' + cl.iconP"></span
                    ><a :title="info.phone">{{ info.phone }}</a>
                  </li>
                  <li>
                    <span :class="'icon icon-' + cl.iconM"></span
                    ><a :title="info.mail">{{ info.mail }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.callout-section {
  direction :ltr!important;
}
.callout-content h3 {
  direction : rtl!important;
  margin-right:90px;
}
.callout-content span {
	direction : rtl!important;
  margin-right:90px;
}
</style>
<script>
import { mapGetters } from "vuex";
import { EventBus } from '../services/event-bus.js';
export default {
  computed: {
    ...mapGetters(["getCallout", "getMidBanners"]),
  },
  data(){
    return{
      langId: 1
    }
  },
  created() {
    this.$store.dispatch("getCalloutHandler", this.$langs);
  },
  mounted(){
    EventBus.$on('button-was-clicked', langId => {
    langId = {langId}
    this.$store.dispatch("getCalloutHandler", langId['langId']);
  });
  }
};
</script>