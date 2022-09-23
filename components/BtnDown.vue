<template>
     <button type="button" aria-label="down" class="btn-down | anim-span | fadeY" @click="scrollTo()" @mouseover="v = true" @mouseleave="v = false">
    <svg class="down" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 100.2 25.6" style="enable-background:new 0 0 100.2 25.6;" xml:space="preserve">
<path id="Tracé_13_00000066484278411241706140000008712720234854041759_" class="st0" fill="none" stroke="#ffb300" stroke-width="2" d="M1.3,2.7c2.3-0.1,9.6-0.2,12.5,1.9
   c4.4,3,7.1,11.8,0.7,17.4c-4.3,3.8-13.7,2.3-13.7,2.3l0-22.6"/>
<line id="Ligne_109" class="st0" fill="none" stroke="#ffb300" stroke-width="2" x1="27.4" y1="4.6" x2="34.3" y2="0.7"/>
<path id="Tracé_15" class="st0" fill="none" stroke="#ffb300" stroke-width="2" d="M51.4,0.9c0,0-5.2,0-5.2,4.1v20.5"/>
<line id="Ligne_110" class="st0" fill="none" stroke="#ffb300" stroke-width="2" x1="42.4" y1="8" x2="51.6" y2="8"/>
<line id="Ligne_111" class="st0" fill="none" stroke="#ffb300" stroke-width="2" x1="56.6" y1="7.2" x2="56.6" y2="25.5"/>
<line id="Ligne_112" class="st0" fill="none" stroke="#ffb300" stroke-width="2" x1="64.2" y1="0.7" x2="64.2" y2="25.5"/>
<path id="Tracé_16" class="st0" fill="none" stroke="#ffb300" stroke-width="2" d="M85.9,19.1c0,0,0,2.4-2.9,4.2c-2.3,1.4-5.1,1.7-7.7,0.8c-6.4-2.7-5.2-12-1.1-15
   c2.6-2.1,11.8-3.5,11.8,7L70.9,16"/>
<line id="Ligne_113" class="st0" fill="none" stroke="#ffb300" stroke-width="2" x1="92.6" y1="7.1" x2="92.6" y2="25.5"/>
<path id="Tracé_17" class="st0" fill="none" stroke="#ffb300" stroke-width="2" d="M100.2,8c0,0-7.6,0-7.6,7.9"/>
<line class="st0 st1" fill="none" stroke="#ffb300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" x1="56.6" y1="3.2" x2="56.5" y2="3.2"/>
<path id="Tracé_16_00000150095402835673601350000016384401372396197040_" class="st0" fill="none" stroke="#ffb300" stroke-width="2" d="M38.4,19c0,0,0,2.4-2.9,4.2
   c-2.3,1.4-5.1,1.7-7.7,0.8c-6.4-2.7-5.2-12-1.1-15c2.6-2.1,11.8-3.5,11.8,7l-15.2-0.1"/>
</svg>

<svg viewBox="0 -10 100 55" >
<polyline ref="points" fill="none" stroke="#ffb300" stroke-width="1.5" points="20 5 50 5 80 5"/>
</svg>

      
</button>
</template>

<script>
export default {
    name : "BtnDown",
    data(){
      return{
        interval : undefined,
        start : 0,
        v : false,
        raf : undefined
      }
    },
    mounted(){
      window.addEventListener('wheel', this.clearAnim)
      window.addEventListener('touchmove', this.clearAnim)
      this.morphSvg()
    },
    beforeDestroy(){
      window.removeEventListener('wheel', this.clearAnim)
      window.removeEventListener('touchmove', this.clearAnim)
      cancelAnimationFrame(this.raf)
    },
methods: {
    scrollTo() {
      let speed = 35;
      this.interval = setInterval(() => {
        if (document.documentElement.scrollTop <= window.innerHeight) {
          speed +=
            (window.innerHeight - document.documentElement.scrollTop) / 10;
          document.documentElement.scrollTop = speed
        }
      }, 15);
    },
     clearAnim(){
        clearInterval(this.interval)
  },
  morphSvg(){
      this.v === true ? this.start+= (25 - this.start) / 8 : this.start+= (5 - this.start) / 8
      this.$refs.points.setAttribute('points', `20 5 50 ${this.start.toFixed(1)} 80 5`)
     this.raf = requestAnimationFrame(this.morphSvg)
  }
  }
}
</script>

<style>
.btn-down{
  cursor: pointer;
  position: absolute;
  width: 90px
}
.btn-down .st0{
 stroke-dasharray: 150;
 stroke-dashoffset: 150;
 animation: anim 3s 1.8s linear forwards;
       }
.btn-down, .btn-down .line{
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
@keyframes anim{
  0%{
     stroke-dashoffset: 150;  
           }
           100%{
            stroke-dashoffset: 0;  
           }
       }
    </style>
