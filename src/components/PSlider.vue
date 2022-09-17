<template>
	<div class="container-fluid no-padding photoslider">
			<div id="photosliderslider" class="carousel slide" data-ride="carousel" >
				<div class="carousel-inner" role="listbox" >
					<div class="item" :class="{ active: index === 0 }" v-for="(s , index) in getSlider" :key="index" >
						<img :src="s.imagePath" alt="photoslider1" width="1920" height="1000"/>
						<div class="photosliderconent-block">
							<img :src="s.imagePathLeft" alt="photoslider-left1" width="618" height="1016"/>
							<div class="photoslidercontent-box">
								<div class="photoslidercontent-top">
									<h3>{{ s.sliderTopText }}</h3>
								</div>
								<div class="photoslidercontent-bottom">
									<h3>{{ s.sliderBottomText }}</h3>
									<p>{{ s.sliderBottomDescription }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ol class="carousel-indicators">
					<li data-target="#photosliderslider" data-slide-to="0" class="active">
						<span>Go</span>
						<img src="../assets/images/photoslider-ic1.png" width="44" height="24" alt="photoslider-ic1"/>
					</li>
					<li data-target="#photosliderslider" data-slide-to="1">
						<span>Go</span>
						<img src="../assets/images/photoslider-ic2.png" width="35" height="41" alt="photoslider-ic2"/>
					</li>
					<li data-target="#photosliderslider" data-slide-to="2">
						<span>Go</span>
						<img src="../assets/images/photoslider-ic3.png" width="50" height="50" alt="photoslider-ic3"/>
					</li>
				</ol>
			</div>
		</div>
</template>
<script>
import { mapGetters } from "vuex";
import { EventBus } from '../services/event-bus.js';

export default {
  computed: {
    ...mapGetters(["getSlider"]),
  },
  created() {
		this.$store.dispatch("getSliderHandler", this.$langs);
  },
  mounted(){
     EventBus.$on('button-was-clicked', langId => {
		langId = {langId}
		this.$store.dispatch("getSliderHandler", langId['langId']);
  	});
  }
};
</script>