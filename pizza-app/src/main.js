import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Login from './components/Login.vue'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store.js'
Vue.use(VueRouter)


const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savePosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})