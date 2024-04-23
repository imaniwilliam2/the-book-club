#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Book

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        Book.query.delete()
        print("Starting seed...")
        # Seed code goes here!
        book1 = Book(title="Archer's Voice", image="/assets/archers-voice-cover.jpg", synopsis="Bree was looking for peace. Archer was an overlooked man dealing with trauma. One day, everything changed. Bree found the complete opposite and Archer was finally seen.")

        db.session.add_all([book1])
        db.session.commit()
        print("Completed seeding!")
