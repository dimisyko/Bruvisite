<template>
    <nuxt-link :to="link" class="btn-back anim-span">
            <svg class="crossBtnBack" data-name="Composant 2 – 1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 37.331 38.04">
                <line data-name="Ligne 8" x2="37.331" transform="translate(0 19.02)" fill="none" stroke="#febf29" stroke-width="2"/>
                <line data-name="Ligne 9" y2="38.04" transform="translate(18.666)" fill="none" stroke="#febf29" stroke-width="2"/>
              </svg>
              <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="60" height="62" viewBox="0 0 69 69">
                <g transform="translate(-115.6 -28.1)">
                  <path ref="svg" class="stroke" data-name="Tracé 13" d="M150.1,96.6a34,34,0,1,1,34-34A34.131,34.131,0,0,1,150.1,96.6Z" transform="translate(0 0)" fill="none" stroke="#febf29" stroke-miterlimit="10" stroke-width="2"/>
                  <path class="opacity" data-name="Tracé 13" d="M150.1,96.6a34,34,0,1,1,34-34A34.131,34.131,0,0,1,150.1,96.6Z" transform="translate(0 0)" fill="none" stroke="#febf29" stroke-miterlimit="10" stroke-width="1"/>
                </g>
              </svg>
        </nuxt-link>
</template>

<script>
export default {
    name : "btnBack",
    props : ['link'],
 mounted() {
    window.addEventListener('scroll', this.animSvg)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.animSvg)
  },
computed:{
    lengthSvg(){
        return this.$refs.svg.getTotalLength()
    }
},
    methods:{
    animSvg(){
        this.$refs.svg.style.strokeDasharray = this.lengthSvg
        this.$refs.svg.style.strokeDashoffset = this.lengthSvg
        const scrollSvg = this.lengthSvg - window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * this.lengthSvg
        this.$refs.svg.style.strokeDashoffset = scrollSvg
      }
    }
}
</script>

<style>
     .btn-back{
        position: fixed;
        top: 35px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 5;
    }
    .crossBtnBack{
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(45deg);
        transition: 0.7s;
    }
    .opacity{
        opacity: 0.4;
    }
    .circle{
        transform: rotate(180deg);
    }
    .stroke{
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
      }
      .btn-back:hover .crossBtnBack{
          transform: translate(-50%,-50%) rotate(225deg);
      }
</style>