import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function AuthorInfo() {
    const [author, setAuthor] = useState(null)

    const { id } = useParams(); 
    
   
    useEffect(() => {
        fetch(`/authors/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(data => setAuthor(data))
            .catch(error => console.error("Error fetching author data:", error));
    }, [id]); 

    if (!author) {
        return <div>Loading author information...</div>;
    }

    return (
        <div className="author-info">
            <img src={author.image} alt={author.name} />
            <h2>{author.name}</h2>
            <p>Bio: {author.bio}</p>

        </div>
    );
}

export default AuthorInfo;
