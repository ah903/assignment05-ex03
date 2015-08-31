angular.module("RoutingApp").controller("FavouritesController",function($scope, DataFactory){

	$scope.title="Favourites";

  	DataFactory.getFavourites()
  	.success(function(response){
    	$scope.Books=response;
  	});

  	$scope.RemoveFavourite=function(book){
    	if(!book) return;
    	book.favourite=false;
    	DataFactory.removeFavourite(book)
    	.success(function(response){
    		var index = $scope.Books.indexOf(book);
    		$scope.Books.splice(index,1);
    });
  };

});
