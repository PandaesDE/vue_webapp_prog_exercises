<template>
  <div id="AOC" class="container-fluid">
    <header>
      <h1>Advent of Code</h1>
      <img src="../assets/images/Banner.jpg" alt="">
    </header>
    <section id="AOC_Content" class="container">
      <div id="background_input_text">
        <span > {{AOCinput}} </span>
      </div>
      <div class="row">
        <div class="col-9 code-field">
          <h2>Sourcecode</h2>
          <div class="row">
            <div class="col text-start">Code written for <span class="highlight">Java 21</span></div>
            <div class="col text-end">Day of creation: </div>
          </div>
          <pre>
            <code class="code" v-html="applyJavaHighlighting(code)"></code>
          </pre>
        </div>
        <div class="col-3 data-field">
          <h2>Input Data</h2>
          <div class="input">
            <input id="input_year" type="number" min="2015" max="2024" step="1" placeholder="year" v-model="this.year"  @change="changeInputYear">
          </div>
          <div class="input">
            <input id="input_day" type="number" min="1" max="25" step="1" placeholder="day" v-model="this.day" @change="changeInputDay">
            <button @click="getData">Get</button>
          </div>
          <div class="input">
            <textarea id="input_aoc" placeholder="insert your input data" @change="changeInputAOC"></textarea>
            <button @click="submitInput">Submit</button>
          </div>
          <h2>Solution</h2>
          <p>Answer 1: {{ solution.answer1 }}</p>
          <p>Answer 2: {{ solution.answer2 }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import AOCService from "@/services/AOCService";
import hljs from 'highlight.js';

export default {
  name: 'AdventOfCode',
  data() {
    return {
      solution: {
        answer1: null,
        answer2: null,
      },
      code: null,
      AOCinput: null,
      year: 2016,
      day: 1
    }
  },
  async created() {
    await this.getData();
  },
  methods: {
    applyJavaHighlighting(code) {
      if (!code) return "";

      return hljs.highlight(
          code,
          {language: 'java'}
      ).value;
    },

    async getSolution() {
      this.solution = await AOCService.getAOCInfo(this.year, this.day);
    },
    async getCode() {
      this.code = await AOCService.getAOCCode(this.year, this.day);
    },
    async getInput() {
      this.AOCinput = await AOCService.getAOCInput(this.year, this.day);
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
    changeInputAOC() {
      let aocInputElement = document.querySelector("#input_aoc");
      if (!aocInputElement) return;

      let input = aocInputElement.value;

      if (!input) return;

      this.AOCinput = input;
    },


    async getData() {
      await this.getCode();
      await this.getInput();
      await this.getSolution();
    },
    async submitInput() {
      await AOCService.setAOCInput(this.year, this.day, this.AOCinput);
      await this.getData();
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "highlight.js/styles/github-dark-dimmed.css";

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
  span.highlight {
    color: #ffff66;
    text-shadow: 0 0 5px #ffff66
  }
  button, a {
    color: #009900;
    background: #0f0f23;
    border: none;
    &:hover {
      color: #99ff99;
    }
  }
  input, textarea {
    color: white;
    background: #0f0f23;
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
    #background_input_text {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      color: rgba(white,.02);
      z-index: 0;
      overflow: hidden;
      span {
        font-size: 20pt;
        transform: rotate(30deg);
        user-select: none;
      }
    }
    h2 {
      margin-top: 1.5em;
      margin-bottom: .5em;
    }
    .code-field {
      z-index: 1;

      pre {
        max-height: 80vh;
        overflow-y: scroll;

        text-align: left;
        background: rgba(0,0,0,.75);
        border: 1px solid white;
        border-radius: 15px;
        padding: 15px 15px 15px 3em;
        code {

        }
      }
    }

    .data-field {
      z-index: 1;
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
