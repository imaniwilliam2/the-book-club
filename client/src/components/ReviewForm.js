import { useState } from "react";

function ReviewForm({ bookId, updateReviewState, addToReviews }) {
    const [form, setForm] = useState({
        text: ""
    });

    function updateForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        addToReviews({ text: form.text, book_id: bookId }, bookId);
        
        setForm({
            text: ""
        });
    }

    console.log("Received Book ID:", bookId);
    return (
        <form className="review-form flex flex-col items-center" onSubmit={handleSubmit}>
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
