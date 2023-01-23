<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" >RegMex</router-link>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link exact-active-class="active" :to="{name: 'home'}" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
<!--                            <router-link exact-active-class="active" to="/get" class="nav-link">Get</router-link>-->
                            <router-link exact-active-class="active" class="nav-link" :to="{name: 'get.index'}" >Get</router-link>
                        </li>
                    </ul>
                    <div class="my-2 my-lg-0">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <router-link v-if="!logon" class="nav-link" exact-active-class="active" :to="{name: 'user.registration'}">Регистация</router-link>
                            </li>
                            <li class="nav-item ">
                                <router-link v-if="!logon" class="nav-link" exact-active-class="active"  :to="{name: 'user.login'}">Войти</router-link>
                            </li>
                            <li class="nav-item ">
                                <a class="btn btn-outline-danger" v-if="logon" @click.prevent="logout"
                                   href="#">Выйти</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "MainHeader",

    props: {
        logon: {    // Свойство вошол пользователь или нет
          type: Boolean,
          required: true,
          default: false
        },
    },

    methods: {
        logout() {      // метод для выхода пользователя
            axios.post('/logout')
                .then(res => {
                    // перед выходом пользователя, удаляем из localStorage его x-xsrf-token (уникальный идентификатор)
                    localStorage.removeItem('x_xsrf_token');
                    // перенаправляем пользователя на страницу логин
                    this.$router.push({name: 'home'})
                    console.log('MainHeader.vue Нажата кнопка Logout и отправлен на страницу Home')
                })
        },
    },
}
</script>

<style scoped>

</style>
