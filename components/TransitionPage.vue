<template>
         <div class="bg-transi">
            <div class="txt-transition | hide | center-absolute">
                <div class="txt-loader"> Chargement</div>
            </div>
        </div>
</template>

<script>
export default {
    name : "TransitionPage"
}
</script>

<style>
 .bg-transi{
   position: fixed;
   top: 0;
   height: 100vh;
   width: 100%;
   transform: scaleY(1);
   transform-origin: bottom;
  background-color: #F2A800;
  z-index: 9;
 }
.txt-loader{
  font-family: 'NeueMontreal-R';
  font-size: 3rem;
  color: white;
 }
</style>