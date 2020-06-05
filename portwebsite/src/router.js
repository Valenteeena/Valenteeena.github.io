import Vue from 'vue'
import Router from 'vue-router'
//import navmenu from './components/navmenu.vue'
import home from './components/home'
import about from './components/about'
import portfolio from './components/portfolio'
import resume from './components/resume'
import contact from './components/contact'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: portfolio
        },
        {
            path: '/resume',
            name: 'resume',
            component: resume
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/about',
            name: 'about',
            component: about
        }
    ]
})