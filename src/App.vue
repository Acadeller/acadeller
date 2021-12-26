<template>
  <div class="app-wrapper">
    <div class="app">
      <TheSidebar/>
      <main>
        <router-view />
      </main>
      <TheFooter/>
    </div>
  </div>
</template>

<script>
import TheSidebar from './components/TheSidebar'
import TheFooter from './components/TheFooter'

export default {
  name: "app",
  components: { 
    TheSidebar,
    TheFooter 
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

h1, h2 {
  font-family: 'Ubuntu', sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  margin-top: 0.25rem;
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
  color: rgb(255, 255, 255);
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: rgb(231, 231, 231);
  }
}
.arrow-light {
  path {
    fill: #fff;
  }
}

.blog-card-wrapper {
  position: relative;
  padding: 5rem 1rem;  

  @media(min-width: 500px) {
    padding: 6.25rem 1rem;
  }
}

.blog-cards {
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;

  @media(min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  } 

  @media(min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  } 
}

@media only screen and (max-width: 600px) {
  main {
    margin-left: 0rem;
    padding: 1rem;
  }
}
</style>
