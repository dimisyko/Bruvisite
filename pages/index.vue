<template>
  <div>
      <TransitionPage/>
    <Header />
    <!-- Hero -->
    <section class="hero-home | animClipPath | fade">
      <div class="hero-home__container">
      <div class="hero-home__left">
          <h1 class="center-absolute"><span class="fadeY">Bienvenue <br>sur Bruvisite</span></h1>
         <BtnDown/>
      </div>
          <div class="hero-home__right">
          <div class="hero-home__thumbnail hide">
      <video
        class="hero-home__video scale-img"
        controls
        poster="imgHome/poster.webp"
      >
        <source src="~/assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
      </div>
        <figure class="hero-home__image overflow-x">
              <nuxt-img src="/imgHome/atomium-hero.webp" quality="90" sizes="sm:100vw md:100vw lg:100vw xl:1600" class="scale-img" alt="atomium-home" />
      </figure>
    </section>
     <!-- Main -->
    <main class="site-main fade" role="main">
      <section ref="intro" class="intro w-90">
        <div class="intro__svg-txt">
             <svg class="bg-circle" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	            viewBox="0 0 1325 1325" style="enable-background:new 0 0 1325 1325;" xml:space="preserve">
           <g id="Ellipse_43">
	           <circle fill="none" class="st0" cx="662.5" cy="662.5" r="662.5"/>
	          <circle fill="none" stroke="#5190B9" class="st1" cx="662.5" cy="662.5" r="662"/>
         </g>
         </svg>
            <p class="txt-tertiary">
              <span ref="split" class="split" v-for="(word, wordIndex) in arrWord" :key="wordIndex">{{ word }}</span>
            </p>
        </div>
          <figure v-for="(imgParallax, i) in dataHome.sectionIntro.imageParallax" :key="i" class="intro__img" :data-v="imgParallax.dataV" v-animate-parallax:[rotate]="5">
              <nuxt-img :src="`${imgParallax.img}`" :alt="imgParallax.alt" />
          </figure>
        
      </section>
       <!-- Section-Visite -->
      <section class="visit">
        <div class="visit__txt | w-90 | space-title">
          <h2>Le top 5 des meilleurs <br> endroits à visiter</h2>
          <nuxt-link to="/visite" class="btn-hover flex-align">    
         <div class="underline"> Voir plus </div>
          <div class="btn-right btn-tertiary">
            <svg v-for="svg in 2" :key="svg" id="Composant_13_1" data-name="Composant 13 – 1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 30.361 30.361" class="center-absolute">
              <path id="Tracé_11" data-name="Tracé 11" d="M147.969,8403.5h30.361" transform="translate(-147.969 -8388.319)" fill="none" stroke="white" stroke-width="2"/>
              <path id="Tracé_12" data-name="Tracé 12" d="M147.969,8403.5h30.361" transform="translate(-8388.32 178.329) rotate(-90)" fill="none" stroke="white" stroke-width="2"/>
           </svg>
        </div>
        </nuxt-link>
        </div>
        <div class="visit__container">
        <VisitImage v-for="(i, img) in dataHome.sectionTop5.imageContent" :key="img" 
        v-bind:image="i.img" 
        v-bind:alt="i.alt" v-bind:link="`lieu/${i.link}`" 
        v-bind:title="i.title"
        v-bind:data="i.dataV"
        />
        </div>
      </section>
      <!-- Section-Hotel-->
        <SectionHotel/>

      <!--SECTION NOCTURNE-->
      <section class="nocturnal">
        <div class="nocturnal-svg-top">
          <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	            viewBox="0 0 1918.3 288.2" style="enable-background:new 0 0 1918.3 288.2;" xml:space="preserve">
            <path id="Tracé_21" class="st0" fill="#656565" d="M0,288.2c1051.5-648.4,1918.3,0,1918.3,0H0z"/>
          </svg>
          </div>
            <div class="nocturnal__container w-90">
              <h2 class="space-title">Vie nocturne</h2>
                <div class="nocturnal__container-content">
                    <figure class="nocturnal__img-club | b-radius | clipPathLeave | d-flex | hide">
                        <nuxt-img class="parallax" :src="`${dataHome.sectionNocturne.imgNocturneClub}`" v-animate-parallax:[directionY]="5" loading="lazy" data-v="-0.2" alt="club" />
                    </figure>
                    <div class="nocturnal__right">
                      <figure class="nocturnal__img-show | b-radius | clipPathLeave | d-flex | hide">
                        <nuxt-img class="parallax" :src="`${dataHome.sectionNocturne.imgNocturneSpectale}`" v-animate-parallax:[directionY]="5" loading="lazy" data-v="-0.2" alt="spectacle" />
                      </figure>
                      <div class="nocturnal__right-txt">
                          <h3>{{dataHome.sectionNocturne.titleNocturne}}</h3>
                          <p class="txt-primary">{{dataHome.sectionNocturne.txtNocturne}}</p>
                           <nuxt-link to="/spectacles-clubs" class="flex-align | btn-hover | mg-top">    
                              <div class="underline"> Voir plus </div>
                              <div class="btn-right | btn-tertiary">
                                <svg v-for="svg in 2" :key="svg" id="Composant_13_1" data-name="Composant 13 – 1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 30.361 30.361" class="center-absolute">
                                  <path id="Tracé_11" data-name="Tracé 11" d="M147.969,8403.5h30.361" transform="translate(-147.969 -8388.319)" fill="none" stroke="white" stroke-width="2"/>
                                  <path id="Tracé_12" data-name="Tracé 12" d="M147.969,8403.5h30.361" transform="translate(-8388.32 178.329) rotate(-90)" fill="none" stroke="white" stroke-width="2"/>
                               </svg>
                            </div>
                           </nuxt-link>
                      </div>
                    </div>
                </div>
            </div>
            <div class="nocturnal-svg-bottom">
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	               viewBox="0 0 1918.3 288.2" style="enable-background:new 0 0 1918.3 288.2;" xml:space="preserve">
                 <path id="Tracé_22" class="st0" fill="#656565" d="M1918.3,0C866.7,648.4,0,0,0,0H1918.3z"/>
            </svg>
        </div>
      </section>
     <!--SECTION ABOUT-->
      <section class="about">
        <div class="about__container-img">
          <figure class="about__small-img">
             <nuxt-img src="/imgHome/waffle.webp" alt="waffle"/>
          </figure>
           <figure class="about__img-big d-flex hide">
               <nuxt-img src="/imgHome/gp_big.webp" quality="60" sizes="sm:70vw md:70vw lg:100vw xl:1920" class="parallax" alt="grand place" loading="lazy" data-v="-0.25" v-animate-parallax:[directionY]="10"/>
           </figure>
        </div>
            <div class="about__container">
          <div class="about__txt">
            <h2>A propos du site</h2>
            <p class="txt-secondary">Notre mission est de dynamiser la ville et créer des expériences uniques tant pour ses habitants que pour ses visiteurs. On voudrait étendre et renforcer l'image de Bruxelles en qualité des 500 millions d'Européens mais aussi de la positionner comme destination de vie, de loisirs et de tourisme d’affaire sur la carte nationale. Capitale de la diversité et de l’ouverture, Bruxelles est également capitale du bien-vivre et de la créativité.</p>
          </div>
            <figure class="about__img | d-flex | hide">
              <nuxt-img src="/imgHome/mont-des-arts.webp" sizes="sm:100vw md:100vw lg:100vw" v-animate-parallax:[directionY]="5" class="parallax" data-v="-0.2" alt="manneken-pis" loading="lazy"/>
            </figure>
        </div>
      </section>
      <Cta />
    </main>
    <Footer />
  </div>
</template>

<script>
import dataHome from "../data/cultureLoisir.json";
import gsap from "gsap";
export default {
  name: "Home",
  data() {
    return {
      rotate: 'rotate',
      directionY : "translateY",
      txt : "Si vous êtes à Bruxelles pendant quelques jours, Bruvisite vous montre ce que l'on peut faire.",
      arrWord : undefined,
      index : 0,
      initY : 0
    };
  },
asyncData ({ params }) {
    return { dataHome }
  },
  head() {
    return {
      title: "Accueil - Bruvisite",
    };
  },
  mounted(){
    window.addEventListener('scroll', this.scrollWord)
    this.anim()
    this.split()
  },
beforeDestroy(){
      window.removeEventListener('scroll', this.scrollWord)
},

  methods:{
    split(){
     const splitContent = this.txt.split(' ')
      this.arrWord = splitContent
    },
    scrollWord(){
	     const directionScroll = window.pageYOffset - this.initY
	     const topEl = window.pageYOffset - this.$refs.intro.offsetTop
	     const calc = (topEl / (this.$refs.intro.offsetHeight - window.innerHeight)) * this.arrWord.length
       if (topEl < 0) return
       if (directionScroll > 0) {
		if (this.index >= this.arrWord.length) return
		this.$refs.split[this.index].classList.add('visible')

		if (Math.round(calc) > this.index) {
			this.index++
		}
	} else {
		if (Math.round(calc) < this.index) {
			this.index--
		}
		if (this.index >= this.arrWord.length) return
		this.$refs.split[this.index].classList.remove('visible')
	}

	this.initY = window.pageYOffset
    },
    anim(){
         const tlHome = gsap.timeline()
   tlHome.to('.bg-transi',{
     transformOrigin : "top",
     scaleY : 0,
     duration : 1.3,
     ease : "Power4.easeInOut"
   }, "timeHome")
      tlHome.to('.txt-loader',{
        yPercent : "-100",
        duration : 0.7,
      }, "timeHome")
      tlHome.to('.animClipPath',{
        clipPath : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration : 1.5,
        ease : "Power4.easeInOut"
      }, "timeHome")
      tlHome.to(".scale-img",{
       scale : 1,
        duration : 1.8,
        ease : "Power3.easeInOut"
      },"timeHome")
      tlHome.to('.fadeY, .anim-span', {
        y : "0%",
        opacity : 1,
        stagger : 0.15,
        duration : 0.8,
      }, "-=1")
    }
  }
};
</script>
<style>
/* hero */
.hero-home{
  height: 100vh;
}
.hero-home__container{
  height: 100%;
  display: flex;
}
.hero-home__left{
position: relative;
width: 50%;
height: 100%;
border-right: 1px solid white;
}
.hero-home__left h1{
  color: white;
  width: 83%;
}
.hero-home__image::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.hero-home__image::after{
  background-color: rgba(0, 0, 0, 0.320);
}
.hero-home__image{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.hero-home__image img, .hero-home__video{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.hero-home__right {
  position: relative;
  border-top: 1px solid white;
  height: 60%;
  width: 50%;
  align-self: flex-end;
  cursor: pointer;
}
.hero-home__thumbnail {
  width: 100%;
  height: 100%;
}
.intro{
  position: relative;
  padding: 40% 0 15% 0;
  height: 300vh;
}
.split{
  display: inline-block;
  margin: 0 6px;
  opacity: 0.1;
  transition: opacity 0.5s ease;
}
.visible{
     opacity: 1;
}
.bg-circle{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 125%;
  pointer-events: none;
}
.intro__svg-txt{
    position: sticky;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  margin: auto;
  width: 65%;
}
.intro__img{
   position: absolute;
    width: 28%;
    z-index: -1;
    top: 20%;
    left: 5%;
}
.intro__img:nth-child(2){
  top: 40%;
  left: 70%;
}
.intro__img:nth-child(3){
  top: 60%;
  left: 35%;
  transform: rotate(-20deg);
  z-index: 1;
}
/* visit */
.visit{
  margin: 15% 0;
}
.visit__container, .hotel__container, .visit__txt{
  display: flex;
}
.hotel-auberge__container, .nocturnal__container-content{
    margin-top: 10%;
}
.visit__txt{
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10%;
}
/* Nocturne */
.nocturnal{
  position: relative;
  background-color: #656565;
  padding: 12% 0;
  margin-top: 3%;
}
.nocturnal__container h2{
  color: white;
  border-bottom: 1px solid white;
}
.nocturnal__container-content{
  display: flex;
  justify-content: space-between;
}
.nocturnal__img-club{
  width: 47%;
  height: 47vw;
}
.nocturnal__right{
  width: 47%;
}
.nocturnal__img-show{
  width: 100%;
  height: 25vw;
}
.nocturnal__right-txt h3{
  margin: 50px 0 30px 0;
}
.nocturnal__right-txt h3, .nocturnal__right-txt p{
  color: white;
}
.nocturnal__right-txt .underline{
    color: #ffba19;
}
.nocturnal__right-txt .underline::after{
    background-color: #ffb812;
}
/* About */
.about__container{
  display: flex;
    justify-content: space-between;
    padding: 15% 0;
}
.about__txt {
  width: 38%;
  padding: 0 5%;
}
.about__txt h2{
  margin-bottom: 18%;
  padding-bottom: 8%;
  border-bottom: 1px solid #5190B9;
}
.about__img{
    width: 48%;
    height: 45vw;
    border-radius: 50vw 0 0 50vw;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.about__container-img{
  position: relative;
 width: 100%;
  height: 110vh;
}
.about__img-big{
  width: 100%;
  height: 100%;
}
.about__small-img{
  position: absolute;
  bottom: 11%;
  right: 10%;
  width: 18%;
  z-index: 1;
  padding: 1.5% 1.5% 5% 1.5%;
  background-color: white;
}
/* responsive visit */
@media (max-width : 1200px){
  .about__txt h4{
   margin-bottom: 10%;
 }
}
@media (max-width: 1024px){
    .intro{
   padding: 70% 0;
 }
 .nocturnal__img-club{
    height: 55vw;
 }
 .about__small-img{
  display: none;
 }
}
@media (max-width : 992px){
   .hero-home__container{
    flex-direction: column;
   }
  .hero-home__left{
    width: 100%;
    border-right: none;
  }
  .hero-home__left h1{
    width: auto;
    white-space: nowrap;
  margin-top: 1.5rem;
  }
 .nocturnal__img-club{
    height: 65vw;
 }
  .btn-down{
    display: none;
  }
.hero-home__thumbnail{
    width: 100%;
    height: 100%;
  }
.hero-home__right {
    border-top: none;
    height: 43%;
    width: 100%;
  }
.space-item{
  margin-bottom: 80px;
}
  .flex{
    flex-direction: column;
  }
.nocturnal::after{
  display: none;
}
 .about__container{
   flex-direction: column;
   width: 90%;
   margin: auto;
 }
 .about__txt h3{
   margin-bottom: 50px;
 }
 .about__txt{
   width: 100%;
   background-color: #F4F4F4;
 }
 .about__txt h4{
   margin-bottom: 5%;
 }
 .about__txt{
   padding: 0;
 }
 .about__container-img{
   height: 50vh;
  margin-bottom: 20%;
 }
 .about__img{
      margin-top: 7rem;
    width: 90%;
    height: auto;
 }
}
@media (max-width: 768px){
  .nocturnal__container-content {
    flex-direction: column;
  }
  .intro p, .nocturnal__right, .nocturnal__img-club{
    width: 100%;
  }
  .visit__txt{
  flex-direction: column;
  align-items: flex-start;
}
.visit__txt h2{
  margin-bottom: 50px;
}
.nocturnal{
  padding: 7rem 0;
}
.nocturnal__right-txt{
  margin: 20px 0 50px 0;
}
.nocturnal__right{
  display: flex;
  flex-direction: column-reverse;
}
.nocturnal__img-show{
    height: 65vw;
 }
 .bg-circle{
  width: 110%;
  }
.intro__svg-txt{
  width: 100%;
}
}
@media (max-width : 576px){
  .about__img{
   width: 100%;
  }
}
</style>