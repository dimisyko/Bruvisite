<template>
  <div class="content overflow-x">
    <Header />
    <Hero
      title="Auberges de jeunesse"
      subTitle="Thématique : Dormir"
      paragraphe="Envie de découvrir Bruxelles avec votre classe ou groupe d'amis pendant plusieurs jours ? Les auberges de jeunesse sont idéales pour rendre votre séjour parfait à prix tout doux."
      img="imgHotel/auberge.webp"
      alt="auberge"
      classSvg="hero-svg-bottom"
    />
    <main class="site-main fade">
      <section class="hotel-section w-90">
              <DormirSection v-for="(dormir, i) in dataDormir.auberge" :key="i"
              v-bind:img="dormir.hotelImg"
              v-bind:alt="dormir.hotelTitle"
              v-bind:title="dormir.hotelTitle"
              v-bind:txt="dormir.hotelTxt"
              v-bind:note="dormir.hotelNote"
              v-bind:prix="dormir.hotelPrix"
              v-bind:linkAdress="dormir.hotelMap"
              v-bind:link="dormir.hotelLink"
              v-bind:data="dormir.dataV"
              />
          </section>
      <Cta />
    </main>
  </div>
</template>

<script>
import dataDormir from "../data/dormir.json";
export default {
  name: "Auberges",
  asyncData({ params }) {
    return { dataDormir };
  },
  head() {
    return {
      title: "Auberges de jeunesses - Bruvisite",
    };
  },
};
</script>
