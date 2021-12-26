<template>
    <div class="blog-card-wrapper">
        <div class="blog-cards container">
            <h1 class="blogs-title">Lecciones</h1>
            <div class="toggle-edit">
                <span>Habilitar edición</span>
                <input type="checkbox" v-model="canEditPost" />
            </div>
            <blog-card
                v-for="(post, index) in blogCards"
                :post="post"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue"

export default {
    name: "LessonsView",

    computed: {
        blogCards() {
            return this.$store.state.blogCards
        },

        canEditPost: {
          get() {
            return this.$store.state.editPost
          },
          set(payload) {
            this.$store.commit("toggleEditPost", payload)
          },
        }
    },

    beforeDestroy() {
      this.$store.commit("toggleEditPost", false)
    },

    components: {
        BlogCard,
    },
};
</script>

<style lang="scss" scoped>
.blog-card-wrapper {
    border-bottom: 2px dashed rgb(50, 50, 70);
}
.blog-cards {
    position: relative;
    .blogs-title {
        display: flex;
        align-items: center;
        position: absolute;
        top: -4.375rem;
        border-bottom: 2px dashed rgb(50, 50, 70);
    }
    .toggle-edit {
        display: flex;
        align-items: center;
        position: absolute;
        top: -4.375rem;
        right: 0;
        span {
            margin-right: 16px;
        }
        input[type="checkbox"] {
            position: relative;
            border: none;
            -webkit-appearance: none;
            background: #fff;
            outline: none;
            width: 80px;
            height: 30px;
            border-radius: 20px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        input:checked[type="checkbox"] {
            background: $primary;
        }
        input[type="checkbox"]:before {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 20px;
            top: 0;
            left: 0;
            background: #303030;
            transform: scale(0.8);
            transition: 500ms ease all;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        input:checked[type="checkbox"]:before {
            background: #303030;
            left: 52px;
        }
    }
}
</style>
