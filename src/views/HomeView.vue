<template>
  <div class="home">
    <div align="center">
      <main-hero
        :post="welcomeScreen"
      />
      <blog-post
        v-for="(post, index) in highlightedBlogposts"
        :post="post"
        :key="index"
      />
    </div>
     
    <div class="blog-card-wrapper">
      <div class="container">
        <h3>Lecciones más recientes:</h3>
        <div class="blog-cards">
          <blog-card 
            v-for="(post, index) in blogCards"
            :post="post"
            :key="index" 
          /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import MainHero from '../components/MainHero.vue';
import BlogCard from '../components/BlogCard.vue';

export default {
  name: "Home",

  data() {
    return {
      welcomeScreen: {
        title: "Enciende la ",
        highlightedTitle: "bombilla",
        subtitle: "Acadeller te impulsa a empezar tu carrera como desarrollador.",
        cover: "3Dlamp"
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
      ],

      blogCards: [
        { title: "Card del Blog 1", cover: "stock-1", date: "25/12/2021"},
        { title: "Card del Blog 2", cover: "stock-2", date: "25/12/2021"},
        { title: "Card del Blog 3", cover: "stock-3", date: "25/12/2021"},
        { title: "Card del Blog 4", cover: "stock-4", date: "25/12/2021"}
      ]
    }
  },

  components: { 
    BlogPost,
    MainHero,
    BlogCard
    }
};
</script>

<style lang="scss" scoped>
.blog-card-wrapper {
  border-bottom: 2px dashed rgb(50, 50, 70);
  
  h3 { 
    font-weight: 300;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
}
</style>
