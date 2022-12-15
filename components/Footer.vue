<template>
  <footer class="footer__container fade">
      <div class="footer__wrapper d-flex-between">
      <nuxt-link to="/" class="footer-logo"><img src="~/assets/icon/logo.svg" alt="logo"></nuxt-link>
      <div class="footer__wrapper-link">
        <div class="footer__wrapper-sub d-flex-between">
        <div class="footer__wrapper-sources">
          <h4>{{ footer.sources.titleSource }}</h4>
          <ul class="footer__menu">
            <li v-for="(i, sources) in footer.sources.footerSources" :key="sources">
              <a :href="i.url" target="_blank" class="txt-primary" rel="noopener noreferrer">{{i.link}}</a>
            </li>
          </ul>
        </div>
        <div class="footer__wrapper-menu">
          <h4>{{ footer.menu.titleMenu }}</h4>
          <ul class="footer__menu">
            <li v-for="(i, menu) in footer.menu.menuFooter" :key="menu">
              <nuxt-link class="txt-primary" :to="i.path">{{ i.link }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
         <div class="footer__container-social">
           <div class="footer__wrapper-social d-flex-align-item">
           <p class="txt-primary">Suivez-nous sur nos réseaux sociaux</p>
           <div class="footer__icone-social">
             <a
              href="https://www.facebook.com/visitbrussels"
              aria-label="facebook"
              class="social-footer btn-tertiary btn-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg v-for="(i, social) in 2" :key="social"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="22"
                viewBox="0 0 14.856 27.738"
                class="center-absolute translate"
              >
                <path
                  data-name="Icon awesome-facebook-f"
                  d="M15.492,15.6l.77-5.02H11.446V7.325a2.51,2.51,0,0,1,2.83-2.712h2.19V.339A26.7,26.7,0,0,0,12.579,0c-3.967,0-6.56,2.4-6.56,6.757v3.826H1.609V15.6H6.019V27.738h5.427V15.6Z"
                  transform="translate(-1.609)"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/visitbrussels"
              aria-label="instagram"
              class="social-footer btn-tertiary btn-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg v-for="(i, social) in 2" :key="social"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24.285 24.279"
                class="center-absolute translate"
              >
                <path
                  data-name="Icon awesome-instagram"
                  d="M12.14,8.152a6.225,6.225,0,1,0,6.225,6.225A6.215,6.215,0,0,0,12.14,8.152Zm0,10.272a4.047,4.047,0,1,1,4.047-4.047,4.054,4.054,0,0,1-4.047,4.047ZM20.071,7.9a1.452,1.452,0,1,1-1.452-1.452A1.449,1.449,0,0,1,20.071,7.9Zm4.123,1.474a7.185,7.185,0,0,0-1.961-5.087,7.233,7.233,0,0,0-5.087-1.961c-2-.114-8.013-.114-10.017,0A7.222,7.222,0,0,0,2.041,4.279,7.209,7.209,0,0,0,.08,9.366c-.114,2-.114,8.013,0,10.017A7.185,7.185,0,0,0,2.041,24.47a7.242,7.242,0,0,0,5.087,1.961c2,.114,8.013.114,10.017,0a7.185,7.185,0,0,0,5.087-1.961,7.232,7.232,0,0,0,1.961-5.087C24.308,17.379,24.308,11.376,24.194,9.371ZM21.6,21.534A4.1,4.1,0,0,1,19.3,23.842c-1.6.634-5.391.488-7.157.488s-5.564.141-7.157-.488a4.1,4.1,0,0,1-2.308-2.308c-.634-1.6-.488-5.391-.488-7.157s-.141-5.564.488-7.157A4.1,4.1,0,0,1,4.983,4.913c1.6-.634,5.391-.488,7.157-.488s5.564-.141,7.157.488A4.1,4.1,0,0,1,21.6,7.221c.634,1.6.488,5.391.488,7.157S22.238,19.941,21.6,21.534Z"
                  transform="translate(0.005 -2.238)"
                  fill="white"
                />
              </svg>
            </a>
           </div>
           </div>
         </div>
      </div>
    </div>
      <div class="footer__credits">
        <div class="footer__credits-wrapper d-flex-between w-90">
        <p class="footer__privacy txt-primary">© {{GetYear}} - Tout droit réservé</p>
        <p class="txt-primary"> Désigné et codé par <a class="folio-dev" href="https://dimi-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Sykovaris Dimitrios</a></p>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footer: {
        menu: {
          titleMenu: "Menu",
          menuFooter: [
            {
              link: "Accueil",
              path: "/",
            },
            {
              link: "Le top 5 à visiter",
              path: "/visite",
            },
            {
              link: "Nos hotels",
              path: "/hotels",
            },
            {
              link: "Auberges de jeunesse",
              path: "/auberges",
            },
            {
              link: "Spectacles / Clubs",
              path: "/spectacles-clubs",
            }
          ],
        },
        sources: {
          titleSource: "Sources",
          footerSources: [
            {
            link : "Unsplash", 
            url : "https://unsplash.com"
            },
            {
            link : "Vue.js", 
             url : "https://vuejs.org"
            },
            {
            link : "Nuxt.js", 
             url : "https://nuxtjs.org"
            },
            {
            link : "Visit.brussels",
             url : "https://visit.brussels/fr"
            }
            ],
        },
      },
      year : new Date()
    };
  },
  computed:{
    GetYear(){
     return this.year.getFullYear()
    }
  }
};
</script>

<style>
.footer__container{
  background-color: #5190B9;
}
.footer-logo{
    margin-left: 5%;
    padding-top: 70px;
    width: 140px;
    height: fit-content;
}
.footer__container h4{
  margin-bottom: 15px;
}
.footer__menu a{
  position: relative;
  color: white;
}
.footer__menu a::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -37px;
  width: 22px;
  height: 1px;
  transform-origin: right;
  transform: scaleX(0);
  background-color: white;
  transition: transform 0.4s;
}
.footer__menu a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
.footer__menu .nuxt-link-exact-active::before {
  transform: scaleX(1);
}
.footer__wrapper-link {
  width: 53%;
  padding-top: 70px;
  border-left: 1px solid white;
}
.footer__wrapper-sub{
    padding-bottom: 70px;
}
.social-footer{
    display: inline-block;
  border: 1px solid white;
  margin-right: 10px;
}
.footer__wrapper-sub, .footer__wrapper-social{
  width: 80%;
  margin: auto;
}
.footer__wrapper-link li, .footer__container-social p {
  line-height: 2;
  color: white;
}
.footer__container-social{
  border-top: 1px solid white;
  padding: 30px 0;
}
.footer__credits {
  padding: 30px 0;
  border-top: 1px solid white;
  color: white;
}
.folio-dev{
  color: white;
  text-decoration: underline;
}
/* responsive */
@media (max-width: 1024px){
  .footer__wrapper-social{
    flex-direction: column;
    align-items: flex-start;
  }
  .footer__icone-social{
     margin-top: 20px;
  }
}
@media (max-width: 992px){
  .footer__wrapper-sub{
      flex-direction: column;
  }
  .footer__wrapper-menu {
     margin-top: 50px;
   }
}
@media (max-width: 768px){
  .footer__menu a::before{
     width: 100%;
     top: 100%;
     left: 0;
   }
}
@media (max-width: 576px){
   .footer__wrapper, .footer__wrapper-link, .footer__credits{
     flex-direction: column;
   }
   .footer-logo{
    padding-top: 30px;
   }
   .footer__wrapper{
     padding-top: 30px;
   }
   .footer__wrapper-sub{
     padding-bottom: 30px;
   }
   .footer__wrapper-link{
     width: 100%;
     border-left: none;
   }
   .footer__privacy{
     padding: 0 0 20px 0;
   }
   .footer__wrapper-sub, .footer__wrapper-social{
     width: 90%;
   }
}
</style>