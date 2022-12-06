import { createApp,  } from 'vue'
import App from './App.vue'
import router from './router'
import {useRoute} from 'vue-router'

export default useRoute

createApp(App).use(router).mount('#app')
