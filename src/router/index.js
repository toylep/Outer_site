import { createRouter, createWebHistory } from 'vue-router'
import InstituteView from '@/views/InstituteView.vue';
import partnerView from '@/views/partnerView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: InstituteView
  },{
    path: '/partner',
    name: 'partner',
    component: partnerView
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
