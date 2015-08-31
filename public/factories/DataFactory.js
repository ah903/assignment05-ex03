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

	return{
		getBooks:getBooks,
		addBook:addBook,
		removeBook:removeBook,
		search:search
	};
	
}]);