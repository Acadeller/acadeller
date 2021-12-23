<template>
<footer class="footer" align="center">
    <div class="social_links">
        <a 
        href="https://www.instagram.com/acadeller/" 
        target="_blank"
        rel=”noopener”
        >
            <span class="fa-stack fa-lg ic combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
        <a 
        href="https://twitter.com/acadeller" 
        target="_blank"
        rel=”noopener”
        >
            <span class="fa-stack fa-lg ic combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-twitter fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
        <a 
        href="https://github.com/Acadeller" 
        target="_blank"
        rel=”noopener”
        >
            <span class="fa-stack fa-lg ic combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-github fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
        <a 
        href="https://www.linkedin.com/company/acadeller" 
        target="_blank"
        rel=”noopener”
        >
            <span class="fa-stack fa-lg ic combo">
                <i class="fa fa-circle fa-stack-2x circle"></i>
                <i class="fa fa-linkedin fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
    </div>
    <p>Copyright © {{ date }} Acadeller</p>
</footer>
</template>

<script>
export default {
    computed: {
        date() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
.footer {
    height: 25vh;
    margin-left: 5rem;
}
.footer p {
    color: #b6b6b6;
}
.social_links {
    padding: 1rem;
    border-radius: 1rem;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.social_links .combo {
    transform: scale(0.9);
    transition: 0.3s ease-in;
    margin: 0 0.5rem;
    height: 3em;
    width: 3em;
    line-height: 3em;
}
.combo .circle {
    color: #2c2c3a;
    transition: 0.4s ease-in;
    font-size: 3em;
}
.combo .icon {
    color: #ffffff;
    font-size: 2rem;
    transform: translateY(1px);
    transition: 0.1s ease-in;
}
.combo:hover {
    transform: scale(1.1);
}
.combo:hover , .combo:hover .icon {
    color:#2c2c3a;
}
.ic:hover , .ic:hover .circle {
    color:#ffcc00;
}

@media only screen and (max-width: 600px) {
    .footer {
        margin-left: 0rem;
        margin-bottom: 80px;
    }
}
</style>