import Vue from 'vue';
import App from './app.vue';
let app = new Vue({
    render: (h) => h(App)
});
app.$mount('#app')