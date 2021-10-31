<template>
  <div class="home" align="center">
    <main-hero
      :post="welcomeScreen" 
    />

    <blog-post 
      :post="post" 
      v-for="(post, index) in sampleBlogpost" 
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
        title: "¡Bienvenido!",
        blogPost: "Trucos de Arrays con JavaScript",
        photo: "coding"
      },

      sampleBlogpost: [
        {
          title: "Título de prueba",
          blogHTML: "Título de mucha prueba",
          blogCoverPhoto: "beautiful-stories"
        },

        {
          title: "Título de prueba 2",
          blogHTML: "Título de mucha prueba 2",
          blogCoverPhoto: "beautiful-stories"
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
