<template>
    <div>
      <PSlider/>
      <PopularTours/>
      <CallOut/>
    </div>

</template>

<script>
    import PSlider from './PSlider.vue'
    import PopularTours from './PopularTours.vue'
    import CallOut from './CallOut.vue'
    
    export default {
      components: {
        PSlider,
        PopularTours,
        CallOut,
      }
    }
    </script>