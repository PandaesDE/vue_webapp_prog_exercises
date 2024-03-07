<template>
  <AdventOfCode day="1" year="2015"/>
  <FooterDefault/>
</template>

<script>
import AdventOfCode from "@/components/AdventOfCode.vue";
import FooterDefault from "@/components/FooterDefault.vue";

export default {
  name: 'App',
  components: {
    AdventOfCode,
    FooterDefault
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
