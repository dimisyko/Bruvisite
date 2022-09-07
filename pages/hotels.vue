<template>
   <div class="all">
     <TransitionPage/>
    <Header />    
      <Hero
        title="Les hôtels"
        subTitle="Thématique : Dormir"
        paragraphe="Pour votre escapade, inutile de voyager les bras et bagages chargés avec la chaise haute, la poussette et le chauffe biberon, les hôtels de la capitale pensent à tout !"
        img="imgHotel/hotel.webp"
        alt="hotel"
        classSvg="hero-svg-bottom"
      />
      <main class="site-main fade" role="main">
          <section class="hotel-section w-90">
              <DormirSection v-for="(dormir, i) in dataDormir.hotel" :key="i"
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
   <Footer />
  </div>
</template>

<script>
import dataDormir from "../data/dormir.json";
export default {
    name: "Hotel",
asyncData ({ params }) {
    return { dataDormir }
  },
  head(){
    return{
      title : "Les hotels - Bruvisite"
    }
  },
}
</script>