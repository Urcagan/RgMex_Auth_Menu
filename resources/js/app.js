import './bootstrap';
import '../css/app.css';
import '../sass/app.scss'; // Необходимо добавить для bootstrap

import { createApp } from 'vue';
import Index from "./components/Index.vue";
import Main from "./components/Main.vue"

import router from "./router";

// подключение иконок
import 'material-icons/iconfont/material-icons.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

const app =createApp(Main)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.config.globalProperties.axios = axios
app.mount('#app')

