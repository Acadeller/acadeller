<template>
    <div class="blog-card">
        <div class="icons">
            <div class="icon">
                <Edit class="edit" />
            </div>
            <div class="icon">
                <Delete class="delete" />
            </div>
        </div>
        <img :src="require(`../assets/blogCards/${post.cover}.jpg`)" alt="" />
        <div class="info">
            <h4>{{ post.title }}</h4>
            <h6>Fecha de publicación: {{ post.date }}</h6>
            <router-link class="link" to="#">
                Ver lección
                <Arrow class="arrow" />
            </router-link>
        </div>
    </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";

export default {
    name: "BlogCard",

    props: {
        post: Array,
    },

    components: {
        Arrow,
        Edit,
        Delete,
    },
};
</script>

<style lang="scss" scoped>
.blog-card {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #252531;
    min-height: 350px;
    transition: 0.5s ease all;
    &:hover {
        transform: rotateZ(-1deg) scale(1.01);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .icons {
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;
        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: #303030;
            transition: 0.5s ease all;
            &:hover {
                background-color: #ffcc00;
                .edit,
                .delete {
                    path {
                        fill: #fff;
                    }
                }
            }
            &:nth-child(1) {
                margin-right: 8px;
            }
            .edit,
            .delete {
                pointer-events: none;
                height: 15px;
                width: auto;
            }
        }
    }
    img {
        display: block;
        border-radius: 8px 8px 0 0;
        z-index: 1;
        width: 100%;
        min-height: 200px;
        object-fit: cover;
    }
    .info {
        display: flex;
        flex-direction: column;
        height: 100%;
        z-index: 3;
        padding: 32px 16px;
        color: rgb(255, 255, 255);
        h4 {
            padding-bottom: 8px;
            font-size: 20px;
            font-weight: 300;
        }
        h6 {
            font-weight: 400;
            font-size: 12px;
            padding-bottom: 16px;
        }
        .link {
            display: inline-flex;
            align-items: center;
            margin-top: auto;
            font-weight: 500;
            padding-top: 20px;
            font-size: 12px;
            padding-bottom: 4px;
            transition: 0.5s ease-in all;
            color: rgba(255, 255, 255, 0.671);
            &:hover {
                color: #ffcc00;
            }
            .arrow {
                width: 10px;
            }
        }
    }
}
</style>
