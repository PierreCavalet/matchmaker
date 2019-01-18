<template>
  <div>
    <div v-for="player in players" :key="player">
      <button @click="deletePlayer(player)">Delete</button>
      {{ player }}
    </div>
    <input v-model="newPlayer" type="text" name="player" />
    <button @click="addPlayer">Add player</button>
  </div>
</template>

<script>

export default {
  name: 'Players',
  data() {
    return {
      newPlayer: ''
    }
  },
  computed: {
    players() {
      return this.$store.state.players
    }
  },
  methods: {
    addPlayer() {
      if (this.newPlayer === '') return
      this.$store.commit('addPlayer', this.newPlayer)
    },
    deletePlayer(player) {
      this.$store.commit('deletePlayer', player)
    }
  }
}
</script>

