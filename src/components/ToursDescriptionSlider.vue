<template>
    <div class="popular-destination2-block" >
        <ul id="lightSlider">
        <li v-for="imageJson in getToursDetailImageJson" :key="imageJson.id" 
        :data-thumb="imageJson['imageUrl']"
        >
        <img :src="imageJson['imageUrl']" alt="">
        </li>
    </ul>
    </div>
</template>

<style>

</style>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getToursDetailImageJson"]),
  },
  created() {
    this.$store.dispatch("getToursDetailImageJson", this.$langGlobal);
    this.jqsSlider();
    
  },
  mounted(){
    this.$store.dispatch("getToursDetailImageJson", this.$langGlobal);
    this.jqsSlider();
  },
  methods:{
    jqsSlider(){
      var j = jQuery.noConflict();
      j('#lightSlider').lightSlider({
          gallery: true,
          item: 1,
          loop:true,
          slideMargin: 0,
          thumbItem: 4
      });
	  }
  }
};
</script>