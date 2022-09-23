<template>
  <section class="flexipage fade" @mousemove="imgParallax($event)">
    <h1 class="flexipage__title | center-absolute | hide | w-90"><span class="anim-span">{{ title }}</span></h1>
    <div class="image__flexipage animClipPath">
      <figure ref="Tparallax" class="Tparallax">
          <nuxt-img :src="`/${img}`" quality="90" sizes="sm:100vw md:100vw lg:100vw xl:1600" class="scale-img" :alt="alt" />
      </figure>
    </div>
    <BtnDown/>

  </section>
</template>

<script>
import gsap from "gsap"
export default {
  name: "HeroFlexi",
  props: ["title", "imgResponsive", "img", "alt"],
  data(){
    return{
       posX : 0,
       posY : 0,
       ease : 8,
       newPosX : 0,
       newPosY : 0,
       raf : undefined
    }
  },
  
  mounted(){
    this.anim()
    this.lerp()
  },
  beforeDestroy(){
      cancelAnimationFrame(this.raf)
  },
  methods :{
    anim(){
      const tlFlexipage = gsap.timeline()
      tlFlexipage.to('.bg-transi',{
     transformOrigin : "top",
     scaleY : 0,
     duration : 1.3,
     ease : "Power4.easeInOut"
   }, "timeFlexi")
      tlFlexipage.to('.txt-loader',{
        yPercent : "-100",
        duration : 0.7,
      }, "timeFlexi")
      tlFlexipage.to('.animClipPath',{
        clipPath : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration : 1.5,
        ease : "Power4.easeInOut"
      }, "timeFlexi")
      tlFlexipage.to(".scale-img",{
       scale : 1.1,
        duration : 1.8,
        ease : "Power3.easeInOut"
      }, "timeFlexi")
      tlFlexipage.to('.fadeY, .anim-span', {
        y : "0%",
        stagger : 0.15,
        opacity : 1,
        duration : 1,
      }, "timeFlexi")
    },
    imgParallax(e){
      if(window.innerWidth > 1025){
          this.posX = (e.clientX - window.innerWidth * 0.3) / 100
            this.posY = (e.clientY - window.innerHeight * 0.3) / 100
      }
      },
      lerp(){
              this.newPosX+= (this.posX - this.newPosX) / this.ease
              this.newPosY+= (this.posY - this.newPosY) / this.ease
              this.$refs.Tparallax.style.transform = 'translate3d('+(this.newPosX * 3)+'px,'+(this.newPosY * 3)+'px, 0px)'
             this.raf = window.requestAnimationFrame(this.lerp)
        }
  }
};
</script>

<style>
.flexipage {
  position: relative;
  height: 100vh
}
.flexipage .Tparallax{
  display: block;
  height: 100%;
}
.flexipage__title {
  color: white;
  text-align: center;
}
.image__flexipage {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.image__flexipage::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.400);
  z-index: 1;
}
</style>