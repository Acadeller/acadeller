<template>
    <div class="blog-wrapper">
        <div class="blog-content">
            <div>
                <h2>{{ post.title }}</h2>
                <p class="content-preview">{{ post.description }}</p>
                <router-link class="link" to="#">
                    <main-button text="Ver Más"/>
                </router-link>
            </div>
        </div>
        <div class="blog-photo">
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
.blog-wrapper {
    display: flex;
    flex-direction: column;
    border-bottom: 2px dashed rgb(50, 50, 70);
    @media (min-width: 700px) {
        min-height: 400px;
        max-height: 500px;
        flex-direction: row;
    }
    .blog-content {
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
        }
        div {
            max-width: 500px;
            padding: 72px 24px;
            @media (min-width: 700px) {
                padding: 0 24px;
            }
            h2 {
                font-size: 32px;
                font-weight: 300;
                text-transform: uppercase;
                margin-bottom: 20px;
                @media (min-width: 700px) {
                    font-size: 40px;
                }
            }
            .content-preview {
                font-weight: 300;
                line-height: 1.7;
                font-size: 1.5rem;
                max-height: 2rem;
                width: 20rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .link {
                display: inline-flex;
                align-items: center;
                margin-top: 20px;
                padding-bottom: 4px;
            }
        }
    }
    .blog-photo {
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
    &:nth-child(even) {
        .blog-content {
            order: 2;
        }
        .blog-photo {
            order: 1;
        }
    }

    &:nth-child(odd) {
        .blog-content {
            align-items: center;
        }
    }
}
.no-user:first-child {
    .blog-content {
        background-color: #303030;
        color: #fff;
    }
}
</style>
