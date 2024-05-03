from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates, relationship
from config import db

class Book(db.Model, SerializerMixin):
    __tablename__ = "books"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    synopsis = db.Column(db.String, nullable=False)

    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    genre_id = db.Column(db.Integer, db.ForeignKey('genres.id'))
    
    # authors = relationship('Author', secondary='book_authors', backref='books')

    reviews = db.relationship('Review')

    @property
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'image': self.image,
            'synopsis': self.synopsis,
        }

    @validates('genre_id')
    def validate_id(self, key, value):
        if not value:
            raise ValueError(f"Books must have a genre id")
        else:
            return value

class Author(db.Model, SerializerMixin):
    __tablename__ = "authors"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    bio = db.Column(db.String, nullable=False)

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

    @property
    def serialize(self):
        return {
            'id': self.id,
            'type': self.type
        }

class Review(db.Model, SerializerMixin):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, default = 1)
    text = db.Column(db.String, nullable = False)

    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))

    @property
    def serialize(self):
        return {
            'id': self.id,
            'rating': self.rating,
            'text': self.text
        }
    
    @validates('rating')
    def validate_rating(self, key, value):
        if value > 5:
            raise ValueError("Rating must be between 1 and 5")
        return value

class Read(db.Model, SerializerMixin):
    __tablename__ = "reads"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    synopsis = db.Column(db.String, nullable=False)
    favorite = db.Column(db.Boolean, default=False)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'image': self.image,
            'synopsis': self.synopsis,
            'favorite': self.favorite,
        }

class TBRead(db.Model, SerializerMixin):
    __tablename__ = "tbreads"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    synopsis = db.Column(db.String, nullable=False)
    favorite = db.Column(db.Boolean, default=False)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'image': self.image,
            'synopsis': self.synopsis,
            'favorite': self.favorite,
        }

class BookAuthor(db.Model, SerializerMixin):
    __tablename__ = 'book_authors'

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
