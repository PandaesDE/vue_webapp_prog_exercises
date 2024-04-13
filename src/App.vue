<template>
  <router-view></router-view>
  <footer-default></footer-default>
</template>

<script>
import FooterDefault from "@/components/FooterDefault.vue";

export default {
  name: 'App',
  components: {
    FooterDefault
  },

}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import 'assets/style/custom.scss';

body {
  color: black;
}
</style>
