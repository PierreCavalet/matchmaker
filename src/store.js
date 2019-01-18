import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: ['Pierre', 'Jordan', 'Bastien', 'Lulu', 'Clement'],
    history: []
  },
  getters: {
    pairs: state => {
      const players = state.players

      return players.reduce((pairs, val, i1) => [
        ...pairs,
        ...new Array(players.length - 1 - i1).fill(0)
          .map((v, i2) => ([players[i1], players[i1 + 1 + i2]]))
      ], [])
    },
    pairsLeft: (state, getters) => {
      return getters.pairs.filter(pair => !state.history.includes(pair[0] + '-' + pair[1]))
    }
  },
  mutations: {
    addPlayer (state, player) {
      state.players.push(player)
    },
    deletePlayer (state, player) {
      const index = state.players.findIndex(currentPlayer => currentPlayer === player)
      if (index > -1) state.players.splice(index, 1)
    },
    addMatchInHistory (state, match) {
      state.history.push(match)
    },
    cleanHistory (state) {
      state.history = []
    }
  },
  actions: {

  }
})
