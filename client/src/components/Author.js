import { Link } from "react-router-dom"

function Author({author}){


    return (
        <div className="author">
            <img src={author.image} alt={author.name}/>
            <h2><Link to={`/authors/${author.id}`}>{author.name}</Link></h2>
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

export default Author;