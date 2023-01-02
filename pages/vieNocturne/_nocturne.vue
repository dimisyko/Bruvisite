<template>
  <div class="content overflow-x">
    <Header />
    <HeroFlexi
    v-bind:title="nocturne.heroNoctune.heroTitle"
    v-bind:img="nocturne.heroNoctune.imgBg"
    v-bind:alt="nocturne.heroNoctune.heroAlt"
    />
      <BtnBack link= "/spectacles-clubs"/>
    <main class="site-main fade">
         <div class="bg-title" data-v="0.35" v-animate-parallax:[directionX]="2">
           <span class="bigTxt" v-for="bgTitle in 5" :key="bgTitle">{{nocturne.heroNoctune.heroTitle}} - </span>
          </div>
      <section class="nocturnal-intro | intro-flexi | w-90">
          <div class="nocturnal-intro__container d-flex-between">
            <h2>{{nocturne.nocturneMain.sectionIntro.spectacleTitle}}</h2>
            <div class="nocturnal-intro__txt">
              <p class="nocturnal-intro__txt-paragraph txt-secondary">{{nocturne.nocturneMain.sectionIntro.spectacleTxtSecondary}}</p>
              <p class="column txt-primary">{{nocturne.nocturneMain.sectionIntro.spectacleTxtPrimary}}</p>
            </div>
          </div>
          <figure class="nocturnal__bg-img">
              <nuxt-img :src="`${nocturne.nocturneMain.sectionIntro.bgNocturne}`" :alt="nocturne.nocturneMain.sectionIntro.bgNocturneAlt" v-animate-parallax:[rotate]="6" data-v="-0.025"/>
          </figure>
      </section>
      <section class="place">
          <div class="place__container">
            <div class="carousel">
              <div class="btn__slide">
                <div class="btn__slide-carou">
                <button type="button" aria-label="previous" class="btn-secondary btn-h hide" ref="prev" @click="prev()">
                  <svg v-for="svg in 2" :key="svg" xmlns="http://www.w3.org/2000/svg" width="13.964" height="23.642" viewBox="0 0 13.964 23.642" class="center-absolute translate">
                    <path data-name="Tracé 5" d="M286.281,2176.5l11.892,12.873,11-12.873" transform="translate(2190.125 -285.914) rotate(90)" fill="none" stroke="white" stroke-width="2"/>
                  </svg>
                </button>
                <button type="button" aria-label="next" class="btn-secondary btn-h hide" ref="next" @click="next()">
                  <svg v-for="svg in 2" :key="svg" xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13.964 23.642" class="center-absolute translate">
                    <path data-name="Tracé 5" d="M286.281,2176.5l11.892,12.873,11-12.873" transform="translate(-2176.161 309.556) rotate(-90)" fill="none" stroke="white" stroke-width="2"/>
                  </svg>
                </button>
                </div>
                <div class="count"> <div class="count-index">0{{ indexImg + 1 }} </div> / <div class="count-length">0{{ nocturne.nocturneMain.sectionPlace.placeImg.length }} </div> </div>
              </div>
          <div class="carousel__container">
              <div class="carousel__img">
                 <div ref="img" class="place__img | b-radius | hide"  v-for="(img, i) in nocturne.nocturneMain.sectionPlace.placeImg" :key="i">
                   <figure ref="move" class="flex-parallax">
                      <nuxt-img :src="`/${img.imgCarousel}`" sizes="sm:70vw md:100vw lg:1500" :alt="img.imgAlt" v-animate-parallax:[directionY]="6" class="parallax" data-v="-0.25"/>
                    </figure>
                </div>
              </div>
          </div>
          </div>
          <div class="place__txt">
            <div class="place__txt-container">
              <div class="place__txt-head d-flex-align-item">
              <h2>Comment s’y rendre</h2>
              <a :href="nocturne.nocturneMain.sectionPlace.linkSite" target="_blank" class="btn-hover flex-align" rel="noopener noreferrer">   
          <div class="underline">Plus d'info</div>
          <div class="btn-right btn-tertiary">
             <svg v-for="svg in 2" :key="svg" data-name="Composant 13 – 1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 30.361 30.361" class="center-absolute">
              <path data-name="Tracé 11" d="M147.969,8403.5h30.361" transform="translate(-147.969 -8388.319)" fill="none" stroke="white" stroke-width="2"/>
              <path data-name="Tracé 12" d="M147.969,8403.5h30.361" transform="translate(-8388.32 178.329) rotate(-90)" fill="none" stroke="white" stroke-width="2"/>
           </svg>
        </div>
   </a>
              </div>
              <div class="place__txt-wrapper">
                  <div class="place__txt-item" v-for="(info, i) in nocturne.nocturneMain.sectionPlace.infoEvent" :key="i">
                  <h4>{{info.placeTitle}}</h4>
                  <p class="txt-primary" v-for="(txt, i) in info.place" :key="i">{{txt}}</p>
                  </div>
              </div>
          </div>
          </div>
          </div>
        <div class="svg-bottom">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	               viewBox="0 0 1918.3 288.2" style="enable-background:new 0 0 1918.3 288.2;" xml:space="preserve">
                 <path class="st0" fill="#FFFFFF" d="M1918.3,0C866.7,648.4,0,0,0,0H1918.3z"/>
            </svg>
        </div>
      </section>
       <section class="another-post">
              <h2 class="w-90">A découvrir également</h2>
              <div class="visit__container">
                  <VisitImage 
               v-bind:image="dataNocturne.nocturneDetail[nextNocturne(number_nocturne - 1)].img" 
               v-bind:alt="dataNocturne.nocturneDetail[nextNocturne(number_nocturne - 1)].heroNoctune.heroAlt" 
               v-bind:link="dataNocturne.nocturneDetail[nextNocturne(number_nocturne - 1)].urlPage" 
               v-bind:title="dataNocturne.nocturneDetail[nextNocturne(number_nocturne - 1)].heroNoctune.heroTitle"/>

               
              <VisitImage 
              v-bind:image="dataNocturne.nocturneDetail[nextNocturne(number_nocturne + 1)].img" 
              v-bind:alt="dataNocturne.nocturneDetail[nextNocturne(number_nocturne + 1)].heroNoctune.heroAlt" 
              v-bind:link="dataNocturne.nocturneDetail[nextNocturne(number_nocturne + 1)].urlPage" 
              v-bind:title="dataNocturne.nocturneDetail[nextNocturne(number_nocturne + 1)].heroNoctune.heroTitle"/>
              </div>
            </section>
      <Cta />
    </main>
  </div>
</template>

<script>
import dataNocturne from "../../data/nocturne.json";
import gsap from "gsap";
export default {
  name: "DetailNocturne",
  data() {
    return {
      nocturne: {},
      number_nocturne: 0,
      indexImg : 0,
      index : 1,
      directionX: 'translateX',
      directionY : "translateY",
      rotate: 'rotate'
    };
  },
asyncData ({ params }) {
    return { dataNocturne }
  },
  head(){
      return{
          title : this.nocturne.heroNoctune.heroTitle + ' - Bruvisite'
      }
  },
  created() {
    this.loop();
  },
  mounted(){
      this.activeClass()
      this.$refs.img[0].style.zIndex = 1
  },
  computed:{
    imgLength(){
      return this.$refs.img.length
    }
  },
methods: {
animSlide(){
    const tl = gsap.timeline()
    tl.from(this.$refs.img[this.indexImg], {
        x : "100%",
        duration : 0.8
    }, "same")
    gsap.set(this.$refs.img[this.indexImg], {
        x : "100%",
    })
    tl.from(this.$refs.move[this.indexImg], {
        x : "-100%",
        duration : 0.8
    }, "same")
    gsap.set(this.$refs.move[this.indexImg], {
        x : "-100%",
    })
    this.$refs.img[this.indexImg].style.zIndex = this.index++
},
next(){
        if(this.indexImg < this.imgLength -1){
        this.indexImg++
    }else{
        this.indexImg = 0
    }
    this.animSlide()
},
 prev(){
        if(this.indexImg > 0){
        this.indexImg--
    }else{
        this.indexImg = this.imgLength -1
    }
    this.animSlide()
},

    loop() {
    this.nocturne = this.dataNocturne.nocturneDetail.find( data => data.urlPage === this.$route.params.nocturne)
    this.number_nocturne = this.dataNocturne.nocturneDetail.indexOf(this.nocturne)
    },
    activeClass(){
           const link =  document.querySelectorAll('.nav-link')
         link[4].classList.add('nuxt-link-exact-active')
    },
     nextNocturne(number_nocturne){
      if(number_nocturne < 0){
        return this.dataNocturne.nocturneDetail.length - 1
      }else if(number_nocturne > this.dataNocturne.nocturneDetail.length - 1){
        return 0
      }else{
        return number_nocturne
      }
    },
  },
};
</script>

<style>
.nocturnal-intro{
  position: relative;
}
.nocturnal-intro__container h2{
  width: 30%;
}
.nocturnal__bg-img{
  width: 11%;
  opacity: 0.2;
}
.nocturnal-intro__txt{
  width: 45%;
}
.nocturnal-intro__txt .column{
  columns: 2;
  column-gap: 80px;
}
.nocturnal-intro__txt-paragraph{
  margin-bottom: 70px;
}
.place{
position: relative;
 margin: 10% auto 17% auto;
}
.place__txt{
  position: relative;
  background-color: white;
  padding-bottom: 10rem;
}
.place__txt::after{
  content: '';
  position: absolute;
  top: -40%;;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: -1;
}
.place__txt-head{
    padding: 15% 0 5% 0;
    border-bottom: 1px solid #5190B9;
}
.place__txt-container{
  margin: 0 5% 0 auto;
  width: 67%;
  margin-left: auto;
}
.carousel, .carousel__img, .btn__slide, .btn__slide-carou{
  display: flex;
  align-items: flex-end;
}
.flex-parallax{
  display: flex;
  align-items: center;
  height: 100%;
}
.count{
  display: flex;
  font-family: 'Poppins';
}
.btn__slide-carou{
  column-gap: 30px;
  justify-content: center;
}
.btn__slide{
  width: 18%;
  margin-left: auto;
  justify-content: space-between;
}
.carousel__container{
   width: 72%;
    height: 40vw;
   margin-left: auto;
}
.carousel__img{
  position: relative;
    width: 100%;
    height: 100%;
}
.place__img{
  position: absolute;
  width: 100%;
  height: 100%;
}
.place__txt-wrapper{
  display: flex;
  margin-top: 10%;
}
.place__txt-item:nth-child(1){
  margin-right: 15%;
  position: relative;
}
.place__txt-item:nth-child(1) h4::before,.place__txt-item:nth-child(2) h4::before{
  margin-right: 10px;
}
.place__txt-item:nth-child(1) h4::before{
content:url("~/assets/icon/marker.svg");
}
.place__txt-item:nth-child(2) h4::before{
content:url("~/assets/icon/train.svg");
}
.place__txt-item h4{
  color: #5190B9;
  margin-bottom: 25px;
}

@media (max-width: 1024px){
    .carousel {
    width: 90%;
    margin: auto;
    flex-direction: column-reverse;
  }
  .nocturnal-intro__txt{
    width: 50%;
  }
  .nocturnal-intro__txt .column{
    columns: 1;
  }
  .carousel__container, .btn__slide{
    width: 100%;
  }
  .btn__slide{
    margin: 80px 0 0 0;
      align-items: center;
  }
}
@media (max-width: 992px){
.place{
   margin: 20% auto 17% auto;
}
  .place__txt-wrapper{
    justify-content: space-between;
  }
  .carousel__container{
    height: 50vw;
  }
.nocturnal__bg-img{
  display: none;
}
}
@media (max-width: 768px){
  .nocturnal-intro__container{
    flex-direction: column;
  }
  .place__txt-container{
    width: 90%;
  }
  .place__txt-head{
    flex-direction: column;
    align-items: flex-start;
  }
  .nocturnal-intro__container h2, .nocturnal-intro__txt{
    width: 100%;
  }
  .carousel__container{
    height: 65vw;
  }
  .nocturnal-intro__txt-paragraph{
    margin-bottom: 20px;
  }
  .nocturnal-intro__container h2, .place__txt-head h2{
    margin-bottom: 60px;
  }
}
@media (max-width: 568px){
  .place__txt::after{
    display: none;
  }
  .place__txt-item{
    margin-top: 50px;
  }
  .btn__slide{
    margin: 50px 0;
  }
  .place__txt-wrapper{
    flex-direction: column;
  }
}
</style>