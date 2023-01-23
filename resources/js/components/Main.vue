<template>
    <main-header :logon="LoginCheck"/>
    <div class="d-flex">

<!--            Side Bar Menu-->
        <side-bar/>

        <div class="main-content ">
            <router-view :key="$route.fullPath"></router-view>
        </div>

    </div>
    <footer class="footer">
        <p>Footer</p>
    </footer>


</template>

<script>
import SideBar from './InterfaceElement/Sidebar.vue';
import MainHeader from "./InterfaceElement/MainHeader.vue";

export default {
    name: "Main",
    components: {MainHeader, SideBar},

    data() {
        return {
            token: null
        }
    },

    mounted() {
        this.getToken()
    },

    // если чтото поменялось, необходио апдейтить
    updated() {
        // console.log('Произошли изменениия в компоненте Main')

        this.getToken() // заново подгружаем токен (нужно для обновления состояния кнопок)
    },

    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },
    },

    computed: {
      LoginCheck()  {
          return this.token !== null;
      }
    },
}
</script>

<style scoped>


</style>

<style lang="scss">
:root {
    --primary: #4ade80;
    // --primary-alt: #22c55e;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px;
}

body {
    background: var(--light);
}

button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

.app {
    display: flex;
    main {
        flex: 1 1 0;
        padding: 2rem;
        @media (max-width: 1024px) {
            padding-left: 6rem;
        }
    }
}
</style>
