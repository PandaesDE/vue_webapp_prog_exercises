<template>
  <div id="AOC" class="container-fluid">
    <header>
      <h1>Advent of Code {{day}}.12.{{ year }}</h1>
      <img src="../assets/images/Banner.jpg" alt="">
    </header>
    <section id="AOC_Content" class="container">
      <div class="row">
        <div class="col-6 code-field" v-html="code"></div>
        <div class="col-2 solution-field">
          <h2>Solution</h2>
          <p>{{ solution }}</p>
        </div>
        <div class="col-1 input-field">
          <textarea v-model="message" placeholder="insert your input data"></textarea>
          <button>Submit</button>
        </div>
      </div>
    </section>
    <FooterDefault/>
  </div>
</template>

<script>

import AOCService from "@/services/AOCService";
import ConvertingService from "@/services/ConvertingService";
import FooterDefault from "@/components/FooterDefault.vue";

export default {
  name: 'AdventOfCode',
  components: {
    FooterDefault
  },
  data() {
    return {
      solution: null,
      code: null,
      year: 2015,
      day: 1
    }
  },
  async created() {
    this.solution = await AOCService.getAOCInfo(this.year, this.day);
    this.code = await AOCService.getAOCCode(this.year, this.day);
    this.code = ConvertingService.textToHTML(this.code);
    console.log(JSON.stringify(this.code));
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#AOC {
  background: #0f0f23;
  min-height: 100vh;
  h1,h2,h3,h4,h5,h6 {
    color: white;
  }
  span,.highlight {
    color: #009900;
  }
  header {
    position: relative;
    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 25vh;
      object-fit: cover;
      object-position: 50% 60%;
      filter: blur(5px);
    }
    h1 {
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      margin: 0;
      text-shadow: 0 0 10px black;
    }
  }
  #AOC_Content {
    display: flex;
    width: 100%;
    padding: 15px 0;
    > .row {
      width: 100%;
    }
    .code-field {
      background: black;
      border: 1px solid white;
      border-radius: 15px;
      padding: 15px;
      text-align: left;
      color: white;
      ::v-deep p {
        margin: 0;
        height: 1.5em;
        .highlight {
          color: #6484d2;
        }
      }
    }
    .input-field {
      width: 400px;
      textarea {
        overflow: hidden;
        resize: none;
        height: 2em;
      }
      button {
        width: 100%;
      }
    }
  }
}

</style>
