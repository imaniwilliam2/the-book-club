#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Book, Author, Genre

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        Book.query.delete()
        Author.query.delete()
        Genre.query.delete()
        print("Starting seed...")
        # Seed code goes here!  
        author1 = Author(name="Gabrielle Zevin", image="/assets/authors/zevin.webp", bio="Gabrielle Zevin is a New York Times best-selling novelist whose books have been translated into forty languages.")
        author2 = Author(name="Mia Sheridan", image="/assets/authors/mia.webp", bio="Mia Sheridan is a New York Times, USA Today, and Wall Street Journal bestselling author. Her passion is weaving true love stories about people destined to be together. Mia lives in Cincinnati, Ohio with her husband. They have four children here on earth and one in heaven.")

        db.session.add_all([author1, author2])
        db.session.commit() 


        genre1 = Genre(type="Contemporary Romance", book_id=1)

        db.session.add_all([genre1])
        db.session.commit()

        book1 = Book(title="Archer's Voice", image="/assets/books/archers-voice-cover.jpg", genre="Contemporary Romance", synopsis="Bree was looking for peace. Archer was an overlooked man dealing with trauma. One day, everything changed. Bree found the complete opposite and Archer was finally seen.", author_id=2)

        db.session.add_all([book1])
        db.session.commit()
        print("Completed seeding!")
