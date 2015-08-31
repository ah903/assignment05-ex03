angular.module('RoutingApp').controller("BooksController",function($scope, DataFactory){
  
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

  $scope.AddToFavourites=function(book){
    if(!book) return;
    book.favourite=true;
    DataFactory.addFavourite(book)
    .success(function(response){
      console.log(response);
    });
  };

  $scope.RemoveFavourite=function(book){
    if(!book) return;
    book.favourite=false;
    DataFactory.removeFavourite(book)
    .success(function(response){
    });
  };

});