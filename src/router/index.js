import { createRouter, createWebHistory} from 'vue-router'

import Home_Page from "../views/Home_Page"
import About_Page from "../views/About_Page"


const routes = [
    {
        path: '/', 
        name: 'Home_Page', 
        component: Home_Page
    }, 
    {
        path: '/about', 
        name: 'About_Page', 
        component: About_Page
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes,
})

export default router