<template>
        <div class="nocturnal__item">
            <div class="nocturnal__txt">
            <h2>{{title}}</h2>
            <p class="txt-primary">{{txt}}</p>
            <nuxt-link :to="path" class="flex-align | btn-hover | mg-top">    
          <div class="underline"> {{btn}} </div>
          <div class="btn-right btn-tertiary">
               <svg v-for="svg in 2" :key="svg" id="Composant_13_1" data-name="Composant 13 – 1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 30.361 30.361" class="center-absolute translate">
              <path id="Tracé_11" data-name="Tracé 11" d="M147.969,8403.5h30.361" transform="translate(-147.969 -8388.319)" fill="none" stroke="white" stroke-width="2"/>
              <path id="Tracé_12" data-name="Tracé 12" d="M147.969,8403.5h30.361" transform="translate(-8388.32 178.329) rotate(-90)" fill="none" stroke="white" stroke-width="2"/>
           </svg>
        </div>
        </nuxt-link>
        </div>
         <figure class="nocturnal__item-img | b-radius | clipPathLeave | d-flex | hide">
               <nuxt-img class="parallax" :src="`/${img}`" sizes="sm:70vw md:100vw lg:100vw" :alt="alt" loading="lazy"  :data-v="data" v-animate-parallax:[directionY]="4"/>
        </figure>
        </div>
</template>

<script>
export default {
    name:"Nocturnal",
    props : ["img","data", "alt" ,"title", "txt", "path", "btn"],
    data(){
        return{
            directionY : "translateY"
        }
    }
}
</script>

<style>
.nocturnal__item{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid white;
    padding: 10rem 0;
}
.nocturnal__txt{
    width: 44%;
}
.nocturnal__item-img{
    height: 23vw;
    width: 45%;
}
.nocturnal__item h2{
    margin: 0 0 40px 0;
    color: white;
}
.nocturnal__item h2::after{
    content: '';
    width: 50px;
    height: 1px;
    margin-left: 25px;
    background-color: white;
    display: inline-block;
    vertical-align: middle;
}
.nocturnal__item p, .nocturnal__item h2{
    color: white;
}
.nocturnal__item .underline{
    color: #ffba19;
}
.nocturnal__item .underline::after, .btn-filter .underline::after{
    background-color: #ffb812;
}
/* responsive */
@media (max-width: 1200px){
.nocturnal__item-img{
    height: 30vw;
}
}
@media (max-width: 992px){
.nocturnal__item-img{
    height: 35vw;
}
}
@media (max-width: 768px){
.nocturnal__item-img{
    height: 50vw;
}
}
@media (max-width: 576px){
.nocturnal__item{
    flex-direction: column-reverse;
    padding: 5rem 0;
}
.nocturnal__item h2{
    margin: 40px 0 40px 0;
    color: white;
}
.nocturnal__item-img{
    height: 65vw;
    width: 100%;
}
.nocturnal__txt{
    width: 100%;
}
}
</style>