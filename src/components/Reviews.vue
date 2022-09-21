<template>
  <div class="itemsy">
    <div class="cards">
      <div class="card-body">
        <h4 class="card-title">
          <img
            src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
          />
        </h4>
        <div class="template-demo">
          <p>
            This MacBook has excellent processing speed. The screen is crystal
            clear and I really enjoy the touchbar. I set up the fingerprint
            reader.
          </p>
        </div>


        <hr style="background-color:red;height:1px;" />
        <div class="row">
          
          <div class="col-sm-10">
            <div class="profile">
              <h4 class="cust-name">Christian Isla</h4>
              
              <p class="cust-profession">Android Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@media (max-width: 991.98px) {
  .padding {
    padding: 1.5rem;
  }
}

@media (max-width: 767.98px) {
  .padding {
    padding: 1rem;
  }
}
.template-demo {

  width:auto;
  height:auto;
  font-family: 'Times New Roman', Times, serif;
  text-align:center;
}


.card-title{

  width:75px;
  height:75px;
  text-align:center;
  margin-left:125px;
}
.padding {
  padding: 5rem;
}

.cards {
  position: relative;
  display: flex;
  width: 350px;
  height:300px;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  border: 1px solid #a91818;
  border-radius: 11px;
  -webkit-box-shadow: 0px 0px 5px 0px rgb(249, 249, 250);
  -moz-box-shadow: 0px 0px 5px 0px rgba(212, 182, 212, 1);
  box-shadow: 0px 0px 5px 0px rgb(130, 128, 128);
}

.cards .card-body {
  padding: 1rem 1rem;

}


.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

h4 {
  line-height: 0.2 !important;
}
.profile {
  margin-top: 16px;
  margin-left: 11px;
}
.profile-pic {
  width: 58px;
}
.cust-name {
  font-size: 14px;
}
.cust-profession {
  font-size: 10px;
}
.itemsy {
  width: 90%;
  margin: 0px auto;
  margin-top: 100px;
}

.slick-slide {
  margin: 10px;
}
</style>
<script>

export default {

  methods: {
  
    },
  mounted() {
  },
};
</script>