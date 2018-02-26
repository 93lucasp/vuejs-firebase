import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Login from './components/Login.vue'

export const routes = [{
        path: '/',
        name: 'homeLink',
        components: {
            default: Home,
            "about": About,
            "contact": Contact,
            "login": Login
        }
    },
    { path: '/menu', name: 'menuLink', component: Menu },
    {
        path: '/admin',
        name: 'adminLink',
        component: Admin,
        beforeEnter: (to, from, next) => {
            alert('restric area effettua il login');
            next();
        }
    },
    {
        path: '/about',
        name: 'aboutLink',
        component: About,
        children: [

            { path: '/contact', name: 'contactLink', component: Contact },
            { path: '/login', name: 'loginLink', component: Login }

        ]
    },
    { path: '*', redirect: '/' },
]