<template>
  <header class="header-main container-fluid no-padding">
    <!-- SidePanel -->
    <div id="slidepanel" v-for="mb of getMidBanners" :key="mb.id">
      <!-- Top Header -->

      <div class="header-top container-fluid no-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <span style="float:left;">{{ mb.bannerText }}</span>

            </div>
            <div class="col-md-6 col-sm-6 col-xs-6" align="right">
              <button style="background-color: transparent; border: none" @click="langChange(lang.languageId)"
                v-for="lang in getLanguages" :key="lang.id" align="right">
                <span :class="'fi fi-' + lang.icon"></span>
              </button>
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
            <div class="col-md-9">
              <div class="navbar-header">
                <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse"
                  class="navbar-toggle collapsed" type="button">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a title="Logo" href="/" class="navbar-brand"></a>
                <a href="/" class="mobile-logo" title="Logo">
                  <h3>Global</h3>
                </a>
              </div>
              <div  class="navbar-collapse collapse" id="navbar" >
                <ul class="nav navbar-nav" >
                  <router-link :to="`/${menu.url}`" :title="menu.name" tag="li"
                    :class="{ active: menu.url === $route.name }" v-for="(menu, index) of getMenus" :key="index" dir="rtl">
                    <a>{{ menu.name }}</a>
                  </router-link>
                </ul>
              </div>
            </div>
          </nav>
          <!-- Navigation /- -->
        </div>
      </div>
    </div>
  </header>
  <!-- Header /- -->
</template>


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
    },
  }

};
</script>

