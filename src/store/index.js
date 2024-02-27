import { createStore } from 'vuex'

export default createStore({
  state: {
    // data
    counterData: 0,
  },
  mutations: {
    // increase number
     increaseCounter(state) {
      state.counterData++;
    },
    // decrase number 
    decreaseCounter(state) {
      if(state.counterData>0)
      state.counterData--;
    },
    // reset the number 
    resetButton(state){
      state.counterData = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})
