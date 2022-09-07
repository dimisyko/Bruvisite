<template>
    <div class="hotel-auberge-section__info flex">
        <div class="hotel-auberge-section__img | b-radius | hide">
            <figure class="d-flex">
              <nuxt-img  :src="`/${img}`" sizes="sm:70vw md:100vw lg:100vw" class="parallaxImg"  :data-v="data" v-animate-parallax:[directionY]="7" :alt="alt"/>
            </figure>
        </div>
        <div class="hotel-auberge-section__txt">
            <h3>{{title}}</h3>
            <p class="txt-info txt-primary">{{txt}}</p>
            <div class="hotel-auberge-section__txt-footer">
                <div class="nocturnal-section__note border">
                <p class="txt-primary"><span class="color"> Etoiles : </span> {{ note }} </p>
                <p class="txt-primary"><span class="color"> Prix : </span> {{ prix }} </p>
                </div>
                <a :href="linkAdress" target="_blank" class="address txt-primary border" rel="noopener noreferrer">
                    <span class="marker">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.071" height="22.762" viewBox="0 0 17.071 22.762">
                          <path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M7.658,22.3C1.2,12.938,0,11.977,0,8.536a8.536,8.536,0,0,1,17.071,0c0,3.442-1.2,4.4-7.658,13.767a1.067,1.067,0,0,1-1.754,0Zm.877-10.21A3.557,3.557,0,1,0,4.979,8.536,3.557,3.557,0,0,0,8.536,12.092Z" fill="#5190b9"/>
                        </svg>
                    </span>
                    Voir sur la carte</a>
                <a :href="link" class="booking | flex-align | txt-primary | btn-hover | border" target="_blank" rel="noopener noreferrer">
          <div class="underline"> Réserver </div>
          <div class="btn-right | btn-tertiary">
             <svg v-for="svg in 2" :key="svg" id="Composant_13_1" data-name="Composant 13 – 1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 30.361 30.361" class="center-absolute translate">
              <path id="Tracé_11" data-name="Tracé 11" d="M147.969,8403.5h30.361" transform="translate(-147.969 -8388.319)" fill="none" stroke="white" stroke-width="2"/>
              <path id="Tracé_12" data-name="Tracé 12" d="M147.969,8403.5h30.361" transform="translate(-8388.32 178.329) rotate(-90)" fill="none" stroke="white" stroke-width="2"/>
           </svg>
        </div>
        </a> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Dormir",
    props : ["img", "title", "txt", "data", "alt", "note", "prix", "linkAdress", "link"],
    data(){
        return{
            directionY : "translateY"
        }
    }
}
</script>

<style>
    .hotel-auberge-section__info{
        margin: 20% 0 15% 0;
        justify-content: space-between;
    }
    .hotel-auberge-section__info:nth-child(even){
        flex-direction: row-reverse;
    }
    .hotel-auberge-section__txt h3{
        padding: 2vw 2.5vw;
    }
    .hotel-auberge-section__txt .txt-info{
        padding: 3.5vw 2.5vw;
    }

    .hotel-auberge-section__img, .hotel-auberge-section__txt{
        width: 50%;
    }
    .hotel-auberge-section__txt-footer > *{
        padding: 1.5vw 2.3vw;
        border-right: 1px solid #5190B9;
    }
    .hotel-auberge-section__txt-footer > *:last-child{
        border-right: none
    }
    .address{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        color: #5190B9;
        text-decoration: underline;
    }
    .marker{
        margin-right: 10px;
    }
    .hotel-auberge-section__txt-footer{
        display: flex;
        justify-content: space-between;
    }
    .parallaxImg{
        height: 115%;
        will-change: transform;
    }
    .booking{
        justify-content: center;
    }
    .nocturnal-section__note, .booking{
         width: 30%;
    }
    .hotel-auberge-section__txt-footer .color{
        color: #0069af;
        display: inline-block;
    }
    .hotel-auberge-section__txt h3, .hotel-auberge-section__txt .txt-info {
        border-bottom: 1px solid #5190B9;
    }
    @media (max-width : 992px){
        .hotel-auberge-section__info:nth-child(even){
            flex-direction: column;
        }
        .hotel-auberge-section__img, .hotel-auberge-section__txt{
            width: 100%;
        }
        .hotel-auberge-section__txt h3, .hotel-auberge-section__txt .txt-info{
        padding: 30px 0;
    }
    .parallaxImg{
        height: 100%;
    }
    }
    @media (max-width: 568px){
       .border{
        border-bottom: 0.9px solid #5190B9;
        width: 100%;
        padding: 30px 0;
       }
        .hotel-auberge-section__txt-footer{
            flex-direction: column;
        }
        .hotel-auberge-section__txt-footer{
            padding-bottom: 50px;
        }
        .hotel-auberge-section__txt-footer a, .hotel-auberge-section__note{
            justify-content: flex-start;
        }
        .hotel-auberge-section__txt-footer > *{
            border-right: none;
        }
    }
</style>