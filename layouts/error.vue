<template>
    <section class="error w-90">
      <div class="error__txt d-flex">
        <h2 v-if="error.statusCode === 404">La page n'existe pas</h2>
        <nuxt-link to="/" class="btn-hover mg-top">
          <span class="underline"> Retour à l'accueil</span>
        </nuxt-link>
      </div>
    </section>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
  head() {
    return {
      title: "Erreur - 404",
    };
  },
};
</script>

<style>
.error{
  height: 100vh;
}
.error__txt{
  text-align: center;
  flex-direction: column;
}
</style>