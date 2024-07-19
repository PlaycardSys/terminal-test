const HistoricalRoutes = [
  {
    path: '/historical',
    name: 'historicalModule',
    component: () => import('../HistoricalModule.vue'),
    children: [
      {
        path: 'home',
        name: 'historicalHomeView',
        component: () =>
          import(
            /* webpackChunkName: "historicalHomeView" */ '../views/HomeView.vue'
          ),
      },
      {
        path: ':cardId',
        name: 'historical',
        component: () =>
          import(
            /* webpackChunkName: "historicalTableView" */ '../views/TableView.vue'
          ),
      },
    ],
  },
];

export default HistoricalRoutes;
