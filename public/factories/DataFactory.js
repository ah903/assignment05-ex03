angular.module("RoutingApp").factory("DataFactory",["$http", function($http){
	
	var getBooks = function(){
		return $http.get("/api/books");
	};

	var addBook = function(newBook){
		return $http.post("/api/books",newBook);
	};

	var removeBook = function(book){
		return $http.delete("/api/books/" + book._id);
	}

	var search = function(searchTerm){
		return $http.get("/api/search/" + searchTerm);
	}

	var getFavourites = function(){
		return $http.get("/api/favourites");	
	}

	var addFavourite = function(book){
		return $http.put("/api/books/" + book._id, book);	
	}

	var removeFavourite = function(book){
		return $http.put("/api/books/" + book._id, book);	
	}

	return{
		getBooks:getBooks,
		addBook:addBook,
		removeBook:removeBook,
		search:search,
		getFavourites:getFavourites,
		addFavourite:addFavourite,
		removeFavourite:removeFavourite
	};
	
}]);