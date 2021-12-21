<template>
  <div class="hero-wrapper">
        <div class="hero-content">
            <div>
                <h2>{{ post.title }} <span>{{ post.highlightedTitle }}</span></h2>
                <p class="content-preview">{{ post.subtitle }}</p>
                <router-link class="link" to="/cursos">
                    <main-button class="main-button" text="Ver Cursos"/>
                </router-link>
                <router-link class="link" to="/lecciones">
                    <secondary-button text="Ver Lecciones"/>
                </router-link>
            </div>
        </div>
        <div class="hero-photo">
            <img
                :src="require(`../assets/${post.cover}.png`)"
                alt="3Dlogo"
            />
        </div>
    </div>
</template>

<script>
import MainButton from "./buttons/MainButton.vue";
import SecondaryButton from "./buttons/SecondaryButton.vue";

export default {
    name: "blogPost",

    props: {
        post: Object
    },

    components: {
        MainButton,
        SecondaryButton
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
        @media (min-width: 800px) {
            margin-left: 10rem;
        }
        div {
            max-width: 25rem;
            padding: 5rem 1.5rem;
            @media (max-width: 700px) {
                    padding: 3rem 0 0 1.5rem;
                }
            h2 {
                font-size: 2.5rem;
                line-height: 1;
                font-weight: 800;
                text-transform: uppercase;
                margin-bottom: 20px;
                @media (min-width: 700px) {
                    font-size: 3rem;
                }
            }
            span {
              font-size: 4rem;
              font-family: 'Ubuntu', sans-serif;
              font-weight: 800;
              background: linear-gradient(90deg, rgba(255,204,0,1) 30%, rgb(255, 115, 0) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .content-preview {
                font-weight: 300;
                line-height: 1;
                font-size: 1.5rem;
                max-height: 2rem;
                width: 22rem;
                overflow-wrap: break-word;
                overflow: break-word;;
                text-overflow: ellipsis;
                margin-bottom: 1.3rem;
                @media (max-width: 400px) {
                    margin-bottom: 4rem;
                }
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
            margin-right: 40px;
            align-self: center;
            border-radius: 10px;
            display: block;
            object-fit: cover;
            width: 100%;
            transform: translatey(0px);
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translatey(0px);
          }
          50% {
            transform: translatey(-20px);
          }
          100% {
            transform: translatey(0px);
          }
        }
    }
}

.main-button {
  margin-right: 0.6rem;
}
</style>