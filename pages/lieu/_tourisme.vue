<template>

    <div class="all overflow-x">
       <TransitionPage/>
    <Header />
      <HeroFlexi 
      v-bind:title="visit.detailTitre"
      v-bind:img="visit.detail.imgDetail"
      v-bind:alt="visit.detail.imgDetailAlt"
      />
      <BtnBack link= "/visite"/>
         <main class="site-main fade" role="main">
          <div class="bg-title" data-v="0.35" v-animate-parallax:[directionX]="2">
           <span class="bigTxt" v-for="bgTitle in 3" :key="bgTitle"> {{visit.detailTitre}} - </span>
           </div>
            <section class="history | intro-flexi | w-90">
              <div class="history__container d-flex-between">
                <div class="history__left">
                   <h2>{{visit.detail.sectionInfo.titleInfo}}</h2>
                   <p class="txt-primary">{{visit.detail.sectionInfo.paragraphInfo}}</p>
                </div>
                <figure class="history__image hide" data-v="0.1" v-animate-parallax:[directionY]="8">
                     <nuxt-img :src="`/${visit.detail.sectionInfo.imgInfo}`" sizes="sm:70vw md:100vw lg:100vw" :alt="visit.detail.imgDetailAlt"/>
                </figure>
                </div>
            </section>
            <section class="info hide">
              <div class="bg-img-detail bg-img" :style="{ backgroundImage: `url(${require(`~/assets/img-bg/${visit.detail.sectionInfo.bgImage}`)})`,}">
              </div>
                <div class="info__container">
                    <h2>{{visit.detail.sectionHistory.titleHistory}}</h2>
                    <p class="txt-primary">{{visit.detail.sectionHistory.paragraphHistory}}</p>
                </div>
            </section>
            <section class="public-transport w-90">
              <h2 class="space-title">{{visit.detail.sectionPublicTransport.titleTransport}}</h2>
              <div class="public-transport__container">
                <div class="public-transport__card d-flex-between" v-for="(item, i) in visit.detail.sectionPublicTransport.publicTransport" :key="i" :data-v="item.dataV" v-animate-parallax:[directionY]="6">
                  <div class="public-transport__card--head">
                    <div class="public-transport__card--title d-flex-between">
                    <h3>{{item.transport}}</h3>
                      <figure class="public-transport__picto">
                          <img :src="require(`~/assets/${item.svgTransport}`)" alt="picto transport en commun"/>
                      </figure>
                    </div>
                    <p class="public-transport__card--txt txt-primary">{{item.numberTransport}}</p>
                    </div>
                    <div class="public-transport__card--footer d-flex-align-item">
                      <p class="txt-primary">{{item.infoTransport}}</p>
                      <a :href="item.link" class="external-site btn-h btn-secondary" target="_blank" rel="noopener noreferrer"><span v-for="(i, link) in 2" :key="link" class="btn-primary__txt translate">{{item.linkValue}}</span></a>
                    </div>
                </div>
              </div>
              <figure class="public-transport__img" data-v="-0.7" v-animate-parallax:[directionX]="3">
                    <nuxt-img src="/imgTourisme/detail/bus.webp" alt="bus stib"/>  
              </figure>
            </section>
            <section class="accordeon">
              <div class="accordeon-svg-top">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                   viewBox="0 0 1918.3 288.2" style="enable-background:new 0 0 1918.3 288.2;" xml:space="preserve">
                    <path class="st0" fill="#FFFFFF" d="M0,288.2c1051.5-648.4,1918.3,0,1918.3,0H0z"/>
                </svg>
              </div>
              <div class="accordeon__bloc w-90">
                <h2>Les bars et restaurants <br> des alentours </h2>
                <div class="accordeon__container">
                <div class="accordeon__wrapper" ref="accordeon" v-for="(barResto, i) in visit.detail.accordeon" :key="i" v-on:click="accordeon($event, i)">
                  <div class="accordeon__head d-flex-align-item">
                    <h4>{{barResto.listAccordeon.length + " " + barResto.titleAccordeon}}</h4>
                    <div class="cross" ref="rotateCross">
                      <svg id="more" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 55.331 57.04">
                      <line data-name="Ligne 8" x2="55.331" transform="translate(0 28.52)" fill="none" stroke="#5190B9" stroke-width="2"/>
                       <line data-name="Ligne 9" y2="57.04" transform="translate(27.665)" fill="none" stroke="#5190B9" stroke-width="2"/>
                      </svg>
                    </div>
                  </div>
                    <ul class="accordeon__list hide" ref="list">
                        <li v-for="(list, item) in barResto.listAccordeon" :key="item">
                          <a class="accordeon__list-link" :href="list.listLink" target="_blank" rel="noopener noreferrer">
                            <div class="accordeon__list-txt">
                              <h5>{{list.listName}}</h5>
                              <p class="txt-primary">{{list.infoAccordeon}}</p>
                              <p class="txt-primary">Tel : {{list.telAccordeon}}</p>
                              </div>
                            <figure class="accordeon__list-img hide">
                               <nuxt-img :src="`/${list.imgAccordeon}`" :alt="list.altImgAccordeon"/>  
                            </figure>
                            </a>
                          </li>
                    </ul>
                </div>
                </div>
                </div>
              <div class="accordeon-svg-bottom">
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
               v-bind:image="dataCulture.detailPage[nextVisit(number_visit - 1)].img" 
               v-bind:alt="dataCulture.detailPage[nextVisit(number_visit - 1)].detail.imgDetailAlt" 
               v-bind:link="dataCulture.detailPage[nextVisit(number_visit - 1)].urlPage" 
               v-bind:title="dataCulture.detailPage[nextVisit(number_visit - 1)].detailTitre"/>

               
              <VisitImage 
              v-bind:image="dataCulture.detailPage[nextVisit(number_visit + 1)].img" 
              v-bind:alt="dataCulture.detailPage[nextVisit(number_visit + 1)].detail.imgDetailAlt" 
              v-bind:link="dataCulture.detailPage[nextVisit(number_visit + 1)].urlPage" 
              v-bind:title="dataCulture.detailPage[nextVisit(number_visit + 1)].detailTitre"/>
              </div>
            </section>
             <Cta/>
           </main>
         <Footer/>
     </div>
</template>

<script>
import dataCulture from "../../data/cultureLoisir.json";
export default {
  name: "DetailTourisme",
  data() {
    return {
      visit : {},
      number_visit : 0,
      directionX: 'translateX',
      directionY : "translateY"
    };
  },
asyncData ({ params }) {
    return { dataCulture }
  },
  head(){
    return{
      title : this.visit.detailTitre + ' - Bruvisite'
    }
  },
  created(){
      this.loop();
  },
  mounted() {
    this.activeClass();
  },
  methods: {
    loop() {
      this.dataCulture.detailPage.forEach((el, index) => {
         if (el.urlPage === this.$route.params.tourisme) {
          this.visit = el;
          this.number_visit = index
        }
      });
    },
    accordeon(e, i){
          if (this.$refs.accordeon[i].classList.toggle('active')) {
             this.$refs.list[i].style.maxHeight = this.$refs.list[i].scrollHeight + 'px'
             this.$refs.rotateCross[i].style.transform = "rotate(135deg)"
          } else {
              this.$refs.list[i].style.maxHeight = '0px'
              this.$refs.rotateCross[i].style.transform = "rotate(0deg)"
          }
          for (let a = 0; a < this.$refs.accordeon.length; a++) {
              if(this.$refs.accordeon[a] != e.target) {
                  this.$refs.accordeon[a].classList.remove('active')
                  this.$refs.list[a].style.maxHeight = '0px'
                  this.$refs.rotateCross[a].style.transform = "rotate(0deg)"
              }
          }
    },
    activeClass(){
     const link =  document.querySelectorAll('.nav-link')
        link[1].classList.add('nuxt-link-exact-active')
    },
    nextVisit(number_visit){
      if(number_visit < 0){
        return this.dataCulture.detailPage.length - 1
      }else if(number_visit > this.dataCulture.detailPage.length - 1){
        return 0
      }else{
        return number_visit
      }
    },
  },
};
</script>

<style>
  .history__left{
    width: 50%;
  }
  .history h2{
    width: 75%;
    margin-bottom: 15%;
  }
  .history p{
    padding-left: 15%;
  }
  .history__image{
    width: 42%;
    height: 47vw;
      border-top-left-radius: 50vw;
    border-top-right-radius: 50vw;
    will-change: transform;
  }
  /*info*/
  .info{
    position: relative;
    margin-top: -9%;
    background-color: white;
    width: 70%;
  }
  .bg-img-detail{
  background-position: left bottom;
  opacity: 0.05;
}
  .info__container{
    padding: 13% 15%;
  }
  .info__container h2{
     margin-bottom: 12%;
  }
  .info__container p{
      columns: 2;
      column-gap: 12%;
  }
/* public transport */
.public-transport{
  margin: 15% auto;
}
.public-transport__container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin-top: 10%;
}
.public-transport__picto{
  width: 9%;
}
.public-transport__card{
height: 23vw;
    padding: 10vw 3vw;
    border: 1px solid #5190B9;
    border-radius: 50vw;
    flex-direction: column;
}
.public-transport__card--title{
  padding-bottom: 20px;
   border-bottom: 1px solid #5190B9;
   align-items: flex-end;
}
.public-transport__card h3, .public-transport__card--txt, .index-transport, .accordeon__head h4{
  color: #5190B9;
}
.public-transport__card--txt{
  margin-top: 25px;
}
.public-transport__img{
  width: 40%;
  margin: 12% auto 0;
  will-change: transform;
}
/* Accordeon */
.accordeon{
  position: relative;
  background-color: white;
  margin: 30% auto 32% auto;
}
.accordeon__bloc{
  padding: 12% 0;
}
.accordeon-svg-top, .accordeon-svg-bottom{
 position: absolute;
    z-index: -1;
    width: 100%;
}
.accordeon-svg-top{
    bottom: 99.2%;
}
.accordeon-svg-bottom{
  top: 99.5%;
}
.accordeon__container{
  width: 65%;
  margin: 10% 0 0 auto;
}
.accordeon__wrapper{
  cursor: pointer;
  border-top: 1px solid #5190B9;
  border-bottom: 1px solid #5190B9;
}
.accordeon__wrapper:hover svg, .accordeon__wrapper h4{
  transition: 0.4s;
}
.accordeon__wrapper:hover svg{
  transform: rotate(180deg);
}
.accordeon__wrapper:hover h4{
  padding-left: 2%;
}
.accordeon__wrapper:last-child{
    border-top: none
}
.accordeon__head{
  pointer-events:  none;
  padding: 7% 0;
}
.accordeon__list-link:hover .accordeon__list-img img{
  transform: scale(1.15);
}
.accordeon__list-txt h5{
  color: #5190B9
}
.accordeon__head:last-child{
    border-top: none
}
.accordeon__list{
  max-height: 0px;
  transition: 0.7s;
  line-height: 2;
}
.accordeon__list li{
 border-bottom: 0.9px solid #5190B9;
}
.accordeon__list li:last-child{
   border-bottom: none 
}
.accordeon__list a{
  display: flex;
  justify-content: space-between;
  color: black;
  padding: 40px 0;
}
.accordeon__list-img{
  width: 15%;
  height: 100%;
}
.cross{
  transition: 0.5s;
}
.another-post{
  margin-top: 15%;
}
/* another post */
@media (max-width: 1200px){
  .history h2{
    width: 100%;
    margin-bottom: 50px;
  }
  .history p{
    padding-left: 0;
  }
  .info__container p{
    columns: 1;
  }
  .public-transport__container{
      grid-template-columns: repeat(2, 1fr);
  }
  .public-transport__card{
    height: 40vh;
    padding: 10vw 6vw;
  }
  .info{
    margin-top: 0;
    width: 100%;
  }
}
@media (max-width : 1024px){
  .info{
    margin-top: 80px;
    width: 100%;
  }
  .public-transport__card{
    height: 40vh;
    padding: 10vw 7vw;
  }
}
@media (max-width: 992px){
.public-transport__card{
    height: 30vh;
    padding: 10vw 17vw;
  }
  .public-transport__img{
    margin: 80px auto 0;
  }
  .history{
    margin-bottom: 25%;
  }
  .public-transport h2{
    margin-bottom: 50px;
  }
    .public-transport__container{
      grid-template-columns: repeat(1, 1fr);
      margin-top: 70px;
  }
  .accordeon__container, .public-transport__img{
    width: 100%;
  }
}
@media (max-width : 768px){
  .info__container {
    padding: 13% 0;
    width: 90%;
    margin: auto;
  }
  .bg-img{
    display: none;
  }
  .history__container{
   flex-direction: column;
  }
  .history__left, .history__image{
    width: 100%;
    height: 100%;
  }
  .history__image{
    margin-top: 50px;
  }
  .accordeon__bloc{
    padding: 25% 0;
  }
.accordeon h2{
  padding-bottom: 50px;
  pointer-events:  none;
}
}
@media (max-width : 568px){
  .public-transport, .accordeon{
    margin: 25% auto;
  }
 .public-transport__card{
    height: 50vh;
    padding: 20vw 15vw;
  }
  .external-site{
    margin-top: 20px;
  }
  .accordeon__bloc{
    padding: 30% 0;
  }
  .accordeon__head{
    padding: 50px 0;
  }
  .accordeon__list-img {
    width: 30%;
  }
}
@media (max-width: 370px){
    .public-transport__card--footer{
    flex-direction: column;
    align-items: flex-start;
  }
  .accordeon__list a{
       flex-direction: column-reverse;
  }
  .accordeon__list-img{
    width: 150px;
    margin-bottom: 20px;
  }
}
</style>