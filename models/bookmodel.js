var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/books");

//Define the Schema Structure
var BookSchema = new mongoose.Schema({
	title:{type:String, required:true},
	published:{type:Number,required:true},
	author:{type:String, required:true},
	created:{type:Date, default:Date.now}	
},{collection:"books"});

//Create Data Model To Allow Interaction With The Database. 
//Represents the Underlying Collection. By Convention Mongoose 
//will Create Collection based on its plural noun e.g. 
//Book=>Books This can be oveerridden in the collection clause 
//above
var Book = mongoose.model("Book",BookSchema);

module.exports = Book;

//Example Insert a New Book
//var newBook = new Book();
//newBook.title="A Christmas Carol";
//newBook.published=1858;
//newBook.author="Charles Dickens";
//newBook.save();

//Example find a Book
//Book.find(function (err, data){
//	if(err) console.log(err);
//	console.log(data);
//});

//Example find a Book By Id
//Book.findById("55e2eff610385d3816104440",function (err, data){
//	if(err) console.log(err);
//	console.log(data);
//	data.title="Nicholas Nickleby";
//	data.published=1856;
//	data.save();
//});