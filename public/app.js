angular.module("loginApp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        template: '<h1>HOME</h1>'
      })
      .state('me', {
        url: "/me",
        template: '<h1>ME</h1>',
        controller: "meCtrl"
      })
      .state('feed', {
        url: "/feed",
        template: '<h1>FEED</h1>',
        controller: "meCtrl"
      })
  });

angular.module('loginApp')
  .controller('meCtrl', function($http) {
    $http.get("/user").then((user) => {
      console.log('user',user);
    })
  })

  //
  // .controller("loginCtrl", function($scope, loginService) {
  //   $scope.login = () => {
  //     loginService.login();
  //   }
  // })
  //
  // .service("loginService", function($window) {
  //   this.login = () => {
  //       $window.location.href("/auth/facebook");
  //   }
  // })
