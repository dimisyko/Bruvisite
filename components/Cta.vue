<template>
  <section class="cta hide">
      <FormContact v-on:close="closeForm()"/>
      <div class="bg-img-atomium bg-img"></div>
      <h2 class="cta__title">Une question ? Contactez-nous</h2>
      <button type="button" class="flex-align | btn-h | btn-hover" aria-label="openForm" @click="openForm()">
        <div class="btn-primary">
          <span
            v-for="txtSpan in 2"
            :key="txtSpan"
            class="btn-primary__txt translate"
            >Contact</span
          >
        </div>
      </button>
      <div class="bg-img-manneken bg-img"></div>
  </section>
</template>

<script>
import gsap from "gsap"
export default {
  name: "Cta",
  methods :{
     openForm(){
      const tlOpenForm = gsap.timeline()
      tlOpenForm.to('.modal-contact__left, .contact-info',{
        clipPath : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease : "Power2.easeInOut",
        duration : 1,
      }, "a")
      tlOpenForm.to("body",{
       overflow : 'hidden'
      },"a");
      tlOpenForm.to(".modal-contact", {
          overflow: "auto",
          zIndex : 6
      }, "a")
      tlOpenForm.to('.fadeContact', {
        y : "0%",
        opacity : 1,
        stagger : 0.1,
        duration : 0.8,
      }, "same")
      tlOpenForm.to(".line-input",{
        width : "100%",
        stagger : 0.1,
         duration : 0.8,
      }, "same")
    },
     closeForm(){
    const tlCloseForm = gsap.timeline()
    tlCloseForm .to('.fadeContact', {
        y : "50%",
        opacity : 0,
        stagger : 0.1,
        duration : 0.8,
      }, "same")
      tlCloseForm .to(".line-input",{
        width : "0%",
        stagger : 0.1,
         duration : 0.8,
      }, "same")
    tlCloseForm .to('.modal-contact__left, .contact-info',{
        clipPath : "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
        ease : "Power2.easeInOut",
        duration : 1
      }, "-=0.8")
      tlCloseForm.to("body",{
       overflow : 'auto'
      }, "a");
      tlCloseForm.to(".modal-contact", {
          overflow: "initial",
          zIndex : "-1"
      }, "a")
    }
  }
};
</script>

<style>
.cta {
  position: relative;
  padding: 13% 0;
  background-color: #F4F4F4;
}
.cta__title {
  color: #5190b9;
  text-align: center;
  width: 30%;
  margin: 0 auto 3% auto;
}
.cta .btn-hover {
  margin: auto;
}
.bg-img-atomium {
  background-image: url(~/assets/img-bg/atomium.webp);
  top: 25%;
  left: -10%;
  background-size: 42%;
  opacity: 0.12;
}
.bg-img-manneken {
  background-image: url(~/assets/img-bg/Bruxelles_Manneken_Pis.webp);
  top: -5%;
  left: 83%;
  opacity: 0.12;
  background-size: 25%;
}

/* responsive */
@media (max-width: 1200px) {
  .cta__title {
    width: 400px;
    margin: 0 auto 5% auto;
  }
}
@media (max-width: 768px) {
  .cta {
    padding: 15% 0;
  }
  .bg-img-manneken {
    background-size: 30%;
    left: 80%;
  }
  .bg-img-atomium {
    background-size: 40%;
    top: 50%;
  }
}
@media (max-width: 576px) {
  .cta__title {
    width: 300px;
  }
  .bg-img-manneken,
  .bg-img-atomium {
    display: none;
  }
  .cta {
    padding: 25% 0;
  }
}
</style>