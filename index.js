let books =  [];

//Create the Library Constructor Function
function Library(bookName,bookID,quantity,author) {
	this.bookName = bookName;
	this.bookID = bookID;
	this.quantity = quantity;
	this.author = author;
  books.push(this);
}



exports.one = Library;
exports.two = books;