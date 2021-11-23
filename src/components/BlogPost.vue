<template>
  <div class="blog-wrapper">
      <div class="blog-content">
          <div>
              <h2>{{ post.title }}</h2>
              <p class="content-preview">{{ post.blogPost }}</p>
              <router-link class="link link-light" to="#">
                 Ver más <arrow class="link link-light"/>
              </router-link>
          </div>
          <div class="blog-photo">
              <img :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"

export default {
    name: "blogPost",

    props: {
        post: {
            title: {
                type: String
            }
        }
    },

    components: { 
    Arrow 
    }
}
</script>

<style lang="scss" scoped>

</style>