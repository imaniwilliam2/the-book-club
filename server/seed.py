#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Book, Author, Genre, Review, BookAuthor

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        Book.query.delete()
        Author.query.delete()
        Genre.query.delete()
        Review.query.delete()
        print("Starting seed...")
        # Seed code goes here!  
        author1 = Author(name="Gabrielle Zevin", image="/assets/authors/zevin.webp", bio="Gabrielle Zevin is a New York Times best-selling novelist whose books have been translated into forty languages.")
        author2 = Author(name="Mia Sheridan", image="/assets/authors/mia.webp", bio="Mia Sheridan is a New York Times, USA Today, and Wall Street Journal bestselling author. Her passion is weaving true love stories about people destined to be together. Mia lives in Cincinnati, Ohio with her husband. They have four children here on earth and one in heaven.")
        author3 = Author(name="Sarah J. Maas", image="/assets/authors/maas.jpeg", bio="Sarah Janet Maas is an American fantasy author known for her fantasy series Throne of Glass, A Court of Thorns and Roses, and Crescent City. As of 2022, she has sold over twelve million copies of her books and her work has been translated into 37 languages.")


        db.session.add_all([author1, author2, author3])
        db.session.commit() 


        genre1 = Genre(type="Contemporary Romance")
        genre2 = Genre(type="Fantasy")
        genre3 = Genre(type="Coming Of Age")
        genre4 = Genre(type="Thriller")
        genre5 = Genre(type="Fiction")
        genre6 = Genre(type="Non-Fiction")
        genre7 = Genre(type="Historical Fiction")
        genre8 = Genre(type="Science Fiction")
        genre9 = Genre(type="Mystery")
        genre10 = Genre(type="Young Adult")
        genre11 = Genre(type="Self-Help")
        genre12 = Genre(type="Memoir")
        genre13 = Genre(type="Short Story")
        genre14 = Genre(type="Horror Fiction")
        genre15 = Genre(type="Crime Fiction")
        genre16 = Genre(type="Science")
        genre17 = Genre(type="Romance Novel")
        genre18 = Genre(type="Biography")
        genre19 = Genre(type="Historical Fantasy")


        db.session.add_all([genre1, genre2, genre3, genre4, genre5, genre6, genre7, genre8, genre9, genre10, genre11, genre12, genre13, genre14, genre15, genre16, genre17, genre18, genre19])
        db.session.commit()

        book1 = Book(title="Archer's Voice", image="/assets/books/archers-voice-cover.jpg", genre="Contemporary Romance", synopsis="Bree was looking for peace. Archer was an overlooked man dealing with trauma. One day, everything changed. Bree found the complete opposite and Archer was finally seen.", author_id=2, genre_id=1)
        book2 = Book(title="Tomorrow and Tomorrow and Tomorrow", image="/assets/books/tomorrow.jpg", genre="Coming of Age", synopsis="In love but never lovers, Sadie and Sam, go on quite the adventure through life expressing all the emotions that come with it through the builds of their video games. Peaks, valleys, and everything in between accurately depict growth that can only happen within the act of time.", author_id=1, genre_id=3)
        book3 = Book(title="A Court of Thorns and Roses", image="/assets/books/acotar.jpg", genre="Fantasy", synopsis="When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.", author_id=3, genre_id=2)
        book4 = Book(title="A Court of Mist and Fury", image="/assets/books/acomaf.jpg", genre="Fantasy", synopsis="As her marriage to Tamlin approaches, Feyre's hollowness and nightmares consume her. She finds herself split into two different one who upholds her bargain with Rhysand, High Lord of the feared Night Court, and one who lives out her life in the Spring Court with Tamlin. While Feyre navigates a dark web of politics, passion, and dazzling power, a greater evil looms. She might just be the key to stopping it, but only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future-and the future of a world in turmoil.", author_id=3, genre_id=2)
        

        db.session.add_all([book1, book2, book3, book4])
        db.session.commit()

        review1 = Review(rating=4, text="INITIAL REACTION: WILL UPDATE WITH REVIEW LATER BUT KNOW I LOVED THIS. IT KILLED ME AND BROUGHT ME BACK TO LIFE Y'ALL.", book_id=3)
        review2 = Review(rating=2, text="I cannot remember ever being this conflicted over a book. There are parts of A Court of Thorns and Roses I really loved, but a lot of parts I really hated", book_id=3)
        review3 = Review(rating=5, text="I'm speechless. What am I supposed to say after this?", book_id=3)
         
        db.session.add_all([review1, review2, review3])
        db.session.commit()

        # book_author1 = BookAuthor(book_id = 1, author_id = 2)
        # book_author2 = BookAuthor(book_id = 2, author_id = 1)
        # book_author3 = BookAuthor(book_id = 3, author_id = 3)
        # book_author4 = BookAuthor(book_id = 4, author_id = 3)

        # db.session.add_all([book_author1, book_author2, book_author3, book_author4])
        # db.session.commit()
        print("Completed seeding!")
