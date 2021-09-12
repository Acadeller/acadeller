<template>
  <div class="app-wrapper">
    <div class="app">
      <Nav/>
      <main>
        <router-view />
        <h1>Hola</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate dolorem, amet saepe deleniti optio. Praesentium, maiores quo! Consequatur provident vero ipsam voluptas itaque expedita nihil iure sequi perferendis vel.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate dolorem, amet saepe deleniti optio. Praesentium, maiores quo! Consequatur provident vero ipsam voluptas itaque expedita nihil iure sequi perferendis vel.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate dolorem, amet saepe deleniti optio. Praesentium, maiores quo! Consequatur provident vero ipsam voluptas itaque expedita nihil iure sequi perferendis vel.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate dolorem, amet saepe deleniti optio. Praesentium, maiores quo! Consequatur provident vero ipsam voluptas itaque expedita nihil iure sequi perferendis vel.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate dolorem, amet saepe deleniti optio. Praesentium, maiores quo! Consequatur provident vero ipsam voluptas itaque expedita nihil iure sequi perferendis vel.</p>
      </main>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: "app",
  components: { Nav },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #ffcc00;
}

h1 {
  font-family: 'Ubuntu', sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  margin-left: 5rem;
  padding: 1rem;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
</style>
