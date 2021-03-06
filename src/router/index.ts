import { createRouter, createWebHashHistory, onBeforeRouteUpdate, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Register from '../views/Register.vue';
import ExerciseDetail from '../views/ExerciseDetail.vue';
import Settings from '../views/Settings.vue';
import { getAuth, User } from '@firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import TrainingPlan from '../views/TrainingPlan.vue';
import { ref } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/ExerciseDetail',
    name: 'ExerciseDetail',
    props: true,
    component: ExerciseDetail,
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true },
  },
  {
    path: '/TrainingPlan',
    name: 'TrainingPlan',
    component: TrainingPlan,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const currentUser = ref<User | null>(null);

const getCurrentUser = () => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        currentUser.value = user;
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};
export let lastPage = 'Home';
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (!(await getCurrentUser()) && requiresAuth) {
    next('Admin');
  } else {
    next();
  }
  if (from.name == 'TrainingPlan') {
    lastPage = 'TrainingPlan';
  } else {
    lastPage = 'Home';
  }
});

export default router;
