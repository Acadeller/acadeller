<template>
  <div class="home" align="center">
    <main-hero
      :post="welcomeScreen" 
    />

    <blog-post 
      v-for="(post, index) in highlightedBlogposts" 
      :post="post" 
      :key="index" 
    />
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import MainHero from '../components/MainHero.vue';

export default {
  name: "Home",

  data() {
    return {
      welcomeScreen: {
        title: "Enciende la bombilla",
        subtitle: "Acadeller te guía para que empieces tu carrera como desarrollador",
        cover: "coding"
      },

      highlightedBlogposts: [
        {
          title: "Título de prueba",
          description: "Descripción de la entrada del Blog",
          cover: "beautiful-stories"
        },

        {
          title: "Título de prueba 2",
          description: "Descripción de la entrada del Blog",
          cover: "beautiful-stories"
        }
      ]
    }
  },

  components: { 
    BlogPost,
    MainHero 
    }
};
</script>
