import { useState } from "react"
import { useOutletContext } from "react-router-dom"

function ReviewForm({ bookId, reviews }) {
    const [form, setForm] = useState({
        text: ""
    })

    const { addToReviews } = useOutletContext()

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
