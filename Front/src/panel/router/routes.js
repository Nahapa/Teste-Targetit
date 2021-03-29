import { createWebHistory, createRouter } from "vue-router";
import Home from "@/panel/pages/HomePage.vue";
import User from "@/panel/pages/UserPage.vue";
import NotFound from "@/panel/pages/NotFoundPage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/user',
        name: 'user',
        component: User,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;