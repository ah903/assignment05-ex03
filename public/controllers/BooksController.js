angular.module('RoutingApp').controller("BooksController",function($scope, $http){
  
  $scope.title="Books";           // Set the Page Title
  $scope.sortType="title";        // Set the default sort column
  $scope.sortReverse=false;       // Set the default sort order

  $http.get("/api/books")
  .success(function(response){
    $scope.Books=response;
  });

  $scope.AddBook=function(newBook){
    
    if(!newBook) return;
    $http.post("/api/books",newBook)
    .success(function(response){
      $scope.Books.push(response);
      $scope.newBook=null;
    });
  };

  $scope.RemoveBook = function(book){ 
    $http.delete("/api/books/" + book._id)
    .success(function(response){
      $scope.Books=response;
    });
  };

  $scope.Search = function(){
    if(!$scope.searchTerm){
      $http.get("/api/books")
      .success(function(response){
        $scope.Books=response;
      });
      return;
    } 
    $http.get("/api/search/" + $scope.searchTerm)
    .success(function(response){
      $scope.Books=response;  
    });
  };

});