from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!

class Book(db.Model, SerializerMixin):
    __tablename__ = "books"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    synopsis = db.Column(db.String, nullable=False)


    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    genre_id = db.Column(db.Integer, db.ForeignKey('genres.id'))
    
    reviews = db.relationship('Review')

    @property
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'image': self.image,
            'synopsis': self.synopsis
        }
    

class Author(db.Model, SerializerMixin):
    __tablename__ = "authors"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    bio = db.Column(db.String, nullable=False)

    books = db.relationship('Book')

    @property
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'image': self.image,
            'bio': self.bio
        }

class Genre(db.Model, SerializerMixin):
    __tablename__ = "genres"
    
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable=False)

    books = db.relationship('Book')

    @property
    def serialize(self):
        return {
            'id': self.id,
            'type': self.type
        }



class Review(db.Model, SerializerMixin):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable = False)

    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))

    @property
    def serialize(self):
        return {
            'id': self.id,
            'text': self.text
        }


class Read(db.Model, SerializerMixin):
    __tablename__ = "reads"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    synopsis = db.Column(db.String, nullable=False)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'image': self.image,
            'synopsis': self.synopsis
        }


class TBRead(db.Model, SerializerMixin):
    __tablename__ = "tbreads"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    synopsis = db.Column(db.String, nullable=False)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'image': self.image,
            'synopsis': self.synopsis
        }
