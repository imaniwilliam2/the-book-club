import { Link } from "react-router-dom"

function Book({book}){


    return (
        <div className="book">
            <img src={book.image} alt={book.title}/>
            <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>

            {/* <div className="player-buttons">
            {likeButton}
            <button className="delete-button" onClick={handleDeleteButton}>X</button>
            <button className="add-button" onClick={handleAddToTeam}>Draft To My Team</button>
            <button onClick={togglePlayerStats}>
                {showPlayerStats ? "Hide Stats" : "Show Stats"}
            </button>
            {showPlayerStats && <PlayerStats playerId={player.id} />}
            </div> */}
        </div>
    )
}

export default Book;