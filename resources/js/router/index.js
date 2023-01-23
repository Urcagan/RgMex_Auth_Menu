import {createRouter, createWebHistory} from "vue-router";

//   import notFound from '../components/notFound.vue';

const routes = [
    // Pages
    {
        path: "/",
        name: 'home',
        component: () => import ('../components/Home.vue'),
    },
    {
        path: "/get",
        name: 'get.index',
        component: () => import ('../components/Get.vue'),
    },
    {
        path: "/user/login",
        name: 'user.login',
        component: () => import('../components/Auth/Login.vue'),
    },
    {
        path: "/user/registration",
        name: 'user.registration',
        component: () => import('../components/Auth/Registration.vue'),
    },
    {
        path: "/user/personal",
        name: 'user.personal',
        component: () => import('../components/Personal.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token') // берем токен из локального хранилища

        // проверяем наличие токина
    if(!token) { // если токена нет
        console.log("index.js' Проверка на наличие токина ТОКЕНА НЕТ")
        // и если пользователь хочет зайти на роуты  логина или регистрации (тоесть пользователь не зарегистрирован)
        if (to.name === 'user.login' || to.name === 'user.registration') {
            console.log("'index.js' token отсутствует и прерход на роут user.login или user.registration")

            return next() // то пропускаем далее
        } else {
            console.log("index.js' token отсутствует и роут не user.login или user.registration")
            // return next( {          //  иначе принудительно отправляем пользователя на страницу логина
               // name: 'user.login'
               //name: 'home'
            // })
        }
    }

    // если пользователь авторизован то у него сть токен
    // если пользовател хочет перейти на страници логина или регистрации и у него есть
    // токен, то отправляем его на его страницу.
    if(to.name === 'user.login' || to.name === 'user.registration' && token) {
        console.log("'index.js' Переход на роут user.login или user.registration ")
        return next( {
            name: 'user.personal'
        })
    }
    console.log('Текущий роут: ', router.currentRoute)
    next() // необходимо триггерить next

})

export default router
