import {createApp} from 'vue'
import App from './App.vue'
import router from './routes/index'
import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
import {createPinia} from 'pinia'
import {useUserStore} from "@/store";
import {post} from "@/utils/request";


const app = createApp(App)

router.beforeEach((to, from, next) => {
    if (to.path === '/login' || to.path === '/register') {
        next()
    } else {
        const token = localStorage.getItem('Users')
        token === null || token === '' ? next('/login') : next();
        // 写入的入口
        const UserStore = useUserStore()
        post('/user/find')
            .then(v => {
                UserStore.changeUserInfo({
                    token: localStorage.getItem('Users'),
                    info: v.data
                })
            })
    }
})

app
    .use(router)
    .use(createPinia())
    .mount('#app')


