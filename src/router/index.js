import { createRouter, createWebHistory } from 'vue-router'
import InstituteView from '@/views/InstituteView.vue';
import PracticeView from '@/views/PracticeView.vue';
import UserView from '@/views/UserView'
const routes = [
  { 
    
    path: '/',
    name: 'home',
    component: InstituteView
  },{
    path: '/partner',
    name: 'partner',
    component: PracticeView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
