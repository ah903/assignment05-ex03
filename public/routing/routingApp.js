var app = angular.module("RoutingApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
      when("/home", {
        templateUrl: "../public/partials/home.html",
        controller: "HomeController"
      }).
      when("/about/", {
        templateUrl: "../public/partials/about.html",
        controller: "AboutController"
      }).
      when("/contact/", {
        templateUrl: "../public/partials/contact.html",
        controller: "ContactController"
      }).
      otherwise({
        redirectTo: "/home"
      });
  }]);

app.controller("HomeController",function($scope){
  $scope.title="Home Page";
});

app.controller("AboutController",function($scope){
  $scope.title="About Page";
});

app.controller("ContactController",function($scope){
  $scope.title="Contact Page";
});
