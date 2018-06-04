import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import { routes } from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})