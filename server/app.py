#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Book, Author, Genre, Review, TBRead, Read, BookAuthor


# Views go here!

class GetAllBooks(Resource):
    def get(self):
        rb = [book.to_dict() for book in Book.query.all()]
        return make_response(rb, 200)
    
api.add_resource(GetAllBooks, '/books')

from flask import abort

class BookByID(Resource):
    def get(self, id):
        book = Book.query.filter_by(id=id).first()
        if book is None:
            abort(404, message="Book not found")
        
        response_dict = book.to_dict()
        response = make_response(
            response_dict,
            200
        )
        return response
    
api.add_resource(BookByID, "/books/<int:id>")

class AuthorByID(Resource):
    def get(self, id):
        response_dict = Author.query.filter_by(id=id).first().to_dict()
        response = make_response(
            response_dict,
            200
        )
        return response
    

api.add_resource(AuthorByID, "/authors/<int:id>")


class GetAllAuthors(Resource):
    def get(self): 
        rb = [author.to_dict() for author in Author.query.all()]
        return make_response(rb, 200)
    
api.add_resource(GetAllAuthors, '/authors')

class GetAllGenres(Resource):
    def get(self):
        rb = [genre.to_dict() for genre in Genre.query.all()]
        return make_response(rb, 200)
    
api.add_resource(GetAllGenres, '/genres')

class GenresBooks(Resource):
    def get(self, genre_id):
        genre = Genre.query.get(genre_id)

        if genre: 
            books = [genre.to_dict() for genre in genre.books]
            return books, 200
        else:
            return {
                "error": "Author not found"
            }, 404
        
api.add_resource(GenresBooks, '/genres/<int:genre_id>/books')

class GenreByID(Resource):
    def get(self, id):
        response_dict = Genre.query.filter_by(id=id).first().to_dict()
        response = make_response(
            response_dict,
            200
        )
        return response
    

api.add_resource(GenreByID, "/genres/<int:id>")

class GetAllRead(Resource):
    def get(self): 
        rb = [book.to_dict() for book in Read.query.all()]
        return make_response(rb, 200)
    
    def post(self):
        try:
            new_book = Read(
                title = request.json.get('title'),
                image = request.json.get('image'),
                synopsis = request.json.get('synopsis')
            )
            db.session.add(new_book)
            db.session.commit()
            rb = new_book.to_dict()
            return make_response(rb, 201)
        except:
            rb = {
                "error" : "Booj must have all inputs completed."
            }
            return make_response(rb, 400)
        
api.add_resource(GetAllRead, "/read")

class GetAllTBRead(Resource):
    def get(self): 
        rb = [book.to_dict() for book in TBRead.query.all()]
        return make_response(rb, 200)
    
    def post(self):
        try:
            new_book = TBRead(
                title = request.json.get('title'),
                image = request.json.get('image'),
                synopsis = request.json.get('synopsis')
            )
            db.session.add(new_book)
            db.session.commit()
            rb = new_book.to_dict()
            return make_response(rb, 201)
        except:
            rb = {
                "error" : "Book must have all inputs completed."
            }
            return make_response(rb, 400)
        
api.add_resource(GetAllTBRead, "/tbread")

class ReadBookByID(Resource):
    def delete(self, id):
        book = db.session.get(Read, id)

        if(book):
            db.session.delete(book)
            db.session.commit()
            res = {}
            return make_response(res, 204)
        else:
            res = {
                "error": "Book not found"
            }
            return make_response(res, 404)
        
    def patch(self, id): 
        book = Read.query.filter(Read.id == id).first()

        if(book):
            try:
                for attr in request.json:
                    setattr(book, attr, request.json[attr])

                db.session.commit()
                response = book.to_dict()
                return make_response(response, 202)
            except:
                response = {
                    "errors": ["validation errors"]
                }
                return make_response(response, 400)
        else:
            response = {
                "error": "Book not found"
            }
            return make_response(response, 404)

        

api.add_resource(ReadBookByID, '/read/<int:id>')

class ToBeReadBookByID(Resource):
    def delete(self, id):
        book = db.session.get(TBRead, id)

        if(book):
            db.session.delete(book)
            db.session.commit()
            res = {}
            return make_response(res, 204)
        else:
            res = {
                "error": "Book not found"
            }
            return make_response(res, 404)
        
    def patch(self, id): 
        book = Read.query.filter(Read.id == id).first()

        if(book):
            try:
                for attr in request.json:
                    setattr(book, attr, request.json[attr])

                db.session.commit()
                response = book.to_dict()
                return make_response(response, 202)
            except:
                response = {
                    "errors": ["validation errors"]
                }
                return make_response(response, 400)
        else:
            response = {
                "error": "Book not found"
            }
            return make_response(response, 404)
        
api.add_resource(ToBeReadBookByID, '/tbread/<int:id>')

class AuthorBooks(Resource):
    def get(self, author_id):
        author = Author.query.get(author_id)

        if author: 
            books = [book.to_dict() for book in author.books]
            return books, 200
        else:
            return {
                "error": "Author not found"
            }, 404
        
api.add_resource(AuthorBooks, '/authors/<int:author_id>/books')

class BookReviews(Resource):
    def get(self, book_id):
        book = Book.query.get(book_id)

        if book:
            reviews = [book.to_dict() for book in book.reviews]
            return reviews, 200
        else:
            return {
                "error": "Book not found"
            }, 404

api.add_resource(BookReviews, '/books/<int:book_id>/reviews')

class GetReviews(Resource):
    
    def post(self, book_id):
        try:
            new_text = request.json.get('text')
            new_rating = request.json.get('rating')
            
            new_review = Review(rating=new_rating, text=new_text, book_id=book_id)
            
            db.session.add(new_review)
            db.session.commit()
            rb = new_review.to_dict()
            return make_response(rb, 201)
        except:
            rb = {
                "error" : "Book must have all inputs completed."
            }
            return make_response(rb, 400)
        
api.add_resource(GetReviews, "/reviews/<int:book_id>")

# class BooksAuthor(Resource):
#     def get(self, book_id):
#         book = Book.query.get(book_id)
#         if book:
#             authors = [author.to_dict() for author in book.authors]
#             return authors, 200
#         else:
#             return {"error": "Book not found"}, 404
        
# api.add_resource(BooksAuthor, '/books/<int:book_id>/authors')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

