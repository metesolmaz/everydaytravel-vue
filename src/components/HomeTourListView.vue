<template>
  <div>
    <div class="container">
      <div class="section-padding"></div>
      <div class="section-header">
        <h3>Daily Tours</h3>
        <span>--</span>
      </div>

    </div>
  </div>
</template>


<style>
	.demo {
		width: 900px;
		margin:auto;
	}
	.demo ul {
		list-style: none outside none;
		padding-left: 0;
		margin-bottom:0;
	}
	.demo li {
		display: block;
		float: left;
		margin-right: 105px;
		cursor:pointer;
	}
	.demo img {
		display: block;
	}
</style>

<script>
var jq = $.noConflict();



import { mapGetters } from "vuex";
import { EventBus } from "../services/event-bus.js";
import Vue from "vue";

export default {
  computed: {
    ...mapGetters(["getIsPopular"]),
  },

  created() {
    Vue.prototype.$langGlobal = this.$langs;
  },
  
  mounted() {
    EventBus.$on("button-was-clicked", (langId) => {
      langId = { langId };
      Vue.prototype.$langGlobal = this.$langs;
      this.$store.dispatch("getIsPopularHandler", {
        ısPopular: true,
        langIds: this.$langGlobal,
      });
    });
	this.jqSlider();
  },
  methods: {
    scrollToTop() {
    window.scrollTo(0,0);
    },

	
}
};


</script>

