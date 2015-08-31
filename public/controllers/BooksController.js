angular.module('RoutingApp').controller("BooksController",function($scope, $http, DataFactory){
  
  $scope.title="Books";           // Set the Page Title
  $scope.sortType="title";        // Set the default sort column
  $scope.sortReverse=false;       // Set the default sort order

  DataFactory.getBooks()
  .success(function(response){
    $scope.Books=response;
  });

  $scope.AddBook=function(newBook){
    
    if(!newBook) return;
    DataFactory.addBook(newBook)
    .success(function(response){
      $scope.Books.push(response);
      $scope.newBook=null;
    });
  };

  $scope.RemoveBook = function(book){ 
    DataFactory.removeBook(book)
    .success(function(response){
      $scope.Books=response;
    });
  };

  $scope.Search = function(){
    if(!$scope.searchTerm){
      DataFactory.getBooks()
      .success(function(response){
        $scope.Books=response;
      });
      return;
    } 
    DataFactory.search($scope.searchTerm )
    .success(function(response){
      $scope.Books=response;  
    });
  };

});