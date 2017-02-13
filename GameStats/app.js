var app = angular.module('gameStatsApp', ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider.state("home", {
    url: "/",
    templateUrl:"./views/home.html",
    controller:"inputController"
  })
  $stateProvider.state("players", {
    url: "/2",
    templateUrl:"./views/players.html",
    controller:"inputController"
  })
  $stateProvider.state("stats", {
    url: "/3",
    templateUrl:"./views/stats.html",
    controller:"inputController"
  })

})

