import { createApp } from 'vue'
import App from './App.vue'
import router  from './routes/index'
import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
const app = createApp(App)
app
    .use(router)
    .mount('#app')
