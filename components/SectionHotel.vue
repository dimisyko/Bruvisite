<template>
     <section class="hotel-auberge">
          <h2 class="w-90 space-title">Où dormir lors de votre séjour</h2>
        <div class="hotel-auberge__container">
          <div class="hotel-auberge__hotel | space-item | flex">
            <figure class="hotel-auberge__hotel-img b-radius d-flex clipPathLeave hide">
                 <nuxt-img src="/imgHome/hotel-home.webp" sizes="sm:70vw md:100vw lg:1100" class="parallax" data-v="-0.2" v-animate-parallax:[directionY]="5" alt="hotel" loading="lazy"/>
            </figure>
            <div class="hotel-auberge__hotel-width">
              <div class="hotel-auberge__hotel-txt">
                <h3>Les hôtels</h3>
                <p class="txt-primary">Idéales pour les familles, couples et bien d’autres</p>
                   <nuxt-link to="/hotels" class="flex-align btn-hover mg-top">    
          <div class="underline"> Voir plus </div>
          <div class="btn-right btn-tertiary">
            <svg v-for="svg in 2" :key="svg" data-name="Composant 13 – 1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 30.361 30.361" class="center-absolute">
              <path id="Tracé_11" data-name="Tracé 11" d="M147.969,8403.5h30.361" transform="translate(-147.969 -8388.319)" fill="none" stroke="white" stroke-width="2"/>
              <path id="Tracé_12" data-name="Tracé 12" d="M147.969,8403.5h30.361" transform="translate(-8388.32 178.329) rotate(-90)" fill="none" stroke="white" stroke-width="2"/>
           </svg>
        </div>
        </nuxt-link>
                </div>
            </div>
          </div>
          <div class="hotel-auberge__auberge | space-item | flex | flex-row-reverse">
            <figure class="hotel-auberge__auberge-img | b-radius | d-flex |s clipPathLeave hide">
                <nuxt-img src="/imgHome/auberge.webp" sizes="sm:70vw md:100vw lg:1100" class="parallax" data-v="-0.2" v-animate-parallax:[directionY]="5" alt="auberge" loading="lazy"/>
            </figure>
            <div class="hotel-auberge__auberge-width">
              <div class="hotel-auberge__auberge-txt">
                <h3>Les auberges de jeunesse</h3>
                <p class="txt-primary">Idéales pour les voyages scolaires ou les séjours entre amis</p>
               <nuxt-link to="/auberges" class="flex-align btn-hover mg-top">    
          <div class="underline"> Voir plus </div>
          <div class="btn-right btn-tertiary">
            <svg v-for="svg in 2" :key="svg" data-name="Composant 13 – 1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 30.361 30.361" class="center-absolute">
              <path id="Tracé_11" data-name="Tracé 11" d="M147.969,8403.5h30.361" transform="translate(-147.969 -8388.319)" fill="none" stroke="white" stroke-width="2"/>
              <path id="Tracé_12" data-name="Tracé 12" d="M147.969,8403.5h30.361" transform="translate(-8388.32 178.329) rotate(-90)" fill="none" stroke="white" stroke-width="2"/>
           </svg>
        </div>
        </nuxt-link>
              </div>
            </div>
          </div>
          </div>
      </section>
</template>

<script>
export default {
    name : "SectionHotel",
    data(){
        return{
             directionY : "translateY",
        }
    }
}
</script>

<style>

/* Hotel */
.hotel-auberge{
  position: relative;
  padding: 5% 0;
}
.hotel-auberge__hotel-width{
  width: 42%;
}
.hotel-auberge__hotel-width, .hotel-auberge__auberge-width{
  display: flex;
  justify-content: center;
  align-items: center;
}
.hotel-auberge__auberge-width{
  width: 55%;
}
.hotel-auberge__hotel-txt{
  width: 50%;
}
.hotel-auberge__auberge-txt h3, .hotel-auberge__hotel-txt h3{
  margin-bottom: 30px;
}
.hotel-auberge__auberge-txt p{
  width: 60%;
}
.hotel-auberge__hotel-img{
  width: 55%;
  height: 33vw;
}
.hotel-auberge__auberge-img{
  width: 40%;
  height: 48vw;
  margin-right: 5%;
}
@media (max-width: 1024px){
    .hotel-auberge__auberge-width{
   width: 45%;
 }
 .hotel-auberge__auberge-txt p{
   width: 65%;
 }
}
@media (max-width : 992px){
.hotel-auberge__auberge-txt, .hotel-auberge__hotel-txt, .hotel-auberge__hotel-img, .hotel-auberge__auberge-img, .hotel-auberge__hotel-width, .hotel-auberge__auberge-width, .hotel-auberge__auberge-width p{
    width: 100%;
    height: 100%;
  }
.hotel-auberge__hotel-img, .hotel-auberge__auberge-img{
  margin-bottom: 50px;
  height: 65vw
}
.hotel-auberge__container{
    width: 90%;
    margin: 8% auto 0 auto;
  }
}
@media (max-width: 768px){
.hotel-auberge__container{
    width: 90%;
    margin: 8% auto 0 auto;
  }
}
</style>