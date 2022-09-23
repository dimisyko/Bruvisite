<template>
  <div class="all">
    <TransitionPage/>
    <div class="container-height" ref="containerHeight">
    <Header />
    <div class="container hide" ref="container">
      <Hero
        title="Le top 5 à visiter"
        subTitle="Thématique : Découvrir"
        paragraphe="Si vous êtes à Bruxelles pour un ou deux jours, La ville de Bruxelles vous propose une sélection des 5 endroits les plus visités de la capitale européenne."
        img="imgTourisme/top5.webp"
        alt="atomium-home"
        classSvg="hero-svg-right"
      />
      <main class="site-main fade">
        <section class="list">

          <div class="list__wrapper clipPathLeave" v-for="(culture, i) in dataCulture.detailPage" :key="i" :data-v="culture.dataV" ref="item">
          <nuxt-link class="list__item b-radius" :to="`lieu/${culture.urlPage}`">
            <h3 class="center-absolute hide"><span class="transformY">{{culture.detailTitre}}</span></h3>
            <figure class="list__img">
                <nuxt-img :src="`/${culture.img}`" sizes="sm:50vw md:70vw lg:100vw" :alt="culture.detail.imgDetailAlt"/>
            </figure>
             </nuxt-link>
            </div>
        </section>
        </main>
    </div>
     </div>
     <Cta />
   <Footer />
  </div>
</template>

<script>
import dataCulture from "../data/cultureLoisir.json";
export default {
  name: "Culture",
  head() {
    return {
      title: "Le top 5 à visiter - Bruvisite",
    };
  },
asyncData ({ params }) {
    return { dataCulture }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHorizontal)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.scrollHorizontal)
  },
  methods: {
    scrollHorizontal(){
            const containerWidth = this.$refs.container.scrollWidth - this.$refs.container.offsetWidth
            this.$refs.container.scrollLeft = window.pageYOffset / (this.$refs.containerHeight.offsetHeight - window.innerHeight) * containerWidth
    },
  },
};
</script>

<style>
.container-height{
  height: 760vh;
}
.container{
  position: sticky;
  top: 0;
  display: flex;
}
.list {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 100vh;
}
.hero-svg-right{
  position: absolute;
  width: 70%;
  top: 45%;
  left: 70%;
  transform: translateY(-50%) rotate(-90deg);
}
.list__item {
    width: 35vw;
    height: 40vw;
    display: block;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.list__wrapper{
    position: relative;
    margin: 0 8rem;
    height: 40vw;
}
.list__item .transformY{
    transform: translateY(100%);
    transition: 0.7s ease;
    white-space: nowrap;
}
.list__item:hover .transformY{
    transform: translateY(0%);
    transition: 0.5s 0.3s ease;
}
.list__img {
  width: 100%;
  height: 100%;
}
@media (max-width : 1024px){
  .container-height, .list{
  height: auto;
}
.hero-svg-right{
    width: 100%;
    top: 99.9%;
    left: 0;
    transform: translateY(0) rotate(0);
}
.container, .list{
  position: inherit;
  flex-direction: column;
}
.list{
  width: 90%;
  margin: 20% auto;
}
.list__item{
  width: 100%;
  height: 100%;
}
.list__wrapper{
  width: 100%;
  height: 65vw;
   margin: 0 0 20px 0;
}
.list__item::after{
   transform: scaleY(1);
}
.list__item .transformY{
    transform: translateY(0%);
}
}
</style>