import { createMemoryHistory, createRouter} from 'vue-router'

import HomeView from './components/HomePage.vue'
import AOCView from './components/AdventOfCode.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/AOC', component: AOCView },
]


export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

