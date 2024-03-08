<template>
  <div class="aoc">
    <h1>Advent of Code {{day}}.12.{{ year }}</h1>
    <p>Test: {{info}}</p>
  </div>
</template>

<script>
import AOCService from "@/services/AOCService";

export default {
  name: 'AdventOfCode',
  data() {
    return {
      info: null,
      year: 2015,
      day: 1
    }
  },
  methods: {
    getAOCInfos(year, day) {
      AOCService.getAOCInfo(year, day)
      .then((res) => {
        this.info = res.data;
        return res;
      })
      .catch((res) => {
        this.info = "no data found: " + res;
      });
    }
  },
  created() {
    this.getAOCInfos(this.year, this.day);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
