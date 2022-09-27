import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.prototype.$dil;
const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    },
    base: process.env.BASE_URL,
})
router.beforeEach((to, from, next) => {
    next()
    document.title = to.meta.name;
    store.commit('setResetToursJson')
});
new Vue({
    store,
    router,
    render: h => h(App)

    
}).$mount('#app');
