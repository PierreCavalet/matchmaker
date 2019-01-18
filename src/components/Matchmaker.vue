<template>
  <div>
    <h1>Current match</h1>
    <div><span v-if="current.length"> {{ current[0] }} - {{ current[1] }}</span></div>
    <br/>
    <div><button @click="match">MATCH!</button></div>
    <h2>Match</h2>
    <div v-for="pair in pairs" :key="pair[0] + '-' + pair[1]" :class="{ hasToBePlayed: hasToBePlayed(pair), isPlayed: !hasToBePlayed(pair)}">
      {{ pair[0] }} - {{ pair[1] }}
    </div>
    <br/>
    <div><button @click="reset">Reset history</button></div>
  </div>
</template>

<script>

export default {
  name: 'Matchmaker',
  computed: {
    pairs() {
      return this.$store.getters.pairs
    }
  },
  data() {
    return {
      current: []
    }
  },
  methods: {
    hasToBePlayed(pair) {
      return !this.$store.state.history.includes(pair[0] + '-' + pair[1])
    },
    match() {
      const pairsLeft = this.$store.getters.pairsLeft

      if (!pairsLeft.length) {
        this.reset()
        return
      }

      const pair = pairsLeft[Math.floor(Math.random() * pairsLeft.length)]

      this.$store.commit('addMatchInHistory', pair[0] + '-' + pair[1])
      this.current = pair
    },
    reset() {
      this.$store.commit('cleanHistory')
    }
  }
}
</script>

<style>
  .hasToBePlayed {
    color: green;
  }

  .isPlayed {
    color: red;
  }
</style>
