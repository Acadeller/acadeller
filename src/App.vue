<template>
    <div class="app-wrapper">
        <div class="app">
            <TheSidebar v-if="showMainAppElements" />
            <main>
                <router-view />
            </main>
            <TheFooter v-if="showMainAppElements" />
        </div>
    </div>
</template>

<script>
import TheSidebar from "./components/TheSidebar";
import TheFooter from "./components/TheFooter";

export default {
    name: "app",

    data() {
        return {
            showMainAppElements: null
        }
    },

    created() {
        this.checkRoute()
    },

    methods: {
        checkRoute() {
            const excludedRoutes = ["ForgotPassword", "Register", "Login"]

            if (excludedRoutes.includes(this.$route.name)) {
                return this.showMainAppElements = false
            }
            this.showMainAppElements = true
        }
    },

    components: {
        TheSidebar,
        TheFooter,
    },
}
</script>