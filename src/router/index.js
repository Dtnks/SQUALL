import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/installation',
      name: 'Installation',
      component: () => import('../views/Installation.vue'),
    },
    {
  path: '/tutorials',
  component: () => import('../views/tutorials/TutorialLayout.vue'),
  children: [
    {
      path: '',
      redirect: '/tutorials/visium',
    },
    {
  path: 'visium',
  name: 'Visium',
  component: () => import('../views/tutorials/NotebookPage.vue'),
  props: {
    title: 'Visium',
    filename: 'Tutorial_visium_SQUALL.html',
  },
},
    {
      path: 'gex-prediction',
      name: 'GEXPrediction',
      component: () => import('../views/tutorials/NotebookPage.vue'),
      props: {
        title: 'GEX Prediction',
        filename: 'Tutorial_inference_SQUALL.html',
      },
    },
    {
      path: 'spatial-domain',
      name: 'SpatialDomain',
      component: () => import('../views/tutorials/NotebookPage.vue'),
      props: {
        title: 'Spatial Domain',
        filename: 'Tutorial_clustering_SQUALL.html',
      },
    },
    {
      path: 'survival',
      name: 'Survival',
      component: () => import('../views/tutorials/NotebookPage.vue'),
      props: {
        title: 'Survival Prediction',
        filename: 'Tutorial_survival_SQUALL.html',
      },
    },
  ],
},
    {
      path: '/contributors',
      name: 'Contributors',
      component: () => import('../views/Contributors.vue'),
    },
    {
      path: '/api',
      component: () => import('../views/api/ApiLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/api/overview',
        },
        {
          path: 'overview',
          name: 'ApiOverview',
          component: () => import('../views/api/Overview.vue'),
        },
        {
          path: 'hdreader',
          name: 'HDReader',
          component: () => import('../views/api/HDReader.vue'),
        },
        {
          path: 'visiumreader',
          name: 'VisiumReader',
          component: () => import('../views/api/VisiumReader.vue'),
        },
        {
          path: 'pp',
          name: 'PP',
          component: () => import('../views/api/PP.vue'),
        },
        {
          path: 'gt',
          name: 'GT',
          component: () => import('../views/api/GT.vue'),
        },
      ],
    },
  ],
})

export default router
