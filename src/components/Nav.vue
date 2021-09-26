<template>
<nav class="navbar">
    <ul class="navbar-nav">
        <li class="logo">
            <router-link class="nav-link" :to="{ name: 'Home'}">
            <span class="logo-text">Acadeller</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb" class="svg-inline--fa fa-lightbulb fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" class="fa-primary" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path></svg>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" class="fa-primary" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
                <span class="link-text">Inicio</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/lessons">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" class="svg-inline--fa fa-code fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" class="fa-primary" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
                <span class="link-text">Lecciones</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/courses">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" class="fa-primary" d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path></svg>
                <span class="link-text">Cursos</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/tags">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tags" class="svg-inline--fa fa-tags fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" class="fa-primary" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path></svg>
                <span class="link-text">Etiquetas</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" class="svg-inline--fa fa-file-alt fa-w-12 file" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" class="fa-primary" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
                <span class="link-text">Acerca</span>
            </router-link>
        </li>
    </ul>
</nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
    position: fixed;
    background-color: #23232e;
    transition: width 500ms ease;
    overflow: scroll;
}

.navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.nav-item {
    width: 100%;
}

.nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: #b6b6b6;
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: 600ms;
}

.nav-link:hover {
    filter: grayscale(0%) opacity(1);
    background: #141418;
    color: #ececec;
}

.link-text, .logo-text {
    font-family: 'Ubuntu', sans-serif;
    display: none;
}

.nav-link svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
}

.file {
    height: 2rem;
}

.fa-primary {
    color: #ffcc00;
}

.fa-secondary {
    color: #b99400;
}

.fa-primary,
.fa-secondary {
    transition: 600ms;
}

.logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: #ececec;
    background: #2c2c3a;
    font-size: 1.25rem;
    letter-spacing: 0.3ch;
    width: 100%;
}

.logo svg {
    transform: rotate(0deg);
    transition: 600ms;
}

.logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: 600ms;
}

.navbar:hover .logo svg {
    transform: scale(0.85);
}

@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }

  main {
    margin: 0;
  }
}

@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  .navbar:hover {
    width: 16rem;
  }

  .navbar:hover .link-text {
    display: inline;
    margin-left: 1rem;
    font-size: 1.1rem;
  }

  .navbar:hover .logo-text {
    margin-left: 2rem;
  }

  .navbar:hover .logo svg
  {
    margin-left: 12.2rem;
  }

  .navbar:hover .logo-text
  {
    left: 0px;
  }
}

</style>