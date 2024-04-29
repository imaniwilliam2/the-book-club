import { useState } from "react"

function ReviewForm({ bookId, updateReviewState, addToReviews }) {
    const [form, setForm] = useState({
        text: ""
    })

    function updateForm(event) {
        setForm({...form, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()

        
        addToReviews({ text: form.text, book_id: bookId }, bookId)
        
        setForm({
            text: ""
        })
    }

    console.log("Received Book ID:", bookId);
    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <input 
            onChange={updateForm} 
            type="text" name="text" 
            placeholder="Text" 
            value={form.text} 
            required />
            <button className="form-button" type="submit">Add Review</button>
        </form>
    )
}

export default ReviewForm
