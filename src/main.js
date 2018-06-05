import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import { routes } from './routes'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString()
})

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
