<template>
  <section class="hero fade">
    <p class="thematique | txt-primary | fadeY">{{subTitle}}</p>
    <div class="hero__container d-flex-between">
      <div class="hero__left">
        <h1 class="fadeY">{{ title }}</h1>
            <div class="line"></div>
        <p class="hero__paragraph | txt-primary | fadeY">{{ paragraphe }}</p>
        <BtnDown/>
      </div>
          <figure class="hero__right | animClipPath | hide">
             <nuxt-img :src="`/${img}`" sizes="sm:70vw md:100vw lg:100vw" class="scale-img" :alt="alt" />
           </figure>
    </div>
      <div :class="classSvg">
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	               viewBox="0 0 1918.3 288.2" style="enable-background:new 0 0 1918.3 288.2;" xml:space="preserve">
                 <path id="Tracé_22" class="st0" fill="#5190B9" d="M1918.3,0C866.7,648.4,0,0,0,0H1918.3z"/>
            </svg>
        </div>
  </section>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Hero",
  props: ["title", "subTitle","paragraphe", "img", "alt", "classSvg"],
  mounted(){
    this.anim()
  },
  methods :{
      anim(){
      const tlHero = gsap.timeline()
      tlHero.to('.bg-transi',{
     transformOrigin : "top",
     scaleY : 0,
     duration : 1.3,
     ease : "Power4.easeInOut"
   })
      tlHero.to('.txt-loader',{
        yPercent : "-100",
        duration : 0.7,
      }, "-=1.2")
      tlHero.to('.fadeY, .anim-span, .line', {
        y : "0%",
        opacity : 1,
        stagger : 0.15,
        duration : 0.8,
      }, "-=1.2")
      tlHero.to('.animClipPath',{
        clipPath : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration : 1.5,
        ease : "Power4.easeInOut"
      },"-=1.8")
      tlHero.to('.scale-img',{
        scale : 1,
        delay : 0.5,
        duration : 1
      },"-=1.8")
      }
  }
};
</script>

<style>
.hero{
  position: relative;
  width: 100vw;
  flex-shrink: 0;
  background-color: #5190B9;
}
.hero-svg-bottom{
  position: absolute;
  width: 100%;
  top: 99.9%;
  z-index: 1;
}
.hero .thematique{
  color: white;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
}
.hero .thematique::after{
    content: "";
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 50px;
  background-color: white;
}
.hero__container{
    height: 100vh;
  width: 90%;
  margin: auto;
  padding-bottom: 5rem;
}
.hero__left{
  position: relative;
  width: 42%;
  height: 100%;
    display: flex;
  justify-content: center;
  flex-direction: column;
}
.line{
  width: 80px;
  height: 1px;
  background-color: white;
  transform: scaleX(1);
  transform-origin: right;
    margin-bottom: 8%;
    opacity: 0;
}
.hero__left h1{
  width: 95%;
  margin-bottom: 8%;
  color: white;
}
.hero__paragraph{
 width: 80%;
 color: white
}
.hero__right{
  width: 43%;
  height: 67%;
  align-self: flex-end;
  border: 1px solid white;
  border-bottom: none;
  padding: 4.7% 4.7% 0 4.7%;
}
.hero__right, .hero__right img{
  border-top-left-radius: 100vw;
  border-top-right-radius: 100vw;
}
.hero__arrow svg, .social svg{
  z-index: 1;
  pointer-events: none;
}
@media (max-width : 1024px){
  .hero__paragraph{
    width: 100%;
  }
}
/* responsive */
@media (max-width: 992px){
  .hero__container{
    flex-direction: column;
    height: auto;
  }
  .hero__left{
      height: 50%; 
       width: 100%; 
       display: block;
       padding: 13rem 0 4rem 0;
  }
  .hero__txt h1, .hero__paragraph{
    width: 100%;
  }
  .hero__right{
    width: 70%;
    margin: auto;
  }
  .hero__txt{
    width: 90%;
  }
  .btn-down{
    display: none;
  }
  .hero__thumbnail-video{
  bottom: 4px;
}
}
@media (max-width: 576px){
   .hero__left{
    padding: 11rem 0 4rem 0;
  }
}
</style>