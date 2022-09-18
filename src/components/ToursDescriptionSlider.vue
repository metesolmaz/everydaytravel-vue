<template>
  <div>
    
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

  }
};
</script>