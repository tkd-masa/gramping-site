import { createRouter, createWebHistory } from 'vue-router';
import gsap from 'gsap';
import HomeArea from './components/HomeArea.vue';
import TentArea from './components/TentArea.vue';
import FoodArea from './components/FoodArea.vue';
import AccessArea from './components/AccessArea.vue';
import FaqArea from './components/FaqArea.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
    // ルーティング設定
    history: createWebHistory(process.env.BASE_URL),
    base: process.env.NODE_ENV === 'development' ? './' : '/takeda/gramping',
    routes: [
      { path: '/', redirect: '/HOME'},
      { name: 'HOME', path: '/HOME', component: HomeArea },
      { name: 'TENT', path: '/TENT', component: TentArea },
      { name: 'FOOD', path: '/FOOD', component: FoodArea },
      { name: 'ACCESS', path: '/ACCESS', component: AccessArea },
      { name: 'FAQ', path: '/FAQ', component: FaqArea },
      { path: '/:notFound(.*)', component: NotFound }
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 }
      }
    }
  });

  // 遷移アニメーション
  router.beforeEach((to, from, next) => {
    if(from.fullPath != '/'){
      const tl = gsap.timeline();
      tl.to("#app", {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          next();
        }
      }).to("#app", {
        duration: 0.5,
        opacity: 1
      }, 1);
    }else{
      next();
    }
  });

  export default router;
