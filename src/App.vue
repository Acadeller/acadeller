<template>
  <div class="app-wrapper">
    <div class="app">
      <Nav/>
      <main>
        <router-view />
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: "app",
  components: { 
    Nav,
    Footer 
  },
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

body{
  background: rgb(23, 23, 27);
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #8d8d8d;
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
  background: rgb(23, 23, 27);
  min-height: 550px;
  color: #fff;
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

@media only screen and (max-width: 600px) {
  main {
    margin-left: 0rem;
    padding: 1rem;
  }
}
</style>
