var express = require("express");
var bodyparser=require("body-parser");
var cookieparser=require("cookie-parser");
var logger=require("morgan");
var Book = require("./models/bookmodel");

var app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieparser());
app.use(logger("combined"));

//Serve Static Content
app.use(express.static(__dirname + '/public'));

//Get All Books
app.get("/api/books",function(req, res, next){
	Book.find().sort({title:1}).exec(function(err,data){
		if(err) console.log(err);
		res.status(200).json(data);
	});

	//Book.find(function (err, data){
	//	if(err) console.log(err);
	//	res.status(200).json(data);
	//}).sort({title:1});

});

//Get A Book By Its Identifier
app.get("/api/books/:id",function(req, res, next){
	console.log("Item to find " + req.params.id);
	Book.findById(req.params.id,function (err, data){
		if(err) console.log(err);
		res.status(200).json(data);
	});
});

//Search Books on Title
app.get("/api/search/:term",function(req, res, next){
	console.log("Items to find " + req.params.term);
	var expression = new RegExp(req.params.term,'i');
	Book.find({title:{$regex:expression}}).sort({title:1}).exec(function(err,data){
		if(err) console.log(err);
		res.status(200).json(data);
	});	

	//Book.find({title:{$regex:expression}},function(err,data){
	//	if(err) console.log(err);
	//	res.status(200).json(data);
	//});
});

//Get Favourite Books
app.get("/api/favourites",function(req, res, next){
	Book.find({favourite:true}).sort({title:1}).exec(function(err,data){
		if(err) console.log(err);
		res.status(200).json(data);
	});
});

//Save a New Book
app.post("/api/books",function(req, res, next){
	var newBook = new Book();
	newBook.title = req.body.title;
	newBook.published = req.body.published;
	newBook.favourite = req.body.favourite;
	newBook.author = req.body.author;
	newBook.save(function(err, data){
		if(err) console.log(err);
		res.status(200).json(data);
	});	
});

//Update a Book
app.put("/api/books/:id",function(req, res, next){

	Book.findById(req.params.id, function(err,book){
		if(err) console.log(err);
		console.log("Found Object " + book._id);
		book.title = req.body.title;
		book.published = req.body.published;
		book.favourite = req.body.favourite;
		book.author = req.body.author;
		book.save(function(err, data){
			if(err) console.log(err);
			res.json(data);
		});	
	});
});

//Delete a Book
app.delete("/api/books/:id",function(req, res, next){
	console.log("Item to delete " + req.params.id);
	Book.remove({_id:req.params.id},function(err,count){
		if(err) console.log(err);
		Book.find(function (err, data){
			if(err) console.log(err);
			res.status(200).json(data);
		});
	});
});


app.listen(3000, function(){
	console.log("Server is listening on port 3000");
});