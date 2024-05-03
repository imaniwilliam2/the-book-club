import { useState } from "react";

function ReviewForm({ bookId, updateReviewState, addToReviews }) {
    const [form, setForm] = useState({
        rating: "",
        text: ""
    });

    function updateForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newReview = {
            text: form.text,
            rating: parseInt(form.rating),
            book_id: bookId
        };

        addToReviews(newReview, bookId);
        updateReviewState(newReview);

        setForm({
            text: "",
            rating: ""
        });
    }

    return (
        <form className="review-form flex flex-col items-center" onSubmit={handleSubmit}>
            <input 
                onChange={updateForm} 
                type="number" 
                name="rating" 
                placeholder="Rating (1-5)" 
                value={form.rating} 
                min="1" 
                max="5" 
                required 
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-stone-500"
            />
            <input 
                onChange={updateForm} 
                type="text" 
                name="text" 
                placeholder="Text" 
                value={form.text} 
                required 
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-stone-500"
            />
            <button 
                className="form-button bg-orange-800 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Add Review
            </button>
        </form>
    );
}

export default ReviewForm;
