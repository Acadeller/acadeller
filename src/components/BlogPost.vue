<template>
    <div class="blog-wrapper">
        <div class="blog-content">
            <div>
                <h2>{{ post.title }}</h2>
                <p class="content-preview">{{ post.blogPost }}</p>
                <router-link class="link link-light" to="#">
                    Ver más <arrow class="arrow arrow-light" />
                </router-link>
            </div>
        </div>
        <div class="blog-photo">
            <img
                :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
                alt=""
            />
        </div>
    </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
    name: "blogPost",

    props: {
        post: {
            title: {
                type: String,
            },
        },
    },

    components: {
        Arrow,
    },
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    @media (min-width: 700px) {
        min-height: 400px;
        max-height: 450px;
        flex-direction: row;
    }
    .blog-content {
        display: flex;
        text-align: left;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;
        order: 2;
        @media (min-width: 700px) {
            order: 1;
        }
        @media (min-width: 800px) {
            flex: 3;
        }
        div {
            max-width: 375px;
            padding: 72px 24px;
            @media (min-width: 700px) {
                padding: 0 24px;
            }
            h2 {
                font-size: 32px;
                font-weight: 300;
                text-transform: uppercase;
                margin-bottom: 24px;
                @media (min-width: 700px) {
                    font-size: 40px;
                }
            }
            p {
                font-size: 15px;
                font-weight: 300;
                line-height: 1.7;
            }
            .content-preview {
                font-size: 13px;
                max-height: 24px;
                width: 250px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .link {
                display: inline-flex;
                align-items: center;
                margin-top: 32px;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;
                transition: 0.5s ease-in all;
                &:hover {
                    border-bottom-color: #303030;
                }
            }
            .link-light {
                &:hover {
                    border-bottom-color: #ffff;
                }
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
            display: block;
            align-self: center;
            width: 80%;
            height: 80%;
            object-fit: cover;
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
}
.no-user:first-child {
    .blog-content {
        background-color: #303030;
        color: #fff;
    }
}
</style>
