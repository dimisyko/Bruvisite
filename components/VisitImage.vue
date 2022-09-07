<template>
  <div class="visit__wrapper" :data-v="data" v-animate-parallax:[directionY]="6">
  <nuxt-link :to="`${link}`" class="visit__link | clipPathLeave | b-radius | hide">
      <h3 class="center-absolute hide"><span class="transformY">{{title}}</span></h3>
    <figure class="visit__image">
      <nuxt-img :src="`/${image}`" sizes="sm:70vw md:100vw lg:100vw" :alt="alt" loading="lazy" />
    </figure>
  </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Visit",
  props: ["image","data", "alt", "link", "title"],
  data(){
    return{
        directionY : "translateY"
    }
  }
};
</script>

<style>
.visit__wrapper {
position: relative;
  width: 50%;
  height: 40vw;
  margin-right: 15px;
  transition: width 0.7s ease;
}
.visit__link{
  display: block;
  height: 40vw;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.visit__wrapper:last-child {
  margin-right: 0;
}
.visit__wrapper:hover {
  width: 100%;
}
.visit__link .transformY{
    transform: translateY(100%);
    transition: 0.7s ease;
    white-space: nowrap;
}
.visit__link:hover .transformY{
    transform: translateY(0%);
    transition: 0.5s 0.3s ease;
}
.visit__image{
    height: 100%;
    width: 100%;
}
/* responsive */
@media (max-width: 1024px){
 .visit__container{
   flex-direction: column;
   width: 90%;
   margin: auto;
 }
 .visit__wrapper{
   width: 100%;
   margin: 0 0 15px 0;
 }
 .visit__link, .visit__wrapper{
   height: 65vw;
 }
 .visit__link:last-child{
   margin: 0;
 }
 .visit__link::after{
    transform: scaleY(1);
}
.visit__link .transformY{
    transform: translateY(0%);
}
}
</style>