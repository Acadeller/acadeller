<template>
  <div class="hero-wrapper">
        <div class="hero-content">
            <div>
                <h2>{{ post.title }} <span>{{ post.highlightedTitle }}</span></h2>
                <p class="content-preview">{{ post.subtitle }}</p>
                <router-link class="link" to="/cursos">
                    <main-button text="Ver Cursos"/>
                </router-link>
                <router-link class="link" to="/lecciones">
                    <main-button class="secondary-button" text="Ver Lecciones"/>
                </router-link>
            </div>
        </div>
        <div class="hero-photo">
            <img
                :src="require(`../assets/blogPhotos/${post.cover}.jpg`)"
                alt=""
            />
        </div>
    </div>
</template>

<script>
import MainButton from "./buttons/MainButton.vue";

export default {
    name: "blogPost",

    props: {
        post: Object
    },

    components: {
        MainButton
    }
}
</script>

<style lang="scss" scoped>
.hero-wrapper {
    display: flex;
    flex-direction: column;
    border-bottom: 2px dashed rgb(50, 50, 70);
    @media (min-width: 700px) {
        min-height: 600px;
        max-height: 600px;
        flex-direction: row;
    }
    .hero-content {
        display: flex;
        text-align: left;
        flex-direction: column;
        justify-content: center;
        flex: 4;
        order: 2;
        @media (min-width: 700px) {
            order: 1;
        }
        @media (min-width: 800px) {
            flex: 3;
            margin-left: 80px;
        }
        div {
            max-width: 400px;
            padding: 72px 24px;
            @media (min-width: 700px) {
                padding: 0 24px;
            }
            h2 {
                font-size: 32px;
                font-weight: 800;
                text-transform: uppercase;
                margin-bottom: 20px;
                @media (min-width: 700px) {
                    font-size: 45px;
                }
            }
            span {
              font-size: 50px;
              font-family: 'Ubuntu', sans-serif;
              font-weight: 800;
              background: linear-gradient(90deg, rgba(255,204,0,1) 30%, rgb(255, 115, 0) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .content-preview {
                font-weight: 300;
                line-height: 1.9;
                font-size: 25px;
                max-height: 100px;
                width: 10px;
                white-space: nowrap;
                overflow: break-word;
            }
            .link {
                display: inline-flex;
                align-items: center;
                margin-top: 20px;
                padding-bottom: 4px;
            }
        }
    }
    .hero-photo {
        order: 1;
        flex: 3;
        @media (min-width: 700px) {
            order: 2;
        }
        @media (min-width: 800px) {
            flex: 4;
        }
        img {
            margin-top: 7%;
            align-self: center;
            border-radius: 10px;
            display: block;
            height: 80%;
            object-fit: cover;
            width: 80%;
        }
    }
}

.secondary-button {
  margin-left: 10px;
}
</style>