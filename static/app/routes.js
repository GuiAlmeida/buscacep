app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',

  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
    $locationProvider.html5Mode(false).hashPrefix('');
    $urlRouterProvider.otherwise('/');
    $stateProvider

      .state({
        name: 'home',
        url: '/',
        controller: 'homeController',
        templateUrl: '/views/home.html'
      });
  }
]);