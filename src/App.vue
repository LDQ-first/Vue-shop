<template>
  <div id="app">
    <transition :name="name">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      name: 'showX'
    } 
  },
  mounted() {
    this.randomTransition()
  },
  methods: {
    randomTransition() {
      this.name = Math.round(Math.random() * 10) > 5 ? 'showX' : 'showY'
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
