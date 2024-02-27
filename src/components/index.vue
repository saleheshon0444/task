<template>
  <div class="flex items-center flex-col space-y-4 p-2">
    <h1 class="counter text-5xl">{{ $store.state.counterData }}</h1>
    <div class="buttons flex justify-around">
      <!-- we use store for better acces  -->
      <!-- this piece of code in click atr takes functions from mutations section in store -->
      <button class="btn" @click="$store.commit('increaseCounter')">+</button>
      <button class="btn" @click="$store.commit('decreaseCounter')">-</button>
      <button class="btn" @click="$store.commit('resetButton')">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      counterData: 0,
    };
  },
  methods: {},
};
</script>

<style src="../css/main.css" scoped></style>
