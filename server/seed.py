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

        author1 = Author(name="Gabrielle Zevin", image="/assets/authors/zevin.webp", bio="Gabrielle Zevin is a New York Times best-selling novelist whose books have been translated into forty languages.")
        author2 = Author(name="Mia Sheridan", image="/assets/authors/mia.webp", bio="Mia Sheridan is a New York Times, USA Today, and Wall Street Journal bestselling author. Her passion is weaving true love stories about people destined to be together. Mia lives in Cincinnati, Ohio with her husband. They have four children here on earth and one in heaven.")
        author3 = Author(name="Sarah J. Maas", image="/assets/authors/maas.jpeg", bio="Sarah Janet Maas is an American fantasy author known for her fantasy series Throne of Glass, A Court of Thorns and Roses, and Crescent City. As of 2022, she has sold over twelve million copies of her books and her work has been translated into 37 languages.")
        author4 =  Author(name="Lois Lowry", image="/assets/authors/lois.jpeg", bio="Lois Lowry (born March 20, 1937, Honolulu, Hawaii) American author who wrote some 50 books, mainly directed toward young adults, beginning in the 1970s. By the early 1990s she had solidified her reputation by winning two Newbery Medals, awarded for the most distinguished children’s book of the year. On her website, Lowry described the major themes of her books: “I try, through writing, to convey my passionate awareness that we live intertwined on this planet and that our future depends upon our caring more, and doing more, for one another.")
        author5 =  Author(name="Abraham Verghese", image="/assets/authors/abraham.jpeg", bio="Abraham Verghese, MD, MACP, is Professor and Linda R. Meier and Joan F. Lane Provostial Professor, and Vice Chair for the Theory and Practice of Medicine at the School of Medicine at Stanford University. He is also a best-selling author and a physician with a reputation for his focus on healing in an era where technology often overwhelms the human side of medicine. He received the Heinz Award in 2014 and was awarded the National Humanities Medal, presented by President Barack Obama, in 2015.")
        author6 =  Author(name="Hanya Yanagihara", image="/assets/authors/hanya.webp", bio="Hanya Yanagihara is an American novelist, editor, and travel writer. She grew up in Hawaii. She is best known for her bestselling novel A Little Life, which was shortlisted for the 2015 Booker Prize, and for being the editor-in-chief of T Magazine.")
        author7 =  Author(name="Rebecca Yarros", image="/assets/authors/yarros.jpeg", bio="Rebecca Yarros is an American author. She is best known for the Empyrean fantasy book series, which will be adapted into a television series with Amazon; Yarros will serve as a non-writing executive producer. Yarros graduated from Troy University, where she studied European history and English.")
        author8 = Author(name="Emily Henry", image="/assets/authors/emily.jpeg", bio="Emily Henry is the #1 New York Times and #1 sunday times bestselling author of happy place, book lovers, people we meet on vacation, and beach read, as well as the forthcoming funny story. she lives and writes in the american midwest.")
        author9 = Author(name="Kristin Hannah", image="/assets/authors/kristin.webp", bio="Kristin Hannah is the award-winning and bestselling author of more than 20 novels including the international blockbuster, The Nightingale, which was named Goodreads Best Historical fiction novel for 2015 and won the coveted People’s Choice award for best fiction in the same year.  Additionally, it was a selection of the Reese Witherspoon Book Club in 2023. It was named a Best Book of the Year by Amazon, iTunes, Buzzfeed, the Wall Street Journal, Paste, and The Week.  In 2018, The Great Alone became an instant New York Times #1 bestseller and was named the Best Historical Novel of the Year by Goodreads.")
        author10 = Author(name="Bessel van der Kolk", image="/assets/authors/bessel.webp", bio="Bessel van der Kolk is a Dutch psychiatrist, author, researcher and educator. Since the 1970s his research has been in the area of post-traumatic stress. He is the author of The New York Times best seller, The Body Keeps the Score. ")
        author11 = Author(name="David Baldacci", image="/assets/authors/david.jpeg", bio="David published his first novel, Absolute Power, in 1996. The feature film adaptation followed, with Clint Eastwood as its director and star. In total, David has published 49 novels for adults; all have been national and international bestsellers, and several have been adapted for film and television. His novels are published in over 45 languages and in more than 80 countries, with 150 million copies sold worldwide. David has also published seven novels for young readers.")
        author12 = Author(name="Jonathan Haidt", image="/assets/authors/haidt.jpeg", bio="Jonathan David Haidt is an American social psychologist and author. He is the Thomas Cooley Professor of Ethical Leadership at the New York University Stern School of Business. His main areas of study are the psychology of morality and moral emotions")


    


        db.session.add_all([author1, author2, author3, author4, author5, author6, author7, author8, author9, author10, author11, author12])
        db.session.commit() 

        # Check
        genre1 = Genre(type="Contemporary Romance")
        # Check
        genre2 = Genre(type="Fantasy")
        # Check
        genre3 = Genre(type="Coming Of Age")
        genre4 = Genre(type="Thriller")
        # Check
        genre5 = Genre(type="Fiction")
        # Check
        genre6 = Genre(type="Nonfiction")
        # Check
        genre7 = Genre(type="Historical Fiction")
        genre8 = Genre(type="Science Fiction")
        genre9 = Genre(type="Mystery")
        # Check
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
        book5 = Book(title="The Giver", image="/assets/books/the-giver.jpg", genre="Young Adult", synopsis="In this futuristic utopia, true emotions of happiness or pain are forbidden. Chosen from one who has experienced all, Jonas was given the power to embrace the hidden.", author_id=4, genre_id=10)
        book6 = Book(title="The Covenant of Water", image="/assets/books/water.jpg", genre="Historical Fiction", synopsis="A shimmering evocation of a bygone India and of the passage of time itself, The Covenant of Water is a hymn to progress in medicine and to human understanding, and a humbling testament to the hardships undergone by past generations for the sake of those alive today. Imbued with humor, deep emotion, and the essence of life, it is one of the most masterful literary novels published in recent years.", author_id=5, genre_id=7)
        book7 = Book(title="A Little Life", image="/assets/books/life.jpeg", genre="Fiction", synopsis="When four classmates from a small Massachusetts college move to New York to make their way, they're broke, adrift, and buoyed only by their friendship and ambition. There is kind, handsome Willem, an aspiring actor; JB, a quick-witted, sometimes cruel Brooklyn-born painter seeking entry to the art world; Malcolm, a frustrated architect at a prominent firm; and withdrawn, brilliant, enigmatic Jude, who serves as their center of gravity.", author_id=6, genre_id=5)
        book8 = Book(title="Funny Story", image="/assets/books/funny.jpeg", genre="Contemporary Romance", synopsis="Daphne always loved the way her fiancé Peter told their story. How they met (on a blustery day), fell in love (over an errant hat), and moved back to his lakeside hometown to begin their life together. He really was good at telling it…right up until the moment he realized he was actually in love with his childhood best friend Petra.", author_id=8, genre_id=1)
        book9 = Book(title="The Women", image="/assets/books/women.jpg", genre="Historical Fiction", synopsis="Women can be heroes. When twenty-year-old nursing student Frances “Frankie” McGrath hears these words, it is a revelation. Raised in the sun-drenched, idyllic world of Southern California and sheltered by her conservative parents, she has always prided herself on doing the right thing. But in 1965, the world is changing, and she suddenly dares to imagine a different future for herself. When her brother ships out to serve in Vietnam, she joins the Army Nurse Corps and follows his path.", author_id=9, genre_id=7)
        book10 = Book(title="The Body Keeps Score", image="/assets/books/score.jpg", genre="Nonfiction", synopsis="Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world's foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers' capacities for pleasure, engagement, self-control, and trust. He explores innovative treatments—from neurofeedback and meditation to sports, drama, and yoga—that offer new paths to recovery by activating the brain's natural neuroplasticity. Based on Dr. van der Kolk's own research and that of other leading specialists, The Body Keeps the Score exposes the tremendous power of our relationships both to hurt and to heal—and offers new hope for reclaiming lives.", author_id=10, genre_id=6)
        book11 = Book(title="The Calamity of Souls", image="/assets/books/calamity.jpg", genre="Historical Fiction", synopsis="Set in the tumultuous year of 1968 in southern Virginia, a racially-charged murder case sets a duo of white and Black lawyers against a deeply unfair system as they work to defend their wrongfully-accused Black defendants in this courtroom drama from #1 New York Times bestselling author David Baldacci.", author_id=11, genre_id=7)
        book12 = Book(title="The Anxious Generation", image="/assets/books/generation.jpg", genre="Nonfiction", synopsis="After more than a decade of stability or improvement, the mental health of adolescents plunged in the early 2010s. Rates of depression, anxiety, self-harm, and suicide rose sharply, more than doubling on many measures. Why?", author_id=12, genre_id=6)
        book13 = Book(title="Fourth Wing", image="/assets/books/fourth.jpg", genre="Fantasy", synopsis="Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.", author_id=7, genre_id=2)

        rating_review_mapping = {
            1: ["Disappointed, expected more from this author.", "Too predictable, didn't enjoy it much.👎", "Wording was weird, wouldn't recommend.", "Probably one of the worst books i have ever read."],
            2: ["Expected more, but still an okay read.", "Not the best, but had some good moments.", "Based off other books, i expected this to be better 😕"],
            3: ["A decent book, had its ups and downs.", "Good story, but could have been better.", "The ending could have been better, but okay book.", ],
            4: ["Enjoyed it, would recommend to others.", "Captivating plot, kept me hooked till the end.", "Some confusing parts, but would recommend."],
            5: ["Amazing book, couldn't put it down!", "A must-read!", "The characters were so relatable.", "SO SO SO GOOD!", "well worth reading."]
        }

        
        def generate_reviews_from_array(num_reviews):
            reviews = []
            for _ in range(num_reviews):
                rating = randint(1, 5)
                review_text = rc(rating_review_mapping[rating])
                reviews.append(Review(rating=rating, text=review_text))
            return reviews

        
        book1.reviews = generate_reviews_from_array(5)
        book2.reviews = generate_reviews_from_array(3)
        book3.reviews = generate_reviews_from_array(4)
        book4.reviews = generate_reviews_from_array(6)
        book5.reviews = generate_reviews_from_array(4)
        book6.reviews = generate_reviews_from_array(11)
        book7.reviews = generate_reviews_from_array(3)
        book8.reviews = generate_reviews_from_array(1)
        book9.reviews = generate_reviews_from_array(18)
        book10.reviews = generate_reviews_from_array(5)
        book11.reviews = generate_reviews_from_array(4)
        book12.reviews = generate_reviews_from_array(2)
        book13.reviews = generate_reviews_from_array(8)

        


        db.session.add_all([book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13])
        db.session.commit()

        review1 = Review(rating=4, text="INITIAL REACTION: WILL UPDATE WITH REVIEW LATER BUT KNOW I LOVED THIS. IT KILLED ME AND BROUGHT ME BACK TO LIFE Y'ALL.", book_id=3)
        review2 = Review(rating=2, text="I cannot remember ever being this conflicted over a book. There are parts of A Court of Thorns and Roses I really loved, but a lot of parts I really hated", book_id=3)
        review3 = Review(rating=5, text="I'm speechless. What am I supposed to say after this?", book_id=3)
         
        db.session.add_all([review1, review2, review3])
        db.session.commit()

        print("Completed seeding!")
