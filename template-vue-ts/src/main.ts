import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import '@/styles/tailwind.css';
import ElementPlus from 'element-plus';
import axios from 'axios';
import VueAxios from 'vue-axios';
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');
