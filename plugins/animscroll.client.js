import Vue from "vue";

Vue.directive("animate-parallax", {

  bind: (el, bind) => {

    const parallaxScroll = function () {
      const pos = el.getBoundingClientRect().top - window.innerHeight / bind.value;
      const data = el.getAttribute("data-v");
      const newPos = data * pos;
      if (pos > window.innerHeight || -pos > window.innerHeight) return;

      if (bind.arg === "translateX") {
        el.style.transform = "translate3d(" + newPos + "px, 0px, 0px)";
      } else if (bind.arg === "translateY") {
        el.style.transform = "translate3d(0px," + newPos + "px, 0px)";
      } else {
        el.style.transform = "rotate(" + newPos + "deg)";
      }
    };
    function raf(){
      parallaxScroll()
      if (window.innerWidth > 1025) {
        requestAnimationFrame(raf)
      } else {
       cancelAnimationFrame(raf)
       el.style.transform = "translate3d(0px, 0px, 0px)";
      }
    }
    raf()
    window.addEventListener("resize", raf);
  },
});
