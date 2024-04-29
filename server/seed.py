#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Book, Author, Genre, Review

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

        db.session.add_all([genre1, genre2, genre3])
        db.session.commit()

        book1 = Book(title="Archer's Voice", image="/assets/books/archers-voice-cover.jpg", genre="Contemporary Romance", synopsis="Bree was looking for peace. Archer was an overlooked man dealing with trauma. One day, everything changed. Bree found the complete opposite and Archer was finally seen.", genre_id=1)
        book2 = Book(title="Tomorrow and Tomorrow and Tomorrow", image="/assets/books/tomorrow.jpg", genre="Coming of Age", synopsis="In love but never lovers, Sadie and Sam, go on quite the adventure through life expressing all the emotions that come with it through the builds of their video games. Peaks, valleys, and everything in between accurately depict growth that can only happen within the act of time.", genre_id=3)
        book3 = Book(title="A Court of Thorns and Roses", image="/assets/books/acotar.jpg", genre="Fantasy", synopsis="When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.", genre_id=2)
        book4 = Book(title="A Court of Mist and Fury", image="/assets/books/acomaf.jpg", genre="Fantasy", synopsis="As her marriage to Tamlin approaches, Feyre's hollowness and nightmares consume her. She finds herself split into two different one who upholds her bargain with Rhysand, High Lord of the feared Night Court, and one who lives out her life in the Spring Court with Tamlin. While Feyre navigates a dark web of politics, passion, and dazzling power, a greater evil looms. She might just be the key to stopping it, but only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future-and the future of a world in turmoil.", genre_id=2)
        

        db.session.add_all([book1, book2, book3, book4])
        db.session.commit()

        review1 = Review(text="INITIAL REACTION: WILL UPDATE WITH REVIEW LATER BUT KNOW I LOVED THIS. IT KILLED ME AND BROUGHT ME BACK TO LIFE Y'ALL.", book_id=3)
        review2 = Review(text="I cannot remember ever being this conflicted over a book. There are parts of A Court of Thorns and Roses I really loved, but a lot of parts I really hated", book_id=3)
        review3 = Review(text="I'm speechless. What am I supposed to say after this?", book_id=3)
         
        db.session.add_all([review1, review2, review3])
        db.session.commit()


        print("Completed seeding!")
