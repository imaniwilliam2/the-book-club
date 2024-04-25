#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Book, Author, Genre, Review, TBRead, Read


# Views go here!

class GetAllBooks(Resource):
    def get(self):
        rb = [book.to_dict() for book in Book.query.all()]
        return make_response(rb, 200)
    
api.add_resource(GetAllBooks, '/books')

class BookByID(Resource):
    def get(self, id):
        response_dict = Book.query.filter_by(id=id).first().to_dict()
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


    


if __name__ == '__main__':
    app.run(port=5555, debug=True)

