<template>
    <div class="app-wrapper">
        <div class="app">
            <TheSidebar />
            <main>
                <router-view />
            </main>
            <TheFooter />
        </div>
    </div>
</template>

<script>
import TheSidebar from "./components/TheSidebar";
import TheFooter from "./components/TheFooter";

export default {
    name: "app",

    components: {
        TheSidebar,
        TheFooter,
    },
}
</script>