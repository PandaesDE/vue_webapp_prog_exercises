<template>
  <div id="AOC" class="container-fluid">
    <header>
      <h1>Advent of Code {{day}}.12.{{ year }}</h1>
      <img src="../assets/images/Banner.jpg" alt="">
    </header>
    <section id="AOC_Content" class="container">
      <div class="row">
        <div class="col-9 code-field">
          <h2>Sourcecode</h2>
          <div class="code" v-html="code"></div>
        </div>
        <div class="col-3 data-field">
          <h2>Input Data</h2>
          <div class="input">
            <input id="input_year" type="number" min="2015" max="2024" step="1" placeholder="year" @change="changeInputYear">
            <button @click="submitData()">Submit</button>
          </div>
          <div class="input">
            <input id="input_day" type="number" min="1" max="25" step="1" placeholder="day" @change="changeInputDay">
            <button @click="submitData()">Submit</button>
          </div>
          <div class="input">
            <textarea v-model="message" placeholder="insert your input data"></textarea>
            <button @click="submitData()">Submit</button>
          </div>
          <h2>Solution</h2>
          <p>{{ solution }}</p>
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
    await this.updateSolution();
    await this.updateCode();
  },
  methods: {
    async updateSolution() {
      this.solution = await AOCService.getAOCInfo(this.year, this.day);
    },
    async updateCode() {
      this.code = await AOCService.getAOCCode(this.year, this.day);
      this.code = ConvertingService.textToHTML(this.code);
    },
    changeInputYear() {
      let yearInputElement = document.querySelector("#input_year");
      if (!yearInputElement) return;

      let year = yearInputElement.value;

      if (!year) return;
      if (year < 2015 || year > 2024) return;
      //prevents unnecessary fetching
      if (this.year === year) return;

      this.year = year;
    },
    changeInputDay() {
      let dayInputElement = document.querySelector("#input_day");
      if (!dayInputElement) return;

      let day = dayInputElement.value;

      if (!day) return;
      if (day < 1 || day > 25) return;
      //prevents unnecessary fetching
      if (this.day === day) return;

      this.day = day;
    },
    submitData() {
      this.updateSolution();
      this.updateCode();
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#AOC {
  background: #0f0f23;
  min-height: 100vh;
  font-family: "Source Code Pro", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  h1,h2,h3,h4,h5,h6 {
    color: white;
  }
  span.highlight, button, a {
    color: #009900;
    background: transparent;
    border: none;
    &:hover {
      color: #99ff99;
    }
  }
  input, textarea {
    background: transparent;
    border: none;
    border-radius: 5px;
    border-bottom: 1px solid white;
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
    h2 {
      margin-top: 1.5em;
      margin-bottom: .5em;
    }
    .code-field {
      .code{
        background: rgba(0,0,0,.75);
        border: 1px solid white;
        border-radius: 15px;
        padding: 15px;
        text-align: left;
        color: white;
        :deep(p) {
          margin: 0;
          height: 1.5em;
          .highlight {
            color: #6484d2;
          }
        }
      }
    }
    .data-field {
      .input {
        display: flex;
        margin: .5em 0;
        gap: .5em;
        input, textarea {
          padding: 0 .5em;
          flex: 2;
          overflow: hidden;
          resize: none;
          height: 2em;
        }
        button {
          flex: 1;
        }
      }
    }
  }
}

</style>
