<template>
<footer class="footer-main container-fluid no-padding">	
		<div class="footer-widgetblock">
			<div class="container" v-for="footer of getFooter" :key="footer.id">
				<div class="row">
					<aside class="col-md-3 col-sm-6 col-xs-6 ftr-widget about_widget">
						<h3 class="widget-title" v-html="footer.footerLeftTitle"></h3>
						<p v-html="footer.footerLeftContent"></p>
						<ul>
							<li v-for="tb of getTopBanners" :key="tb.id">
								<a :href="tb.link" target="_blank" :title="tb.name"><i :class="'fa fa-'+tb.icons" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</aside>
					<aside class="col-md-4 col-sm-6 col-xs-6 ftr-widget openinghours_widget">
						<h3 class="widget-title" v-html="footer.footerMidTitle"></h3>
						 <p v-for="(oj,index) in getFooterJsons" :key="index" v-html="oj['day'] + oj['hour']"></p>
					</aside>
					 <aside class="col-md-3 col-sm-6 col-xs-6 ftr-widget populardestination_widget">
						<h3 class="widget-title" v-html="footer.footerRightTitle"></h3>
						<ul>
							<li><a title="instagram" href="#"><img width="130" height="130" alt="destinaion1" src="../assets/images/ftr-populardestinaion1.jpg"></a></li>
							<li><a title="instagram" href="#"><img width="130" height="130" alt="destinaion1" src="../assets/images/ftr-populardestinaion2.jpg"></a></li>
							<li><a title="instagram" href="#"><img width="130" height="130" alt="destinaion1" src="../assets/images/ftr-populardestinaion3.jpg"></a></li>
							<li><a title="instagram" href="#"><img width="130" height="130" alt="destinaion1" src="../assets/images/ftr-populardestinaion4.jpg"></a></li>
						</ul>	
					</aside>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container">
				<div class="row">
					<div class="col-md-3">
						<span>&copy; 2022 All rights reserved. -MYSS</span>
					</div>
					<div class="col-md-9">
						<div class="footer-menu">
							<nav class="navbar ow-navigation">
								<div id="navbar2" class="navbar-collapse collapse">
									<ul class="nav navbar-nav">
										<router-link
										:to="`/${menu.url}`"
										:title="menu.name"
										tag="li"
										:class="{ active: menu.url === $route.name }"
										v-for="(menu, index) of getMenus"
										:key="index"
									>
										<a>{{ menu.name }}</a>
									</router-link>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
<script>
import { mapGetters } from "vuex";
import { EventBus } from "../services/event-bus.js";

export default {
  computed: {
    ...mapGetters(["getTopBanners","getMenus","getFooter","getFooterJsons"]),
  },
  created() {
    this.$store.dispatch("getFooterHandler",this.$langs);
	this.$store.dispatch("getFooterJsonsHandler",this.$langs);
  },
  mounted(){
    EventBus.$on('button-was-clicked', langId => {	
    langId = {langId}
    this.$store.dispatch("getFooterHandler", langId['langId']);
	this.$store.dispatch("getFooterJsonsHandler",langId['langId']);
  });
  }
};
</script>

