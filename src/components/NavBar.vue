<template>
  <header class="header-main container-fluid no-padding">
    <!-- SidePanel -->
    <div id="slidepanel" v-for="mb of getMidBanners" :key="mb.id">
      <!-- Top Header -->

      <div class="header-top container-fluid no-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <span style="position: relative;">{{ mb.bannerText }}</span>
              <div class="col-lg-2" align="right">
                <button
                style="background-color: transparent; border: none"
                @click="langChange(lang.languageId)"
                v-for="lang in getLanguages"
                :key="lang.id"
                >
                <span :class="'fi fi-' + lang.icon"></span>
              </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- Top Header /- -->
      <!-- Middle Header /- -->
      <div class="container header-middle">
        <div class="row">
          <div class="col-md-3">
            <div class="logo-block">
              <router-link :to="'/home'" alt="logo" height="90" width="300">
                <a>
                  <img :src="mb.logo" />
                </a>
              </router-link>
            </div>
          </div>
          <div class="col-md-9 col-sm-12 col-xs-12">
            <div class="header-contactinfo-block">
              <div class="contactinfo-box">
                <span :class="'icon icon-' + mb.icons"></span>
                <p>
                  <a :href="'tel:' + mb.phone" :title="mb.phone">{{
                  mb.phone
                  }}</a>
                  <a :href="'mailto:' + mb.mail" :title="mb.mail">{{
                  mb.mail
                  }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Middle Header /- -->
    </div>
    <!-- SidePanel /- -->
    <div class="menu-block">
		<div class="container">
			<div class="row">
				<!-- Navigation -->
				<nav class="navbar ow-navigation">
					<div id="loginpanel" class="desktop-hide">
						<div class="right" id="toggle">
							<a id="slideit" href="#slidepanel"><i class="fo-icons fa fa-inbox"></i></a>
							<a id="closeit" href="#slidepanel"><i class="fo-icons fa fa-close"></i></a>
						</div>
					</div>
					<div class="col-md-12">
						<div class="navbar-header">
							<button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
              <a class="navbar-brand"></a>
              <router-link :to="'/home'" alt="logo" height="90" width="300" title="logo">
							    <a class="mobile-logo"><h3>Everyday Travel</h3></a>
              </router-link>
						</div>
						<div class="navbar-collapse collapse" id="navbar">
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
					</div>
				</nav><!-- Navigation /- -->
			</div>
		</div>
	</div>

  </header>
  <!-- Header /- -->
</template>

<style>
.col-lg-2{
  position: relative;
  float:right;
}
</style>

<script>

import { mapGetters } from "vuex";
import { EventBus } from "../services/event-bus.js";
import Vue from "vue";
Vue.prototype.$langs = 1;
Vue.prototype.$languageName = [];

export default {
  data() {
    return {
      langId: 1,
    };
  },
  created() {
    this.$store.dispatch("getMenusHandler", 1);
    this.$store.dispatch("getMidBannersHandler", 1);
    this.$store.dispatch("getTopBannersHandler");
    this.$store.dispatch("getLanguagesHandler");
  },
  computed: {
    ...mapGetters([
      "getMenus",
      "getMidBanners",
      "getTopBanners",
      "getLanguages",
    ]),
  },
  methods: {
    langChange(langId) {
      this.$store.getters.getLanguages.forEach(
        function (langItem) {
          langId = langItem.languageId;
        },
        Vue.prototype.$langs = langId,
        this.$store.dispatch("getMenusHandler", langId),
        this.$store.dispatch("getMidBannersHandler", langId),
        EventBus.$emit('button-was-clicked', langId),
      );
      if(this.$langs === 3) {
          const style = document.createElement('style');
          style.innerHTML = `
          .navbar-nav>li {
            float: right!important;
            
          }
          .navbar-nav>li:first-child {
            margin-right:-11px!important;
            
          }
          .navbar-collapse.collapse{
            float: right!important;

          }
          .ftr-widget .widget-title::after{
            right:0!important;
          }
          .header-top span{
            float: right!important;
          }
          .col-lg-2{
            float:left!important;
          }
          `;
          document.head.appendChild(style);
        }
        else{
          const style = document.createElement('style');
          style.innerHTML = `
          .navbar-nav>li {
            float: left!important;
          }
          .navbar-collapse.collapse{
            float: left!important;
            margin-left:0px!important;
          }
          .header-top span{
            float: left!important;
          }
          .col-lg-2{
            float:right!important;
          }
          .navbar-nav>li:first-child {
            margin-right:100px!important;
          }
          `;
          document.head.appendChild(style);
        }
    },
  }

};
</script>

