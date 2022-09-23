<template>
  <header class="header__menu">
    <div ref="header" class="menu overflow-x">
      <div class="menu__header | w-90 | d-flex-align-item">
        <nuxt-link to="/" id="logo" class="anim-span"><img src="~/assets/icon/logo.svg" alt="logo"></nuxt-link>
        <div class="menu__wrapper d-flex-align-item">
          <div class="menu__social d-flex-align-item">
            <a
              href="https://www.facebook.com/visitbrussels"
              aria-label="facebook"
              class="social btn-tertiary btn-h anim-span"
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
                  fill="#F2A800"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/visitbrussels"
              aria-label="instagram"
              class="social btn-tertiary btn-h anim-span"
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
                  fill="#F2A800"
                />
              </svg>
            </a>
          </div>
          <button type="button" v-on:click="$event.target.classList.toggle('active'); menuAnimToggle();" aria-label="menu" class="menu__btn btn-secondary btn-h hide anim-span">
            <span v-for="blocLine in 2" :key="blocLine" class="wrapper-line translate">
            <span v-for="line in 5" :key="line" class="lineBurger"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="menu__container">
      <div class="menu__img animS">
        <figure class="image-menu" v-for="(i, img) in nav.images" :key="img" ref="img">
         <nuxt-img :src="`${i.img}`" loading="lazy" :alt="i.alt"/>
        </figure>
      </div>
      <div class="menu__nav animS">
        <div class="bg-img-cinquantenaire bg-img"></div>
        <nav class="menu__nav--nav">
              <ul>
                <li class="menu__nav--list" v-for="(i, item) in nav.lien" :key="item">
                    <nuxt-link :to="i.url" ref="link" @mouseenter.native="changeImg(item)" class="nav-link menu__anim">{{ i.nameLien }}<sup>0{{item + 1}}</sup></nuxt-link>
                </li>
              </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import gsap from "gsap"
export default {
  name: "Header",
  data() {
    return {
      nav: {
        images : [
          {
               img: "imgMenu/atomium-menu.webp",
                alt: "VilleBruxelles",
          },
          {
                img: "imgMenu/top5.webp",
                alt: "top visite",
           },
           {
                img: "imgMenu/dormir.webp",
                alt: "hotel",
           },
           {
                img: "imgMenu/auberge-menu.webp",
                alt: "auberge",
           },
           {
                img: "imgMenu/spectacle-menu.webp",
                alt: "spectacle",
           }
        ],
        lien: [
              {
                url: "/",
                nameLien: "Accueil",
              },
          {
                url: "/visite",
                nameLien: "Le top 5 à visiter",
          },
          {
                url: "/hotels",
                nameLien: "Nos hôtels",
              },
              {
                url: "/auberges",
                nameLien: "Auberges de jeunesse",
              },
          {
                url: "/spectacles-clubs",
                nameLien: "Spectacles / Clubs",
            }
        ],
      },
      posInit : 0,
      tlOpen  : gsap.timeline({paused : true}),
      index : 1
    };
  },
  mounted() {
    this.menuAnim()
    this.activeLink()
    window.addEventListener("scroll", this.menuScroll);
  },
  beforeDestroy(){
    window.removeEventListener("scroll", this.menuScroll);
  },
  methods: {
    menuScroll() {
        const newPos = window.pageYOffset - this.posInit
    newPos > 0 ? (this.$refs.header.style.transform = "translate3d(0, -100%, 0)") : (this.$refs.header.style.transform = "translate3d(0, 0%, 0)");
      this.posInit = window.pageYOffset
    },
    activeLink(){
      this.$refs.link.forEach((el, i) =>{
  if (el.$el.classList.contains("nuxt-link-exact-active")) {
      this.$refs.img[i].style.clipPath = "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)";
       this.$refs.img[i].style.transform = "scale(1)";
    }
        })
    },
    menuAnim(){
    this.tlOpen.add(() => this.activeLink())
    this.tlOpen.to(".animS",{
        duration: 1,
        ease: "Power2.easeInOut",
        stagger: 0.2,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },"sameTime");
      this.tlOpen.to("body",{
       overflow : 'hidden'
      },"sameTime");
    this.tlOpen.to(".menu__container",{
        visibility: "visible",
        zIndex : 3
      },"sameTime");
    this.tlOpen.to(".fade, .btn-back",{
        opacity: 0,
      },"sameTime");
    this.tlOpen.from(".menu__anim",{
        duration: 0.7,
        stagger: 0.07,
        y: "150%",
        opacity : 0
      },"-=0.65");
       this.tlOpen.reverse();
    },
    menuAnimToggle(){
      this.tlOpen.reversed(!this.tlOpen.reversed())
    },
    changeImg(i){
      this.$refs.img[i].style.zIndex = this.index++
 if (this.$refs.link[i].$el.classList.contains("active")) {
        return;
      } else {
        for (let a = 0; a < this.$refs.link.length; a++) {
          this.$refs.link[a].$el.classList.remove("active");
        }
        this.$refs.link[i].$el.classList.add("active");
        gsap.to(this.$refs.img[i], {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          scale: 1,
          duration: 0.7,
          ease: "Power1.easeInOut",
        });
        gsap.set(this.$refs.img[i], {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          scale: 1.3,
        });
    }
    }
  },
};
</script>

<style>
.menu__container {
  height: 100vh;
  visibility: hidden;
  display: flex;
}
.menu, .menu__container{
  position: fixed;
  top: 0;
  width: 100%;
}
.menu {
  padding: 35px 0;
  z-index: 5;
  transition: transform 0.4s;
}
#logo {
  color: black;
  width: 110px;
}
#logo::before {
  background-color: transparent;
  color: black;
}
.menu__wrapper {
  width: 14rem;
}
sup{
  margin-left: 12px;
}
.social {
  position: relative;
  border: 1px solid #F2A800;
}
.social:first-child {
  margin-right: 15px;
}
.wrapper-line{
    height: 28%;
    width: 45%;
    pointer-events: none;
  }
        .lineBurger {
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: white;
            transition: 0.5s;
            transform: scaleX(1);
        }
        .menu__btn .lineBurger:nth-child(1) {
            top: 0;
            transition-delay: 1.15s
        }

        .menu__btn .lineBurger:nth-child(2) {
            top: 50%;
            transition-delay: 0.95s
        }

      .menu__btn .lineBurger:nth-child(3) {
            top: 100%;
            transition-delay: 0.8s
        }
        .menu__btn .lineBurger:nth-child(4) {
            transform: translate(4px, -2px) rotate(45deg) scaleX(0);
            transition-delay: 0.15s;
            transform-origin: left;
        }

        .menu__btn .lineBurger:nth-child(5) {
            transform:translate(4px, 17px) rotate(-45deg) scaleX(0);
            transition-delay: 0.3s;
            transform-origin: left;
        }
      .active.menu__btn .lineBurger:nth-child(1), 
      .active.menu__btn .lineBurger:nth-child(2), 
      .active.menu__btn .lineBurger:nth-child(3){
         width: 0;
      }
           .active.menu__btn .lineBurger:nth-child(1) {
                        transition-delay: 0s
        }
        .active.menu__btn .lineBurger:nth-child(2) {
            transition-delay: 0.15s
        }
        .active.menu__btn .lineBurger:nth-child(3) {
            transition-delay: 0.3s
        }

        .active.menu__btn .lineBurger:nth-child(4) {
            transform: translate(4px, -2px) rotate(45deg) scaleX(1);
            transition-delay: 0.8s;
        }

        .active.menu__btn .lineBurger:nth-child(5) {
            transform:translate(4px, 17px) rotate(-45deg) scaleX(1);
            transition-delay: 1s;
        }
.menu__nav,
.menu__img {
  position: relative;
  height: 100%;
  width: 50%;
  background-color: #498bb7;
  clip-path: polygon(0 0%, 100% 0%, 100% 0%, 0 0%);
}
.footer__container h4 {
  color: white;
  width: fit-content;
  padding-bottom: 8px;
  border-bottom: 1px solid white;
}
.bg-img-cinquantenaire {
  background-image: url(~/assets/img-bg/cinquantenaire.webp);
  bottom: -10%;
  right: -10%;
  background-position: bottom right;
  opacity: 0.1;
  background-size: 70%;
}
.menu__nav--nav {
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.menu__nav--list {
  position: relative;
  margin: 1.5vw 0;
  width: fit-content;
}
.nav-link {
  color: rgba(255, 255, 255, 0.582);
  font-size: 1.3vw;
  font-weight: lighter;
  display: block;
}
.nav-link:hover{
color: white;
}
.menu__nav--list::before {
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
}
.menu__nav--list:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
.menu__nav--list .nuxt-link-exact-active {
  position: relative;
  color: white;
}
.menu__nav--list .nuxt-link-exact-active::before {
  transform: scaleX(1);
}
.menu__nav--list .nuxt-link-exact-active::before,
.menu__nav--list::before {
  content: "";
  position: absolute;
  top: 42%;
  left: -30px;
  width: 20px;
  height: 2px;
  background-color: white;
}
.image-menu {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  transform: scale(1.8);
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
}
/* responsive */
@media (max-width: 992px) {
  .bg-img-cinquantenaire {
    background-size: 70%;
  }
  .menu__nav--list .nuxt-link-exact-active::before,
  .menu__nav--list::before {
    width: 100%;
    top: 100%;
    left: 0;
  }
  .menu__img {
    width: 100%;
    display: none;
  }
  .menu__container {
    flex-direction: column;
  }
  .menu__nav {
    height: 100%;
    width: 100%;
  }
  .menu__nav--nav li {
    margin: 25px 0;
  }
  .nav-link {
    font-size: 20px;
  }
}
@media (max-width: 767px) {
  .bg-img-cinquantenaire {
    background-size: 70%;
    bottom: -10%;
  }
  .social,.thematique {
    display: none;
  }
}
@media (max-width: 576px) {
  .bg-img-cinquantenaire {
    display: none;
  }
  #logo{
    width: 85px;
  }
  .menu__nav {
    overflow: auto;
  }
}
</style>