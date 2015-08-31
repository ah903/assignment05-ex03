var app = angular.module("RoutingApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
      when("/home", {
        templateUrl: "partials/books.html",
        controller: "BooksController"
      }).      
      when("/favourites/", {
        templateUrl: "partials/favourites.html",
        controller: "FavouritesController"
      }).
      when("/about/", {
        templateUrl: "partials/about.html",
        controller: "AboutController"
      }).
      otherwise({
        redirectTo: "/home"
      });
  }]);





