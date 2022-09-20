<template>
  <div>
    <div v-for="contact in getContactUsView" :key="contact.id">
      <!-- PageBanner -->
      <div
        class="container-fluid no-padding"
        :class="'pagebanner contactus'"
        :style="{ 'background-image': 'url(' + contact.mainImage + ')' }"
      >
        <div class="container">
          <h3>{{contact.mainHeader}}</h3>
        </div>
      </div>
      <!-- PageBanner /- -->

      <div class="container contactus-section">
        <div class="section-padding"></div>
        <div class="row">
          <div class="col-md-6 contactus-left">

            <div class="row" v-for="(ct,index) in getContactUsViewJson" :key="index" style="margin-top:50px;">
              <div class="col-md-6 col-sm-6 col-xs-6 office-add">
                <h3 class="block-title">{{contact.adressHeader}}</h3>
                <p>
                  {{contact.adressDescription}}
                </p>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6 contact-info" v-for="midb in getMidBanners" :key="midb.id">
                <h3 class="block-title">{{contact.contactHeader}}</h3>
                <p>
                  <span >
                    {{ ct['phone'] }}
                  </span>
                  <a :href="'tel:'+midb.phone" :title="midb.phone" > {{midb.phone}}</a>
                </p>
                <p>
                  <span>{{ ct['mail'] }}</span><a :href="'mailto:'+midb.mail" :title="midb.mail"> {{midb.mail}}</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 contactus-right">
            <form id="contact-form" class="contactus-form">
              <div class="row" >
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="contact-name"
                      required=""
                      class="form-control"
                      id="input_name"
                      :placeholder="contact.inputNameText"
                    />
                  </div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <input
                      type="email"
                      name="contact-email"
                      required=""
                      class="form-control"
                      id="input_email"
                      :placeholder="contact.inputMailText"
                    />
                  </div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="contact-phone"
                      required=""
                      class="form-control"
                      id="input_phone"
                      :placeholder="contact.inputPhoneText"
                    />
                  </div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <textarea
                      rows="5"
                      name="contact-message"
                      required=""
                      class="form-control"
                      id="textarea_message"
                      :placeholder="contact.inputMessageText"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <input
                      type="submit"
                      :value="contact.buttonText"
                      id="btn_submit"
                      title="Send"
                      name="post"
                    />
                  </div>
                </div>
                <div id="alert-msg" class="alert-msg"></div>
              </div>
            </form>
          </div>
        </div>
        <div class="section-padding"></div>
      </div>
    </div>


  </div>
  
</template>

<script>
import { mapGetters } from "vuex";
import { EventBus } from "../services/event-bus.js";
import Map from "./Maps.vue";





export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters([
      "getContactUsView",
      "getContactUsViewJson",
      "getMidBanners",
    ]),
    
  },
  created() {
    this.$store.dispatch("getContactUsViewHandler", this.$langs);

  },
  mounted(){
    EventBus.$on('button-was-clicked', langId => {
    langId = {langId}
    this.$store.dispatch("getContactUsViewHandler", langId['langId']);
  });

  }
};
</script>
