<template>
  <div class="content overflow-x">
    <Header />
      <Hero
        title="Spectacles / Clubs"
        subTitle="Thématique : Vie nocturne"
        paragraphe="La scène bruxelloise fait rimer qualité avec diversité : d’ici et d’ailleurs, ultra branchée, populaire ou très classique. Pour les très grands et les tout petits."
        img="imgNocturne/spectacle.webp"
        alt="spectacle"
        classSvg="hero-svg-bottom"
      />
      <main class="site-main | nocturnal-main | fade">
        <section class="nocturne__container flex w-90">
          <div class="nocturnal__filter">
              <h3>Filtrer par :</h3>
              <ul class="txt-primary mg-top">
                <li v-for="(link, i) in filterLink" :key="i" class="btn-filter btn-hover"
                :class="{active: currentTab === i}" @click="selectFilter($event), currentTab = i"><div class="underline">{{link}}</div></li>
              </ul>
          </div>
          <div ref="scrollTop" class="nocturnal__event">
              <p class="result txt-tertiary">{{tab.length}} résultats</p>
            <Nocturnal 
            v-for="(item, i) in tab" :key="i"
            v-bind:img="item.nocturnalImg"
            v-bind:alt="item.nocturnalTitle"
            v-bind:title="item.nocturnalTitle"
            v-bind:txt="item.nocturnalTxt"
            v-bind:path="item.nocturnalLink"
            v-bind:data="item.dataV"
            btn="En savoir plus"
            />
          </div>
          </section>
            <Cta />
      </main>
  </div>
</template>

<script>
import dataNocturne from "../data/nocturne.json"
export default {
 asyncData ({ params }) {
    return { dataNocturne }
  },
data(){
  return{
      filterLink : ["Tout", "Spectacles", "Clubs"],
      tab : "",
     currentTab: 0,
  }
},
  head(){
    return{
      title : "Spectacles / Clubs - Bruvisite",
    }
  },
created(){
this.tab =  this.dataNocturne.contentNocturnal
},
  methods:{
  fade(time){
    return new Promise((resolve) => {
          this.$refs.scrollTop.style.opacity = 0
          setTimeout(() => {
              resolve()
          }, time);
    })
  },
  async selectFilter(e){
      await this.fade(700)
       this.tab = this.dataNocturne.contentNocturnal.filter((obj) => obj.categorie === e.target.textContent);
       if(e.target.textContent === "Tout"){
        this.tab = this.dataNocturne.contentNocturnal
       }
       this.$refs.scrollTop.style.opacity = 1
       window.scrollTo(0, this.$refs.scrollTop.offsetTop + window.innerHeight)
    }
  }
}
</script>

<style>
.nocturnal-main{
    position: relative;
    padding-top: 20%;
    background-color: #656565;
}
.nocturnal__event{
      width: 77%;
    margin-left: auto;
  transition: opacity 0.7s;
}
.nocturnal__filter{
  position: sticky;
  top: 30%;
align-self: flex-start;
padding-bottom: 10rem;
}
.btn-filter{
  cursor: pointer;
  width: fit-content;
}
.btn-filter:hover{
   color : #ffb812; 
}
.btn-filter.active{
  color : #ffb812;
  pointer-events: none;
}
.btn-filter.active .underline::after{
  transform: scaleX(1);
}
.result{
  margin-bottom: 3rem;
}
.btn-filter, .nocturnal__filter h3, .result{
  color: white;
}
 @media (max-width: 1200px){
.nocturne__container{
  flex-direction: column;
}
.nocturnal__filter{
    position: inherit;
    padding-bottom: 5rem;
}
.nocturnal__event{
    width: 100%
}
 .result{
    font-size: 2rem;
  }
}
</style>